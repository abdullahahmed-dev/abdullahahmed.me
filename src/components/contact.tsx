import { memo } from 'react';
import { SiOrcid, SiResearchgate } from "react-icons/si";
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";
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
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/abdullah-ahmed-aimc/",
    Icon: FaLinkedinIn
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/abdullahmujadad/",
    Icon: FaInstagram
  },
  {
    platform: "X (Twitter)",
    url: "https://x.com/abdullahmujadad",
    Icon: FaXTwitter
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/abdullahmujadad1/",
    Icon: FaFacebookF
  },
  {
    platform: "ResearchGate",
    url: "https://www.researchgate.net/profile/Abdullah-Ahmed-106",
    Icon: SiResearchgate
  },
  {
    platform: "ORCID",
    url: "https://orcid.org/0000-0001-9215-2754",
    Icon: SiOrcid
  }
];

// Memoized individual social link component
const SocialLinkItem = memo(({ link, delay }: { link: SocialLink; delay: number }) => (
  <BlurFade delay={delay}>
    <Link 
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center w-full"
    >
      {/* Mobile view (horizontal icons) */}
      <div className="sm:hidden">
        <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <link.Icon className="size-5 text-gray-600 dark:text-gray-400" />
        </div>
      </div>

      {/* Desktop view (full contact card) */}
      <div className="hidden sm:flex items-center w-full p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
            <link.Icon className="size-5 text-gray-600 dark:text-gray-400" />
          </div>
          <span className="font-medium whitespace-nowrap">{link.platform}</span>
        </div>
        <div className="flex-1 mx-4">
          <div className="h-[1px] bg-gray-200 dark:bg-gray-700 w-full" />
        </div>
        <span className="text-gray-600 dark:text-gray-400 text-sm truncate w-[150px]">
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
        <h2 className="text-xl font-bold tracking-tighter">
          Let&apos;s Connect
        </h2>
        <p className="text-muted-foreground text-sm/relaxed md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed max-w-[600px]">
         Feel free to reach out - I&apos;d love to hear from you! Drop me an{' '}
         <Link href="mailto:abdullahmujadad@gmail.com" className="underline hover:text-gray-600 dark:hover:text-gray-400">
           email
         </Link>{' '}
         or connect through any of these platforms. I&apos;m always open to interesting conversations and opportunities.
        </p>
      </div>
    </div>
  </BlurFade>
));

ContactHeader.displayName = 'ContactHeader';

// Memoized social links container
const SocialLinksContainer = memo(() => (
  <div className="flex flex-row sm:flex-col gap-4 sm:gap-2 justify-center sm:justify-start flex-wrap mt-2 sm:mt-8 max-w-[650px]">
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
    <section id="contact" className="space-y-6 sm:space-y-12 w-full max-w-[900px] py-12 pb-20 sm:pb-12">
      <ContactHeader />
      <SocialLinksContainer />
    </section>
  );
};

export default memo(ContactSection);