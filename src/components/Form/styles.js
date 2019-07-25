import styled from "styled-components";

const bgColor = "#80b";

export const Container = styled.form`
  font-family: "Fira Code";
  color: #fff;
  flex: 1;
  width: 600px;
  background-color: ${bgColor};
  margin: 5px auto;
  text-align: center;
  padding: 1px 0px 40px;
`;

export const Title = styled.p`
  font-size: 2em;
  font-style: bold;
`;

export const Input = styled.input`
  width: 300px;
  margin: 5px 10px 0px;
  margin: 1px solid black;
  padding: 2px 3px;
  background-color: ${bgColor};
  border: 0;
  border-bottom: 1px solid white;
`;

export const InputSubmit = styled(Input)`
  margin: 30px 0 0;
  width: 100px;
  height: 30px;
  background-color: #ccc;
  border: 0;

  &:active {
    background-color: #fff;
  }
`;

export const FieldText = styled.p``;
