import React from 'react'

const Container = ({ children }) => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="py-16 sm:py-20">
    <Container>
      <h2 className="text-xl tracking-wide text-zinc-300 mb-4">{title}</h2>
      <div className="h-px w-full bg-zinc-800 mb-6" />
      {children}
    </Container>
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-md border border-zinc-700 bg-zinc-900/60 px-2.5 py-1 text-xs text-zinc-300 shadow-sm">
    {children}
  </span>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/50 px-2 py-0.5 text-[11px] text-zinc-300">{children}</span>
);

const PillLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/70 bg-zinc-900/60 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800/70 transition"
  >
    {icon}
    <span className="font-medium">{label}</span>
    <svg className="size-3 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
  </a>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border border-zinc-700/70 bg-zinc-900/60 p-5 shadow-sm hover:shadow-md hover:bg-zinc-900 transition">{children}</div>
);

const Divider = () => <div className="my-2 h-px w-full bg-zinc-800"/>;

// ---------- Data (edit me!) ----------
const profile = {
  name: "Hashem",
  title: "Hey, I'm Hashem!",
  subtitle:
    "A KFUPM University student majoring in Electrical Engineering. Currently exploring Smart Electrotherapy and Electronic Defense Systems. Based in Dhahran, KSA.",
  fun: [
    "I am a Syrian/Dominican National",
    "I'm a big fan of Shinobis, and enjoy practicing Cross Country and Competitive Programming in my free time.",
  ],
  avatar:
    "public//Hashem Altujar.jpg",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hashem-altujar-b7366419b/", icon: "in" },
    { label: "GitHub", href: "https://github.com/HaShinobi", icon: "gh" },
    { label: "ORDCiD", href: "https://orcid.org/my-orcid?orcid=0009-0001-2021-6293", icon: "sc" },
    { label: "Resume", href: "https://drive.google.com/file/d/1arfHC63LRx2-I72njRYmZhHId3K7Cap2/view?usp=sharing", icon: "cv" },
  ],
};

const experiences = [
  { org: "KFUPM", role: "Telecommunications Intern", time: "Present", blurb: "ML + Hybrid Drone Detection System" },
  { org: "KFUPM", role: "Undergraduate Researcher", time: "", blurb: "Primary author of literature review detailing operational pipelines and signal-processing workflows for acoustic UAV detection systems" },
  { org: "IEEE - KFUPM", role: "Event Organizer", time: "", blurb: "Team Leader for planning and executing annual competitions, seminars, and networking events" },
  { org: "Civics Unplugged", role: "Project Management Intern", time: "", blurb: "Various Real-time Case Study Analysis & Solutions Finding" },
  { org: "Inspirit AI", role: "ML Engineer Intern", time: "", blurb: "NLP Stock Market Sentiment Analysis Project" },
];

