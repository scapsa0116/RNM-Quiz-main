import { View, Text, StyleSheet } from "react-native";
//Responsible for each answer option



export default function AnswerOption(){


    return (
        <View style = {styles.answer}>
            <Text>Answer Option</Text>
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

