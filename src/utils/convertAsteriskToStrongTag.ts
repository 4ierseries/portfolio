import theme from "@/data/theme";
import { MAP_COLOR_VARIANT_TO_TEXT } from "./mapVariants";

export default function convertTextToHtml(str: string): string {
  // Convert -text- to extra italic
  str = str.replace(
      /\-([^\-]+)\-/g,
      `<em class="italic">$1</em>`
  );

  // Convert asterisks to bold text with white color
  str = str.replace(
      /\*\*([^\*]+)\*\*/g,
      `<span class=" text-white">$1</span>`
  );

  // Convert links in quotes to HTML anchor tags with color
  str = str.replace(
      /\[([^\]]+)\]\("([^"]+)"\)/g,
      `<a href="$2" class="text-${MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary]}">$1</a>`
  );

  return str;
}
