import React, { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Workflow,
} from "lucide-react";
import { servicesDetails } from "../data/services";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggered = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = useMemo(
    () => servicesDetails[serviceId ?? ""],
    [serviceId],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceId]);

  useEffect(() => {
    if (!service) {
      const timeout = window.setTimeout(() => navigate("/"), 2500);
      return () => window.clearTimeout(timeout);
    }
    return undefined;
  }, [service, navigate]);

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md text-center space-y-6"
        >
          <Sparkles className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="text-3xl font-semibold">We could not find that service.</h1>
          <p className="text-white/70">
            Let us guide you back to the studio while we tidy up the service list.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
          >
            <ArrowLeft className="h-4 w-4" /> Return to home
          </Link>
        </Motion.div>
      </main>
    );
  }

  const accentGradient = service.theme?.gradient ?? "from-indigo-500 via-purple-500 to-slate-900";
  const accentText = service.theme?.accent ?? "text-indigo-200";
  const accentGlow = service.theme?.glow ?? "bg-indigo-500/20";

  const otherServices = useMemo(() => {
    if (!service) return [];
    return Object.values(servicesDetails)
      .filter((entry) => entry.slug !== service.slug)
      .map((entry) => ({ slug: entry.slug, title: entry.eyebrow, icon: entry.icon }));
  }, [service]);

  return (
    <Motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeIn" } }}
      className="relative min-h-screen bg-slate-950 text-white"
    >
      <section className="relative overflow-hidden pt-28 pb-20">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-90`}
        />
        <div className="absolute inset-0">
          <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Fluxxion Studio
            </Link>
            <span className={`inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] ${accentText}`}>
              {service.icon} {service.eyebrow}
            </span>
          </div>

          <Motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              {service.headline}
            </h1>
            <p className="text-lg text-white/80">{service.description}</p>
          </Motion.div>

          {service.metrics && service.metrics.length > 0 && (
            <Motion.div
              variants={staggered}
              initial="hidden"
              animate="visible"
              className="grid gap-4 sm:grid-cols-3"
            >
              {service.metrics.map((metric) => (
                <Motion.div
                  key={metric.label}
                  variants={fadeInUp}
                  className={`rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur ${accentText}`}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                </Motion.div>
              ))}
            </Motion.div>
          )}
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-20">
          <Motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-2xl"
          >
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-white">Overview</h2>
                <p className="text-lg leading-relaxed text-white/75">
                  {service.overview}
                </p>
                {service.highlights && (
                  <ul className="space-y-3 text-sm text-white/70">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 flex-shrink-0 ${accentText}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Motion.div
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-6 text-center ${accentText}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
              >
                <div className={`absolute inset-0 ${accentGlow}`} />
                <div className="relative z-10 space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black/30 text-3xl">
                    {service.icon}
                  </div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                    The Fluxxion Approach
                  </p>
                  <p className="text-lg text-white/80">
                    We co-create alongside your team, pairing motion with measurable outcomes every step of the way.
                  </p>
                </div>
              </Motion.div>
            </div>
          </Motion.section>

          {service.tools && service.tools.length > 0 && (
            <Motion.section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-10"
            >
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-semibold text-white">Tools we lean on</h2>
                <p className="max-w-2xl text-white/70">
                  Every stack is chosen for velocity, observability, and long-term maintainability. Here is what typically powers this service.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                {service.tools.map((group) => (
                  <Motion.div
                    key={group.title}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
                  >
                    <h3 className={`text-lg font-semibold text-white ${accentText}`}>
                      {group.title}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/70">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Motion.div>
                ))}
              </div>
            </Motion.section>
          )}

          {service.workflow && service.workflow.length > 0 && (
            <Motion.section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.32em] text-white/60">
                <Workflow className="h-4 w-4" />
                Our workflow
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                {service.workflow.map((step, index) => (
                  <Motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur"
                  >
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold ${accentText}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {step.description}
                    </p>
                  </Motion.div>
                ))}
              </div>
            </Motion.section>
          )}

          {service.deliverables && service.deliverables.length > 0 && (
            <Motion.section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
            >
              <h2 className="text-3xl font-semibold text-white">What you take away</h2>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/75"
                  >
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 flex-shrink-0 ${accentText}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Motion.section>
          )}

          {otherServices.length > 0 && (
            <Motion.section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-white">Explore more from Fluxxion</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {otherServices.map((entry) => (
                  <Motion.div
                    key={entry.slug}
                    whileHover={{ x: 6 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition"
                  >
                    <Link
                      to={`/services/${entry.slug}`}
                      className="flex items-center justify-between gap-4 text-white/80 transition hover:text-white"
                    >
                      <span className="flex items-center gap-3 text-base font-semibold">
                        <span className="text-xl">{entry.icon}</span>
                        {entry.title}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Motion.div>
                ))}
              </div>
            </Motion.section>
          )}
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${accentGradient} p-10 text-center shadow-2xl`}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 space-y-6">
              <span className={`inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] ${accentText}`}>
                <Sparkles className="h-4 w-4" /> Ready when you are
              </span>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Let&apos;s build something together
              </h2>
              <p className="text-base text-white/80">
                Share your roadmap and we will assemble a squad that fits your timelines, tooling, and motion goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
                >
                  Browse capabilities
                </Link>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>
    </Motion.main>
  );
}

export default ServiceDetail;
