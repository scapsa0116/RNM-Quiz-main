import { View, Text, StyleSheet } from "react-native"
import AnswerOption from "./AnswerOption"

//this component is about the container of the questions

export default function QuestionCard (){


    return(
        <View style ={styles.container}>
            <Text style = {styles.question}>What is React Native?</Text>
            <View style = {styles.answer}>
                <View style = {styles.answer}><AnswerOption/></View>
                <View style = {styles.answer}><AnswerOption/></View>
                <View style = {styles.answer}><AnswerOption/></View>
                <View style = {styles.answer}><AnswerOption/></View>
            </View>
        </View>
    )
}





const styles = StyleSheet.create({

container: {
backgroundColor: '#fff',
padding:20,
borderRadius: 20,
height: 450,
width: 350,
alignItems: 'center',
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.39,
shadowRadius: 8.30,

elevation: 13,
},
 question:{
    fontSize: 24,
    fontWeight: '500',
    
 },

answer:{
   padding: 10,
width: 300,
//    height:40,

}

})