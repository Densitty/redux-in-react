import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchWeather from "./action/fetchWeather";
import testThunk from "./action/testThunk";

const Weather = (props) => {
  const [city, setCity] = React.useState("London");

  const weather = props.weather;

  React.useEffect(() => {
    props.testThunk();
  });

  const changeCity = (e) => {
    setCity(e.target.value);
  };

  if (!weather.main) {
    return (
      <div>
        <input type="text" onChange={changeCity} value={city} />
        <button
          onClick={() => {
            props.fetchWeather(city);
          }}
        >
          Fetch Weather!
        </button>
      </div>
    );
  }
  return <h3>It's currently {weather.main.temp}</h3>;
};

/*
class Weather extends React.Component {
  state = { city: "London" };
  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };

  render() {
    console.log(this.props.weather);
    const weather = this.props.weather;
    if (!weather.main) {
      return (
        <div>
          <input
            type="text"
            onChange={this.changeCity}
            value={this.state.city}
          />
          <button
            onClick={() => {
              this.props.fetchWeather(this.state.city);
            }}
          >
            Fetch Weather!
          </button>
        </div>
      );
    }
    return <h3>It's currently {weather.main.temp}</h3>;
  }
}
*/

function mapStateToProps(state) {
  return {
    weather: state.weather,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchWeather: fetchWeather,
      testThunk: testThunk,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
