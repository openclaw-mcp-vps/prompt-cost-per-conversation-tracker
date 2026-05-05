import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptCost — Track AI Prompt Costs Per Conversation",
  description: "Embed tracking code to monitor AI prompt costs per customer chat session. Set budget alerts and stop overspending on AI."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b1b85163-2ec0-4ad6-ad55-4ec0a51ca051"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
