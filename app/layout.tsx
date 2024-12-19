import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "The Rongoa Collective",
  description: "A store to buy products made by The Collective Rongoa Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
