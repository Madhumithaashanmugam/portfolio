import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <section id="resume" className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="rounded-[28px] glass-card p-8 shadow-soft"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">Resume</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Professional resume</h3>
          </div>
          <div className="flex gap-3">
            <a className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white" href="#">
              View Resume
            </a>
            <a className="rounded-lg glass-card px-4 py-3 text-sm font-semibold text-white" href="#">
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
