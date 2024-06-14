import type { Metadata } from "next";
import '@/styles/global.scss';

export const metadata: Metadata = {
  title: "Billiard Booking App",
  description: "Booking app for billiard place in Indonesia to help handling customer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
