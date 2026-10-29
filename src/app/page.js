import { baseOpenGraph } from "@/lib/metadata";
import Link from "next/link";
import { Eyebrow, Prose } from "@/components/Section";
import { BOOKING_URL, CITIES, INSURANCE, PHONE, PHONE_HREF } from "@/lib/site";

export const metadata = {
  title: "Mental Health Services Glendale AZ | Therapy With Purpose",
  description:
    "Therapy With Purpose offers therapy, counseling, psychiatry and medication management in Glendale, AZ for children, teens, adults, couples and families. AHCCCS accepted.",
  openGraph: {
    ...baseOpenGraph,
    title: "Mental Health Services Glendale AZ | Therapy With Purpose",
    description:
      "Compassionate, evidence-based therapy, psychiatry and behavioral health care in Glendale, Arizona. In-person and telehealth appointments.",
  },
};

const services = [
  {
    title: "Individual Therapy",
    body: "One-on-one sessions for children, teens and adults, focused on your goals and your pace.",
  },
  {
    title: "Family Therapy",
    body: "Improve communication, resolve conflict and build a healthier, more supportive home.",
  },
  {
    title: "Couples & Marriage Counseling",
    body: "A supportive space for partners to rebuild trust, communication and connection.",
  },
  {
    title: "Child & Adolescent Counseling",
    body: "Developmentally appropriate care for younger clients and the families around them.",
  },
  {
    title: "Psychiatry & Medication Management",
    body: "Psychiatric evaluations and ongoing medication management by experienced PMHNPs.",
  },
  {
    title: "Behavior Coaching & Case Management",
    body: "Practical skill-building and community resource support between therapy sessions.",
  },
  {
    title: "DBT & Intensive Outpatient Programs",
    body: "Adolescent DBT IOP and Adult IOP for clients who need a higher level of structure.",
  },
];

const conditions = [
  {
    title: "Anxiety",
    body: "Evidence-based strategies to quiet racing thoughts and regain a sense of control.",
    image: "/images/cond-anxiety.jpg",
  },
  {
    title: "Depression",
    body: "Support for persistent sadness, low motivation and loss of interest in daily life.",
    image: "/images/cond-depression.jpg",
  },
  {
    title: "Trauma & PTSD",
    body: "Safe, trauma-informed care that moves at a pace you set, never faster.",
    image: "/images/cond-trauma.jpg",
  },
  {
    title: "Grief & Loss",
    body: "Compassionate companionship through loss, transition and the seasons that follow.",
    image: "/images/cond-grief.jpg",
  },
  {
    title: "Relationship Difficulties",
    body: "Repair communication patterns and rebuild healthier connections with the people who matter.",
    image: "/images/cond-relationships.jpg",
  },
  {
    title: "Stress & Emotional Regulation",
    body: "Mindfulness, coping skills and regulation tools for burnout and daily overwhelm.",
    image: "/images/cond-mindfulness.jpg",
  },
];

const steps = [
  {
    step: "01",
    title: "Consultation",
    body: "Talk through your concerns with a licensed clinician, explore treatment options and map a path forward.",
  },
  {
    step: "02",
    title: "Appointment",
    body: "Schedule in our Glendale office or by secure telehealth, at a time that fits your life.",
  },
  {
    step: "03",
    title: "Support",
    body: "Ongoing, non-judgmental care from a coordinated team of therapists, psychiatric providers and coaches.",
  },
  {
    step: "04",
    title: "Results",
    body: "Build resilience, strengthen relationships and carry lasting skills beyond the therapy room.",
  },
];

const faqs = [
  {
    q: "Do you accept AHCCCS?",
    a: "Yes. We proudly accept AHCCCS and several Medicaid-managed insurance plans.",
  },
  {
    q: "Do you offer virtual therapy?",
    a: "Yes. We provide secure, HIPAA-compliant telehealth services throughout Arizona.",
  },
  {
    q: "What ages do you treat?",
    a: "We provide mental health services for children, adolescents, adults, couples and families.",
  },
  {
    q: "Do you offer medication management?",
    a: "Yes. Our psychiatric providers offer psychiatric evaluations and medication management.",
  },
  {
    q: "How do I schedule an appointment?",
    a: `Call ${PHONE} or request an appointment online to get started.`,
  },
];

