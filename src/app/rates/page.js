import { baseOpenGraph } from "@/lib/metadata";
import { Eyebrow, PageHero, Prose } from "@/components/Section";
import { BOOKING_URL, INSURANCE, PHONE, PHONE_HREF } from "@/lib/site";

export const metadata = {
  title: "Rates & Insurance | Therapy With Purpose, Glendale AZ",
  description:
    "Therapy With Purpose accepts AHCCCS, Medicaid and major insurance plans, with transparent self-pay rates for therapy and psychiatric services in Glendale, Arizona.",
  openGraph: {
    ...baseOpenGraph,
    title: "Rates & Insurance | Therapy With Purpose",
    description:
      "AHCCCS and major insurance accepted, plus clear self-pay pricing for therapy, psychiatry and intensive programs.",
  },
};

const rates = [
  {
    title: "Initial intake assessment",
    price: "$150",
    body: "A 60-minute evaluation to understand your history, current concerns and treatment goals.",
  },
  {
    title: "Individual therapy session",
    price: "$120",
    body: "A standard 50-minute session with a licensed therapist, in person or by telehealth.",
  },
  {
    title: "Couples or family session",
    price: "$140",
    body: "A 50-minute session with partners or family members participating together.",
  },
  {
    title: "Psychiatric evaluation",
    price: "$250",
    body: "A comprehensive assessment with a psychiatric nurse practitioner, including a treatment plan.",
  },
  {
    title: "Medication management follow-up",
    price: "$110",
    body: "An ongoing appointment to review medication response, side effects and adjustments.",
  },
  {
    title: "Intensive outpatient program",
    price: "Contact us",
    body: "Program pricing depends on level of care and length of stay; most plans cover IOP services.",
  },
];

export default function Rates() {
  return (
    <>
      <PageHero
        eyebrow="Rates & insurance"
        title="Clear costs, before your first session"
        intro="We believe quality mental health care should be accessible and affordable. Our team helps you understand your benefits, coverage options and financial responsibilities before treatment begins."
      />
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Eyebrow>Insurance accepted</Eyebrow>
        <h2 className="text-3xl sm:text-4xl">AHCCCS and major plans</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {INSURANCE.map((name) => (
            <span key={name} className="rounded-full bg-card px-5 py-2.5 text-sm text-ink ring-1 ring-border">
              {name}
            </span>
          ))}
        </div>
        <Prose>
          <p className="mt-8">
            Coverage varies by plan. Call {PHONE} and our team will verify your benefits, explain
            any copay or deductible, and confirm which services are covered before you schedule.
          </p>
        </Prose>
      </section>
      <section className="border-y border-border bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Eyebrow>Self-pay rates</Eyebrow>
          <h2 className="mb-10 max-w-[24ch] text-3xl text-balance sm:text-4xl">
            Transparent pricing without insurance
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rates.map((r) => (
              <article key={r.title} className="flex flex-col rounded-2xl bg-card p-7 shadow-soft ring-1 ring-border">
                <span className="brand-text font-display text-3xl font-semibold">{r.price}</span>
                <h3 className="mt-3 font-display text-lg">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{r.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-[62ch] text-sm text-muted-foreground">
            Rates are guidelines and may vary by provider and service length. Sliding-scale options
            may be available — ask our team about financial assistance.
          </p>
        </div>
      </section>
      <section className="mx-auto flex max-w-6xl flex-wrap gap-4 px-5 py-16 sm:px-8">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-violet-deep"
        >
          Request an appointment
        </a>
        <a
          href={PHONE_HREF}
          className="rounded-full bg-card px-6 py-3.5 text-sm font-medium text-ink ring-1 ring-border transition-colors hover:bg-cream-deep"
        >
          Verify my benefits — {PHONE}
        </a>
      </section>
    </>
  );
}
