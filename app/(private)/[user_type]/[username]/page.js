import { getCreatorData, getSponsorData } from "./action";
import styles from "./page.module.css";
import NavSideBar from "@/app/ui/private/dashboardComponents/sidebar/navsidebar";
import DisplayCreator from "@/app/ui/private/userPages/creator/displayCreator";
import DisplaySponsor from "@/app/ui/private/userPages/sponsor/displaySponsor";

export default async function Page({
  params
}) {
  const userType = (await params).user_type;
  const name = decodeURIComponent((await params).username); // will either be the username or the company name depending on the user type

  let data;
  let component;
  if (userType == "creator") {
    data = getCreatorData(name);
    component = <DisplaySponsor userData={data} />
  } else {
    data = getSponsorData(name);
    component = <DisplayCreator userData={data} />
  }

  return (
    <div className={styles.pagecontainer}>
      <NavSideBar />
      <div className={styles.platformscontainer}>
        {component}
      </div>
    </div>
  );
}

