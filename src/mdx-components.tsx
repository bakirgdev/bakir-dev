import type { MDXComponents } from "mdx/types";
import A from "@/features/MDX/A";
import Pre from "@/features/MDX/Pre";

const components = {
  a: A,
  pre: Pre,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
