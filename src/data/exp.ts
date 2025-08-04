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
    role: "Astrophysics Research Internship",
    organization: "Harvard-Smithsonian Center for Astrophysics",
    year: "Spring 2025"
  },
  {
    type: "Research",
    role: "SSP Astrophysics @ Colby College",
    organization: "The Summer Science Program",
    year: "Summer 2025"
  },
  {
    type: "Policy",
    role: "Youth Councilor",
    organization: "Mayor's Youth Council Boston",
    year: "December 2024 - June 2025"
  },
  {
    type: "Math",
    role: "Menezes Challenge PRIMES Circle",
    organization: "MIT",
    year: "December 2024 - May 2025"
  }
];
