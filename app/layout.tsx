import type { Metadata } from "next";
import "./globals.css";
import WindowSize from "./components/window-size/module";

export const metadata: Metadata = {
  title: "Aboute Toffee35"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full bg-neutral-900" lang="en">
      <body className="h-full antialiased">
        {children}

        <WindowSize />
      </body>
    </html>
  );
}
