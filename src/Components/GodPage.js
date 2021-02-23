import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Buttons";
import { Description, Powers, Title } from "./Typography";

function GodPage(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
      <Title>{props.god.name}</Title>
      <hr style={{ width: "20%" }} />
      <Powers>{props.god.power}</Powers>
      <Description>{props.god.description}</Description>
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
          <Button
            modifiers={["opposite"]}
            type="submit"
            value="Submit and request Sacrifice"
          />{" "}
        </Link>
      </GodForm>
    </>
  );
}

export default GodPage;
