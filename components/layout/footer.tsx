import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Only keep section links that navigate within the current page
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "How We Do It", href: "#how-we-do-it" },
    { label: "Products", href: "#products" },
    { label: "Stack", href: "#stack" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "#" },
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" },
  ]

  return (
    <footer className="w-full py-12 bg-forest-green text-white/80">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold font-serif text-white">CLVR</span>
              <span className="text-xl font-normal font-serif text-white/80">Automations</span>
            </div>
            <p className="text-sm">Building the future of AI system infrastructure.</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links - More concise layout */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">Navigation</h3>
            <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
              {navLinks.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright and Founder Attribution */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm">&copy; {currentYear} CLVR Automations. All rights reserved.</p>
          <p className="text-xs text-white/60 mt-1">founded by Jethro Xavier</p>
        </div>
      </div>
    </footer>
  )
}
