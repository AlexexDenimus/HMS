import { Header } from "@/components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { PageLayout } from "@/components/layout/PageLayout";
import { Providers } from "./providers";

const inter = Montserrat({
  subsets: ["cyrillic", "latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <Header />
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  );
}
