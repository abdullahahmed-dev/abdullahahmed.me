import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Props {
  title: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    href: string;
    target?: string;
  }[];
}

export function HackathonCard({
  title,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2">
          {links.map((link, idx) => (
            <Link 
              href={link.href} 
              key={idx}
              target={link.target}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
            >
              View Publication
              <ExternalLink size={10} />
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
