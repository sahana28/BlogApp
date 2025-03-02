import React, {useState, useContext} from "react";
import { View, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from "./Components/BlogPostForm";


const CreateBlogScreen = ({ navigation }) => {

   const { addBlogPost } = useContext(Context);
   return (
      <BlogPostForm onSubmit = {(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
      }}/>
  );
};

const styles = StyleSheet.create({

});

export default CreateBlogScreen;