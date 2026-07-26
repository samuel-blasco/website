import BackgroundGraph from "../graph/BackgroundGraph";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FCFCFA]">
      {/* Background */}
      <BackgroundGraph />

      {/* Hero content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-[#111827]">
          Samuel Blasco
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Building intelligent systems.
        </p>
      </div>
    </section>
  );
}