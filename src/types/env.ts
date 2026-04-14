import { z } from "zod";

const envVarsSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.url(),
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().min(12),
  NEXT_PUBLIC_CV_URL: z.url(),
  NEXT_PUBLIC_GITHUB_URL: z.url(),
  NEXT_PUBLIC_LINKEDIN_URL: z.url(),
  NEXT_PUBLIC_WHATSAPP_URL: z.url(),
  NEXT_PUBLIC_COMPANY_URL: z.url(),
  NEXT_PUBLIC_BUYMEACOFFEE_URL: z.url(),
  NEXT_PUBLIC_EMAIL_ADDRESS: z.email(),
});

envVarsSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVarsSchema> {}
  }
}
