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
        "Welcome to my website! I'm Salma, a rising junior at Boston Collegiate Charter School."
      + " I build things like **Apps**, **APIs**, and projects on the web like [**this site**](\"https/salmaj.me/\"). I've also competed at several **hackathons** and built things like [**this**](\"https://github.com/ssszlma/TTT_Betting\") Web3 dApp."
      + " I also enjoy hurting my brain with **Competitive Programming** problems (I especially recommend [**Project Euler!**.)](\"https://projecteuler.net\")"
      + " Outside of the technical world I'm also part of my school's Debate team and enjoy designing clothes!"
      + "<br><br>I'm currently interning at [**Kidogo Productions**](\"https://www.kidogoproductions.com\"), a local startup, as an **App Developer**."
      + "<br><br>Check out **[/projects](\"https://salmaj.me/projects\")** or my GitHub [(@**ssszlma**)](\"https://github.com/ssszlma\") for more of my projects!  ◡̈",

  socials: [
    {
      label: "Github",
      link: "https://github.com/ssszlma",
    },
    {
      label: "Email",
      link: "mailto:salma0aj@gmail.com",
    },
  ],
};

export default presentation;
