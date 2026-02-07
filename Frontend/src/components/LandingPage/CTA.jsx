import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-12 bg-[#0A0A0A] px-4 py-24 sm:px-6 md:px-8">
            <div className="relative flex w-full max-w-4xl flex-col items-center gap-8 rounded-2xl border border-[#E5E5E5]/20 bg-linear-to-br from-[#171717] via-[#0A0A0A] to-[#0A0A0A] p-8 text-center shadow-2xl shadow-[#E5E5E5]/5 sm:p-12 md:p-16">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#E5E5E5]/5 to-transparent opacity-50"></div>

                <div className="relative z-10 flex flex-col items-center gap-8">
                    <h2 className="text-3xl font-bold text-[#E5E5E5] sm:text-4xl md:text-5xl">
                        Ready to transform your workflow?
                    </h2>
                    <p className="max-w-2xl text-base leading-relaxed text-[#E5E5E5]/80 sm:text-lg">
                        Join thousands of developers who are already building better products with Kairo Studios.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            to="/register"
                            className="group flex items-center justify-center gap-2 rounded-lg bg-[#E5E5E5] px-8 py-3 text-base font-bold text-[#2B2B2B] shadow-lg shadow-[#E5E5E5]/20 ring-2 ring-[#E5E5E5] ring-offset-4 ring-offset-[#0A0A0A] transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl hover:shadow-[#E5E5E5]/30 sm:px-10 sm:py-3.5 sm:text-lg"
                        >
                            Start for free
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        <Link
                            to="/about"
                            className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#E5E5E5] bg-transparent px-8 py-3 text-base font-bold text-[#E5E5E5] transition-all duration-300 hover:scale-105 hover:border-white hover:bg-[#E5E5E5]/10 hover:text-white sm:px-10 sm:py-3.5 sm:text-lg"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
