import { memo } from "react";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
// import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import Contact from "@/components/contact";
import Profile from "@/components/banner";
const BLUR_FADE_DELAY = 0.04;

// Memoized section components for better performance
const HeroSection = memo(() => (
  <Section id="hero">
    <div className="mx-auto w-full max-w-4xl space-y-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Profile
          profilePic={DATA.avatarUrl}
          coverImage="/banner.webp"
          name={DATA.name}
          tagline={DATA.description}
          location={DATA.location}
        />
      </BlurFade>
    </div>
  </Section>
));
HeroSection.displayName = "HeroSection";

const AboutSection = memo(() => (
  <Section id="about">
    <BlurFade delay={BLUR_FADE_DELAY * 3}>
      <h2 className="text-xl font-bold mb-3">About me</h2>
    </BlurFade>
    <BlurFade delay={BLUR_FADE_DELAY * 4}>
      <Markdown className="prose max-w-3xl text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        {DATA.summary}
      </Markdown>
    </BlurFade>
  </Section>
));
AboutSection.displayName = "AboutSection";

const WorkSection = memo(() => (
  <Section id="work">
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
  </Section>
));
WorkSection.displayName = "WorkSection";

const EducationSection = memo(() => (
  <Section id="education">
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
  </Section>
));
EducationSection.displayName = "EducationSection";

const SkillsSection = memo(() => (
  <Section id="skills">
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
  </Section>
));
SkillsSection.displayName = "SkillsSection";

const HackathonsSection = memo(() => (
  <Section id="hackathons">
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
  </Section>
));
HackathonsSection.displayName = "HackathonsSection";

// Add type for better type safety
type SectionProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

// Create a reusable Section component to reduce repetition
const Section = memo(({ children, id, className = "" }: SectionProps) => (
  <section id={id} className={className}>
    {children}
  </section>
));
Section.displayName = "Section";

// Update the main Page component for better performance
export default memo(function Page() {
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
});
