import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-soft sm:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">About</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Results-driven Software Engineer
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Results-driven Software Engineer with 2+ years of experience delivering end-to-end software solutions across payments, wallets, and SaaS platforms.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Quote</p>
            <blockquote className="mt-6 text-lg leading-8 text-slate-200">
              "I independently manage the entire software lifecycle — from planning and architecture to deployment and production maintenance."
            </blockquote>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
