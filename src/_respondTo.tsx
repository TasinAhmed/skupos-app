import { breakpoints } from "./_variables";

export const respondTo = (Object.keys(breakpoints) as Array<
  keyof typeof breakpoints
>).reduce((acc, key) => {
  acc[key] = (style: String) =>
    `@media screen and (max-width: ${breakpoints[key]}) { ${style} }`;
  return acc;
}, {} as { [index: string]: Function });
