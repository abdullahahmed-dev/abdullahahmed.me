import { memo } from "react";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import Contact from "@/components/contact";

const BLUR_FADE_DELAY = 0.04;

// Memoized section components for better performance
const HeroSection = memo(() => (
  <section id="hero">
    <div className="mx-auto w-full max-w-2xl space-y-8">
      <div className="gap-2 flex justify-between">
        <div className="flex-col flex flex-1 space-y-1.5">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            yOffset={8}
            text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
          />
          <BlurFadeText
            className="max-w-[600px] md:text-xl"
            delay={BLUR_FADE_DELAY}
            text={DATA.description}
          />
        </div>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Avatar className="size-28 border">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </BlurFade>
      </div>
    </div>
  </section>
));
HeroSection.displayName = "HeroSection";

const AboutSection = memo(() => (
  <section id="about">
    <BlurFade delay={BLUR_FADE_DELAY * 3}>
      <h2 className="text-xl font-bold">About me</h2>
    </BlurFade>
    <BlurFade delay={BLUR_FADE_DELAY * 4}>
      <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        {DATA.summary}
      </Markdown>
    </BlurFade>
  </section>
));
AboutSection.displayName = "AboutSection";

const WorkSection = memo(() => (
  <section id="work">
    <div className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <h2 className="text-xl font-bold">Work Experience</h2>
      </BlurFade>
      {DATA.work.map((work, id) => (
        <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
          <ResumeCard
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            description={work.description}
          />
        </BlurFade>
      ))}
    </div>
  </section>
));
WorkSection.displayName = "WorkSection";

const EducationSection = memo(() => (
  <section id="education">
    <div className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <h2 className="text-xl font-bold">Education</h2>
      </BlurFade>
      {DATA.education.map((education, id) => (
        <BlurFade
          key={education.school}
          delay={BLUR_FADE_DELAY * 8 + id * 0.05}
        >
          <ResumeCard
            href={education.href}
            logoUrl={education.logoUrl}
            altText={education.school}
            title={education.school}
            subtitle={education.degree}
            period={`${education.start} - ${education.end}`}
            description={education.description}
          />
        </BlurFade>
      ))}
    </div>
  </section>
));
EducationSection.displayName = "EducationSection";

const SkillsSection = memo(() => (
  <section id="skills">
    <div className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <h2 className="text-xl font-bold">Skills</h2>
      </BlurFade>
      <div className="flex flex-wrap gap-1">
        {DATA.skills.map((skill, id) => (
          <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
            <Badge>{skill}</Badge>
          </BlurFade>
        ))}
      </div>
    </div>
  </section>
));
SkillsSection.displayName = "SkillsSection";

const HackathonsSection = memo(() => (
  <section id="hackathons">
    <div className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <h2 className="text-xl font-bold">Publications</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <p className="text-pretty font-sans text-sm text-muted-foreground">
          During my academic journey, I cultivated a diverse research portfolio
          that began with correspondence letters during my university years. As
          my expertise grew, I developed proficiency in comprehensive manuscript
          writing and statistical data analysis. My research scope has evolved
          to focus predominantly on ophthalmology, where I have made significant
          contributions through collaborations with best in the field
          researchers. My work has been published in several prestigious
          peer-reviewed journals, with all publications indexed in major
          scientific databases.
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 15}>
        <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
          {DATA.hackathons.map((project, id) => (
            <BlurFade
              key={project.title + project.dates}
              delay={BLUR_FADE_DELAY * 16 + id * 0.05}
            >
              <HackathonCard
                title={project.title}
                location={project.location}
                dates={project.dates}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </ul>
      </BlurFade>
    </div>
  </section>
));
HackathonsSection.displayName = "HackathonsSection";

// Main component with memoized sections
export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <HackathonsSection />
      <SkillsSection />
      <Contact />
    </main>
  );
}