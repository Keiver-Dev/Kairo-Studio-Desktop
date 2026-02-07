import { Star } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Lead Developer at TechCorp",
            content: "Kairo Studios has transformed how our team collaborates. The intuitive interface and powerful features make project management effortless.",
            rating: 5
        },
        {
            name: "Marcus Rodriguez",
            role: "CTO at StartupXYZ",
            content: "Finally, a platform that understands developers. No more context switching between tools. Everything we need in one place.",
            rating: 5
        },
        {
            name: "Emily Watson",
            role: "Product Manager at InnovateLabs",
            content: "The best investment we've made for our development workflow. Our productivity has increased by 40% since switching to Kairo Studios.",
            rating: 5
        }
    ];

    return (
        <section className="flex w-full flex-col items-center justify-center gap-12 bg-[#0A0A0A] px-4 py-24 sm:px-6 md:px-8">
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold text-[#E5E5E5] sm:text-4xl md:text-5xl">
                    Loved by developers worldwide
                </h2>
                <p className="max-w-2xl text-base text-[#E5E5E5]/70 sm:text-lg">
                    Join thousands of teams who trust Kairo Studios for their development workflow.
                </p>
            </div>

            <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="group flex flex-col gap-5 rounded-xl border border-[#222222] bg-[#0A0A0A] p-7 shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#E5E5E5]/20 hover:bg-[#171717] hover:shadow-xl hover:shadow-[#E5E5E5]/10 hover:scale-[1.02]"
                    >
                        <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-all duration-300 group-hover:fill-yellow-300 group-hover:text-yellow-300"
                                />
                            ))}
                        </div>
                        <p className="text-sm leading-relaxed text-[#E5E5E5]/90 transition-colors duration-300 group-hover:text-[#E5E5E5]">
                            "{testimonial.content}"
                        </p>
                        <div className="mt-auto flex flex-col gap-1 border-t border-[#222222]/50 pt-4">
                            <span className="text-sm font-semibold text-[#E5E5E5]">
                                {testimonial.name}
                            </span>
                            <span className="text-xs text-[#E5E5E5]/70">
                                {testimonial.role}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
