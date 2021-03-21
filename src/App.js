import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCOYqNBjmWF8j-PzI7ZPjt_w&key=AIzaSyAMeZQW6sUQgLdDTnMVeokfbcFcT2A9SuA"
    )
      .then(res => res.json())
      .then(({ items }) => {
        this.setState({
          isLoaded: true,
          items
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) return <div>Loading...</div>;
    return (
      <div>
        <ul>
          {items.map(({ id, statistics }) => (
            <li key={id}>
              Total views: {statistics.viewCount}
              Total subscribers: {statistics.subscriberCount}
              Total videos: {statistics.videoCount}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;