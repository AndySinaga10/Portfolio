const skills = [
  {
    title: "User Research",
    description: "Conducting interviews, surveys, and usability studies to understand user needs and behaviors.",
  },
  {
    title: "Wireframing",
    description: "Creating low to high-fidelity wireframes that map user flows and information architecture.",
  },
  {
    title: "Prototyping",
    description: "Building interactive prototypes in Figma and Protopie to validate concepts and test interactions.",
  },
  {
    title: "Design Systems",
    description: "Developing scalable component libraries and design tokens for consistent product experiences.",
  },
  {
    title: "Usability Testing",
    description: "Planning and executing usability tests to identify pain points and optimize user experience.",
  },
  {
    title: "Product Strategy",
    description: "Aligning design decisions with business goals through data-driven insights and metrics.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "User research, stakeholder interviews, competitive analysis, and market research.",
  },
  {
    step: "02",
    title: "Define",
    description: "Synthesizing research into personas, journey maps, and design principles.",
  },
  {
    step: "03",
    title: "Design",
    description: "Ideation, wireframing, visual design, and interactive prototyping.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "Usability testing, design handoff, and iteration based on feedback.",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-coral text-plum">
      <div className="mx-auto max-w-screen-2xl px-6 py-24 md:px-10 lg:py-32">
        <h2 className="section-title mb-16 font-black uppercase">Skills</h2>

        <dl className="grid grid-cols-1 gap-x-8 lg:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.title} className="border-t-2 border-plum py-6">
              <dt className="mb-2 font-display text-3xl font-extrabold leading-none tracking-tight lg:text-4xl">
                {skill.title}
              </dt>
              <dd className="max-w-xl text-lg font-medium leading-snug">{skill.description}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mb-10 mt-20 text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          How I work
        </h3>
        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.step}>
              <span
                aria-hidden="true"
                className="block font-display text-7xl font-black leading-none text-plum"
              >
                {step.step}
              </span>
              <h4 className="mb-2 mt-4 text-2xl font-extrabold">{step.title}</h4>
              <p className="font-medium leading-snug">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
