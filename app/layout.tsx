import { ThemeProvider } from "@/utils/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const raleway = localFont({
  src: [
    { path: "./fonts/Raleway-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/Raleway-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/Raleway-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Raleway-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Raleway-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Raleway-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Raleway-Light.ttf", weight: "300", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Los Varela",
  description: "Una app para enviar combos a sus familiares en Cuba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${raleway.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
