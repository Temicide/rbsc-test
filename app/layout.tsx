import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "สนามนี้คุณเป็นใคร | Horse Track Archetype Quiz",
  description:
    "แบบทดสอบสายบันเทิงสำหรับค้นหา archetype ของคุณในคอมมูนิตี้สาวม้า",
};

export const viewport: Viewport = {
  themeColor: "#fffafd",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="th">
      <body>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
