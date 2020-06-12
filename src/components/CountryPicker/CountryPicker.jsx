import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountryData } from "../../api";

const CountryPicker = ({ handleChange }) => {
  const [fetchCountries, setFetchCountries] = useState([]);
  useEffect(() => {
    const fetchContriesData = async () => {
      setFetchCountries(await fetchCountryData());
    };
    fetchContriesData();
  }, [setFetchCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={e => handleChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
