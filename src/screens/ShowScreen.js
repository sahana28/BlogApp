import React, {useContext} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { Context } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('selectedId');
const {state} = useContext(Context);
const blog = state.find((blogPost) => blogPost.id === id);

     return <View style = {styles.viewStyle}> 
     <Text style = {styles.textStyle}>Blog Title</Text>
     <Text style = {styles.textStyle}>{blog.title}</Text>
     <Text style = {styles.textStyle}>{blog.content}</Text>
     </View>

};

ShowScreen.navigationOptions = ({ navigation}) => {
    return {
      headerRight : () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('selectedId')})}>
        <MaterialIcons name= "edit" size={30} />
        </TouchableOpacity>
      ),
    };
};

const styles = StyleSheet.create({
   viewStyle : {
    borderColor: 'black',
    borderWidth : 1,
    marginTop : 30,
    marginHorizontal : 10,
    height : 300
   },

   textStyle : {
     marginTop: 40,
     fontSize : 18,
   }

});

export default ShowScreen;