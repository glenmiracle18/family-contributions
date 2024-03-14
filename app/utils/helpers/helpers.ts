// sum.js
export function sum(a: number, b: number): number {
    return a + b;
}

export function camelCaseToWhiteSpaces(str: string): string {
    const spaced = str.replace(/([A-Z])/g, ' $1').toLowerCase();
    return spaced
        .split(' ')
        .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
        )
        .join(' ');
}
