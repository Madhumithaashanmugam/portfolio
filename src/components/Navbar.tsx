import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-[rgba(2,8,23,0.85)] backdrop-blur-md"
      style={{ height: 80 }}
    >
      <div className="container-max mx-auto flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <span className="logo-dot" aria-hidden />
          <a href="#home" className="text-lg font-semibold text-white">
            Madhumitha .dev
          </a>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm font-medium tracking-wide text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-1 lg:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setOpen((c) => !c)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/6 bg-white/2 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
