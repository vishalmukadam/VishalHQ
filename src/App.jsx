import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import FadeInSection from './components/FadeInSection';
import SectionHeader from './components/SectionHeader';

const curriculum = [
  'Day 1: Domain & Hosting Setup',
  'Day 2: Website Structure & Layout',
  'Day 3: Design & Branding',
  'Day 4: Pages & Content',
  'Day 5: Forms & Integrations',
  'Day 6: Optimization & Speed',
  'Day 7: Launch & Certification'
];

const outcomes = ['Business Website', 'Personal Portfolio', 'Blog', 'Lead Generation Landing Page'];

const faqs = [
  {
    question: 'Do I need coding experience?',
    answer: 'No. This program is designed for complete beginners with a step-by-step, no-jargon approach.'
  },
  {
    question: 'Is this live training?',
    answer: 'Yes. Every session is delivered live, with practical guidance and Q&A support.'
  },
  {
    question: 'Will I get recording access?',
    answer: 'Yes. Session recordings are provided so you can revise and catch up anytime.'
  },
  {
    question: 'Is this beginner friendly?',
    answer: 'Absolutely. We focus on practical outcomes and guided implementation in every session.'
  }
];

const testimonials = [
  {
    name: 'Riya Sharma',
    feedback:
      'I launched my freelance portfolio within one week. The live support made everything easy to follow.',
    rating: 5
  },
  {
    name: 'Aman Verma',
    feedback:
      'I had zero technical background. By Day 7, I had my business website running and getting leads.',
    rating: 5
  },
  {
    name: 'Neha Gupta',
    feedback:
      'Clear teaching, practical assignments, and strong motivation. The certificate helped build my confidence.',
    rating: 5
  }
];

const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '', goal: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const stars = useMemo(() => '★★★★★', []);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Name is required';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email';
    }

    if (!formData.goal.trim()) {
      nextErrors.goal = 'Please tell us your goal';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', goal: '' });
    setErrors({});
  };

  return (
    <div className="text-slate-900">
      <header className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 text-white">
        <div className="section-container relative z-10 py-20 sm:py-24">
          <p className="mb-3 inline-flex rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">VishalHQ Academy</p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Build Your First Website in Just 7 Days
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-blue-100 sm:text-xl">
            Hands-on live training where you walk away with a fully functional website.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#pricing" className="rounded-lg bg-white px-6 py-3 font-semibold text-brand-700 shadow-soft transition hover:-translate-y-0.5">
              Join the Next Cohort
            </a>
            <a href="#curriculum" className="rounded-lg border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              View Curriculum
            </a>
          </div>
        </div>
      </header>

      <main>
        <FadeInSection className="section-container" delay={0.05}>
          <SectionHeader
            eyebrow="About Vishal"
            title="Practical mentorship from a website growth expert"
            description="Vishal has trained aspiring creators, students, and professionals to launch websites that drive visibility and business results. Every class is focused on implementation, not theory."
          />
        </FadeInSection>

        <FadeInSection className="section-container pt-4" delay={0.08}>
          <div id="curriculum" className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-100 sm:p-10">
            <SectionHeader
              eyebrow="7-Day Curriculum"
              title="A daily roadmap that takes you from zero to launched"
            />
            <div className="grid gap-4 md:grid-cols-2">
              {curriculum.map((day) => (
                <div key={day} className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-medium text-slate-700">
                  {day}
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection className="section-container" delay={0.1}>
          <SectionHeader eyebrow="What You'll Build" title="Projects you can publish immediately" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-brand-700">{item}</h3>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="section-container" delay={0.12}>
          <div className="grid gap-8 rounded-2xl bg-brand-50 p-8 ring-1 ring-brand-100 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold">Certification Included</h2>
              <p className="mt-4 text-slate-700">
                Receive a certificate of completion from VishalHQ Academy after successfully launching your website and completing final submission tasks.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-200 bg-white p-8 text-center shadow-md">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Certificate Preview</p>
              <p className="mt-4 text-2xl font-bold">VishalHQ Academy</p>
              <p className="mt-2 text-slate-600">Website Building Cohort Completion</p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection className="section-container" delay={0.14}>
          <SectionHeader
            eyebrow="Success Stories"
            title="Learners who built and launched with confidence"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100">
                <p className="text-amber-500">{stars.slice(0, testimonial.rating)}</p>
                <p className="mt-3 text-slate-700">“{testimonial.feedback}”</p>
                <p className="mt-4 font-semibold text-slate-900">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="section-container" delay={0.16}>
          <div id="pricing" className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
            <SectionHeader
              eyebrow="Pricing"
              title="Invest in a skill that pays you back"
              description="Limited seats for personalized support. Reserve your spot in the next cohort now."
            />
            <div className="mx-auto max-w-xl rounded-2xl bg-white/10 p-8 text-center backdrop-blur">
              <p className="text-sm uppercase tracking-wide text-blue-100">Course Fee</p>
              <p className="mt-3 text-4xl font-extrabold">₹4,999</p>
              <p className="mt-2 text-blue-100">Early bird slots available • Easy payment plans</p>
              <a href="#contact" className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-brand-700 transition hover:-translate-y-0.5">
                Enroll Now
              </a>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection className="section-container" delay={0.18}>
          <SectionHeader eyebrow="FAQ" title="Everything you need to know before joining" />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="section-container" delay={0.2}>
          <div id="contact" className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-100">
            <SectionHeader
              eyebrow="Contact"
              title="Join the next cohort"
              description="Share your details and we will contact you with schedule, enrollment steps, and bonuses."
            />
            <form onSubmit={handleSubmit} noValidate className="mx-auto grid max-w-3xl gap-4">
              <label className="text-sm font-medium text-slate-700" htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}

              <label className="text-sm font-medium text-slate-700" htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}

              <label className="text-sm font-medium text-slate-700" htmlFor="goal">Your Goal</label>
              <textarea
                id="goal"
                value={formData.goal}
                onChange={(event) => setFormData((prev) => ({ ...prev, goal: event.target.value }))}
                className="min-h-28 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
                placeholder="Tell us what you want to build"
              />
              {errors.goal && <p className="text-sm text-red-600">{errors.goal}</p>}

              <button
                type="submit"
                className="mt-2 rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
              >
                Submit & Reserve Seat
              </button>
              {submitted && <p className="text-sm font-medium text-emerald-600">Thanks! We will reach out to you shortly.</p>}
            </form>
          </div>
        </FadeInSection>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-slate-950 py-14 text-center text-white"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">Your website journey starts now.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Stop waiting for the perfect time—join the next cohort and launch your website in 7 focused days.
        </p>
        <a
          href="#pricing"
          className="mt-8 inline-block rounded-lg bg-brand-500 px-8 py-3 text-lg font-semibold transition hover:bg-brand-600"
        >
          Enroll in VishalHQ Academy
        </a>
      </motion.footer>
    </div>
  );
};

export default App;
