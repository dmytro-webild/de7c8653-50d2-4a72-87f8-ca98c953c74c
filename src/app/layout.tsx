import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: "Vestaa Premium Mobilya | Lüks Yaşam Alanları",
  description: "Vestaa Premium Mobilya ile yaşam alanınıza dijital dokunuşlar katın. Özel tasarım lüks koltuk takımları, yemek odaları ve yatak odaları koleksiyonlarımızla tanışın.",
  openGraph: {
    "title": "Vesta Premium Mobilya | Lüks Yaşam Alanları",
    "description": "Vesta Premium Mobilya ile yaşam alanınıza dijital dokunuşlar katın. Özel tasarım lüks koltuk takımları, yemek odaları ve yatak odaları koleksiyonlarımızla tanışın.",
    "url": "https://vestapremium.com",
    "siteName": "Vesta Premium Mobilya",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/modern-kitchen-interior-with-island-armchair-stylish-open-space-home-design_169016-72732.jpg",
        "alt": "Lüks mobilya oturma odası"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Vesta Premium Mobilya | Lüks Yaşam Alanları",
    "description": "Vesta Premium Mobilya ile yaşam alanınıza dijital dokunuşlar katın. Özel tasarım lüks koltuk takımları, yemek odaları ve yatak odaları koleksiyonlarımızla tanışın.",
    "images": [
      "http://img.b2bpic.net/free-photo/modern-kitchen-interior-with-island-armchair-stylish-open-space-home-design_169016-72732.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
