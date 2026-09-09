import { Outlet, useLocation } from "react-router-dom"
import { Header } from "@/components/navigation/Header"
import { Footer } from "@/components/footer/Footer"
import { StickyCta } from "@/components/navigation/StickyCta"

export function Layout() {
  const { pathname } = useLocation()
  const hideSticky = pathname.startsWith("/book") || pathname.startsWith("/admin")

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[90] focus:bg-ivory focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      {hideSticky ? null : <StickyCta />}
    </>
  )
}
