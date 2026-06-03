import { motion } from 'framer-motion'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-soft sm:p-8 md:p-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">Projects</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Featured projects</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[24px] glass-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-2"
            >
              {/* <div className="relative overflow-hidden rounded-md">
                <div className="h-40 w-full bg-gradient-to-r from-slate-800 to-slate-700 group-hover:scale-105 transition-transform duration-400" />
              </div> */}

              <div className="mt-4 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
                <div className="text-xs text-slate-400">{project.tech.join(' · ')}</div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

              {project.highlights.length > 0 ? (
                <div className="mt-6 grid gap-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                      <p>{highlight}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
