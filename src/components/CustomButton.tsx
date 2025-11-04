import { View, Text, Pressable, StyleSheet} from "react-native"
import { ComponentProps } from "react";

type CustomButton = {
    title: string,
    rightIcon?: React.ReactNode
   
} & ComponentProps<typeof Pressable>;

//...pressable props is called the rest operation that is comming from PressableProps

export default function CustomButton ({title, rightIcon, ...pressableProps}: CustomButton){


    return (
       //on press is a callback function from QuizScreen component
         <Pressable 
         style = {styles.button}
         {...pressableProps}
         //...pressableProps is replacing all the bellow press options
        //  onPress = {onPress} 
        //  onLongPress = {onLongPress}
         >
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