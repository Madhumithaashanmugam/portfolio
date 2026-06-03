import { motion } from 'framer-motion'
import { skillCategories } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-soft sm:p-10"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">Skills</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Tools I reach for, every day.</h2>
            <p className="mt-4 text-slate-400">
              Here are the technologies and tools I use to build web applications and solve problems.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-[24px] glass-card p-6 shadow-soft transform transition-transform hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-300">
                {category.items.map((item) => (
                  <li key={item} className="inline-block rounded-full bg-[rgba(139,92,246,0.15)] px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
