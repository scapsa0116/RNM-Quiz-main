import { View, Text, StyleSheet } from "react-native"
import AnswerOption from "./AnswerOption"
import { Question } from "../types"
import Card from "./Card"
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
       
          
            <Card title = {question.title}>
            <View style = {styles.answer}>
                {question.options.map((option) =>  //we can name item or i as option, and replace every question.option with just option, and add the key
                <View style = {styles.answer}>
                    {/* in conmponent is an other component is passing as props name children */}
                    <AnswerOption 
                    key = {option}
                    option ={option} 
                    isSelected = {option === selectedOption} 
                    onPress ={() => onOptionSelected(option)}/></View>)}
                {/* <View style = {styles.answer}><AnswerOption option ={question.options[1]} isSelected = {question.options[1] === selectedOption} onPress ={() => onOptionSelected(question.options[1])}/></View>
                <View style = {styles.answer}><AnswerOption option ={question.options[2]} isSelected = {question.options[2] === selectedOption} onPress ={() => onOptionSelected(question.options[2])}/></View>
                <View style = {styles.answer}><AnswerOption option ={question.options[3]} isSelected = {question.options[3] === selectedOption} onPress ={() => onOptionSelected(question.options[3])}/></View> */}
            </View>
            </Card>
       
    )
}





const styles = StyleSheet.create({
answer:{
   padding: 10,
width: 300,
//    height:40,

}

})