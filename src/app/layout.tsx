import Footer from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { getSession } from "@/action/auth";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = localFont({
  src: [
    {
      path: "./fonts/Inter_24pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter_24pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});
const libre = localFont({
  src: [
    {
      path: "./fonts/LibreBaskerville-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/LibreBaskerville-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-libre",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TableSite",
    template: "%s | TableSite",
  },
  description:
    "Discover and book tables at your favorite restaurants with TableSite. Our platform connects diners with local eateries, offering real-time availability and seamless reservations. Whether you're craving a cozy cafe or a fine dining experience, TableSite makes it easy to find the perfect spot for any occasion. Join us today and experience dining made simple.",
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ async to allow await
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialSession = await getSession(); // ✅ await + correct variable name

  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.variable} ${libre.variable} font-sans`}
      >
        <AuthProvider initialSession={initialSession}>
          <div className="px-16 sticky top-0 z-10 bg-white">
            <NavBar />
          </div>
          {children}
        </AuthProvider>
        <div className="px-16 bg-dark">
          <Footer />
        </div>
      </body>
    </html>
  );
}
