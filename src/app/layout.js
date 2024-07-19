import { Inria_Serif } from "next/font/google";
import "./globals.css";

const inria = Inria_Serif({ subsets: ["latin"] ,  weight: ["300", "400", "700"],});

export const dynamic = "force-dynamic";


export const metadata = {
  title: "Alex Heilbron",
  description: "Alex Heilbron's artist website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inria.className}>{children}</body>
    </html>
  );
}
