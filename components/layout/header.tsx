"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";

const links = [
  { href: "/systems", label: "Systems" },
  { href: "/approach", label: "Approach" },
  { href: "/insights", label: "Insights" },
  { href: "/company", label: "Company" },
];
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const close = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", close);
    return () => query.removeEventListener("change", close);
  }, []);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-container header-inner">
          <Link href="/" className="brand" aria-label="CLVR Systems home">
            <span>
              CLVR<span className="brand-period">.</span>
            </span>
            <span className="brand-descriptor">
              Operating
              <br />
              systems
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  pathname === item.href ||
                  pathname?.startsWith(`${item.href}/`)
                    ? "page"
                    : undefined
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/#contact" className="header-contact">
            Let’s talk <ArrowUpRight size={16} aria-hidden />
          </Link>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button className="menu-trigger" aria-label="Open navigation">
                <Menu size={22} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="menu-overlay" />
              <Dialog.Content className="mobile-menu">
                <div className="mobile-menu-top">
                  <Dialog.Title>CLVR.</Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      className="menu-close"
                      aria-label="Close navigation"
                    >
                      <X size={25} />
                    </button>
                  </Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">
                  Explore CLVR systems, our approach, insights and the company.
                </Dialog.Description>
                <nav aria-label="Mobile navigation">
                  {[
                    ...links,
                    { href: "/verified", label: "Verified" },
                    { href: "/#contact", label: "Contact" },
                  ].map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={
                        pathname === item.href ||
                        pathname?.startsWith(`${item.href}/`)
                          ? "page"
                          : undefined
                      }
                    >
                      <span>0{index + 1}</span>
                      {item.label}
                      <ArrowUpRight size={24} />
                    </Link>
                  ))}
                </nav>
                <div className="mobile-menu-bottom">
                  Ideas worth
                  <br />
                  building.
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
        <motion.div
          className="reading-progress"
          style={{ scaleX: scrollYProgress }}
          aria-hidden
        />
      </header>
    </>
  );
}
