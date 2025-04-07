export default function convertTextToHtml(str: string): string {
    // Handle bold text
    str = str.replace(
        /\*\*([^\*]+)\*\*/g,
        `<span style="color: #9750d7; font-weight: 600">$1</span>`
    );

    // Handle links - fixed regex
    str = str.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        (match, text, link) => {
            return `<a href="${link}" target=_blank style="color: #9750d7; text-decoration: underline">${text}</a>`;
        }
    );

    return str;
}