import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from "next/font/google";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lecture15",
  description: "Mantine Form and Zod Validations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider theme={{ primaryColor: "pink" }}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
