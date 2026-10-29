import { baseOpenGraph } from "@/lib/metadata";
import { Eyebrow, PageHero, Prose } from "@/components/Section";
import { BOOKING_URL } from "@/lib/site";

export const metadata = {
  title: "Mental Health Team Glendale AZ | Therapy With Purpose",
  description:
    "Meet the Therapy With Purpose team: licensed clinical social workers, professional counselors, and behavioral health professionals serving Arizona and California.",
  openGraph: {
    ...baseOpenGraph,
    title: "Meet the Therapy With Purpose Team",
    description:
      "Our dedicated therapists bring compassionate, eclectic approaches to help you discover your purpose and achieve personal growth.",
  },
};

const arizona = [
  {
    name: "Brianna Marshall",
    credentials: "LCSW, MBA",
    role: "Owner & Therapist",
    school: "University of Southern California",
    tags: ["Values: Empathy, Purpose, Care"],
    bio: [
      "We all have a Purpose and a story to tell. Your experiences in life are unique to you and even through life's experiences you still have purpose. It's within your story, you can discover your purpose and achieve self-fulfillment.",
      "I embrace a warm, transparent and interactive style of therapy with the intent to support you, tell your story using an eclectic therapeutic approach with modalities such as CBT, DBT, Trauma Informed, Strength based, Solution Focused and grief and loss. So, what's your story?",
    ],
    img: "/images/team-brianna.jpg",
    alt: "Brianna Marshall, LCSW, MBA — Owner and Therapist at Therapy With Purpose",
  },
  {
    name: "Grysell",
    credentials: "LMSW",
    role: "Therapist",
    school: "Arizona State University",
    tags: ["Hablo Español"],
    bio: [
      "“Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that” — Martin Luther King, Jr.",
      "After spending the majority of my career in mortgage and real estate, I became deeply involved with mental health agencies through volunteering. This experience highlighted the significant and transformative impact therapy can have on individuals' lives and the positive influence on family dynamics and personal connections. Most recently, I have worked with a crisis team, providing immediate support to victims and their families during acute trauma and grief.",
      "As a Muslim Latina, I embody the essence of diversity and value the views of one's perspective. Whether you're navigating the complexities of family dynamics, struggling with issues of identity, or seeking support for mental health concerns, I bring a culturally sensitive approach that honors your background and values. Above all, my goal is to create a safe space where you can feel supported and empower you to navigate life's challenges with resilience, confidence, and a sense of purpose.",
    ],
    img: "/images/team-grysell.jpg",
    alt: "Grysell, LMSW — Therapist at Therapy With Purpose",
  },
  {
    name: "Mya FullyLove",
    credentials: "LAC",
    role: "Therapist",
    school: "Grand Canyon University",
    tags: ["LGBTQIA+ affirming", "BIPOC", "Veterans"],
    bio: [
      "Mya loves working with clients from various backgrounds! Being a woman of color, who is a part of the LGBTQIA+ community, she takes pride in making sure her clients feel seen, heard, and supported in meeting their goals.",
      "Mya has experience helping clients with anxiety, depression, anger management, improving communication skills, improving self-esteem/self-image, implementing healthy boundaries, PTSD, substance use/addiction trauma, and helping adolescents with sexually maladaptive behaviors and life transitions. She enjoys working with veterans, LGBTQIA+, BIPOC, aging, young adults, and transition aged youth — however she is open to supporting all clients as they navigate and discover their purpose and accomplish their goals.",
    ],
    img: "/images/team-mya.jpg",
    alt: "Mya FullyLove, LAC — Therapist at Therapy With Purpose",
  },
  {
    name: "Barbara Ventura",
    credentials: "LPC",
    role: "Therapist",
    school: "Grand Canyon University",
    bio: [
      "Hello, I'm Barbara Ventura, a Licensed Professional Counselor with nearly 10 years of experience working with various age groups and mental health challenges. I hold a master's degree from Grand Canyon University and have worked in acute mental health settings, intensive outpatient programs, and as a Clinical Director.",
      "I believe in your ability to overcome challenges and am proud of you for taking the courageous step to start therapy. Let's work together to uncover your strengths and write your story of growth and healing.",
    ],
    img: "/images/team-barbara.png",
    alt: "Barbara Ventura, LPC — Therapist at Therapy With Purpose",
  },
  {
    name: "RaKeia McNeill",
    credentials: "MA, LACT",
    role: "Therapist",
    school: "University of Oklahoma",
    bio: [
      "I have been in the behavioral and mental health field for over 15 years. My career has led me to work in a variety of diverse backgrounds in the helping professional field. I specialize in Depression, Anxiety, Self Esteem, Stress management, Substance Abuse, and teaching IOP (Intensive Outpatient Groups). I am very passionate about working and helping individuals find the right path in order to obtain healthy goals.",
      "In my free time, I enjoy traveling, spending time with friends and family, relaxing, hiking, reading, and shopping.",
    ],
    img: "/images/team-rakeia.jpg",
    alt: "RaKeia McNeill, MA, LACT — Therapist at Therapy With Purpose",
  },
  {
    name: "Regina McManigell Grijalva",
    credentials: "PhD",
    role: "Therapist",
    tags: ["Expressive arts", "Biblio/poetry therapy", "Mindfulness", "Trauma"],
    bio: [
      "Pursuing healing and wellness through the arts, learning, and self-development continues to define my life. My desire to understand myself and the world better led me to healing through a relationship with God. It moved me to overcome a difficult childhood and adolescence. I began with earning a GED as a single parent, and then pursued degrees in several programs, earning several degrees in the field of English: BA, MA, and PhD.",
      "As a college professor, I helped others find their path to fulfillment while serving them through writing and expressive arts. Over the years, poetry and art have brought me together with people I love and cherish who are either engaged in the arts as artists themselves or who are supportive of the arts. I left academia to continue healing myself and others with the pursuit and completion of a degree in counseling that focused on trauma and how the arts heal us from its impact.",
      "Today I enjoy caring for others and myself with many modalities of healing. I continue to train in therapies using the arts, biblio/poetry, conversation/talk, and mindfulness training to facilitate healing the mind, body, and spirit.",
    ],
    img: "/images/team-regina.jpg",
    alt: "Regina McManigell Grijalva, PhD — Therapist at Therapy With Purpose",
  },
  {
    name: "Brooklyn Sgroi",
    role: "Therapist",
    tags: ["Ages 6+", "Teens & young adults"],
    bio: [
      "Brooklyn believes you shouldn’t have to figure everything out on your own. She works with individuals aged 6+ experiencing anxiety, depression, self-esteem concerns, relationship challenges, or simply feeling stuck in life. Brooklyn especially enjoys working with teenagers and young adults as they navigate the challenges and transitions of growing into adulthood, while welcoming and supporting clients of all ages and backgrounds.",
      "She strives to create a comfortable, judgment-free space where clients can be themselves, feel heard, and openly work through their challenges. Brooklyn’s goal is to meet each client where they are and support them in building confidence, developing healthy coping skills, and creating meaningful change. Outside of therapy, Brooklyn enjoys spending time at home with her two dogs and three cats, playing video games, and enjoying the little things that make life meaningful.",
    ],
    img: "/images/team-brooklyn.jpg",
    alt: "Brooklyn Sgroi — Therapist at Therapy With Purpose",
  },
  {
    name: "Niki Lopez",
    role: "Office Manager",
    school: "Arizona State University",
    tags: ["Hablo Español"],
    bio: [
      "Hi, I’m Niki, the Office Manager for Therapy with Purpose. I earned my Bachelor’s degree in social work from Arizona State University and am currently pursuing my Master’s degree in Social Work on track to graduate in May of 2027.",
      "As an Office Manager, I’m passionate about creating an environment where both staff and clients feel supported, welcomed, and valued. My background in social work allows me to bring a people-centered perspective to my role, understanding that the administrative side of an agency plays an important part in the overall experience and quality of care our clients receive. I’m also bilingual in English and Spanish, which allows me to connect with and support a broader range of clients and families in our local community.",
      "I’m dedicated to supporting our providers and staff so they can focus on what they do best — providing meaningful, compassionate care to the individuals and families we serve! I also enjoy being a resource for our clients and helping make their experience with our agency as smooth, comfortable, and positive as possible. I’m always open to questions, feedback, and suggestions, so please feel free to reach out!",
      "Outside of work, I’m passionate about community, personal growth, and making a meaningful difference in the lives of others. I’m especially passionate about supporting women, youth, families, and communities. I believe that when individuals are supported, empowered, and connected with resources to live their best lives, we can collectively build strong, healthy, and connected communities right here in the Valley. It’s an honor to be of service in any way I can.",
    ],
    img: "/images/team-niki.jpg",
    alt: "Niki Lopez — Office Manager at Therapy With Purpose",
    contain: true,
  },
  {
    name: "Cristian Moga",
    role: "Psychiatric Mental Health Nurse Practitioner",
    tags: [
      "Anxiety & depression",
      "Bipolar disorder",
      "PTSD & trauma",
      "ADHD & autism",
      "Substance use & addiction",
    ],
    bio: [
      "Hello, my name is Cristian Moga. My passion for mental health grew from my early experience as a behavioral health technician and deepened through my work as a psychiatric nurse. My experiences in these roles ultimately inspired my transition to a psychiatric mental health nurse practitioner.",
      "I have worked in both inpatient and outpatient settings with individuals across the lifespan experiencing anxiety, depression, bipolar disorder, personality disorders, PTSD, eating disorders, OCD, substance use disorder, addiction, autism, and ADHD. I am continually inspired by the healing I witness in individuals' lives when they commit to recovery and renewal.",
      "I look forward to listening, seeking understanding, and supporting you in your journey toward improved mental health and well-being, and in finding hope.",
    ],
    img: "/images/team-cristian.jpg",
    alt: "Cristian Moga — Psychiatric Mental Health Nurse Practitioner at Therapy With Purpose",
  },
  {
    name: "Molly McGinnis",
    role: "Life Coach & Trauma Specialist",
    school: "Argosy University · Arizona State University",
    tags: ["Art therapy", "Trauma & somatic work", "McGinnis Theory & Practice"],
    bio: [
      "My name is Molly McGinnis. I completed my undergraduate studies at Eastern New Mexico University with a Bachelors of Fine Art with a specialty in Psychology and Art Therapy. I received my Masters of Clinical Mental Health Counseling at Argosy University and studied at Arizona State University in the DBH program, Doctorate of Behavioral Health & Integrative Care.",
      "I was also a trauma therapist with Child Crisis Arizona and Resolutions Counseling, working with a wide breadth of clientele and a deep scope of various types of trauma and somatic disturbances. I then began consulting and decided to establish McGinnis Theory & Practice (MT&P) in 2017. MT&P is a life coach service and not affiliated with the AZ Board of Behavior Health Examiners.",
      "My specialty is targeting the underlying, core cause(s) for current barriers, and/or, any interruptions of trauma-healing utilizing various subconscious mind-healing interventions. Trauma can be small, or it can be vast. Whether it be emotional, physical, or spiritual; trauma is trauma. And the heaviness of it, weighs anyone down. Alternately, its absence is freeing!",
    ],
    img: "/images/team-molly.jpg",
    alt: "Molly McGinnis — Life Coach and Trauma Specialist at Therapy With Purpose",
    pos: "center",
  },
];

