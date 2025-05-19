import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useLocalSearchParams, router } from "expo-router";
import { TouchableOpacity } from "react-native";

const getProfile = (id: string) => {
  return [
    {
      name: "John Doe",
      age: 30,
      occupation: "Software Engineer",
      bio: "Passionate developer with expertise in React Native and TypeScript.",
    },
    {
      name: "Jane Doe",
      age: 25,
      occupation: "Software Engineer",
      bio: "Full-stack developer focusing on mobile applications and user experience.",
    },
    {
      name: "John Smith",
      age: 35,
      occupation: "Software Engineer",
      bio: "Senior engineer with 10+ years of experience building scalable applications.",
    },
  ][parseInt(id) - 1]; // Adjust index to match the 1-based id
};

export default function ProfileScreen() {
  const { id } = useLocalSearchParams();
  const profile = getProfile(id as string);

  if (!profile) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Profile not found</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarLarge}>
          <Text style={styles.avatarText}>{profile.name.charAt(0)}</Text>
        </View>
        <Text style={styles.name}>{profile.name}</Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Age</Text>
          <Text style={styles.infoValue}>{profile.age}</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Occupation</Text>
          <Text style={styles.infoValue}>{profile.occupation}</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.bioSection}>
          <Text style={styles.infoLabel}>Bio</Text>
          <Text style={styles.bioText}>{profile.bio}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 25,
  },
  avatarLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#2e78b7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  avatarText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  infoCard: {
    borderRadius: 12,
    padding: 20,
    width: "100%",
    maxWidth: 500,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 25,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  infoValue: {
    fontSize: 16,
    color: "#333",
  },
  bioSection: {
    paddingVertical: 10,
  },
  bioText: {
    fontSize: 16,
    color: "#333",
    marginTop: 8,
    lineHeight: 22,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    width: "100%",
  },
  button: {
    backgroundColor: "#2e78b7",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
