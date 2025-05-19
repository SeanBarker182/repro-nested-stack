import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Navigation Demo</Text>

        <View style={styles.instructionContainer}>
          <Text style={styles.instructionTitle}>Expected Behavior:</Text>
          <Text style={styles.instructionText}>
            Go to the directory index page through the directory tab, then tap
            on a name to open a profile page.
          </Text>
        </View>

        <View style={styles.instructionContainer}>
          <Text style={styles.instructionTitle}>Unexpected Behavior:</Text>
          <Text style={styles.instructionText}>
            Reload the app then use the button below to navigate directly to the
            profile page without visiting the directory index first. Notice that
            there's no way to open the directory index since it wasn't pushed to
            the stack first.
          </Text>
        </View>

        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/directory/1")}
        >
          <Text style={styles.buttonText}>Go to Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  content: {
    width: "100%",
    maxWidth: 500,
    alignItems: "flex-start",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    alignSelf: "center",
  },
  instructionContainer: {
    marginBottom: 20,
    width: "100%",
  },
  instructionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  instructionText: {
    fontSize: 16,
    lineHeight: 22,
  },
  separator: {
    marginVertical: 25,
    height: 1,
    width: "100%",
  },
  button: {
    backgroundColor: "#2e78b7",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
