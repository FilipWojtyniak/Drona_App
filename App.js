import React, {createContext, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import DrawerScreen from './navigation/Drawer';
import ReviewScreen from './screens/ReviewScreen';
import WriteReviewScreen from './screens/WriteReviewScreen';

const Stack = createNativeStackNavigator();

export const AppContext = createContext();

export default function App() {
  const [reviews,setReviews] = useState([]);
  const contextValue = {reviews, setReviews}
  return (
    <AppContext.Provider value= {contextValue}>
      <NavigationContainer>     
        <Stack.Navigator>
          {/* <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} /> */}
          <Stack.Screen options={{headerShown: false}} name="Review" component={ReviewScreen} />
          <Stack.Screen options={{headerShown: false}} name="WriteReview" component={WriteReviewScreen} />
          {/* <Stack.Screen options={{headerShown: false,gestureEnabled: false }} name="Drawer" component={DrawerScreen} />         */}
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

