import { IntersectObserver } from "@/features/IntersectObserver/IntersectObserver";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <IntersectObserver />
    </>
  );
}
