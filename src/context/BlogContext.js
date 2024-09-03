
import { act } from "react";
import createDataContext from "./createDataContext";

//const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost':
            console.log('added');
           return [...state, {id: Math.floor(Math.random() * 99999), title : action.payload.title, content: action.payload.content}];
        case 'delete_blogpost':
            return state.filter((blogPost) => 
             blogPost.id !== action.payload
            ); 
        case 'edit_blogpost':
            return state.map(blogPost => {
                return (blogPost.id === action.payload.id ? action.payload : blogPost);
            });

    }

};
const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type : 'add_blogpost', payload: {title, content}});
        if (callback) {
            callback();
        }
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
       dispatch({type : 'delete_blogpost', payload: id});
    };
};


const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type: 'edit_blogpost', payload: {id, title, content}})
        if (callback) {
            callback();
        }
    };

};
 


export const {Context, Provider} = createDataContext(blogReducer,{ addBlogPost, deleteBlogPost, editBlogPost },[{title: "Test Blog",content:"Content 1", id: 131}]);
// export const BlogProvider = ({ children }) => {

//     const [blogPosts, dispatch] = useReducer(blogReducer, []);

//     const addBlogPost = () => {
//          dispatch({type : 'add_blogpost'})
//     };

//     return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
//         {children}
//     </BlogContext.Provider>

// };

//export default BlogContext;