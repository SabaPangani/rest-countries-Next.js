import classes from "./filter.module.scss";
import { InputGroup, InputLeftElement, Input, Select,  } from "@chakra-ui/react";
import { handler } from "@/pages/api/fetch-countries";
function Filter(props) {
  const submitHandler = async (e, type) => {
    const inputValue = e.target.value.toLowerCase();

    let countryData;

    if (type === "select") {
      console.log(inputValue);
      countryData = await handler(
        `https://restcountries.com/v3.1/region/${inputValue}`
      );
    } else if (type === "input") {
      if (inputValue === "") {
        countryData = await handler("https://restcountries.com/v3.1/all");
      } else {
        countryData = await handler(
          `https://restcountries.com/v3.1/name/${inputValue}`
        );
      }
    }

    props.onUpdateCountries(countryData);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
                  fill="#848484"
                />
              </svg>
            </InputLeftElement>
            <Input
              width={480}
              background={"white"}
              type="tel"
              placeholder="Search for a country…"
              onChange={(e) => {
                submitHandler(e, "input");
              }}
            />
          </InputGroup>
        </div>
        <div>
          <Select resetScope=".ck-reset"
            onChange={(e) => {
              submitHandler(e, "select");
            }}
            width={200}
            background={"white"}
            className={classes.select}
            defaultValue=""

          >
            <option value="" disabled hidden>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </Select>
        </div>
        <button type="submit" style={{ display: "none" }}></button>
      </div>
    </div>
  );
}

export default Filter;
