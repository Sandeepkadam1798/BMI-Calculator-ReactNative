// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import BmiCalculator from './src/BmiCalculator';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <BmiCalculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
