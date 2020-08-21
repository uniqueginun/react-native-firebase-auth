import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import { Button, Icon } from "native-base";

const ProfileScreen = () => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Signed in!, Welcome to your account</Text>
      <Button block info onPress={signOut}>
        <Icon name="arrow-back" />
        <Text>Sign Out</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 10,
  },
});

export default ProfileScreen;
