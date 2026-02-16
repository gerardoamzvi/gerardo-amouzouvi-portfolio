import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Gérardo AMOUZOUVI - Portfolio",
  description: "This is Gérardo AMOUZOUVI's portfolio",
   keywords: ["Gérardo AMOUZOUVI", "gerardo amouzouvi","gerardo amouzouvi portfolio", "gerardo amouzouvi projects"],
  type: "website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
