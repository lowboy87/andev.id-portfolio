import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "Andre Dev — Portofolio",
    template: "%s | Andre Dev",
  },
  description:
    "Portfolio & jasa digital premium. Fullstack Developer spesialis web development modern, sistem informasi, dan UI/UX. Berbasis di Kabupaten Siak, Riau.",
  keywords: [
    "fullstack developer",
    "web developer Indonesia",
    "jasa pembuatan website",
    "sistem informasi",
    "Next.js developer",
    "freelance programmer",
    "Riau developer",
  ],
  authors: [{ name: "Andre", url: "https://andredev.id" }],
  creator: "Andre",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://andredev.id",
    title: "Andre Dev — Fullstack Developer",
    description:
      "Portfolio & jasa digital premium. Fullstack Developer modern.",
    siteName: "Andre Dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andre Dev — Fullstack Developer",
    description: "Portfolio & jasa digital premium.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "hsl(222,47%,9%)",
                border: "1px solid rgba(6,182,212,0.2)",
                color: "#e2e8f0",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
