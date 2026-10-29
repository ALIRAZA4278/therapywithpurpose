import { baseOpenGraph } from "@/lib/metadata";
import { Eyebrow, PageHero } from "@/components/Section";
import { BOOKING_URL } from "@/lib/site";

export const metadata = {
  title: "Therapy & Psychiatry Services in Glendale AZ | Therapy With Purpose",
  description:
    "Individual, family and couples therapy, child and adolescent counseling, psychiatry, medication management, behavior coaching, case management, DBT and IOP programs in Glendale, AZ.",
  openGraph: {
    ...baseOpenGraph,
    title: "Services | Therapy With Purpose",
    description:
      "A full continuum of behavioral health care — therapy, psychiatry, coaching and intensive outpatient programs across Arizona.",
  },
};

const core = [
  {
    title: "Individual Therapy",
    body: "One-on-one counseling for children, adolescents and adults dealing with anxiety, depression, trauma, stress, grief, mood disorders and life transitions. Sessions are tailored to your goals and paced to your comfort.",
  },
  {
    title: "Family Therapy",
    body: "Support for families working through conflict, communication breakdowns, parenting challenges and major transitions, building a healthier and more connected home environment.",
  },
  {
    title: "Couples & Marriage Counseling",
    body: "A neutral, supportive space for partners to rebuild trust, improve communication, resolve recurring conflict and strengthen their relationship.",
  },
  {
    title: "Child & Adolescent Counseling",
    body: "Developmentally appropriate therapy for younger clients facing emotional, behavioral, school-related and social challenges, with the family involved throughout.",
  },
  {
    title: "Psychiatric Services & Medication Management",
    body: "Comprehensive psychiatric evaluations, diagnosis and ongoing medication management delivered by experienced psychiatric nurse practitioners in coordination with your therapist.",
  },
  {
    title: "Behavior Coaching",
    body: "Hands-on skill-building that helps clients apply coping strategies, routines and emotional regulation tools in everyday life between sessions.",
  },
  {
    title: "Case Management",
    body: "Help navigating benefits, community resources, school systems and long-term supports so care continues outside the therapy room.",
  },
];

const programs = [
  {
    title: "Adolescent DBT Intensive Outpatient Program",
    body: "A structured, skills-based program for teens who need more support than weekly therapy. Dialectical behavior therapy builds distress tolerance, emotional regulation, mindfulness and interpersonal effectiveness — with family participation.",
  },
  {
    title: "Adult Intensive Outpatient Program",
    body: "A higher level of care for adults managing significant anxiety, depression, trauma responses or life instability. Group and individual sessions provide structure while clients continue working and living at home.",
  },
  {
    title: "Telehealth Across Arizona",
    body: "Secure, HIPAA-compliant virtual therapy and psychiatric appointments, so distance, transportation or a demanding schedule never has to interrupt your care.",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A full continuum of behavioral health care"
        intro="Therapy With Purpose provides therapy, psychiatric services, coaching and intensive outpatient programs for children, adolescents, adults, couples and families — all coordinated under one organization."
      />
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Eyebrow>Core services</Eyebrow>
        <h2 className="mb-10 max-w-[24ch] text-3xl text-balance sm:text-4xl">
          Care matched to where you are right now
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {core.map((s) => (
            <article key={s.title} className="rounded-2xl bg-card p-7 shadow-soft ring-1 ring-border">
              <div className="brand-rule mb-5 h-1 w-12 rounded-full" />
              <h3 className="font-display text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{s.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Eyebrow>Specialized programs</Eyebrow>
          <h2 className="mb-10 max-w-[24ch] text-3xl text-balance sm:text-4xl">
            When weekly therapy isn&apos;t quite enough
          </h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {programs.map((p) => (
              <article key={p.title} className="rounded-2xl bg-card p-7 shadow-soft ring-1 ring-border">
                <h3 className="font-display text-lg">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-violet-deep"
        >
          Request an appointment
        </a>
      </section>
    </>
  );
}
