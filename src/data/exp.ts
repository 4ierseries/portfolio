// src/data/exp.ts
interface Experience {
  role: string;
  organization: string;
  year: string;
  type?: string;
}

export const experiences: Experience[] = [
  {
    type: "Research",
    role: "Upcoming Astrophysics Research Internship",
    organization: "Harvard-Smithsonian Center for Astrophysics",
    year: "Spring 2025"
  },
  {
    type: "Programming",
    role: "Software Developer",
    organization: "Kidogo Productions",
    year: "Summer 2024 - now"
  },
  {
    type: "Policy",
    role: "Youth Councilor",
    organization: "Mayor's Youth Council Boston",
    year: "December 2024 - now"
  },
  {
    type: "Math",
    role: "Menezes Challenge PRIMES Circle",
    organization: "MIT",
    year: "December 2024 - now"
  }
];
/*
export const moreInfo = `
  <p>For more of my work, check out my [resume](https://chat.deepseek.com/a/chat/s/709fe7e0-557a-45df-8abd-1323188a74f4)</p>
`;*/