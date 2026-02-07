const Stats = () => {
    const stats = [
        { value: "10K+", label: "Active Users" },
        { value: "50K+", label: "Projects Created" },
        { value: "99.9%", label: "Uptime" },
        { value: "24/7", label: "Support" }
    ];

    return (
        <section className="flex w-full flex-col items-center justify-center gap-12 bg-[#0A0A0A] px-4 py-24 sm:px-6 md:px-8">
            <div className="w-full max-w-6xl rounded-2xl border border-[#222222] bg-[#0A0A0A] p-8 sm:p-12">
                <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 text-center"
                        >
                            <span className="text-4xl font-bold text-[#E5E5E5] sm:text-5xl md:text-6xl">
                                {stat.value}
                            </span>
                            <span className="text-sm text-[#E5E5E5]/70 sm:text-base">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
