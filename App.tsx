import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import QuizScreen from './src/app/QuizScreen';


export default function App() {
  return (
  <View>
        <QuizScreen />
      <StatusBar style="auto" />
   </View>
  );
}
