import "./global.css";
import { Footer } from "@/components/sections";
import data from "@/data/metadata.json";
import { Metadata } from "next";
import React, { ReactNode, Suspense } from "react";
import Loading from "./loading";
import { jost } from "@/app/fonts";

export const metadata: Metadata = data;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-secondary ${jost.className}`}>
        <header>{/*<Menu />*/}</header>
        <main>{children}</main>
        <footer>
          <section id="contacts">
            <Suspense fallback={<Loading />}>
              <Footer />
            </Suspense>
          </section>
        </footer>
      </body>
    </html>
  );
}
