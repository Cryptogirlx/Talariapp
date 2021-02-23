import React from "react";
import axios from "axios";
import { Route, BrowserRouter as Router } from "react-router-dom";

//pages
import Message from "./Pages/Message";
import Selector from "./Pages/Selector";

import GetADuck from "./Components/RandomDuck";
//data
import { GodsArray } from "./data/InternalData";
//images
import Home from "./Pages/Home";
import hermes from "./Images/hermes.gif";
//CSS
import "./App.css";
import { colors } from "./utils/colors";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: GodsArray,
      filtered: GodsArray,
      answer: "",
      name: [],
      search: "",
      choosenGod: [],
      loading: true,
    };
  }

  componentDidMount() {
    const url =
      "https://8ball.delegator.com/magic/JSON/Will%20my%20prayer%20be%20answered?";

    axios
      .get(url)
      .then((response) => {
        setTimeout(() => {
          this.setState({ loading: false });
        }, 3500);
        this.setState({ answer: response.data });
        console.log("8ball", this.state.answer.magic.answer);
      })
      .catch((err) => {
        console.log("error??", err);
      });
  }

  // this function funs the filter only when the state changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.godFilter();
    }
  }

  // this is annkia's fillter function it was just moved to app
  // maybe we should add all or something to clear everything
  godFilter() {
    const yourGod = GodsArray.reduce((acc, current) => {
      const containsWar = () =>
        Object.values(current).some((el) =>
          `${el}`.includes(this.state.search)
        );
      if (containsWar()) {
        return [...acc, current];
      }
      return acc;
    }, []);
    console.log("your god", yourGod);
    this.setState({ filtered: yourGod });
  }

  //this function gets thesearch from the selector component

  handleSearch(key) {
    this.setState({ search: key });
    // setTimeout(() => {
    //   console.log("timeout", this.state.search)
    // }, 1000);
  }

  // componentDidUpdate(prevSate, prevProps) {
  //   if (prevState.choosenGod !== this.state.choosenGod) {

  //   }
  // }

  // chooseGod (name) {
  //   this.setState({ choosenGod: this.state.filtered.filter((god) => god.name === name) })
  //   // console.log("god", this.state.filtered.filter((god) => god.name === name))
  //   return this.state.filtered.filter((god) => god.name === name)
  // }

  render() {
    //console.log(this.state.data)

    return (
      <Router>
        <div
          className="App"
          style={{
            backgroundColor: this.state.loading ? `${colors.loader}` : "",
            height: "100vh",
          }}
        >
          {/* <GodsList godattributes={this.state.data} /> */}
          {this.state.loading ? (
            <img src={hermes} alt="loading..." />
          ) : (
            <>
              <Route
                exact
                path="/contact/:name"
                render={(props) => (
                  <Message
                    {...props}
                    allGods={this.state.data}
                    onGod={(godName) => {
                      this.chooseGod(godName);
                    }}
                  />
                )}
              ></Route>
              <Route
                exact
                path="/select"
                render={() => (
                  <Selector
                    godattributes={this.state.filtered}
                    onSearch={(key) => {
                      this.handleSearch(key);
                    }}
                  />
                )}
              ></Route>
              <Route
                exact
                path="/ducksess"
                render={() => <GetADuck answer={this.state.answer} />}
              ></Route>
              <Route exact path="/" component={Home} />
            </>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
