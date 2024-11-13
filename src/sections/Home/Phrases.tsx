"use client";

import { useEffect, useState } from "react";
import { PhraseData } from "@/interfaces";

const phrases: PhraseData = [
  "Always borrow money from a pessimist. He won't expect it back.",
  "Tempora mutantur et nos mutamur in illis.",
  "Phrase 3",
];

export default function Phrases() {
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIdx((pId) => (pId + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="text-lg max-w-xl font-normal mt-12 text-tertiary"
      key={phrases[phraseIdx]}
    >
      {phrases[phraseIdx]}
    </div>
  );
}
