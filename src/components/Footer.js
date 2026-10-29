import Link from "next/link";
import Year from "@/components/Year";
import { BOOKING_URL, CITIES, LOGO, NAV, PHONE, PHONE_HREF } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-cream-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={LOGO}
              alt="Therapy With Purpose logo"
              width={200}
              height={132}
              loading="lazy"
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
              Compassionate, evidence-based mental health care for children, adolescents, adults,
              couples and families across Glendale and the greater Phoenix valley.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-violet px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-violet-deep"
            >
              Request an appointment
            </a>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-deep">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link href={item.to} className="transition-colors hover:text-violet">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-deep">
              Contact
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Glendale, Arizona
              <br />
              In-person &amp; HIPAA-compliant telehealth statewide
            </p>
            <a
              href={PHONE_HREF}
              className="mt-3 inline-block font-display text-xl text-violet transition-colors hover:text-violet-deep"
            >
              {PHONE}
            </a>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Serving {CITIES.join(", ")} and surrounding Arizona communities.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>
            © <Year /> Therapy With Purpose. All rights reserved.
          </span>
          <span>In a crisis? Call or text 988 for the Suicide &amp; Crisis Lifeline, or dial 911.</span>
        </div>
      </div>
    </footer>
  );
}
