import { View, Text, StyleSheet } from "react-native";
//Responsible for each answer option
// option is bringing the props from Question card component

type AnswerOption = {
    option: string;
}


export default function AnswerOption({option}: AnswerOption){
    console.log(option, 'answerOption')


    return (
        <View style = {styles.answer}>
            <Text>{option}</Text>
        </View>
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

