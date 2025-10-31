import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import QuestionCard from '../components/QuestionCard';
export default function QuizScreen() {

  //responsible for the entire screen container


  return(
    <SafeAreaView style = {styles.page}>
      <View>
  
      <View style = {styles.header}><Text>Header</Text></View>

      <View > 
      <QuestionCard/>
      <Text style = {styles.time}>20 s</Text>
      </View>
     
     <View style = {styles.button}>
      <Text style = {styles.textButton}>Next</Text>
      </View>
      </View>
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
    alignItems: 'center',
    
},

button:{
    marginTop: 50,
    marginBottom: 50,
    borderRadius:100,
    backgroundColor: 'rgb(0,81,85)',
    padding:20,
},

textButton:{
textAlign: 'center',
color: 'white',
}, 

time:{
  textAlign: 'center',
  marginTop: 15,
  fontWeight: 'bold',
  color: 'rgb(0,81,85)'
}
})