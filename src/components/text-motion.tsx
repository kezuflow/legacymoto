"use client";

import { useEffect } from "react";

// Animate text units, keeping nested labels and their controls together.
const textSelector = [
  "header a",
  "header button",
  "main h2",
  "main h3",
  "main p",
  "main a",
  "main .section-label",
  "main .eyebrow",
  "main .product-brand",
  "main .product-price",
  "main .product-price-inline",
  "main .product-number",
  "main .concept-note",
  'main [data-slot="badge"]',
  "main address > span",
  "main dt",
  "main dd",
  'main [data-slot="accordion-trigger"]',
  'main [data-slot="accordion-content"] > div',
  "footer a",
  "footer .footer-bottom > span",
  ".mobile-sheet h2",
  ".mobile-sheet a",
].join(",");

export function TextMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || !Element.prototype.animate) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealed = new WeakSet<Element>();
    const active = new Map<Element, Animation>();
    let intersections: IntersectionObserver | undefined;
    let additions: MutationObserver | undefined;

    const stop = () => {
      intersections?.disconnect();
      additions?.disconnect();
      active.forEach((animation) => animation.cancel());
      active.clear();
    };

    const start = () => {
      stop();
      if (preference.matches) return;

      const observed = new WeakSet<Element>();
      intersections = new IntersectionObserver(
        (entries) => {
          const groups = new Map<Element, number>();
          entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
            .forEach(({ target }) => {
              if (!target.getClientRects().length || revealed.has(target)) return;
              revealed.add(target);
              intersections?.unobserve(target);
              if (target.contains(document.activeElement)) return;

              const group = target.closest("article, .hero-copy, .hero-note, .about-copy, .shop-details, .editorial-top, section, header, footer") || document.body;
              const order = groups.get(group) || 0;
              groups.set(group, order + 1);
              const heading = target.matches("h2,h3");
              const animation = target.animate(
                [
                  { opacity: 0, translate: `0 ${heading ? 22 : 12}px` },
                  { opacity: 1, translate: "0 0" },
                ],
                {
                  id: "text-reveal",
                  duration: heading ? 620 : 480,
                  delay: Math.min(order, 3) * 55,
                  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                  fill: "backwards",
                },
              );
              active.set(target, animation);
              animation.onfinish = () => active.delete(target);
            });
        },
        { threshold: 0.05, rootMargin: "0px 0px 36px 0px" },
      );

      const observe = (root: Element) => {
        const targets = root.matches(textSelector)
          ? [root, ...root.querySelectorAll(textSelector)]
          : root.querySelectorAll(textSelector);
        targets.forEach((target) => {
          if (observed.has(target) || revealed.has(target) || target.closest('.sr-only, [aria-hidden="true"]')) return;
          // The hero title already has a line reveal; FAQ buttons own their text.
          if (target.matches("h3") && target.querySelector("button")) return;
          observed.add(target);
          intersections?.observe(target);
        });
      };
      observe(document.body);
      additions = new MutationObserver((records) => {
        records.forEach((record) => record.addedNodes.forEach((node) => {
          if (node instanceof Element) observe(node);
        }));
      });
      additions.observe(document.body, { childList: true, subtree: true });
    };

    const showFocusedText = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const focused = event.target;
      active.forEach((animation, element) => {
        if (element.contains(focused) || focused.contains(element)) {
          animation.cancel();
          active.delete(element);
        }
      });
    };

    start();
    preference.addEventListener("change", start);
    document.addEventListener("focusin", showFocusedText);
    return () => {
      stop();
      preference.removeEventListener("change", start);
      document.removeEventListener("focusin", showFocusedText);
    };
  }, []);

  // Server-rendered text stays visible without JavaScript or animation support.
  return null;
}
