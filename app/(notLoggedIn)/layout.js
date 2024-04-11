import { Rubik } from "next/font/google";
import "../globals.css";
import LandingHeader from "../ui/notLoggedIn/header/header";
import LandingFooter from "../ui/notLoggedIn/footer/footer";


const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "The Sponsor Match",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={rubik.className}>
            <LandingHeader />
            {children}
            <LandingFooter />
        </body>
    </html>
  );
}
