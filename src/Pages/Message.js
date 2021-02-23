import React from "react";
import styled from "styled-components";

import GodPage from "../Components/GodPage";

class Massage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenGod: {
        desciption:
          "As the God of War he represents the distasteful aspects of brutal warfare and slaughter.",
        img: "/static/media/ares.810f885a.png",
        name: "Ares",
        power: "War, courage, battlelust",
        symbol: "Helm",
      },
    };
  }
  componentDidMount() {
    this.chooseG(this.props.match.params.name);
    console.log(this.chooseG(this.props.match.params.name));
  }

  chooseG(name) {
    const G = this.props.allGods.filter((god) => god.name === name);
    this.setState({ choosenGod: G[0] });
    console.log("g", G);
  }

  render() {
    const Message = styled.div`
      background-color: #131515;
      height: 100vh;
      color: #fff;
      text-align: center;
      display: flex;
    `;

    // const ImageDiv =styled.div`
    //     width: 50%;
    //     height: 93%;
    //     background-image:`url(${this.state.chooseGod.img})`;
    //     background-size: cover;
    //     background-position: center top;
    //     margin: 28px 0;
    // `

    const imageStyle = {
      width: "50%",
      height: "93%",
      background: `url(${this.state.choosenGod.img})`,
      backgroundSize: "cover",
      backgroundPosition: "center top",
      margin: "28px 0",
    };

    return (
      <Message>
        <div style={imageStyle}></div>
        <div
          className="wraper"
          style={{
            padding: "24px 24px 24px 4px",
            width: "50%",
            margin: "auto",
          }}
        >
          {this.state.choosenGod && <GodPage god={this.state.choosenGod} />}

          {/* <GetADuck /> */}
        </div>
      </Message>
    );
  }
}

export default Massage;
