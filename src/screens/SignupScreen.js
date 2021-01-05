import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import Link from "../components/Link";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        title="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <Link
        text="Already have an account? Sign in instead"
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = { headerShown: false };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 180,
  },
});

export default SignupScreen;
