import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sd1.org"),
  title: {
    default: "Central Boone County Conveyance | Sanitation District No. 1",
    template: "%s | Sanitation District No. 1",
  },
  description:
    "Why SD1 selected Alternative B2 for the Central Boone County sewer project: fewer overflows, expanded public sewer service, the Bullittsville Pump Station eliminated and lower long-term costs.",
  openGraph: {
    type: "website",
    siteName: "Sanitation District No. 1 of Northern Kentucky",
    images: [{ url: "/hero-sd1-facility.jpg", width: 2600, height: 1733 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-sd1-mist">{children}</body>
    </html>
  );
}
