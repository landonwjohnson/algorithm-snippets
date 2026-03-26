import React from "react";
import { useConcatenation } from "./useConcatenation.hook";

type Props = {
  slides: number[];
};

export default function Carousel({ slides }: Props) {
  // Use the hook (same logic, but reusable)
  const loopedSlides = useConcatenation(slides);

  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      {loopedSlides.map((slide, index) => (
        <div
          key={index}
          style={{
            minWidth: 200,
            marginRight: 10,
            background: "#222",
            color: "#fff",
            textAlign: "center",
            padding: 20,
          }}
        >
          Slide {slide}
        </div>
      ))}
    </div>
  );
}