export default function Home() {
  return (
    <>
      <section className="aurora border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="mb-5 inline-flex rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep ring-1 ring-border">
              Now accepting new clients in Glendale, AZ
            </p>
            <h1 className="max-w-[18ch] text-[2.7rem] leading-[1.04] text-balance sm:text-6xl">
              Purposeful therapy for every stage of life
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted-foreground text-pretty">
              Therapy With Purpose provides comprehensive mental health services in Glendale,
              Arizona — helping children, adolescents, adults, couples and families improve
              emotional well-being and overall quality of life.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-violet-deep"
              >
                Schedule your session
              </a>
              <a
                href={PHONE_HREF}
                className="rounded-full bg-card px-6 py-3.5 text-sm font-medium text-ink ring-1 ring-border transition-colors hover:bg-cream-deep"
              >
                Call {PHONE}
              </a>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
              <div>
                <dt className="font-medium text-ink">AHCCCS accepted</dt>
                <dd>Plus Medicaid, BCBS, Aetna &amp; Cigna</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Telehealth statewide</dt>
                <dd>Secure, HIPAA-compliant sessions</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">All ages</dt>
                <dd>Children through adults</dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-5">
            <img
              src="/images/hero-office.jpg"
              alt="Calm therapy office with two armchairs and soft daylight"
              width={1024}
              height={1280}
              fetchPriority="high"
              className="aspect-4/5 w-full rounded-3xl object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Our purpose</Eyebrow>
            <div className="brand-rule h-1 w-16 rounded-full" />
          </div>
          <div className="md:col-span-8">
            <p className="max-w-[26ch] font-display text-2xl leading-snug text-balance sm:text-3xl">
              To foster restoration and wholeness for individuals, families and communities.
            </p>
            <Prose>
              <p className="mt-6">
                We empower personal growth, strengthen relationships and enhance overall well-being.
                Whether you are struggling with anxiety, depression, trauma, PTSD, ADHD, stress,
                grief, relationship challenges, mood disorders or major life transitions, our
                experienced team helps you build the skills, resilience and confidence needed for
                lasting emotional wellness.
              </p>
              <p>
                Our vision is to strengthen communities by increasing access to quality behavioral
                healthcare and supporting emotional wellness across every stage of life.
              </p>
            </Prose>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Comprehensive care</Eyebrow>
              <h2 className="max-w-[20ch] text-3xl text-balance sm:text-4xl">
                Therapy, psychiatry and behavioral health under one roof
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-medium text-violet transition-colors hover:text-violet-deep"
            >
              View all services
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border">
                <h3 className="font-display text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Eyebrow>What we treat</Eyebrow>
        <h2 className="mb-10 max-w-[26ch] text-3xl text-balance sm:text-4xl">
          Overcome the fears and obstacles in your life
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-border">
              <img
                src={c.image}
                alt=""
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-lg">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Eyebrow>Our process</Eyebrow>
          <h2 className="mb-12 max-w-[24ch] text-3xl text-balance sm:text-4xl">
            Four steps from first call to lasting change
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step}>
                <span className="brand-text font-display text-4xl font-semibold">{s.step}</span>
                <h3 className="mt-3 font-display text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Eyebrow>We accept</Eyebrow>
        <h2 className="text-3xl sm:text-4xl">Insurance &amp; AHCCCS</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {INSURANCE.map((name) => (
            <span key={name} className="rounded-full bg-card px-5 py-2.5 text-sm text-ink ring-1 ring-border">
              {name}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-[60ch] text-sm text-muted-foreground">
          Our team helps you understand your benefits, coverage options and financial
          responsibilities before your first session.{" "}
          <Link href="/rates" className="text-violet underline-offset-4 hover:underline">
            See rates and insurance details
          </Link>
          .
        </p>
      </section>

      <section className="border-y border-border bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Eyebrow>Where we serve</Eyebrow>
          <h2 className="max-w-[24ch] text-3xl text-balance sm:text-4xl">
            Serving Glendale and the greater Phoenix valley
          </h2>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted-foreground text-pretty">
            Whether you are searching for a therapist near you, virtual counseling in Arizona, or a
            trusted mental health clinic, Therapy With Purpose is here to support your journey toward
            healing, growth and lasting wellness.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {CITIES.map((city) => (
              <span key={city} className="rounded-full bg-teal-soft px-4 py-2 text-sm text-teal-deep">
                {city}, AZ
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Eyebrow>Frequently asked questions</Eyebrow>
        <h2 className="mb-10 max-w-[24ch] text-3xl text-balance sm:text-4xl">
          Answers before your first appointment
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border">
              <h3 className="font-display text-lg">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="aurora border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="max-w-[22ch] text-3xl text-balance sm:text-4xl">Start when you&apos;re ready.</h2>
            <p className="mt-3 max-w-[46ch] text-muted-foreground">
              Call {PHONE} or request an appointment online — in-person in Glendale or by
              telehealth anywhere in Arizona.
            </p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-violet px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-violet-deep"
          >
            Request an appointment
          </a>
        </div>
      </section>
    </>
  );
}
