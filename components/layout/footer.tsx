import Link from "next/link"

type FooterLink = {
  label: string
  href?: string
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const columns: Array<{ title: string; links: FooterLink[] }> = [
    {
      title: "Core",
      links: [
        { label: "Understand" },
        { label: "Decide" },
        { label: "Execute" },
        { label: "Record" },
      ],
    },
    {
      title: "Systems",
      links: [
        { label: "Emilia", href: "https://emilia.clvrautomations.com/" },
        { label: "MarginFlow", href: "https://marginflow.clvrautomations.com" },
        { label: "SupplierOps" },
        { label: "CLVR Verified", href: "https://verified.clvrautomations.com/" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "Systems", href: "/systems" },
        { label: "Verified", href: "/verified" },
        { label: "Company", href: "/company" },
        { label: "Contact", href: "/#contact" },
      ],
    },
  ]

  return (
    <footer className="w-full border-t border-black/10 bg-[#efede8] py-24 text-black md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="space-y-5">
            <div className="space-y-3">
              <p className="font-display text-2xl font-semibold text-black md:text-3xl">CLVR Systems</p>
              <p className="max-w-lg text-sm leading-6 text-black/[0.56]">
                Operating systems for real-world business workflows.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title} className="space-y-3">
                <h3 className="text-sm font-semibold text-black/[0.42]">{column.title}</h3>
                <nav className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    link.href ? (
                      <Link
                        key={`${column.title}-${link.label}`}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-sm text-black/[0.58] hover:text-black"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span key={`${column.title}-${link.label}`} className="text-sm text-black/[0.48]">
                        {link.label}
                      </span>
                    )
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-black/10 pt-5 text-sm text-black/[0.38] md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} CLVR Systems. All rights reserved.</p>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <span>Workflow control</span>
            <span>Recorded outcomes</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
