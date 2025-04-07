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
      "I'm Salma, a junior at Boston Collegiate Charter School."
      + " I have interests in math, computer science, physics, linguistics, design, policy... and more! " + "<br/><br/>"
  + "More specifically, I love **photonics** and its various real-world applications, from laser surgery to space telescopes."
  + "<br/><br/> For projects I've worked on, check out my GitHub: [**@4ierseries**](https://github.com/4ierseries).",





  socials: [
    {
      label: "Github",
      link: "https://github.com/4ierseries",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/salmaaj/",
    },
    {
      label: "Email",
      link: "mailto:salmaabdijama@gmail.com",
    },
  ],
};

export default presentation;
