import { BookOpenText, Users, Briefcase, Star, CreditCard, Building2, Scale, Laptop, Package, Wrench, TabletSmartphone, PaintRoller, Github } from "lucide-react";

export const NAV_LINKS = [
    {
        to: "/",
        label: "Home",
        layout: {
            width: "w-[500px]",
            gridCols: "grid-cols-2",
            gap: "gap-2",
        },
        items: [
            {
                title: "Our Story",
                description: "Learn about our journey and mission.",
                href: "/about",
                icon: <BookOpenText className="h-4 w-4" />,
            },
            {
                title: "Team",
                description: "Meet the people behind Kairo Studios.",
                href: "/about/team",
                icon: <Users className="h-4 w-4" />,
            },
            {
                title: "Careers",
                description: "Join our growing team of professionals.",
                href: "/about/careers",
                icon: <Briefcase className="h-4 w-4" />,
            },
            {
                title: "Culture",
                description: "Discover our values and work environment.",
                href: "/about/culture",
                icon: <Star className="h-4 w-4" />,
            },
        ],
    },
    {
        to: "/pricing",
        label: "Pricing",
        layout: {
            width: "w-[320px]",
            gridCols: "grid-cols-1",
            gap: "gap-1",
        },
        items: [
            {
                title: "Plans",
                description: "Choose the perfect plan for your needs.",
                href: "/pricing/plans",
                icon: <CreditCard className="h-4 w-4" />,
            },
            {
                title: "Enterprise",
                description: "Custom solutions for large organizations.",
                href: "/pricing/enterprise",
                icon: <Building2 className="h-4 w-4" />,
            },
            {
                title: "Compare",
                description: "See all features side by side.",
                href: "/pricing/compare",
                icon: <Scale className="h-4 w-4" />,
            },
        ],
    },
    {
        to: "/development",
        label: "Development",
        layout: {
            width: "w-[600px]",
            gridCols: "grid-cols-4",
            gap: "gap-3",
        },
        items: [
            {
                title: "Open Source",
                description: "Explore our open source contributions.",
                href: "/development/opensource",
                icon: <Laptop className="h-4 w-4" />,
            },
            {
                title: "Templates",
                description: "Ready-to-use templates for your projects.",
                href: "/development/templates",
                icon: <Package className="h-4 w-4" />,
            },
            {
                title: "Showcase",
                description: "Featured projects from our community.",
                href: "/development/showcase",
                icon: <Star className="h-4 w-4" />,
            },
            {
                title: "Resources",
                description: "Tools and assets for developers.",
                href: "/development/resources",
                icon: <Wrench className="h-4 w-4" />,
            },
            {
                title: "Blog",
                description: "Latest updates and tutorials.",
                href: "/development/blog",
                icon: <BookOpenText className="h-4 w-4" />,
            },
            {
                title: "AI Tools",
                description: "Innovative AI-powered development tools.",
                href: "/development/ai-tools",
                icon: <TabletSmartphone className="h-4 w-4" />,
            },
            {
                title: "Design System",
                description: "Guidelines and components for consistent UI.",
                href: "/development/design-system",
                icon: <PaintRoller className="h-4 w-4" />,
            },
            {
                title: "GitHub",
                description: "Our repositories and collaborative projects.",
                href: "https://github.com/Kairo-Studios",
                icon: <Github className="h-4 w-4" />,
            },
        ],
    },
    {
        to: "/contact",
        label: "Contact",
        layout: {
            width: "w-[320px]",
            gridCols: "grid-cols-1",
            gap: "gap-1",
        },
        items: [
            {
                title: "Support",
                description: "Get help and find answers to your questions.",
                href: "/contact/support",
                icon: <Users className="h-4 w-4" />,
            },
            {
                title: "Sales",
                description: "Talk to our sales team about your needs.",
                href: "/contact/sales",
                icon: <Briefcase className="h-4 w-4" />,
            },
            {
                title: "Partnerships",
                description: "Explore collaboration opportunities.",
                href: "/contact/partnerships",
                icon: <Star className="h-4 w-4" />,
            },
            {
                title: "Feedback",
                description: "Share your thoughts and suggestions.",
                href: "/contact/feedback",
                icon: <BookOpenText className="h-4 w-4" />,
            },
        ],
    },
];