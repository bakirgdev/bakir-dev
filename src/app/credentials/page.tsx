import { CredentialsView } from "@/features/Credentials/CredentialsView";
import PageHeading from "@/features/PageHeading/PageHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Credentials",
  description:
    "Certifications, badges and courses I have completed, with links to verify them.",
  path: "/credentials",
});

export default function CredentialsPage() {
  return (
    <section>
      <PageHeading
        title="Credentials"
        subtitle="Check out where I validated my skills and experience"
      />

      <CredentialsView />
    </section>
  );
}
