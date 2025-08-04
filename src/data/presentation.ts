type Social = {
  label: string;
  link: string;
};

type Presentation = {
  // mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  title: "Salma J.",
  description:
      "I'm Salma, a senior at Boston Collegiate Charter School."
      + " I've been programming for ~4 years now, and am also interested in math, physics, linguistics, and policy. I'm not sure about what I want to do in the future, but for now I've been pursuing all these interests. :)"
  + "<br/><br/> For projects I've worked on, check out my GitHub: [**@4ierseries**](https://github.com/4ierseries).",





  socials: [
    {
      label: "Github",
      link: "https://github.com/4ierseries",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/4ierseries/",
    },
    {
      label: "Email",
      link: "mailto:salmaabdijama@gmail.com",
    },
  ],
};

export default presentation;
