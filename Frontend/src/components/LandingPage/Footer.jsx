import { Link } from "react-router-dom";
import Logo from "@/assets/icons/Logo";
import Github from "@/assets/icons/Companies/Github";
import { Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const footerLinks = {
        product: [
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "Security", href: "/security" },
            { label: "Roadmap", href: "/roadmap" }
        ],
        company: [
            { label: "About", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Careers", href: "/careers" },
            { label: "Contact", href: "/contact" }
        ],
        resources: [
            { label: "Documentation", href: "/docs" },
            { label: "API Reference", href: "/api" },
            { label: "Community", href: "/community" },
            { label: "Support", href: "/support" }
        ],
        legal: [
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Cookies", href: "/cookies" },
            { label: "License", href: "/license" }
        ]
    };

    const socialLinks = [
        { icon: <Github className="h-5 w-5" />, href: "https://github.com/kairo-studios", label: "GitHub" },
        { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/kairostudios", label: "Twitter" },
        { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/company/kairo-studios", label: "LinkedIn" },
        { icon: <Mail className="h-5 w-5" />, href: "mailto:contact@kairostudios.com", label: "Email" }
    ];

    return (
        <footer className="w-full border-t border-[#222222] bg-[#0A0A0A] px-4 py-12 sm:px-6 md:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
                    {/* Logo and Description */}
                    <div className="col-span-2 flex flex-col gap-4">
                        <span className="flex items-center gap-2">
                            <Logo className="h-6 w-6 text-[#E5E5E5]" />
                            <span className="text-lg font-bold text-[#E5E5E5]">Kairo Studios</span>
                        </span>
                        <p className="text-sm text-[#E5E5E5]/70">
                            Building the future of development collaboration, one project at a time.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#222222] text-[#E5E5E5] transition-all duration-300 hover:scale-110 hover:border-[#E5E5E5] hover:bg-[#E5E5E5] hover:text-[#0A0A0A] hover:shadow-lg hover:shadow-[#E5E5E5]/20"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-[#E5E5E5]">Product</h3>
                        <ul className="flex flex-col gap-2">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-[#E5E5E5]/70 transition-all duration-300 hover:text-[#E5E5E5] hover:translate-x-1"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-[#E5E5E5]">Company</h3>
                        <ul className="flex flex-col gap-2">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-[#E5E5E5]/70 transition-colors hover:text-[#E5E5E5]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-[#E5E5E5]">Resources</h3>
                        <ul className="flex flex-col gap-2">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-[#E5E5E5]/70 transition-colors hover:text-[#E5E5E5]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-[#E5E5E5]">Legal</h3>
                        <ul className="flex flex-col gap-2">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-[#E5E5E5]/70 transition-colors hover:text-[#E5E5E5]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-[#222222] pt-8 text-sm text-[#E5E5E5]/70 sm:flex-row">
                    <p>© {new Date().getFullYear()} Kairo Studios. All rights reserved.</p>
                    <p>Made with ❤️ by developers, for developers</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
