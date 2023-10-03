import { useRouter } from "next/router";
import classes from "./back.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
function Back() {
  const router = useRouter();

  const routingHandler = () => {
    router.push('/');
  };
  return (
    <div className={classes.wrapper} onClick={routingHandler}>
      <i className={"bi bi-arrow-left"} style={{ fontSize: "22px" }} />
      <span className={classes.back}>Back</span>
    </div>
  );
}

export default Back;
