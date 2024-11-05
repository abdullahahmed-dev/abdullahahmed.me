import React, { memo } from 'react';
import Image from 'next/image';

interface ProfileProps {
  profilePic: string;
  coverImage: string;
  name: string;
  tagline: string;
  location: string;
}

const BlurredBackground = memo(({ coverImage }: { coverImage: string }) => (
  <div className="absolute inset-0 z-0">
    <Image 
      src={coverImage}
      alt=""
      fill
      className="object-cover opacity-10 blur-md"
      priority
    />
  </div>
));

BlurredBackground.displayName = 'BlurredBackground';

const CoverImage = memo(({ coverImage }: { coverImage: string }) => (
  <div className="relative w-full h-full">
    <Image 
      src={coverImage}
      alt="Cover"
      width={1200}
      height={400}
      className="w-full h-full object-cover"
      priority
    />
    <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background/60 to-transparent" />
  </div>
));

CoverImage.displayName = 'CoverImage';

const ProfilePicture = memo(({ profilePic }: { profilePic: string }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-20 group-hover:opacity-50 transition duration-1000" />
    <Image 
      src={profilePic}
      alt="Profile"
      width={80}
      height={80}
      className="relative rounded-full border-2 border-background shadow-md sm:w-24 sm:h-24"
      priority
    />
  </div>
));

ProfilePicture.displayName = 'ProfilePicture';

const ProfileInfo = memo(({ name, tagline, location }: Omit<ProfileProps, 'profilePic' | 'coverImage'>) => (
  <div className="mt-16 sm:mt-14 space-y-0.5 pb-1">
    <h1 className="text-lg sm:text-xl font-semibold tracking-tight">{name}</h1>
    <p className="text-xs sm:text-sm text-muted-foreground">{tagline}</p>
    <p className="text-xs text-muted-foreground/80">{location}</p>
  </div>
));

ProfileInfo.displayName = 'ProfileInfo';

const Profile = ({ profilePic, coverImage, name, tagline, location }: ProfileProps) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border shadow-sm">
      <BlurredBackground coverImage={coverImage} />
      
      <div className="relative z-10 backdrop-blur-sm bg-background/80 sm:bg-background/60 dark:bg-background/60 dark:sm:bg-background/40">
        <div className="w-full h-28 sm:h-40 overflow-hidden">
          <CoverImage coverImage={coverImage} />
        </div>
        
        <div className="relative px-3 sm:px-4 pb-3 sm:pb-4">
          <div className="flex flex-col ml-2">
            <div className="absolute -top-8 sm:-top-14">
              <ProfilePicture profilePic={profilePic} />
            </div>
            <ProfileInfo name={name} tagline={tagline} location={location} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Profile);