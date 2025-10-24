import React, { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Flame,
  HeartHandshake,
  Mail,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import {
  benefits,
  cultureHighlights,
  openRoles,
  studioValues,
} from "../data/careers";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

function CultureCard({ highlight, index }) {
  return (
    <Motion.div
      variants={fadeUp}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl"
    >
      <img
        src={highlight.image}
        alt={highlight.title}
        loading={index === 0 ? "eager" : "lazy"}
        className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="space-y-2 p-6">
        <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
        <p className="text-sm text-white/70">{highlight.caption}</p>
      </div>
    </Motion.div>
  );
}

function ValueCard({ value }) {
  return (
    <Motion.div
      variants={fadeUp}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl"
    >
      <span className="text-3xl">{value.icon}</span>
      <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">
        {value.description}
      </p>
    </Motion.div>
  );
}

function RoleCard({ role, index }) {
  const cardDelay = { duration: 0.7, delay: index * 0.05 + 0.15, ease: "easeOut" };

  return (
    <Motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={cardDelay}
      className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-lg transition-transform duration-500 hover:-translate-y-2 hover:border-indigo-400/50"
    >
      <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-indigo-200/70">
        <span>{role.team}</span>
        <span>{role.type}</span>
      </div>
      <h3 className="mt-4 text-2xl font-bold text-white">{role.title}</h3>
      <div className="mt-3 flex items-center gap-2 text-sm font-medium text-indigo-200">
        <MapPin className="h-4 w-4" />
        {role.location}
      </div>
      <p className="mt-4 text-base leading-relaxed text-white/70">
        {role.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {role.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm text-white/60">
          Applications reviewed weekly
        </span>
        <a
          href="#apply"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white transition hover:from-indigo-400 hover:to-purple-400"
        >
          Apply Now
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Motion.article>
  );
}

function BenefitCard({ benefit, index }) {
  const Icon = benefit.icon;

  return (
    <Motion.div
      variants={fadeUp}
      className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-200">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          {benefit.description}
        </p>
      </div>
    </Motion.div>
  );
}

function ApplicationForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [feedback, setFeedback] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFeedback("Thanks! We’ll reach out within two business days.");
    setState({ name: "", email: "", role: "", message: "" });
    window.setTimeout(() => setFeedback(null), 4000);
  }

  return (
    <Motion.form
      id="apply"
      onSubmit={handleSubmit}
      variants={fadeUp}
      className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
    >
      <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.32em] text-indigo-200">
        <Mail className="h-4 w-4" />
        Quick Application
      </div>
      <p className="text-base leading-relaxed text-white/70">
        Ready to chat? Drop a few details and we’ll set up a 30-minute intro
        call.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-medium text-white/80">
          Name
          <input
            name="name"
            value={state.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white shadow-inner focus:border-indigo-400 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-white/80">
          Email
          <input
            name="email"
            type="email"
            value={state.email}
            onChange={handleChange}
            required
            placeholder="you@fluxionstudio.com"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white shadow-inner focus:border-indigo-400 focus:outline-none"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1 text-sm font-medium text-white/80">
        Role of Interest
        <select
          name="role"
          value={state.role}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white focus:border-indigo-400 focus:outline-none"
        >
          <option value="">Select an open role or future role</option>
          {openRoles.map((role) => (
            <option key={role.id} value={role.title} className="bg-slate-900">
              {role.title}
            </option>
          ))}
          <option value="General">General Interest</option>
        </select>
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium text-white/80">
        Portfolio / Note
        <textarea
          name="message"
          value={state.message}
          onChange={handleChange}
          rows={4}
          placeholder="Link to portfolio or tell us what you’d love to work on"
          className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white focus:border-indigo-400 focus:outline-none"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-400 hover:to-purple-400"
        >
          Submit Application
          <ArrowRight className="h-4 w-4" />
        </button>
        <a
          href="mailto:careers@fluxionstudio.com?subject=Fluxxion%20Studio%20Application"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 hover:text-white"
        >
          Email us directly
          <Sparkles className="h-4 w-4" />
        </a>
      </div>
      {feedback && <p className="text-sm text-emerald-300">{feedback}</p>}
    </Motion.form>
  );
}

function Careers() {
  const heroBackground = useMemo(
    () =>
      "linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(192,132,252,0.08) 40%, rgba(15,23,42,0.6) 100%)",
    [],
  );

  return (
    <Motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }}
      className="relative min-h-screen bg-slate-950 text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-32 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-[420px] w-[420px] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <section
        className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-36 lg:flex-row lg:items-center"
      >
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">
            <Users className="h-4 w-4" />
            Join Fluxxion Studio
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Build expressive products with a team that lives for craft.
          </h1>
          <p className="text-lg leading-relaxed text-white/70 sm:max-w-2xl">
            Fluxxion Studio is a motion-first product studio. We combine
            engineering, design, and storytelling to craft experiences that feel
            alive. If you obsess over micro-interactions, love collaborative
            rituals, and never settle for default, we want to hear your story.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#open-roles"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-400 hover:to-purple-400"
            >
              View Open Roles
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#culture"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 hover:text-white"
            >
              Learn about culture
              <Compass className="h-4 w-4" />
            </a>
          </div>
        </Motion.div>

        <Motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="flex-1"
        >
          <div
            style={{ background: heroBackground }}
            className="relative overflow-hidden rounded-3xl border border-white/10 p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute -top-20 left-24 h-36 w-36 rounded-full bg-indigo-400/30 blur-3xl" />
            <div className="absolute -bottom-16 right-16 h-40 w-40 rounded-full bg-purple-500/40 blur-3xl" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                <Flame className="h-4 w-4" />
                Life at Fluxxion
              </div>
              <p className="text-lg leading-relaxed text-white/80">
                We craft expressive products for forward-looking companies. We’re
                a remote-first team anchored in Pakistan with async rituals and
                periodic in-person build weeks to experiment, mentor, and grow.
              </p>
              <ul className="space-y-3 text-sm text-indigo-100/90">
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-200" />
                  Dedicated motion labs for rapid prototyping and internal
                  showcases.
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-200" />
                  Weekly pairing sessions between design and engineering for
                  shared craft.
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-200" />
                  Flexible hours, quarterly retreats, and a mentorship-first
                  leadership model.
                </li>
              </ul>
            </div>
          </div>
        </Motion.div>
      </section>

      <section id="culture" className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              How we work together
            </Motion.h2>
            <Motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-3 max-w-2xl text-base leading-relaxed text-white/70"
            >
              A culture built on openness, transparent feedback loops, and
              experimentation. Join a team that thrives on momentum and keeps
              the craft playful.
            </Motion.p>
          </div>
          <Motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            href="mailto:careers@fluxionstudio.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-indigo-200 transition hover:border-indigo-400/40 hover:text-white"
          >
            Talk to recruiting
            <Users className="h-4 w-4" />
          </Motion.a>
        </div>

        <Motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {cultureHighlights.map((highlight, index) => (
            <CultureCard key={highlight.id} highlight={highlight} index={index} />
          ))}
        </Motion.div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-20">
        <Motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          What guides our work
        </Motion.h2>
        <Motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-3 max-w-3xl text-base leading-relaxed text-white/70"
        >
          Values that keep the studio grounded, collaborative, and always ready
          to build something remarkable.
        </Motion.p>
        <Motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {studioValues.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </Motion.div>
      </section>

      <section
        id="open-roles"
        className="relative mx-auto max-w-6xl px-6 pb-24"
      >
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Open roles
            </Motion.h2>
            <Motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-3 max-w-2xl text-base leading-relaxed text-white/70"
            >
              We review every application personally. Don’t see a perfect fit?
              Drop us a note and we’ll keep you posted on future roles.
            </Motion.p>
          </div>
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center gap-2 text-sm text-indigo-200"
          >
            <MapPin className="h-4 w-4" />
            Remote within Pakistan, hybrid hubs in Lahore & Islamabad
          </Motion.div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {openRoles.map((role, index) => (
            <RoleCard key={role.id} role={role} index={index} />
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10">
          <Motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Benefits & growth
          </Motion.h2>
          <Motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-3 max-w-3xl text-base leading-relaxed text-white/70"
          >
            Designed to support your craft, your wellbeing, and your next leap.
            We want Fluxxion to be the best place you’ve ever built from.
          </Motion.p>
        </div>
        <Motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </Motion.div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-32">
        <div className="grid gap-8 lg:grid-cols-2">
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-purple-500/20 p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">
              <HeartHandshake className="h-4 w-4" />
              Stay in touch
            </div>
            <h3 className="text-3xl font-bold text-white">
              Not ready to apply yet?
            </h3>
            <p className="text-base leading-relaxed text-white/70">
              Join our talent community and be the first to hear about new roles,
              studio stories, and motion experiments fresh out of Fluxxion Labs.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:careers@fluxionstudio.com?subject=Join%20Talent%20Community"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white/20"
              >
                Say Hello
                <Users className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-indigo-200 transition hover:border-indigo-300/70 hover:text-white"
              >
                Follow our work
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Motion.div>
          <ApplicationForm />
        </div>
      </section>
    </Motion.main>
  );
}

export default Careers;
