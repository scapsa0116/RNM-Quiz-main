import { View, Text, StyleSheet } from "react-native"
import AnswerOption from "./AnswerOption"
import { Question } from "../types"
//this component is about the container of the questions


type QuestionCard= {
    question: Question
}
export default function QuestionCard ({question}: QuestionCard){
    const selectedOption = question.options[0];

    const onOptionSelected = (option: string) => {

        console.warn('Pressed: ', option)
    }


    return(
        <View style ={styles.container}>
            <Text style = {styles.question}>{question.title}</Text>
            <View style = {styles.answer}>

                {question.options.map((option) => 
                <View style = {styles.answer}><AnswerOption key = {option} option ={option} isSelected = {option === selectedOption} onPress ={() => onOptionSelected(option)}/></View>)}
               
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