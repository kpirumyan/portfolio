import "./global.css";
import Footer from "@/sections/Footer";
import React, { ReactNode, Suspense } from "react";
import Loading from "./loading";
import { jost } from "@/app/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-secondary text-tertiary ${jost.className}`}>
        <header>{/*<Menu />*/}</header>
        <main>{children}</main>
        <footer>
          <section id="footer" className="even">
            <Suspense fallback={<Loading />}>
              <Footer />
            </Suspense>
          </section>
        </footer>
      </body>
    </html>
  );
}
