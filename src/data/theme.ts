import type { TailwindColor } from "@/utils/types/tailwind";

type Theme = {
  colors: {
    primary: TailwindColor;
    secondary: TailwindColor;
  };
};

const theme: Theme = {
  colors: {
    primary: "pink",
    secondary: "pink",
  },
};

export default theme;
