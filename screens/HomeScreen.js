import React from "react";
import { View, Text } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import { Button } from "native-base";

function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!, Welcome to your account</Text>
      <Button title="Sign out" color="secondary" onPress={signOut}>
        <Text>Sign Out</Text>
      </Button>
    </View>
  );
}

export default HomeScreen;
