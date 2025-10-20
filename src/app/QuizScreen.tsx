import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import QuestionCard from '../components/QuestionCard';
export default function QuizScreen() {

  //responsible for the entire screen container


  return(
    <SafeAreaView style = {styles.container}>
    <View >
      <View><Text>Header</Text></View>
      <QuestionCard/>
     
     <View><Text>Footer</Text></View>
      </View>
      </SafeAreaView>
  )
}
  
   
const styles = StyleSheet.create({

container:{
  
  backgroundColor: '#FDFEF4',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 200,
  padding: 20,
  
  
}

})