const skills = [
  { category: "Programming Languages", items: ["Python", "C++", "JavaScript", "HTML5", "CSS3"] },
  { category: "Machine Learning", items: ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas"] },
  { category: "Deployment & Cloud", items: ["Docker", "Linux"] },
  {category: "Engineering", items: ["3D Design (CAD, modeling)", "3D Printing", "Arduino", "Microcontrollers"]}
];

const socials = [
  { label: "Email", href: "hashem.altujar@gmail.com", icon: "mail" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hashem-altujar-b7366419b/", icon: "in" },
  { label: "GitHub", href: "https://github.com/", icon: "gh" },
  { label: "ORDCiD", href: "https://orcid.org/my-orcid?orcid=0009-0001-2021-6293", icon: "sc" },
  { label: "Resume", href: "https://drive.google.com/file/d/1arfHC63LRx2-I72njRYmZhHId3K7Cap2/view?usp=sharing", icon: "cv" },
];

const Logo = ({ kind }) => {
  const map = { in: "in", gh: "{}", x: "𝕏", sc: "⊕", cv: "🗎", mail: "✉︎" };
  return (
    <span className="grid place-items-center rounded-md border border-zinc-700 bg-zinc-900/70 text-[11px] w-5 h-5">
      {map[kind] || "•"}
    </span>
  );
};

export default function App() {
  return (
    <main className="min-h-screen bg-[#0b0c0f] text-zinc-100 antialiased">
      {/* Topbar */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#0b0c0f]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0b0c0f]/60">
        <Container>
          <div className="flex items-center justify-between py-4">
            <a href="#" className="font-mono text-zinc-300">hashemaltujar.dev</a>
            <nav className="flex flex-wrap gap-2">
              {profile.links.map((l) => (
                <PillLink key={l.label} href={l.href} label={l.label} icon={<Logo kind={l.icon} />} />
              ))}
            </nav>
          </div>
        </Container>
      </header>

      {/* Welcome / Hero */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] gap-8 items-start">
            <img
              src="public/Hashem Altujar.jpg"  // image placed inside public/
              alt="Avatar"
              className="aspect-square w-60 rounded-2xl object-cover border border-zinc-700 shadow"
            />

            <div>
              <Badge>Welcome!</Badge>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
                Hey, I'm <span className="text-zinc-50">Hashem</span>!
              </h1>
              <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">{profile.subtitle}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>KSA KFUPM, Dhahran</Tag>
                <Tag>🎓 King Fahd University of Petroleum and Minerals</Tag>
                <Tag>⚡ Electrotherapy & Electronic Defense Systems</Tag>
              </div>

              <ul className="mt-6 space-y-2 text-zinc-400">
                {profile.fun.map((f, i) => (
                  <li key={i} className="leading-relaxed">{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="grid gap-4">
          {experiences.map((e, i) => (
            <Card key={i}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-xl border border-zinc-700 bg-zinc-900/60 text-zinc-300 font-semibold">{e.org.split(' ')[0]}</div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-semibold text-zinc-100">{e.role}</h3>
                      {e.time && <Badge>{e.time}</Badge>}
                    </div>
                    <p className="text-sm text-zinc-400">{e.org}</p>
                  </div>
                </div>
                <div className="text-sm text-zinc-300/90">{e.blurb}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technical Skills */}
      <Section id="skills" title="Technical Skills">
        <div className="overflow-hidden rounded-2xl border border-zinc-700/70">
          <div className="grid grid-cols-1 md:grid-cols-5 bg-zinc-950/40">
            <div className="hidden md:block col-span-2 p-4 text-sm font-medium text-zinc-400">Category</div>
            <div className="md:col-span-3 p-4 text-sm font-medium text-zinc-400">Technologies</div>
          </div>
          {skills.map((row, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-5 border-t border-zinc-800">
              <div className="md:col-span-2 p-4 text-zinc-200">{row.category}</div>
              <div className="md:col-span-3 p-4">
                <div className="flex flex-wrap gap-2">
                  {row.items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <form className="space-y-3" onSubmit={(e)=>e.preventDefault()}>
              <div>
                <label className="text-sm text-zinc-300">Full Name</label>
                <input className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-600" placeholder="John Doe"/>
              </div>
              <div>
                <label className="text-sm text-zinc-300">Email Address</label>
                <input className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-600" placeholder="johndoe@example.com"/>
              </div>
              <div>
                <label className="text-sm text-zinc-300">Subject</label>
                <input className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-600" placeholder="Your subject must be 250 characters or fewer."/>
              </div>
              <div>
                <label className="text-sm text-zinc-300">Message</label>
                <textarea className="mt-1 h-40 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-600" placeholder="Your message must be 2500 characters or fewer."/>
              </div>
              <button type="submit" className="w-full rounded-xl bg-zinc-200 px-4 py-2 text-zinc-900 font-medium hover:bg-white transition">Submit</button>
            </form>
          </Card>

          <div className="lg:col-span-2 grid gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-zinc-700/70 bg-zinc-900/60 px-4 py-3 text-zinc-200 hover:bg-zinc-900">
                <div className="flex items-center gap-3">
                  <Logo kind={s.icon} />
                  <span>{s.label}</span>
                </div>
                <svg className="size-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="pb-12 pt-6">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-500">
            <div>Last Updated 26/08/2025</div>
            <div>
              Made with <span className="text-zinc-200">♥</span> in <span className="text-zinc-300">KFUPM, Dhahran</span>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
