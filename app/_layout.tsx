import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FinanceProvider } from "@/hooks/FinanceContex";

export default function RootLayout() {
  return (
    <>
      <FinanceProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="dark" />
      </FinanceProvider>
    </>
  )
}
