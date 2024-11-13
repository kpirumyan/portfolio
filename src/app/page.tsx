import Services from "@/sections/Services";
import React, { Suspense } from "react";
import Loading from "./loading";
import Home from "@/sections/Home";
import Skills from "@/sections/Skills";
import Contacts from "@/sections/Contacts";
import Portfolio from "@/sections/Portfolio";
import Resume from "@/sections/Resume";

export default async function Page() {
  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-b from-secondary to-white pb-40"
      >
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </section>
      <section
        id="services"
        className="bg-gradient-to-b from-white to-secondary"
      >
        <Suspense fallback={<Loading />}>
          <Services />
        </Suspense>
      </section>
      <section id="skills" className="bg-gradient-to-b from-secondary to-white">
        <Suspense fallback={<Loading />}>
          <Skills />
        </Suspense>
      </section>
      <section id="resume" className="bg-gradient-to-b from-white to-secondary">
        <Suspense fallback={<Loading />}>
          <Resume />
        </Suspense>
      </section>
      <section
        id="portfolio"
        className="bg-gradient-to-b from-secondary to-white"
      >
        <Suspense fallback={<Loading />}>
          <Portfolio />
        </Suspense>
      </section>
      <section
        id="contacts"
        className="bg-gradient-to-b from-white to-secondary"
      >
        <Suspense fallback={<Loading />}>
          <Contacts />
        </Suspense>
      </section>
    </>
  );
}
