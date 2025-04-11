import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    padding: 12,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#1F1E25",
    height: 64,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#FFF",
    marginLeft: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E23C44",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 99,
    alignItems: "center",
    borderColor: "#4EA8DE",
    justifyContent: "center",
  },
  checkedbox: {
    width: 20,
    height: 20,
    borderRadius: 99,
    backgroundColor: "#5E60CE",
    alignItems: "center",
    justifyContent: "center",
  },
});
