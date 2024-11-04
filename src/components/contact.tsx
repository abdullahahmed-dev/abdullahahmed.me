import { memo } from 'react';
import { Facebook, Twitter, Linkedin, Github, Youtube } from 'lucide-react';
import Link from 'next/link';
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

interface SocialLink {
  platform: string;
  url: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/...",
    Icon: Facebook
  },
  {
    platform: "X (Twitter)",
    url: "https://twitter.com/...",
    Icon: Twitter
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/...",
    Icon: Linkedin
  },
  {
    platform: "GitHub",
    url: "https://github.com/...",
    Icon: Github
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/...",
    Icon: Youtube
  }
];

// Memoized individual social link component
const SocialLinkItem = memo(({ link, delay }: { link: SocialLink; delay: number }) => (
  <BlurFade delay={delay}>
    <Link 
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:grid sm:grid-cols-[40px_1fr] md:grid-cols-[40px_200px_1fr] items-center gap-2 sm:gap-4 p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 w-full"
    >
      <div className="relative size-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <link.Icon className="size-5 text-gray-600 dark:text-gray-400" />
      </div>
      <span className="font-medium text-center sm:text-left">{link.platform}</span>
      <div className="hidden md:flex items-center w-full">
        <div className="border-b border-dotted border-gray-300 dark:border-gray-700 flex-grow mx-4" />
        <span className="text-gray-600 dark:text-gray-400 truncate text-sm">
          {link.url}
        </span>
      </div>
    </Link>
  </BlurFade>
));

SocialLinkItem.displayName = 'SocialLinkItem';

// Memoized header component
const ContactHeader = memo(() => (
  <BlurFade delay={BLUR_FADE_DELAY * 16}>
    <div className="flex flex-col items-start space-y-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tighter">
          Let&apos;s Connect
        </h2>
        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed max-w-[600px]">
          Feel free to reach out through any of these platforms. I&apos;m always open to interesting conversations and opportunities.
        </p>
      </div>
    </div>
  </BlurFade>
));

ContactHeader.displayName = 'ContactHeader';

// Memoized social links container
const SocialLinksContainer = memo(() => (
  <div className="flex min-h-0 flex-col gap-y-3 mt-8">
    {socialLinks.map((link, index) => (
      <SocialLinkItem 
        key={link.platform} 
        link={link} 
        delay={BLUR_FADE_DELAY * (17 + index)} 
      />
    ))}
  </div>
));

SocialLinksContainer.displayName = 'SocialLinksContainer';

const ContactSection = () => {
  return (
    <section id="contact" className="space-y-12 w-full py-12">
      <ContactHeader />
      <SocialLinksContainer />
    </section>
  );
};

export default memo(ContactSection);