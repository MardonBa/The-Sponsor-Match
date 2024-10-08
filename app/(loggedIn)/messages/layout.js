import { Rubik } from "next/font/google";
import "../../../app/globals.css";
import styles from './page.module.css';
import Sidebar from '@/app/ui/loggedIn/dashboardComponents/sidebar/sidebar';
import MessagesSidebar from '@/app/ui/loggedIn/dashboardComponents/sidebar/messages/messageSidebar';
import NavSideBar from '@/app/ui/loggedIn/dashboardComponents/sidebar/navsidebar';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className={styles.pagecontainer} >
            <Sidebar style={styles.navsidebar} >
                <NavSideBar forceCollapse={true} />
            </Sidebar>
            <Sidebar style={styles.messagesidebar} >
                <MessagesSidebar forceOpen={true} />
            </Sidebar>
            { children }
        </div>
      </body>
    </html>
  );
}
