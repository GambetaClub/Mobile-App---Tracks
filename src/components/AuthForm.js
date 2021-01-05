import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ title, errorMessage, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{title} for Tracker</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry={true}
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
      </Spacer>
      {errorMessage ? (
        <Spacer>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </Spacer>
      ) : null}
      <Spacer>
        <Button title={title} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 14,
    color: "red",
  },
});

export default AuthForm;
