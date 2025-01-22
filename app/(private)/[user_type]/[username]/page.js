import styles from "./page.module.css";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const userType = router.query.user_type;
  const name = router.query.username; // will either be the username or the company name depending on the user type

  return (
    <>
    
    </>
  );
}