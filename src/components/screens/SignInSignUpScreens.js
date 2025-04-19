import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Form from "../UI/Form";
import Icons from "../UI/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONTS, SPACING, STYLES } from "../../config/theme";

const USERS_KEY = "users";

export const SignUpScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (field, value) =>
    setUser((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    try {
      const stored = await AsyncStorage.getItem(USERS_KEY);
      const users = stored ? JSON.parse(stored) : [];
      if (
        users.find(
          (u) => u.username === user.username || u.email === user.email
        )
      ) {
        Alert.alert("Error", "Username or email already exists");
        return;
      }
      const newUser = { id: Date.now().toString(), ...user };
      await AsyncStorage.setItem(
        USERS_KEY,
        JSON.stringify([...users, newUser])
      );
      Alert.alert("Success", "Account created! Please sign in.");
      navigation.replace("SignIn");
    } catch {
      Alert.alert("Error", "Could not save user");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <Form
        onSubmit={handleSubmit}
        submitLabel="Sign Up"
        submitIcon={<Icons.Add />}
      >
        <Form.InputText
          label="First Name"
          value={user.firstName}
          onChange={(v) => handleChange("firstName", v)}
        />
        <Form.InputText
          label="Last Name"
          value={user.lastName}
          onChange={(v) => handleChange("lastName", v)}
        />
        <Form.InputText
          label="Username"
          value={user.username}
          onChange={(v) => handleChange("username", v)}
        />
        <Form.InputText
          label="Email"
          value={user.email}
          onChange={(v) => handleChange("email", v)}
          keyboardType="email-address"
        />
        <Form.InputText
          label="Password"
          value={user.password}
          onChange={(v) => handleChange("password", v)}
          secureTextEntry
        />
      </Form>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignIn")}
        style={styles.switchLink}
      >
        <Text style={styles.switchText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export const SignInScreen = ({ navigation }) => {
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (field, value) =>
    setCredentials((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    try {
      const stored = await AsyncStorage.getItem(USERS_KEY);
      const users = stored ? JSON.parse(stored) : [];
      const user = users.find(
        (u) =>
          (u.username === credentials.identifier ||
            u.email === credentials.identifier) &&
          u.password === credentials.password
      );
      if (!user) {
        Alert.alert("Error", "Invalid credentials");
        return;
      }
      await AsyncStorage.setItem("currentUser", JSON.stringify(user));
      navigation.replace("Social");
    } catch {
      Alert.alert("Error", "Could not sign in");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back</Text>
      <Form
        onSubmit={handleSubmit}
        submitLabel="Sign In"
        submitIcon={<Icons.User />}
      >
        <Form.InputText
          label="Username or Email"
          value={credentials.identifier}
          onChange={(v) => handleChange("identifier", v)}
        />
        <Form.InputText
          label="Password"
          value={credentials.password}
          onChange={(v) => handleChange("password", v)}
          secureTextEntry
        />
      </Form>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={styles.switchLink}
      >
        <Text style={styles.switchText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...STYLES.container,
    justifyContent: "center",
    padding: SPACING.large,
  },
  header: {
    ...FONTS.header,
    color: COLORS.primaryText,
    textAlign: "center",
    marginBottom: SPACING.large,
  },
  switchLink: {
    marginTop: SPACING.medium,
    alignSelf: "center",
  },
  switchText: {
    ...FONTS.caption,
    color: COLORS.link,
  },
});

export default { SignUpScreen, SignInScreen };
