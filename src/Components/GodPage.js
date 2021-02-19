import styled from "styled-components";

import { Link } from "react-router-dom";

function GodPage(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const Input = styled.input`
    font-family: cinzel;
    font-weight: bolder;
    font-size: 16px;
    background: #9effea;
    border: none;
    margin-top: 16px;
    padding: 8px 16px;
    color: #1f2322;
    border: solid 1px #9effea;
    &:hover {
      background-color: transparent;
      border: solid 1px #9effea;
      color: #9effea;
    }
    &:focus {
      outline: none;
    }
  `;
  const H2 = styled.h2`
    font-family: cinzel;
    font-size: 44px;
    letter-spacing: 0.16px;
    margin: auto;
    text-align: center;
    color: #9effea;
  `;

  const Description = styled.p`
    max-width: 450px;
    margin: auto;
    font-family: raleway;
  `;
  const Powers = styled.p`
    max-width: 450px;
    margin: 16px auto;
    font-family: raleway;
    font-weight: 700;
  `;
  const GodForm = styled.form`
    margin: 24px auto 0;
    width: 100%;
  `;

  const FormLabels = styled.label`
    font-size: 12px;
    text-align: left;
    display: inline-block;
    width: 70%;
  `;
  const FormInputs = styled.input`
    background-color: transparent;
    font-family: raleway;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: #fff;
    border: none;
    border-bottom: solid 1px #fff;
    width: 100%;
    margin: 4px auto 8px;
    font-size: 24px;
    &:focus {
      background-color: rgba(200, 200, 200, 0.1);
      outline: none;
    }
  `;
  const Textarea = styled.textarea`
    background-color: transparent;
    font-family: raleway;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: #fff;
    border: none;
    border-bottom: solid 1px #fff;
    width: 100%;
    height: 26px;
    margin: 4px auto 8px;
    font-size: 24px;
    &:focus {
      background-color: rgba(200, 200, 200, 0.1);
      outline: none;
    }
  `;
  //console.log(props)

  return (
    <>
      <H2>{props.god.name}</H2>
      <hr style={{ width: "20%" }} />
      <Powers>{props.god.power}</Powers>
      <Description>{props.god.Description}</Description>
      <GodForm onSubmit={handleSubmit}>
        <FormLabels>
          Name:
          <br />
          <FormInputs type="text" name="name" />
        </FormLabels>
        <br />

        <FormLabels>
          City:
          <br />
          <FormInputs type="text" name="name" />
        </FormLabels>
        <br />

        <FormLabels>
          Prayer:
          <br />
          <Textarea />
          <br />
        </FormLabels>
        <br />

        <Link to="/ducksess">
          {" "}
          <Input type="submit" value="Submit and request Sacrifice" />{" "}
        </Link>
      </GodForm>
    </>
  );
}

export default GodPage;
