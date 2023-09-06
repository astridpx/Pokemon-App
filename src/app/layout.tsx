import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Logo from "@/assets/logo.png";

const inter = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "Pokemon API app create with next app",
  icons: [{ rel: "icon", url: Logo.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
