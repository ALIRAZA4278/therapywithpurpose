import { baseOpenGraph } from "@/lib/metadata";
import { Eyebrow, PageHero, Prose } from "@/components/Section";
import { BOOKING_URL } from "@/lib/site";

export const metadata = {
  title: "About Therapy With Purpose | Behavioral Health in Arizona",
  description:
    "Learn about Therapy With Purpose — a client-centered, trauma-informed behavioral health provider serving Glendale, Phoenix, Peoria, Surprise and nearby Arizona communities.",
  openGraph: {
    ...baseOpenGraph,
    title: "About Therapy With Purpose",
    description:
      "Compassionate, high-quality and accessible mental health care for individuals and families throughout Arizona.",
  },
};

const pillars = [
  {
    title: "Our mission",
    body: "To empower individuals and families by providing effective treatment, education and resources that promote mental wellness and resilience.",
  },
  {
    title: "Our vision",
    body: "To strengthen communities by increasing access to quality behavioral healthcare and supporting emotional wellness across all stages of life.",
  },
  {
    title: "Our approach",
    body: "Client-centered care, trauma-informed therapy and evidence-based treatment, personalized to each client's needs and goals.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Compassionate care, close to home"
        intro="At Therapy With Purpose, our goal is to provide compassionate, high-quality and accessible mental health care to individuals and families throughout Arizona. Every person deserves professional support in a safe, welcoming and respectful environment where healing and personal growth can thrive."
      />
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>What guides us</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <Prose>
              <p>
                As a behavioral health provider in Arizona, we are dedicated to helping individuals
                improve emotional well-being, strengthen relationships and achieve meaningful,
                lasting change. Our approach is grounded in client-centered care, trauma-informed
                therapy and evidence-based treatment practices, ensuring every client receives
                personalized support based on their unique needs and goals.
              </p>
              <p>
                As a trusted community mental health provider, we offer a full continuum of care,
                including therapy, psychiatric services, medication management, behavior coaching,
                case management and intensive outpatient programs. Through our integrated care
                model, clients access multiple levels of support under one organization, resulting
                in coordinated and comprehensive treatment.
              </p>
              <p>
                Our team of licensed therapists, counselors, psychiatric providers and behavioral
                health professionals is committed to delivering compassionate, strengths-based care.
                We strive to create an environment where individuals and families feel supported,
                empowered and equipped to overcome challenges while building healthier, more
                fulfilling lives.
              </p>
              <p>
                Therapy With Purpose is proud to serve as a trusted counseling center for
                individuals and families throughout Glendale, Phoenix, Peoria, Surprise and
                neighboring Arizona communities.
              </p>
            </Prose>
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-cream-deep">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="rounded-2xl bg-card p-7 shadow-soft ring-1 ring-border">
              <div className="brand-rule mb-5 h-1 w-12 rounded-full" />
              <h2 className="font-display text-xl">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{p.body}</p>
            </article>
          ))}
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
