import { Plus } from "lucide-react";
import { educations } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="bg-cream text-plum">
      <div className="mx-auto max-w-screen-2xl px-6 py-24 md:px-10 lg:py-32">
        <h2 className="section-title mb-16 font-black uppercase">
          Educa<wbr />tion
        </h2>

        <div className="border-b-2 border-plum">
          {educations.map((edu) => (
            <details key={edu.id} className="group border-t-2 border-plum">
              <summary className="grid grid-cols-[1fr_auto] items-start gap-x-6 gap-y-2 py-6 transition-colors hover:text-coral-ink lg:grid-cols-12 lg:items-center lg:gap-x-8">
                <span className="col-start-1 font-display text-3xl font-black leading-none lg:col-span-2 lg:text-4xl">
                  {edu.endYear}
                </span>
                <span className="col-start-1 font-display text-3xl font-extrabold leading-none tracking-tight lg:col-span-5 lg:col-start-3 lg:text-4xl">
                  {edu.institution}
                </span>
                <span className="col-start-1 lg:col-span-4 lg:col-start-8">
                  <span className="block font-bold">{edu.degree}</span>
                  <span className="block text-sm">{edu.period}</span>
                </span>
                <Plus
                  aria-hidden="true"
                  className="col-start-2 row-start-1 h-7 w-7 justify-self-end transition-transform group-open:rotate-45 lg:col-start-12"
                />
              </summary>
              <div className="grid grid-cols-1 gap-x-8 pb-8 lg:grid-cols-12">
                <div className="lg:col-span-9 lg:col-start-3">
                  <p className="mb-3 leading-relaxed">{edu.description}</p>
                  <ul className="flex list-disc flex-col gap-1 pl-5 marker:text-coral-ink">
                    {edu.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
