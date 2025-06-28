import { Urbanist } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const urbanist = Urbanist({
  variable: "--font-urbanist",
});

export const metadata = {
  title: "The Kalam Foundation",
  description: "Analytics for the Kalam Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
