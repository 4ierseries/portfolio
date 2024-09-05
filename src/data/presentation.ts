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
      "Hello! I'm Salma, a junior at Boston Collegiate Charter School."
      + " I build things like **Apps**, **Games**, and projects on the **Web**. I've also competed at several Hackathons and enjoy hurting my brain with Competitive Programming & Computational Linguistics problems."
      + " Outside of the technical world I'm also part of my school's Debate team and enjoy designing clothes!"
      + "<br><br> ▪  Currently working as a **Software Engineer** at [**Kidogo Productions**](\"https://www.kidogoproductions.com\").",

  socials: [
    {
      label: "Github",
      link: "https://github.com/ssszlma",
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
