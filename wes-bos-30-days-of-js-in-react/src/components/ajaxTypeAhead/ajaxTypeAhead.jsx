import React from 'react';
import ShortId from 'shortid';
import StringReplace from 'react-string-replace';

class Typeahead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
      allCities: [],
      suggestions: [],
      searchQuery: '',
    };
    this.keyUpHandler = this.keyUpHandler.bind(this);
  }
  componentWillMount() {
    this.getData();
  }
  getData() {
    fetch(this.state.endpoint)
      .then(blob => blob.json())
      .then(data => this.state.allCities.push(...data));
  }
  keyUpHandler(event) {
    this.setState({
      searchQuery: event.target.value,
      suggestions: this.findMatches(this.state.searchQuery),
    });
  }
  findMatches(wordToMatch) {
    return this.state.allCities.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex);
    });
  }
  // eslint-disable-next-line
  numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  highlight(string) {
    return StringReplace(string, this.state.searchQuery, match => (
      <span className="hl" key={`${ShortId.generate()}`}>{match}</span>
    ));
  }
  render() {
    const placeholder = <li>Filter by city or state</li>;
    const suggestionsList = this.state.suggestions.map(location => (
      <li key={`${ShortId.generate()}`}>
        <span className="name">{this.highlight(location.city)}, {this.highlight(location.state)}</span>
        <span className="population">{this.numberWithCommas(location.population)}</span>
      </li>
    ));
    return (
      <form className="search-form">
        <input
          className="search"
          type="text"
          placeholder="City or State"
          value={this.state.searchQuery}
          onChange={this.keyUpHandler}
          onKeyUp={this.keyUpHandler}
        />
        <ul className="suggestions">
          {this.state.searchQuery === '' ? placeholder : suggestionsList}
        </ul>
      </form>
    );
  }
}

export default Typeahead;
