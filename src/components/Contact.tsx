import { motion } from "framer-motion";
import {
  FiMail,
//   FiPhone,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";

import { contactInfo } from "../data/content";

export default function Contact() {
  const [state, handleSubmit] = useForm("xaqpplyd");

  return (
    <section id="contact" className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl sm:p-8 lg:p-12"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
              CONTACT
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              Let's build something together.
            </h2>

            <p className="mt-4 max-w-[450px] text-sm sm:text-base md:text-lg leading-7 text-slate-400">
              Open to full-time roles, freelance projects and collaborations.
              Feel free to reach out.
            </p>

            <div className="mt-10 space-y-4">
              {/* <a
                href="tel:+916305410507"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/50"
              > */}
                {/* <FiPhone className="h-5 w-5 text-violet-400" /> */}

                {/* <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 text-lg text-white">
                    +91 6305410507
                  </p>
                </div> */}
              {/* </a> */}

              <a
                href="mailto:madhumithaashanmugam@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/50"
              >
                <FiMail className="h-5 w-5 text-violet-400" />

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-white">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/madhumithashanmugam/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/50"
              >
                <FiLinkedin className="h-5 w-5 text-violet-400" />

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-white">
                    View Profile
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Madhumithaashanmugam"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/50"
              >
                <FiGithub className="h-5 w-5 text-violet-400" />

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    GitHub
                  </p>

                  <p className="mt-1 text-white">
                    View Repository
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:pt-2">
            {state.succeeded && (
              <div className="mb-6 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-400">
                Message sent successfully!
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-violet-500"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={7}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-violet-500"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3.5 font-medium text-white transition hover:scale-[1.02]"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>

                {/* <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-8 py-3.5 font-medium text-white transition hover:border-white/20"
                >
                  View Resume
                </a> */}
              </div>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
}