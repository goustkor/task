import React, { useState } from "react";
import axios from "axios";

import { Container, Input, InputSubmit, Title, FieldText } from "./styles";

export default function Form() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [userReg, setUserReg] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    var params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);
    axios
      .post("http://localhost/task/register.php", params)
      .then(function(response) {
        setUserReg([...userReg, response.data]);
      });
  }

  return (
    <>
      <Container onSubmit={e => handleSubmit(e)}>
        <Title> Register </Title>
        <FieldText> Username </FieldText>
        <Input
          type="text"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />

        <FieldText> Senha </FieldText>
        <Input
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />

        <br />
        <InputSubmit type="submit" value="Submit" />
      </Container>

      <ul>
        {userReg.map(res => (
          <li key={res.id}>
            ID:{res.id} | USERNAME: {res.username}
          </li>
        ))}
      </ul>
    </>
  );
}
