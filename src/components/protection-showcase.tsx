"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Crosshair } from "lucide-react";
import { Asset } from "@/components/asset";

const pairs = [
  [
    {
      image: "nhk-gp-r-tech-mandalika",
      name: "FIND YOUR FIT",
      text: "Start with the exact manufacturer’s size chart. A size label is only the beginning.",
      alt: "NHK GP R Tech Street Mandalika full-face helmet",
      model: "NHK GP R Tech Street",
    },
    {
      image: "gille-circuit-racer",
      name: "FIND YOUR STYLE",
      text: "Explore the shapes, colors, and details that feel right for your kind of ride.",
      alt: "Gille FF012 Circuit Racer white and gold full-face helmet",
      model: "Gille FF012 Circuit Racer",
    },
  ],
  [
    {
      image: "spyder-corsa-plain-v2",
      name: "A DIFFERENT PERSPECTIVE",
      text: "From the daily commute to the weekend escape, get to know your next helmet.",
      alt: "Spyder Corsa Plain V2 shiny black full-face helmet",
      model: "Spyder Corsa Plain V2",
    },
    {
      image: "mt-stinger-2-solid",
      name: "YOUR KIND OF EVERYDAY",
      text: "Compare styles and check product information before making your choice.",
      alt: "MT Helmets Stinger 2 Solid pearl white full-face helmet",
      model: "MT Helmets Stinger 2 Solid",
    },
  ],
];

export function ProtectionShowcase() {
  const [index, setIndex] = useState(0);
  const start = useRef<{ x: number; y: number } | null>(null);
  const changePair = (direction: number) =>
    setIndex(
      (previous) => (previous + direction + pairs.length) % pairs.length,
    );
  const current = pairs[index];
  return (
    <section
      id="protection"
      className="protection-section section-pad"
      aria-labelledby="protection-heading"
    >
      <div className="section-heading-row">
        <h2 id="protection-heading">VITAL PROTECTION</h2>
        <div
          className="showcase-controls"
          aria-label="Helmet showcase controls"
        >
          <button
            type="button"
            onClick={() => changePair(-1)}
            aria-label="Previous helmet pair"
          >
            <ArrowLeft size={15} />
            PREV
          </button>
          <span className="showcase-line" />
          <button
            type="button"
            onClick={() => changePair(1)}
            aria-label="Next helmet pair"
          >
            NEXT
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        Helmet pair {index + 1} of {pairs.length}
      </p>
      <div
        className="protection-grid"
        onPointerDown={(event) => {
          if (event.pointerType === "touch")
            start.current = { x: event.clientX, y: event.clientY };
        }}
        onPointerCancel={() => {
          start.current = null;
        }}
        onPointerUp={(event) => {
          if (!start.current) return;
          const dx = event.clientX - start.current.x;
          const dy = event.clientY - start.current.y;
          start.current = null;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4)
            changePair(dx < 0 ? 1 : -1);
        }}
      >
        <div className="protection-note">
          <p className="uppercase-copy">
            FOR THE DAILY RIDE.
            <br />
            FOR THE LONG WAY HOME.
            <br />
            FOR WHAT’S NEXT.
          </p>
          <p className="protection-emphasis">
            The right fit
            <br />
            comes first.
          </p>
          <div>
            <span className="eyebrow">THE STARTING POINT</span>
            <p>
              Measure. Compare.
              <br />
              Find your fit.
            </p>
          </div>
        </div>
        {current.map((item, position) => (
          <article className="protection-card" key={item.image}>
            <div
              className={`organic-stage protection-art protection-art-${position}`}
            >
              <Asset name={item.image} alt={item.alt} />
            </div>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <span className="concept-note">{item.model}</span>
          </article>
        ))}
        <Crosshair
          className="protection-crosshair"
          aria-hidden="true"
          size={51}
          strokeWidth={1}
        />
      </div>
    </section>
  );
}
