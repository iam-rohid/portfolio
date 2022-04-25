export type Me = {
  doamin: string;
  url: string;
  name: string;
  fullName: string;
  avatar: string;
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  patreon?: string;
  stackOverflow?: string;
  twitterHandle?: string;
  githubHandle?: string;
  greeting: string;
  aboutMe: string;
  keywords: string[];
};

export const me: Me = {
  doamin: "rohid.dev",
  url: "https://rohid.dev",
  name: "Rohid",
  fullName: "Rohidul Islam",
  email: "rohidul209@gamil.com",
  avatar:
    "https://pbs.twimg.com/profile_images/1481868973537132544/0NSx-X8V_400x400.jpg",

  // Social links
  github: "https://github.com/rohidisdev",
  linkedin: "https://www.linkedin.com/in/md-rohidul-islam-04a655229/",
  twitter: "https://twitter.com/rohidisdev",
  instagram: "https://www.instagram.com/rohidisdev/",
  patreon: "https://www.patreon.com/rohid",
  stackOverflow: "https://stackoverflow.com/users/12840111/rohid",

  twitterHandle: "@rohidisdev",
  githubHandle: "rohidisdev",

  // About me
  greeting: "Hi, I'm Rohid",
  aboutMe:
    "I'm a passionate software developer based in Bangladesh. I love to solve problems and build awesome products. I'm a self-taught developer and I&apos;m always learning new things. I like to do front-end projects, sometimes I also do back-end projects. I also love to do game development with unity.",
  keywords: ["Rohid", "Rohidul Islam", "Dev", "Developer", "Programmer"],
};
