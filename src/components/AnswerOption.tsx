import { View, Text, StyleSheet } from "react-native";
//Responsible for each answer option
// option is bringing the props from Question card component


export default function AnswerOption(props){
    console.log(props, 'answerOption')


    return (
        <View style = {styles.answer}>
            <Text>{props.option}</Text>
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

