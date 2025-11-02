import { Text, StyleSheet, Pressable } from "react-native";
//Responsible for each answer option
// option is bringing the props from Question card component
// onPress is callbackfunction from QuestionCard

type AnswerOption = {
    option: string;
    isSelected?: boolean;
    onPress:() => void;
}


export default function AnswerOption({option, isSelected, onPress}: AnswerOption){
    


    return (
        <Pressable 
        onPress = {onPress} //this is call back function
        style = {[styles.answer, 
        isSelected && {backgroundColor:  'lightyellow', 
        borderColor: 'lightyellow'}]}>
        <Text>{option}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
 answer:{
    
    borderWidth:1,
    borderColor: 'lightgrey',
    borderRadius: 20,
    padding:20,
 }
})

