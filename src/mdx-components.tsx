import type { MDXComponents } from "mdx/types";
import A from "@/features/MDX/A";
import Pre from "@/features/MDX/Pre";

export function useMDXComponents(): MDXComponents {
  return {
    a: A,
    pre: Pre,
  };
}
