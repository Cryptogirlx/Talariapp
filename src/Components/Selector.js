import React, { Component } from "react";
import styled from "styled-components";
import Select from "react-select";
import { GodsArray } from "./InternalData";
import GodsList from "../Components/GodsList";

const options = [
  { value: "war", label: "war" },
  { value: "crafts", label: "crafts" },
  { value: "wisdom", label: "wisdom" },
  { value: "agriculture", label: "farming" },
  { value: "grain", label: "food" },
  { value: "parties, festivity", label: "parties" },
  { value: "wine", label: "alcohol" },
  { value: "madness", label: "madness" },
  { value: "marriage", label: "marriage" },
  { value: "trade", label: "trade" },
  { value: "thievery", label: "thievery" },
  { value: "athletics", label: "athletics" },
  { value: "messengers", label: "messages" },
  { value: "sea", label: "sea" },
  { value: "earthquakes", label: "earthquakes" },
  { value: "storms", label: "storms" },
  { value: "horses", label: "horses" },
  { value: "hospitality", label: "hospitality" },
  { value: "honor", label: "honor" },
  { value: "wealth", label: "wealth" },
  { value: "the dead", label: "death" },
  { value: "chance", label: "chance" },
  { value: "witchcraft", label: "witchcraft" },
  { value: "magic", label: "magic" },
  { value: "ghosts", label: "ghosts" },
  { value: "love", label: "love" },
  { value: "beauty", label: "beauty" },
  { value: "procreation", label: "procreation" },
  { value: "music", label: "music" },
  { value: "healing", label: "healing" },
  { value: "courage", label: "courage" },
  { value: "hunting", label: "hunting" },
  { value: "animals", label: "animals" },
  { value: "children", label: "children" },
  { value: "law", label: "law" },
  { value: "travel", label: "travel" },
];

function dynamicSort(property) {
  var sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a, b) {
    if (sortOrder == -1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }
  };
}

let optionsSorted = options.sort(dynamicSort("label"));
console.log("options", optionsSorted);

//console.log("gods", GodsArray)

const yourGod = GodsArray.reduce((acc, current) => {
  const containsWar = () =>
    Object.values(current).some((el) => `${el}`.includes("war"));
  if (containsWar()) {
    return [...acc, current];
  }
  return acc;
}, []);
console.log("your god", yourGod);

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange(event) {
    console.log(event);
    this.setState({ value: event.value });
    // we don't really need the state in this componenet, i thinks
    this.props.onSearch(event.value);
    console.log("val", this.state.value);
  }

  render() {
    const H2 = styled.h2`
      font-family: cinzel;
      font-size: 44px;
      letter-spacing: 0.16px;
      margin: 24px auto 10px;
      text-align: center;
      color: #9effea;
    `;

    const colourStyles = {
      option: (styles) => {
        return {
          ...styles,
          color: "white",
        };
      },
    };
    return (
      <div style={{ backgroundColor: "#131515", height: "100%" }}>
        <H2>What do you need help with?</H2>
        <form>
          <div style={{ width: "30%", margin: "auto" }}>
            <Select
              styles={colourStyles}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,

                colors: {
                  ...theme.colors,
                  primary: "gray",
                  neutral0: "#131515", //bg
                  neutral20: "lightgray", //farme
                  primary25: "#474747", //hover
                  neutral80: "gray", //text in the select
                  primary50: "#9effea", //down
                  neutral50: "gray", //  text not actoive inside
                  neutral60: "gray", //V
                  neutral40: "lightgray", //some kindof click on V
                  neutral30: "lightgray", //hover on the frame
                },
              })}
              options={optionsSorted}
              onChange={(event) => this.handleChange(event)}
            />
          </div>
        </form>
        <GodsList godattributes={this.props.godattributes} />
      </div>
    );
  }
}

export default Selector;
