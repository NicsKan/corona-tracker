import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/corona.png";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleChange = async country => {
    console.log(country);
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
    console.log(country);
  };

  render() {
    console.log(this.state.data);
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={this.state.data} />
        <CountryPicker handleChange={this.handleChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
