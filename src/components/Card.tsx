import { View, Text, StyleSheet } from "react-native";
import { PropsWithChildren } from "react";

// type Card = PropsWithChildren<{
//    title: string;
// //    children: React.ReactNode;
// }>
//this is one way of using props with children, and below is a different way

type Card = {
   title: string;
//    children: React.ReactNode;
}

export default function Card ({title, children}: PropsWithChildren<Card>){

    return(
            <View style ={styles.container}>
            <Text style = {styles.title}>{title}</Text>
            
            {children}
            
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

elevation: 13,},

title:{
    fontSize: 24,
    fontWeight: '500',
    
 },
})