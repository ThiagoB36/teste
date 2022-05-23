import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import DnDNat from "./DnDNat/DnDNat"

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Teste de Drag and Drop</Text>
      <DnDNat />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
