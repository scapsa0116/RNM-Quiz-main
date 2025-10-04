import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import QuestionCard from '../components/QuestionCard';
export default function QuizScreen() {


  return(
    <View style = {styles.container}>
     <QuestionCard/>
      </View>
  )
}
  
   
const styles = StyleSheet.create({

container:{
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 200,
  padding: 20,
  
  
}

})