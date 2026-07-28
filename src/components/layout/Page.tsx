import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Page({
  children,
  className,
}: Props) {
  return (
    <main
      className={clsx(className)}
      style={{
        background: "#FCFCFA",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      {children}
    </main>
  );
}