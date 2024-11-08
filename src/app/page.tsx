import About from "@/sections/About";
import React, { Suspense } from "react";
import Loading from "./loading";
import Home from "@/sections/Home";

export default async function Page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <section id="home">
          <Home />
        </section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <section id="about">
          <About />
        </section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <section id="services"></section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <section id="skills"></section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <section id="experience"></section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <section id="education"></section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <section id="gallery"></section>
      </Suspense>
    </>
  );
}
