import theme from "@/data/theme";
import { MAP_COLOR_VARIANT_TO_TEXT } from "./mapVariants";

export default function linktoredirect(str: string) {
    return str.replace(
        /\[([^\]]+)\]\("([^"]+)"\)/,
        `<a href="$2" class="text-${MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary]}">$1</a>`
    );
}
