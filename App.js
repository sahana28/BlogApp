
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateBlogScreen from './src/screens/CreateBlogScreen';
import EditBlogScreen from './src/screens/EditBlogScreen';


const navigator = createStackNavigator({
 Index: IndexScreen,
 Show : ShowScreen,
 Create : CreateBlogScreen,
 Edit: EditBlogScreen
 
}, {
   initialRouteName: 'Index',
   defaultNavigationOptions : {
     title: 'Blogs'
   }
});

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
  <App />
  </Provider>
  
};

//export default createAppContainer(navigator);
