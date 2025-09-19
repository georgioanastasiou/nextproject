import type { Metadata } from "next";
import { Inter, Playfair_Display} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter"});
const playfair = Playfair_Display({subsets: ["latin"], variable: "--font-playfair"})

export const metadata: Metadata = {
  title: "Writing That Resonates - A Modern Blog",
  description: "Insights on tech, design and creativity from a thought leader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <Navigation/>
            {children}
          </ThemeProvider>

      </body>
    </html>
  );
}
