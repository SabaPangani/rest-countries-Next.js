import { Card, Image, CardBody, Stack, Heading } from "@chakra-ui/react";
import classes from "./country.module.scss";
import { useRouter } from "next/router";

function country(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.name);
  }
  return (
    <Card maxW="sm" className={classes.card} onClick={showDetailsHandler}>
      <CardBody p='0' className={classes["card-body"]}>
        <Image
          className={classes.flag}
          src={props.img}
        />
        <Stack mt="6" spacing="3">
          <Heading className={classes.name} size="md">
            {props.name}
          </Heading>
          <div className={classes.desc}>
            <span>
              Population:{" "}
              <span className={classes.info}>{props.population.toLocaleString()}</span>
            </span>
            <span>
              Region: <span className={classes.info}>{props.region}</span>
            </span>
            <span>
              Capital: <span className={classes.info}>{props.capital}</span>
            </span>
          </div>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default country;
