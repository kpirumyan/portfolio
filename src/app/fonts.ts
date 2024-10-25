import { Gluten, Inter, Jost, Marhey } from "next/font/google";

export const gluten = Gluten({
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
});

export const marhey = Marhey({
  subsets: ["latin"],
});

export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});
