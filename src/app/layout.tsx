import "./global.css";
import { Footer } from "@/components/sections";
import React, { ReactNode, Suspense } from "react";
import Loading from "./loading";
import { jost } from "@/app/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-secondary ${jost.className}`}>
        <header>{/*<Menu />*/}</header>
        <main className="container">{children}</main>
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
