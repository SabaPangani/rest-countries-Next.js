import Back from "./back";
import classes from "./country-detail.module.scss";
import React from "react";
function CountryDetail({ country }) {
  return (
      <div className={classes.container}>
        <Back />
        <div className={classes.wrapper}>
          <img src={country.flags.png} />

          <div className={classes.details}>
            <h1>{country.name.common}</h1>

            <div className={classes.description}>
              <div className={classes.group}>
                <span className={classes.main}>
                  Native Name:{" "}
                  <span className={classes.sub}>{country.name.official}</span>
                </span>
                <span className={classes.main}>
                  Population:{" "}
                  <span className={classes.sub}>
                    {country.population.toLocaleString()}
                  </span>
                </span>
                <span className={classes.main}>
                  Region: <span className={classes.sub}>{country.region}</span>
                </span>
                <span className={classes.main}>
                  Sub Region:{" "}
                  <span className={classes.sub}>{country.subregion}</span>
                </span>
                <span className={classes.main}>
                  Capital:{" "}
                  <span className={classes.sub}>{country.capital}</span>
                </span>
              </div>
              <div className={classes.group}>
                <span className={classes.main}>
                  Top Level Domain:{" "}
                  {country.tld.map((tld) => (
                    <span className={classes.sub}>{tld}</span>
                  ))}
                </span>
                <span className={classes.main}>
                  Currencies:{" "}
                  {Object.values(country.currencies).map((currency) => (
                    <>
                      <span className={classes.sub}>{currency.name}</span>
                      <span className={classes.sub}> {currency.symbol}</span>
                    </>
                  ))}
                </span>
                <span className={classes.main}>
                  Languages:{" "}
                  <span className={classes.sub}>
                    {Object.entries(country.languages).map(([code, name]) => (
                      <span className={classes.sub}>
                        {code} {name}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            </div>
            <div className={classes.borders}>
              Border Countries:{" "}
              {country.borders.map((border) => (
                <span className={classes.border}>{border} </span>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default CountryDetail;
