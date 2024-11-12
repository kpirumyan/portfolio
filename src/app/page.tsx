import Services from "@/sections/Services";
import React, { Suspense } from "react";
import Loading from "./loading";
import Home from "@/sections/Home";

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
    </>
  );
}
