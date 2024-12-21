export default function convertTextToHtml(str: string): string {
  // Convert asterisks to bold text with white color
  str = str.replace(
      /\*\*([^\*]+)\*\*/g,
      `<span class="text-white">$1</span>`
  );

  // Replace links with a fixed color (e.g., red) after other conversions
  str = str.replace(
      /\[([^\]]+)\]\("([^"]+)"\)/g,
      (match, text, link) => {
        const colorClass = 'text-blue-400'; // Set to a fixed red color
        return `<a href="${link}" class="${colorClass}">${text}</a>`;
      }
  );

  return str;
}
