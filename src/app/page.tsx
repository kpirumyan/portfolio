import { Home, About } from "@/components/sections";
import React, { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <div>
        <Link href={"/test1"}>Goto test1</Link>
      </div>
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
        <section id="service"></section>
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
