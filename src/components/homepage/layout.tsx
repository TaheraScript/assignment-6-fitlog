import { Oswald } from "next/font/google";

const oswald = Oswald({         
  subsets: ['latin'],
  variable: '--font-oswald',
});
export default function BannerLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} `}>
      <body>{children}</body>
    </html>
  );
}