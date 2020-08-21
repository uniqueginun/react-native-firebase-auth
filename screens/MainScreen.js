import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

/**
 * screens
 */

import SplashScreen from "./SplashScreen";
import HomeScreen from "./HomeScreen";
import SignInScreen from "./SignInScreen";
import { AuthContext } from "../contexts/AuthContext";
import { AsyncStorage } from "react-native";

const Stack = createStackNavigator();

function MainScreen() {
  const { isLoading, userToken, isSignout, restoreToken } = useContext(
    AuthContext
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        // Restoring token failed
      }

      restoreToken(userToken);
    };

    bootstrapAsync();
  }, []);

  return (
    <Stack.Navigator>
      {isLoading ? (
        // We haven't finished checking for the token yet
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : userToken == null ? (
        // No token found, user isn't signed in
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: "Sign in",
            // When logging out, a pop animation feels intuitive
            animationTypeForReplace: isSignout ? "pop" : "push",
          }}
        />
      ) : (
        // User is signed in
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />
      )}
    </Stack.Navigator>
  );
}

export default MainScreen;
