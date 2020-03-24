const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (city) {
    this.setState({isLoading: true});

    openWeatherMap.getTemp(city).then((temp) => {
        this.setState({
          location: city,
          temp: temp,
          isLoading: false
        })
      }, (err) => {
        alert(err);
        this.setState({isLoading: false});
      });
  },
  render: function () {
    const {isLoading, temp, location} = this.state;

    function renderMessage () {
      if(isLoading) {
        return <h3>Loading ....</h3>
      } else if(temp && localStorage) {
        return <WeatherMessage message={`It's ${temp} in ${location}`} />
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;

