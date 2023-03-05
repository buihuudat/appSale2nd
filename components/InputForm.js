import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function InputForm({
  label,
  placeholder,
  type,
  secure,
  data,
  setData,
}) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type}
        secureTextEntry={secure}
        label={label}
        value={data}
        onChangeText={(e) => setData(e)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
