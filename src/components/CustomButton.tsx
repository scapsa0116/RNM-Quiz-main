import { View, Text, Pressable, StyleSheet } from "react-native"
import { Icon } from "@expo/vector-icons/build/createIconSet";

type CustomButton = {
    title: string,
    rightIcon?: React.ReactNode
    onPress: () => void;
    onLongPress: () => void;
}

export default function CustomButton ({title, rightIcon, onPress, onLongPress}: CustomButton){


    return (
       //on press is a callback function from QuizScreen component
         <Pressable style = {styles.button} onPress = {onPress} onLongPress = {onLongPress}>
        <Text style = {styles.textButton}>{title}</Text>
        <View style={styles.buttonIcon}>
         {rightIcon}
         </View>
        </Pressable>
      
    )
};



const styles = StyleSheet.create({

button:{
    marginTop: 30,
    marginBottom: 50,
    borderRadius:100,
    backgroundColor: 'rgb(0,81,85)',
    padding:15,
    justifyContent: 'center',
    alignItems: 'center',
},

textButton:{
color: 'white',
fontWeight:500,
fontSize:16,
letterSpacing: 1.5,
},

buttonIcon:{
  position: 'absolute',
  right:20,
},

})