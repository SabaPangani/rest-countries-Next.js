import classes from "./header.module.scss";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();

  function navigateHomeHandler() {
    router.push("/");
  }
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1 onClick={navigateHomeHandler}>Where in the world?</h1>
      </div>
    </header>
  );
}

export default Header;
