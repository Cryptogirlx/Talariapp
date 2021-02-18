import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Home.css";
import styled from "styled-components";


const Description = styled.p`
        font-family: raleway;
        margin-bottom: 70px;
    `
    const Title=styled.h1`
    font-family:cinzel;
    font-size:58px;
    margin-bottom: 0;
    `

    const Input = styled.input`
        font-family: cinzel;
        font-weight: bolder;
        font-size: 16px;
        
        background-color: transparent;
        border: none;
        margin-top: 16px;
        padding: 8px 16px;
        
        color: #9EFFEA;
        border: solid 1px #9EFFEA;
        &:hover {
            background: #9EFFEA;
            border: solid 1px #9EFFEA;
            color: #1F2322;
          }
          &:focus {
            outline: none;
         }
          `

export class Home extends Component {
    render() {
        return (
            <>
            <div className="Container" >
                <Title>TalariApp</Title>
            
            <Description>
                <h2>Making a request to the gods is easier than ever!</h2>
                  
               <p> All it takes is 3 simple steps.
                    <ul>
                        <li>1. Select the nature of your request.</li>
                        <li>2. We will match you with the perfect god or goddess for your unique needs!</li>
                        <li>3. Simply write a message to your god or goddess, select an optional sacrifice, 
                            and we will take care of the rest!</li>
                </ul>
                </p>
            <Link to="/select"> <Input type="submit" value="Pray Now"/> </Link>
            </Description>
            </div>
            </>
        )
    }
}

export default Home;