const california = [
  {
    name: "LaKisha Williams",
    credentials: "ACSW",
    role: "Therapist",
    school: "CSU, Hayward",
    bio: [
      "Feeling isolated and burdened is incredibly challenging, and it's important to recognize the strength it took just to reach out for support. As a therapist with a Master's in Social Work and experience since 2017, I help individuals navigate anxiety, depression, trauma, and other life struggles from a humanistic, strength-based perspective.",
      "I offer talk therapy as well as CBT, DBT, and motivational interviewing to help you process and heal. Trust is essential in our work together, and I'm here to support you every step of the way.",
    ],
    img: "/images/team-lakisha.jpg",
    alt: "LaKisha Williams, ACSW — Therapist at Therapy With Purpose",
  },
];

function MemberCard({ member }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border">
      <div className="grid sm:grid-cols-[240px_1fr]">
        {member.contain ? (
          <div className="flex h-64 items-center justify-center bg-teal-soft sm:h-full">
            <img src={member.img} alt={member.alt} loading="lazy" className="max-h-full w-full object-contain" />
          </div>
        ) : (
          <img
            src={member.img}
            alt={member.alt}
            width={480}
            height={480}
            loading="lazy"
            style={member.pos ? { objectPosition: member.pos } : undefined}
            className="h-64 w-full object-cover object-top sm:h-full"
          />
        )}
        <div className="p-6 sm:p-8">
          <h3 className="font-display text-2xl">
            {member.name}
            {member.credentials && (
              <span className="ml-2 text-lg font-normal text-teal-deep">{member.credentials}</span>
            )}
          </h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-violet">{member.role}</p>
          {member.school && <p className="mt-1 text-sm text-muted-foreground">{member.school}</p>}
          {member.tags && (
            <div className="mt-3 flex flex-wrap gap-2">
              {member.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-teal-soft px-3 py-1 text-xs font-medium text-teal-deep">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground text-pretty">
            {member.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Dedicated to the purpose"
        title="Meet our team of professional therapists"
        intro="Meet our dedicated therapists, who bring a compassionate and eclectic approach to help you navigate your unique journey. With expertise in various therapeutic modalities, we're here to support you in discovering your purpose and achieving personal growth."
      />
      <section className="mx-auto max-w-4xl px-5 pt-16 sm:px-8">
        <Eyebrow>Mental Health Team Glendale AZ</Eyebrow>
        <h2 className="text-3xl sm:text-4xl">A coordinated team, centered on you</h2>
        <Prose>
          <p className="mt-5">
            The Therapy with Purpose team consists of experienced, compassionate, and highly
            qualified professionals who are dedicated to helping individuals and families achieve
            emotional wellness and long-term success. We proudly serve clients throughout Glendale,
            Phoenix, Peoria, Surprise, and surrounding Arizona communities by providing collaborative
            and client-focused behavioral healthcare.
          </p>
          <p>
            Our multidisciplinary team includes licensed clinical social workers, licensed
            professional counselors, psychiatric nurse practitioners, behavior coaches, case
            managers, and other behavioral health professionals. By working together as a
            coordinated treatment team, we can address each client&apos;s emotional, behavioral, and
            psychiatric needs more effectively.
          </p>
          <p>
            Our clinicians specialize in treating a wide range of concerns, including anxiety,
            depression, trauma, stress, behavioral challenges, relationship issues, and adolescent
            mental health needs. Using evidence-based treatment methods and trauma-informed
            practices, we help clients develop healthy coping skills, strengthen relationships, and
            achieve meaningful personal growth.
          </p>
          <p>
            In addition to therapy services, our psychiatric providers offer psychiatric evaluations
            and medication management. Our behavior coaches and case managers provide practical
            support and guidance that help clients apply therapeutic skills in their daily lives and
            connect with valuable community resources.
          </p>
          <p>
            Whether you receive services in our Glendale office or through secure telehealth
            appointments, our team remains committed to providing compassionate, professional, and
            effective care. We believe strong therapeutic relationships are the foundation of
            successful treatment, and we are honored to support our clients throughout their
            healing journey.
          </p>
        </Prose>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Eyebrow>Arizona</Eyebrow>
        <h2 className="mb-10 text-3xl sm:text-4xl">In-person in Glendale, and telehealth statewide</h2>
        <div className="space-y-8">
          {arizona.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-cream-deep">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Eyebrow>California</Eyebrow>
          <h2 className="mb-10 text-3xl sm:text-4xl">Virtual therapy in California</h2>
          <div className="space-y-8">
            {california.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Start your journey</Eyebrow>
          <h2 className="text-3xl sm:text-4xl">Find the right therapist for your story</h2>
          <Prose>
            <p className="mt-4">
              Our team specializes in anxiety, depression, trauma, stress, behavioral challenges,
              relationship issues and adolescent mental health needs — using evidence-based methods
              and trauma-informed practices to help you develop healthy coping skills and achieve
              meaningful personal growth.
            </p>
          </Prose>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-violet-deep"
          >
            Book with our team
          </a>
        </div>
      </section>
    </>
  );
}
