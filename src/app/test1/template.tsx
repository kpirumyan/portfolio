import { ReactNode } from "react";

export default function Test1Template({ children }: { children: ReactNode }) {
  return (
    <>
      <div>Test1 template</div>
      {children}
    </>
  );
}
