import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
  },
  box: {
    height: 173,
    backgroundColor: "#0D0D0D",
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    fontSize: 16,
    color: "#FFF",
    marginRight: 4,
    borderRadius: 5,
    backgroundColor: "#1F1E25",
    borderWidth: 2,
    borderColor: "#0D0D0D",
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
    backgroundColor: "#1E6F9F",
  },
  form: {
    width: "100%",
    marginTop: 40,
    marginBottom: 42,
    flexDirection: "row",
  },
  listEmptyText: {
    color: "#808080",
    marginTop: 16,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  listEmptyTextSecondary: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
  },
  tasksCreatedLabel: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  tasksCreatedNumberLabel: {
    color: "#D9D9D9",
    fontSize: 14,
    fontWeight: "bold",
  },
  numberTasksContainer: {
    backgroundColor: "#333333",
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
});
