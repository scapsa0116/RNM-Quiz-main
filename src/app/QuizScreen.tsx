import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import FontAwesome6 from '@expo/vector-icons/FontAwesome';
import questions from '../questions';
export default function QuizScreen() {

  //responsible for the entire screen container

  const question = questions[0]


  return(
    <SafeAreaView style = {styles.page}>
      <View>
  
      <View style = {styles.header}><Text>Question 1/5</Text></View>

      <View > 
      <QuestionCard question = {question}/>
      <Text style = {styles.time}>20 s</Text>
      </View>
     
     <Pressable style = {styles.button} onPress = {() => console.warn('pressed')} onLongPress = {() => console.warn('ON LONG PRESS')}>
      
      
        <Text style = {styles.textButton}>Next</Text>
         <FontAwesome6
         name = "arrow-right-long"
         size={16}
         color="white"
         style={styles.buttonIcon}
         
        />
    
      
      
      </Pressable>
      
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
time:{
  textAlign: 'center',
  marginTop: 15,
  fontWeight: 'bold',
  color: 'rgb(0,81,85)'
},

button:{
    marginTop: 30,
    marginBottom: 50,
    borderRadius:100,
    backgroundColor: 'rgb(0,81,85)',
    padding:15,
    justifyContent: 'center',
    alignItems: 'center'
},

textButton:{

color: 'white',
fontWeight:500,
fontSize:16,
letterSpacing: 1.5,

}, 



buttonIcon:{
  position: 'absolute',
  right:20
  
  
}
})