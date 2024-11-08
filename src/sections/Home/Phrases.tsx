/*"use client";

import { useEffect, useState } from "react";
import data from "@/data/home.json";
import { DataPhrase } from "@/interfaces";

const { phrases }: { phrases: DataPhrase[] } = data;*/

export default function Phrases() {
  return <></>

  /*const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIdx((p) => {
        if (p === phrases.length - 1) return 0;
        return p + 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <span key={phrases[phraseIdx].id}>{phrases[phraseIdx].text}</span>;*/
}
