import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { View, TextInput, StyleSheet } from "react-native";
import { Container, Content, Button, Item, Input, Text } from "native-base";

function SignInScreen() {
  const [email, setEmail] = useState("uniqueginun@gmail.com");
  const [password, setPassword] = useState("123456");

  const { signIn } = useContext(AuthContext);

  return (
    <Container style={styles.container}>
      <Content>
        <Text style={styles.title}>Login To Account</Text>
        <Item>
          <Input placeholder="Email" value={email} onChangeText={setEmail} />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </Item>
        <Button
          success
          block
          style={styles.btn}
          onPress={() => signIn({ email, password })}
        >
          <Text>Sign In</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 30,
    fontSize: 26,
    fontWeight: "bold",
  },
  btn: {
    marginTop: 20,
  },
});

export default SignInScreen;
