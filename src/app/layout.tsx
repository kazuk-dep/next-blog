import PublicHeader from "@/components/layouts/PublicHeader";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <PublicHeader />
        {children}
      </body>
    </html>
  );
}
