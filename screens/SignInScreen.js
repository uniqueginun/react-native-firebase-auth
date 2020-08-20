import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { View, TextInput, Button } from "react-native";
import { Text } from "native-base";

function SignInScreen() {
  const [email, setEmail] = useState("uniqueginun@gmail.com");
  const [password, setPassword] = useState("123456");

  const { signIn, userToken } = useContext(AuthContext);

  return (
    <View>
      <Text>{userToken ? "signed in" : "Login"}</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={() => signIn({ email, password })} />
    </View>
  );
}

export default SignInScreen;
