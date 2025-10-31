import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import QuestionCard from '../components/QuestionCard';
export default function QuizScreen() {

  //responsible for the entire screen container


  return(
    <SafeAreaView style = {styles.page}>
  
      <View style = {styles.header}><Text style = {styles.text}>Header</Text></View>

      <View style = {styles.time}> 
      <QuestionCard/>
      <Text>20 s</Text>
      </View>
     
     <View style = {styles.footer}><Text style = {styles.text}>Footer</Text></View>
      
      </SafeAreaView>
  )
}
  
   
const styles = StyleSheet.create({

  page:{
    backgroundColor: '#FDFEF4',
    alignItems: 'center',
    justifyContent: 'space-between',

  
  },

header:{
    marginTop: 100,
    marginBottom: 50,
    
},

text:{
textAlign: 'center',
    color: '005055'
}, 

footer:{
    marginTop: 50,
    marginBottom: 50,
},
time:{
  textAlign: 'center',
  marginTop: 15
}
})