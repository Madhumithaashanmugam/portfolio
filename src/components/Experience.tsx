import { motion } from 'framer-motion'
import { experiences } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-soft sm:p-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">Experience</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Career timeline</h2>
        <div className="mt-10 relative lg:pl-12">
          <div className="absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-[#a78bfa] to-transparent opacity-60 rounded" />
          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.date}`}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative ml-8 rounded-[28px] border border-white/8 bg-slate-950/80 p-6 shadow-soft"
              >
                <span className="absolute -left-6 top-8 h-4 w-4 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] shadow-[0_0_0_8px_rgba(139,92,246,0.06)]" />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-slate-400">{item.company}</p>
                  </div>
                  <p className="text-sm text-slate-500">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
