import "./globals.css";
import { Figtree } from "next/font/google";
import ReduxProvider from "@/redux/ReduxProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "BeatSocial",
  description: "listen to your Tune",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
