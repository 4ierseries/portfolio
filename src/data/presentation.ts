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
      + " I have a wide variety of interests, ranging from programming, math, and physics to public policy and debate."
      + " I'm interested in pursuing **optical engineering** and have a deep love for astrophysics! "
      + "<br><br> I'm currently working as a **Software Developer** at [Kidogo Productions](\"https://www.kidogoproductions.com\"), and as a **Youth Councilor** for the [Boston Mayor's Youth Council.](\"https://bit.ly/mycboston\")",





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
