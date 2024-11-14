import Services from "@/sections/Services";
import React, { Suspense } from "react";
import Loading from "./loading";
import Home from "@/sections/Home";
import Skills from "@/sections/Skills";
import Contacts from "@/sections/Contacts";
import Portfolio from "@/sections/Portfolio";
import Resume from "@/sections/Resume";
import More from "@/sections/More";

export default async function Page() {
  return (
    <>
      <section id="home" className="odd pb-40">
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </section>
      <section id="services" className="even">
        <Suspense fallback={<Loading />}>
          <Services />
        </Suspense>
      </section>
      <section id="skills" className="odd">
        <Suspense fallback={<Loading />}>
          <Skills />
        </Suspense>
      </section>
      <section id="resume" className="even">
        <Suspense fallback={<Loading />}>
          <Resume />
        </Suspense>
      </section>
      <section id="portfolio" className="odd">
        <Suspense fallback={<Loading />}>
          <Portfolio />
        </Suspense>
      </section>
      <section id="more" className="even">
        <Suspense fallback={<Loading />}>
          <More />
        </Suspense>
      </section>
      <section id="contacts" className="odd">
        <Suspense fallback={<Loading />}>
          <Contacts />
        </Suspense>
      </section>
    </>
  );
}
