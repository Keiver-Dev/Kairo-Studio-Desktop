import { Link } from "react-router-dom";
import { Code2, Rocket, Users, Target, Heart, Lightbulb, Award, Zap } from "lucide-react";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years in tech innovation",
      image: "👨‍💼"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      description: "Full-stack architect passionate about scalable solutions",
      image: "👩‍💻"
    },
    {
      name: "Marcus Johnson",
      role: "Head of Design",
      description: "UX expert crafting beautiful user experiences",
      image: "👨‍🎨"
    },
    {
      name: "Elena Popov",
      role: "Lead Developer",
      description: "Code wizard turning ideas into reality",
      image: "👩‍🔬"
    }
  ];

  // Company values data
  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions."
    },
    {
      icon: Heart,
      title: "People Centered",
      description: "Our team and clients are at the heart of everything we do, fostering growth and collaboration."
    },
    {
      icon: Target,
      title: "Quality Driven",
      description: "We maintain the highest standards in every project, ensuring excellence in every detail."
    },
    {
      icon: Zap,
      title: "Fast & Agile",
      description: "We move quickly without compromising quality, adapting to changes with flexibility."
    }
  ];

  return (
    <main className="flex flex-col w-screen bg-[#0A0A0A] min-h-screen">
      {/* Hero Section */}
      <section className="flex w-full flex-col items-center justify-center gap-8 px-4 pt-32 pb-24 text-[#E5E5E5] sm:px-6 md:px-8 md:pt-40 lg:pt-48">
        <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Creativity is part{" "}
          <span className="bg-linear-to-r from-[#E5E5E5] via-[#B8B8B8] to-[#808080] bg-clip-text text-transparent">
            of progress
          </span>
        </h1>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 flex max-w-3xl flex-col justify-center gap-2 text-center text-base sm:text-lg md:text-xl">
          <p className="text-[#E5E5E5]/80 leading-relaxed">
            We're a team of passionate developers, designers, and innovators building the future of collaboration tools.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex w-full flex-col items-center justify-center gap-8 px-4 py-20 sm:px-6 md:px-8">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Mission Text */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-linear-to-br from-white/15 to-white/5 rounded-xl">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#E5E5E5] sm:text-4xl">Our Mission</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                At Kairo Studios, we believe that great software should empower teams to focus on what matters most: creating amazing products. Our mission is to eliminate the friction in team collaboration and project management.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We're committed to building tools that are not only powerful and feature-rich, but also intuitive and delightful to use every single day.
              </p>
            </div>

            {/* Stats Card */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group border border-[#222222] bg-[#0A0A0A] rounded-2xl p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#E5E5E5]/20 hover:shadow-xl hover:shadow-[#E5E5E5]/10 hover:-translate-y-1">
                <div className="text-4xl font-bold text-white mb-2">10K+</div>
                <div className="text-gray-400 text-sm">Active Users</div>
              </div>
              <div className="group border border-[#222222] bg-[#0A0A0A] rounded-2xl p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#E5E5E5]/20 hover:shadow-xl hover:shadow-[#E5E5E5]/10 hover:-translate-y-1">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400 text-sm">Companies</div>
              </div>
              <div className="group border border-[#222222] bg-[#0A0A0A] rounded-2xl p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#E5E5E5]/20 hover:shadow-xl hover:shadow-[#E5E5E5]/10 hover:-translate-y-1">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div className="group border border-[#222222] bg-[#0A0A0A] rounded-2xl p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#E5E5E5]/20 hover:shadow-xl hover:shadow-[#E5E5E5]/10 hover:-translate-y-1">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="flex w-full flex-col items-center justify-center gap-12 px-4 py-20 sm:px-6 md:px-8">
        <h2 className="text-center text-3xl font-bold text-[#E5E5E5] sm:text-4xl md:text-5xl">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group flex flex-col border border-[#222222] bg-[#0A0A0A] rounded-2xl p-8 shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#E5E5E5]/20 hover:shadow-xl hover:shadow-[#E5E5E5]/10 hover:-translate-y-1"
              >
                <div className="p-3 bg-linear-to-br from-white/15 to-white/5 rounded-xl w-fit mb-4 transition-all duration-300 group-hover:from-white/20 group-hover:to-white/10">
                  <Icon className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#E5E5E5]">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-gray-300">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="flex w-full flex-col items-center justify-center gap-12 px-4 py-20 sm:px-6 md:px-8 bg-[#0F0F0F]">
        <div className="text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-[#E5E5E5] sm:text-4xl md:text-5xl mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg">
            The talented people behind Kairo Studios, working together to build something extraordinary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center border border-[#222222] bg-[#0A0A0A] rounded-2xl p-8 shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#E5E5E5]/20 hover:shadow-xl hover:shadow-[#E5E5E5]/10 hover:-translate-y-1"
            >
              <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {member.image}
              </div>
              <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-[#E5E5E5]">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{member.role}</p>
              <p className="text-sm text-gray-400 text-center transition-colors duration-300 group-hover:text-gray-300">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex w-full flex-col items-center justify-center gap-8 px-4 py-24 sm:px-6 md:px-8 md:py-32">
        <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
          <div className="p-4 bg-linear-to-br from-white/15 to-white/5 rounded-2xl">
            <Award className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#E5E5E5] sm:text-4xl md:text-5xl">
            Ready to join us?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Start your journey with Kairo Studios today and experience the future of team collaboration.
          </p>
          <Link
            to="/login"
            className="group mt-4 cursor-pointer rounded-lg bg-[#E5E5E5] px-10 py-4 text-lg font-bold text-[#2B2B2B] shadow-lg shadow-[#E5E5E5]/20 ring-2 ring-[#E5E5E5] ring-offset-4 ring-offset-[#0A0A0A] transition-all hover:scale-105 hover:bg-white hover:shadow-xl hover:shadow-[#E5E5E5]/30"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
