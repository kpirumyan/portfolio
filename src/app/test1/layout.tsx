import React, { ReactNode } from "react";

export default function Test1Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>Test1 layout</div>
      {children}
    </>
  );
}
