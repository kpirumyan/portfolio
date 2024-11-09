import About from "@/sections/About";
import React, { Suspense } from "react";
import Loading from "./loading";
import Home from "@/sections/Home";

export default async function Page() {
  return (
    <>
      <section id="home">
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </section>
      <section id="about">
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
      </section>
    </>
  );
}
