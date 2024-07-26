/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultsShowScreen';


const Stack = createNativeStackNavigator();

export default function App(){
    return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitle:'Reastaurant App'}} >
        <Stack.Screen name="Search Screen" component={SearchScreen} />
        <Stack.Screen name='ResultShow' component={ResultShowScreen}  />
      </Stack.Navigator>
    </NavigationContainer>  
    );
}



AppRegistry.registerComponent('restaurant1', () => App);
