import { getCreatorData, getSponsorData } from "./action";
import styles from "./page.module.css";
import NavSideBar from "@/app/ui/private/dashboardComponents/sidebar/navsidebar";
import Sidebar from "@/app/ui/private/dashboardComponents/sidebar/sidebar";
import DisplayCreator from "@/app/ui/private/userPages/creator/displayCreator";
import DisplaySponsor from "@/app/ui/private/userPages/sponsor/displaySponsor";

export default async function Page({
  params
}) {
  const userType = (await params).user_type;
  const name = decodeURIComponent((await params).username); // will either be the username or the company name depending on the user type

  let data;
  let component;
  if (userType == "sponsor") {
    data = getSponsorData(name);
    component = <DisplaySponsor userData={data} />
  } else {
    data = getCreatorData(name);
    component = <DisplayCreator userData={data} />
  }

  return (
    <div className={styles.pagecontainer}>
      <Sidebar style={styles.sidebar} >
        <NavSideBar />
      </Sidebar>
      <div className={styles.datacontainer}>
        {component}
      </div>
    </div>
  );
}

