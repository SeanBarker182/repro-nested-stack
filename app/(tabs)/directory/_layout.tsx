import { Stack } from "expo-router";

export default function DirectoryLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="[id]"
        options={{
          headerBackButtonMenuEnabled: true,
        }}
      />
    </Stack>
  );
}
