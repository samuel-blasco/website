import GraphCanvas from "./GraphCanvas";

export default function BackgroundGraph() {
  return (
    <div
      className="
        fixed
        inset-0
        -z-10

        overflow-hidden

        pointer-events-none

        opacity-25
      "
    >
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_0%,#FCFCFA_80%)]
        "
      />

      <GraphCanvas />
    </div>
  );
}