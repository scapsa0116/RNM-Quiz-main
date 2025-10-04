import { View, Text, StyleSheet } from "react-native"

//this component is about the container of the questions

export default function QuestionCard (){


    return(
        <View style ={styles.container}>
            <Text style = {styles.question}>What is React Native?</Text>
        </View>
    )
}





const styles = StyleSheet.create({

container: {
backgroundColor: 'red',
padding: 20,
paddingLeft: 100,
borderRadius: 20,
height: 450,
width: 350,
},
 question:{
    fontSize: 24,
    fontWeight: 'bold',
    
 }

})