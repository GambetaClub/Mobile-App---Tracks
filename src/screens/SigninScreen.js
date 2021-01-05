import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import Link from "../components/Link";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        title="Sign In"
        errorMessage={state.errorMessage}
        onSubmit={signin}
      />
      <Link
        text="Don't have an account? Sign up for an account"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = { headerShown: false };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 180,
  },
});

export default SigninScreen;
