import type { Metadata } from "next";
import { Barlow, Chakra_Petch } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const chakra = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NiceAce x Vibeco Prototype",
  description: "A working prototype for NiceAce launch planning and Vibeco product loops.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${chakra.variable}`}>{children}</body>
    </html>
  );
}
