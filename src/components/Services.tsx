import { motion } from 'framer-motion'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-soft sm:p-10"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">Services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Service offerings</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-[28px] border border-white/10 bg-slate-950/80 px-5 py-6 text-sm font-medium text-slate-200 shadow-soft"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
