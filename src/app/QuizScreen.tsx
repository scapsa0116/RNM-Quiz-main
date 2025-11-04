import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import questions from '../questions';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import FontAwesome6 from '@expo/vector-icons/FontAwesome';



export default function QuizScreen() {
  //responsible for the entire screen container
  const question = questions[0]

  return(
    <SafeAreaView style = {styles.page}>
      <View>
      <View style = {styles.header}><Text>Question 1/5</Text></View>
{question? 
       (<View><QuestionCard question = {question}/><Text style = {styles.time}>20 s</Text></View>)
     : (<Card title='Well Done!'><Text>Correct Answe 3/5</Text><Text>Best Score: 5</Text></Card>)}
     <CustomButton 
     title = 'Next' 
     onPress = {()=> {console.warn('I am pressed')}}
     onLongPress= {() => {console.warn('I am a long press!!!')}}
   
     rightIcon = {<FontAwesome6 name = "arrow-right-long" size={16} color="white"/>}/>
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
})