import { Plus } from "lucide-react";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-plum text-cream">
      <div className="mx-auto max-w-screen-2xl px-6 py-24 md:px-10 lg:py-32">
        <div className="mb-16 flex flex-col gap-8 lg:mb-20">
          <h2 className="section-title font-black uppercase">Experience</h2>
          <p className="max-w-2xl text-lg leading-relaxed">
            I started in IT operations at IBM, became a front-end developer, then moved into
            product design. That path shapes how I design: with the people using a system and
            the people building it both in mind.
          </p>
        </div>

        <div className="border-b border-cream/30">
          {experiences.map((job, index) => (
            <details key={job.id} open={index === 0} className="group border-t border-cream/30">
              <summary className="grid grid-cols-[1fr_auto] items-start gap-x-6 gap-y-2 py-6 transition-colors hover:text-coral lg:grid-cols-12 lg:items-center lg:gap-x-8">
                <span
                  aria-hidden="true"
                  className="col-start-1 font-display text-5xl font-black leading-none text-coral lg:col-span-2 lg:text-7xl"
                >
                  {job.period.match(/\d{4}/)?.[0]}
                </span>
                <span className="col-start-1 font-display text-3xl font-extrabold uppercase leading-none tracking-tight lg:col-span-5 lg:col-start-3 lg:text-4xl">
                  {job.company}
                </span>
                <span className="col-start-1 lg:col-span-4 lg:col-start-8">
                  <span className="block font-bold">{job.role}</span>
                  <span className="block text-sm text-cream/85">
                    {job.period} &middot; {job.type}
                  </span>
                </span>
                <Plus
                  aria-hidden="true"
                  className="col-start-2 row-start-1 h-7 w-7 justify-self-end transition-transform group-open:rotate-45 lg:col-start-12"
                />
              </summary>
              <div className="grid grid-cols-1 gap-x-8 pb-8 lg:grid-cols-12">
                <div className="lg:col-span-9 lg:col-start-3">
                  {job.companyNote && <p className="mb-3 font-bold">{job.companyNote}</p>}
                  <ul className="flex list-disc flex-col gap-2 pl-5 leading-relaxed marker:text-coral">
                    {job.description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-cream/85">
                    {job.location && <>{job.location} &middot; </>}
                    {job.technologies.join(" · ")}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
