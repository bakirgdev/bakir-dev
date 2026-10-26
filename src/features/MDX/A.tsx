import Link from "next/link";

export default function A({ href = "", ...props }: React.ComponentProps<"a">) {
  if (href.startsWith("/") && !href.startsWith("//")) {
    return <Link href={href} {...props} />;
  }

  if (href.startsWith("#")) {
    return <a href={href} {...props} />;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
}
