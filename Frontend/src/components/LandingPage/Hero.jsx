import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 bg-[#0A0A0A] px-4 pt-32 pb-24 text-[#E5E5E5] sm:px-6 md:px-8 md:pt-40 lg:pt-64">
      {/* Main Heading with Animation */}
      <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        Less meetings,{" "}
        <span className="bg-linear-to-r from-[#E5E5E5] via-[#B8B8B8] to-[#808080] bg-clip-text text-transparent">
          more coding
        </span>
      </h1>

      {/* Subtitle with Delayed Animation */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 flex max-w-2xl flex-col justify-center gap-2 text-center text-base sm:text-lg md:text-xl">
        <p className="text-[#E5E5E5]/80 leading-relaxed">
          Manage issues, review PRs, and track releases without leaving your flow.
        </p>
        <p className="text-[#E5E5E5]/70">Everything in the palm of your hand!</p>
      </div>

      {/* CTA Button with Glow Effect */}
      <Link
        to="/login"
        className="group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 mt-2 cursor-pointer rounded-lg bg-[#E5E5E5] px-8 py-3 text-base font-bold text-[#2B2B2B] shadow-lg shadow-[#E5E5E5]/20 ring-2 ring-[#E5E5E5] ring-offset-4 ring-offset-[#0A0A0A] transition-all hover:bg-white hover:shadow-xl hover:shadow-[#E5E5E5]/30 sm:px-10 sm:py-3.5 sm:text-lg md:px-12 md:py-4"
      >
        Get Started your project here!
      </Link>
    </section>
  );
};

export default Hero;