import React, {useContext} from "react";
import { View, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from "./Components/BlogPostForm";


const EditBlogScreen = ({ navigation }) => {
   const id = navigation.getParam('id');
   const { state, editBlogPost } = useContext(Context);
   const blog = state.find((blogPost)=> blogPost.id === navigation.getParam('id'));
   console.log(blog.title);
      return (
          <BlogPostForm 
          initialValues = {{title: blog.title, content: blog.content}}
          onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop());
          }}/>
      );
};

const styles = StyleSheet.create({
});

export default EditBlogScreen;