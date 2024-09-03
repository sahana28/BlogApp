import React, {useState} from "react";
import {View, Text,StyleSheet,TextInput, Button} from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues = {title: '', content: ''}}) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style = {styles.viewStyle}>
         <Text style = {styles.titleStyle}>Enter Title:</Text>
         <TextInput value= {title} style = {styles.textInputStyle} onChangeText={(text) => setTitle(text)}></TextInput>
         <Text style = {styles.titleStyle}>Enter Content:</Text>
         <TextInput value={content} style = {styles.textInputStyle} onChangeText={(text) => setContent(text)}></TextInput>
         <Button style = {styles.buttonStyle} title= "Save Blog Post" 
         onPress={() => onSubmit(title, content)}/>
        </View>     
    );

};

const styles = StyleSheet.create({
    viewStyle : {
        marginTop : 20,
     },

     titleStyle : {
        fontSize : 18,
        marginLeft: 30
     },
     textInputStyle : {
        borderColor : 'black',
        borderWidth : 1,
        marginHorizontal : 30,
        marginVertical: 20,
        height : 60
     },
     buttonStyle : {
        borderWidth : 1,
        marginTop : 20,
        borderColor : 'black',
        width : 100,
        height : 60
     }


});

export default BlogPostForm;