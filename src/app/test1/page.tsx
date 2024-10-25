import React from "react";
import { getData } from "@/lib/temp-helpers";
import Link from "next/link";

export default async function Page() {
  const data = await getData(2000);
  //throw new Error("gg");
  return (
    <>
      Test1 page
      <div>
        <Link href={"/"}>Goto home</Link>
      </div>
    </>
  );
}
