export default function convertTextToHtml(str: string): string {
  str = str.replace(
      /\*\*([^\*]+)\*\*/g,
      `<span class="text-white">$1</span>`
  );

  str = str.replace(
      /\[([^\]]+)\]\("([^"]+)"\)/g,
      (match, text, link) => {
        const colorClass = 'text-blue-400'; 
        return `<a href="${link}" class="${colorClass}">${text}</a>`;
      }
  );

  return str;
}
