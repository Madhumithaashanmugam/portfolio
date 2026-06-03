import { motion } from "framer-motion";
import { heroStats } from "../data/content";

// ✅ import resume pdf
import resumePDF from "../assets/Madhumitha Shanmugam.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030712]"
    >
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* PURPLE GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d5dfc]/20 blur-[250px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-screen items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* AVAILABLE */}
            <div className="mt-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur">
              <span className="mr-2 h-2 w-2 rounded-full bg-violet-500" />
              Available for new opportunities
            </div>

            {/* NAME */}
            <h1 className="mt-6 leading-[0.92] tracking-[-2px]">
              <span className="block text-[36px] font-semibold text-white sm:text-[50px] md:text-[60px] lg:text-[72px] xl:text-[92px]">
                Madhumitha
              </span>

              <span className="block bg-gradient-to-r from-[#8b7cff] via-[#7c6cff] to-[#9f7aea] bg-clip-text text-[36px] font-semibold text-transparent sm:text-[50px] md:text-[60px] lg:text-[72px] xl:text-[92px]">
                Shanmugam
              </span>
            </h1>

            {/* ROLE */}
            <p className="mt-5 text-[17px] font-normal text-slate-300">
              Software Engineer · Full Stack Developer
            </p>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[560px] text-[18px] leading-[1.8] text-slate-400">
              Building scalable web applications, payment systems, and production-ready platforms with
              <span className="font-medium text-white"> React.js, FastAPI,</span>
              {" "}and
              <span className="font-medium text-white"> PostgreSQL.</span>
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4 mt-6 sm:flex-row">

              {/* ✅ DOWNLOAD RESUME */}
              <a
                href={resumePDF}
                download="Madhumitha_Shanmugam_Resume.pdf"
                className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-1 sm:w-auto"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="w-full rounded-lg glass-card px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-1 sm:w-auto"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 place-self-center">
            {heroStats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex w-full max-w-[220px] flex-col items-center justify-center rounded-[32px] border border-white/10 bg-[#081224]/90 backdrop-blur-md px-6 py-7"
              >
                <h3 className="text-center text-[28px] font-semibold leading-tight text-white">
                  {item.value}
                </h3>

                <p className="mt-4 text-center text-[11px] uppercase tracking-[4px] text-slate-400">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}