export type Project = {
  title: string;
  description?: string;
  techs: string[];
  link?: string; 
  isComingSoon?: boolean;
  hasLink?: boolean; 
};

const projects: Project[] = [
  {
    title: "TTT",
    description: "Web3 GameFi betting platform leveraging blockchain and smart contracts for cryptocurrency wagers. Finalist at the EasyA x Polkadot Harvard Hackathon.",
    techs: ["Blockchain", "Polkadot.js", "Smart Contracts"],
    link: "https://github.com/ssszlma/TTT_Betting",
    hasLink: true,
  },
  {
    title: "3D Galaxy Mapper",
    description: "Interactive 3D galaxy mapping app using Flask and Plotly, to visualize astronomical data and calculate distances using Hubble’s Law.",
    techs: ["Python", "Flask", "Plotly", "Astrophysics"],
    hasLink: false,
  },
  {
    title: "Self-Parking Robot Algorithm",
    description: "LiDAR-based autonomous parking algorithm utilizing proportional and PD control for precise navigation.",
    techs: ["Python", "Algorithms", "LiDAR"],
    hasLink: false,
  },
  {
    title: "Michelson Interferometer",
    description: "Designed and built an interferometer to analyze light interference patterns, validating theoretical predictions. Created an animation and presented findings at a symposium.",
    techs: ["Optics", "Physics", "Engineering"],
    hasLink: false,
  },
  {
    title: "Youth Speaks Boston Survey",
    description: "Beta-tested and improved a city-wide needs assessment survey. Led to the implementation of the translation feature for accessibility.",
    techs: ["Community Engagement"],
    link: "https://www.boston.gov/departments/youth-engagement-and-advancement/youth-speaks-boston",
    hasLink: true,
  },
  {
    title: "Kidogoville",
    description: "An interactive edutainment app for kids developed to provide an inclusive, affirming learning space.",
    techs: ["Typescript", "React", "Ionic", "Firebase"],
    link: "https://kidogoville.com",
    hasLink: true,
  },
  {
    title: "Workplace",
    description: "Drag-and-drop website builder generating clean HTML/CSS, designed for ease of use. Submitted to MIT Blueprint Hackathon.",
    techs: ["HTML/CSS/JS", "Web Development"],
    link: "https://github.com/ssszlma/workplace",
    hasLink: true,
  },
  {
    title: "Flutter Starter (Template)",
    description: "Pre-configured Flutter template with navigation and UI components for rapid development.",
    techs: ["Flutter", "Dart"],
    link: "https://github.com/ssszlma/flutter_starter",
    hasLink: true,
  },
  {
    title: "SkinCheck",
    description: "AI-powered mobile app for identifying skin conditions and connecting users to dermatologists. Recognized at MIT FutureMakers.",
    techs: ["App Inventor", "AI"],
    link: "https://github.com/ssszlma/skincheck",
    hasLink: true,
  },
  {
    title: "USACO Guide",
    description: "Contributor to the Game Theory module of the USACO Guide, supporting competitive programming education.",
    techs: ["React", "Typescript"],
    link: "https://usaco.guide/dashboard/",
    hasLink: true,
  },
  {
    title: "A Crisis In Boston",
    description: "2D platformer built in Unity during the Boston Cyberarts summer game internship, focusing on game design and C# development.",
    techs: ["Unity", "C#", "Game Development"],
    link: "https://github.com/ssszlma/aCrisisInBoston",
    hasLink: true,
  },
  {
    title: "Trivium",
    description: "Python-based trivia game with a scoring algorithm and Tkinter UI.",
    techs: ["Python", "Tkinter"],
    link: "https://github.com/ssszlma/trivium",
    hasLink: true,
  },
  {
    title: "Geographer",
    description: "Geometry visualizer and solver for competitive programming, using Matplotlib for shape rendering.",
    techs: ["Python", "Matplotlib"],
    link: "https://github.com/ssszlma/geographer",
    hasLink: true,
  },
];

export default projects;
