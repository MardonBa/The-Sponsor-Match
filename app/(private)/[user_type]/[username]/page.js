import { getCreatorData, getSponsorData } from "./action";
import styles from "./page.module.css";

export default async function Page({
  params
}) {
  const userType = (await params).user_type;
  const name = decodeURIComponent((await params).username); // will either be the username or the company name depending on the user type

  let data;
  if (userType == "creator") {
    data = getCreatorData(name);
  } else {
    data = getSponsorData(name);
  }

  return (
    <>
    
    </>
  );
}