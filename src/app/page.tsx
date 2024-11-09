import About from "@/sections/About";
import React, { Suspense } from "react";
import Loading from "./loading";
import Home from "@/sections/Home";

export default async function Page() {
  return (
    <>
      <section id="home" className={`bg-gradient-to-b from-secondary to-white`}>
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </section>
      <section
        id="about"
        className={`bg-gradient-to-b from-white to-secondary`}
      >
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
      </section>
    </>
  );
}
