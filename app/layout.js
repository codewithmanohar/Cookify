import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/session-provider"
import { Header } from "@/components/Header";
import ToastProvider from "@/components/toast-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const space_grotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
  subsets: ["latin"],
});


export const metadata = {
  title: "Cookify",
  description: "Generate Recipe with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider >
        <body
          className={`${space_grotesk.className}  antialiased`}
        >
          <ToastProvider />
            <Header />
            {children}
        </body>
      </SessionProvider>

    </html>
  );
}