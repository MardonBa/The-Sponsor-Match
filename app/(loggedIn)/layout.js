import { Rubik } from "next/font/google";
import "../../app/globals.css";


const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "The Sponsor Match",
  description: "Generated by create next app",
};

/*
Dashboards for both types of users will have the same layout,
a left and right sidebar with a large middle section and a short middle section at the bottom half
Dashboard should fill only one screen, shouldn't be taller
*/

export default function Layout({ children }) {
  return (
    <>
      {children}
    </>
  );
}

