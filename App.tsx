import { StatusBar } from 'expo-status-bar';
import QuizScreen from './src/app/QuizScreen';
import QuizContextProvider from './src/providers/QuizProvider';


export default function App() {
  return (
  <QuizContextProvider>
        <QuizScreen />
      <StatusBar style="auto" />
   </QuizContextProvider>
  );
}
