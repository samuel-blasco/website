import GraphCanvas from "./GraphCanvas";

export default function BackgroundGraph() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <GraphCanvas />
    </div>
  );
}