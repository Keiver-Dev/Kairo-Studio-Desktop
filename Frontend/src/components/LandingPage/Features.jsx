import {
  Zap,
  Users,
  MessageSquare,
  Calendar,
  Brain,
  Clock,
} from "lucide-react";

const Features = () => {
  // Feature data structure for easy maintenance and scalability
  const featuresData = {
    row1: [
      {
        icon: MessageSquare,
        title: "Team Chat",
        description:
          "Instant messaging built for teams. Share code snippets, files, and ideas in real-time with powerful search and integrations.",
        highlights: [
          "Real-time messaging",
          "Code syntax highlighting",
          "File sharing & threads",
        ],
        width: "md:w-[55%]",
      },
      {
        icon: Users,
        title: "SyncUps",
        description:
          "Quick video meetings with screen sharing and recording. No downloads required.",
        highlights: ["HD video & audio", "Screen sharing"],
        width: "md:w-[45%]",
      },
    ],
    row2: [
      {
        icon: Calendar,
        title: "Personal Planner",
        description:
          "Organize your tasks and schedule with an intuitive interface designed for productivity.",
        highlights: ["Smart scheduling", "Task priorities"],
        size: "small",
      },
      {
        icon: Brain,
        title: "AI Notetaker",
        description:
          "Automatically transcribe and summarize meetings with AI-powered insights.",
        highlights: ["Auto transcription", "Smart summaries"],
        size: "small",
      },
      {
        icon: Clock,
        title: "Team Scheduling",
        description:
          "Find the perfect meeting time across timezones with automated scheduling.",
        highlights: ["Timezone handling", "Conflict detection"],
        size: "small",
      },
    ],
  };

  // Reusable FeatureCard component
  const FeatureCard = ({ feature, isSmall = false }) => {
    const Icon = feature.icon;
    const cardWidth = feature.width || "md:w-[33%]";

    return (
      <div
        className={`group flex flex-col border border-[#222222] bg-[#0A0A0A] rounded-2xl p-8 w-full ${cardWidth} shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#E5E5E5]/20 hover:shadow-xl hover:shadow-[#E5E5E5]/10 hover:-translate-y-1`}
      >
        <div className="flex flex-row gap-3 items-center mb-4">
          <div className="p-3 bg-linear-to-br from-white/15 to-white/5 rounded-xl transition-all duration-300 group-hover:from-white/20 group-hover:to-white/10">
            <Icon className={`${isSmall ? "h-6 w-6" : "h-6 w-6"} text-white transition-transform duration-300`} />
          </div>
          <h3
            className={`${isSmall ? "text-xl" : "text-2xl"} font-bold text-white transition-colors duration-300 group-hover:text-[#E5E5E5]`}
          >
            {feature.title}
          </h3>
        </div>
        <p
          className={`text-gray-400 ${isSmall ? "text-sm mb-4" : "mb-6"} transition-colors duration-300 group-hover:text-gray-300`}
        >
          {feature.description}
        </p>
        <div className={`flex flex-col ${isSmall ? "gap-2" : "gap-3"} mt-auto`}>
          {feature.highlights.map((highlight, index) => (
            <div
              key={index}
              className={`${isSmall ? "text-xs" : "flex items-center gap-2 text-sm"} text-gray-300 transition-colors duration-300 group-hover:text-gray-200`}
            >
              {!isSmall && (
                <div className="w-2 h-2 bg-green-500 rounded-full shadow-sm shadow-green-500/50"></div>
              )}
              {isSmall ? `✓ ${highlight}` : highlight}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 px-4 py-20 sm:px-6 md:px-8 md:py-24">
      <h2 className="text-center text-3xl font-bold text-[#E5E5E5] sm:text-4xl md:text-5xl">
        Everything your team needs and more:
      </h2>

      {/* First Row - Chat & SyncUps */}
      <article className="flex flex-col md:flex-row w-full max-w-6xl gap-4">
        {featuresData.row1.map((feature, index) => (
          <FeatureCard key={index} feature={feature} isSmall={false} />
        ))}
      </article>

      {/* Second Row - Personal Planner, AI Notetaker, Team Scheduling */}
      <article className="flex flex-col md:flex-row w-full max-w-6xl gap-4">
        {featuresData.row2.map((feature, index) => (
          <FeatureCard key={index} feature={feature} isSmall={true} />
        ))}
      </article>
    </section>
  );
};

export default Features;
