import Logo from "@/assets/icons/Logo";
import { Code, Cpu, Shield } from "lucide-react";

export const projects = [
  {
    name: "TaskHub",
    category: "Task Management",
    integration: "In Development",
    rating: 4.9,
    Icon: Logo,
    color: "text-[#93B8B1]",
  },
  {
    name: "CodeSync",
    category: "Continuous Integration",
    integration: "Beta",
    rating: 4.8,
    Icon: Logo,
    color: "text-[#F7C86A]",
  },
  {
    name: "BugRadar",
    category: "Error Monitoring",
    integration: "Stable",
    rating: 4.9,
    Icon: Logo,
    color: "text-[#FFB175]",
  },
  {
    name: "TeamFlow",
    category: "Collaboration",
    integration: "Beta",
    rating: 4.7,
    Icon: Logo,
    color: "text-[#9AEBA3]",
  },
];

export const stats = [
  { value: "200+", label: "Active Projects" },
  { value: "15K+", label: "Developers" },
  { value: "4.9", label: "Average Rating" },
  { value: "99.9%", label: "Uptime" },
];

export const features = [
  {
    icon: Code,
    title: "Centralized Codebase",
    desc: "Organize repositories, branches, and pipelines all in one place for full control over your dev cycle.",
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    desc: "Set up automated builds, testing, and deployments in seconds with effortless CI/CD integration.",
  },
  {
    icon: Shield,
    title: "Security & Access Control",
    desc: "Protect your work with advanced permissions, access control, and real-time audit tracking.",
  },
];

export const footerSections = [
  {
    title: "Resources",
    items: ["Documentation", "API", "Integrations", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About Us", "Careers", "Blog", "Press"],
  },
  {
    title: "Support",
    items: ["Help Center", "Contact", "Terms", "Privacy"],
  },
];
