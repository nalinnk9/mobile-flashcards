import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import Deck from './Deck';
import CreateDeck from './CreateDeck';
import DeckExpanded from './DeckExpanded';
import AddCard from './AddCard';
import StartQuiz from './StartQuiz'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import FinalScreen from './FinalScreen';

const Tab = createBottomTabNavigator();
const DecksStack = createStackNavigator();

function DeckStackScreen() {
  return (
    <DecksStack.Navigator>
      <DecksStack.Screen name="Home" component={Deck} />
      <DecksStack.Screen name="Deck" component={DeckExpanded} />
      <DecksStack.Screen name="AddCard" component={AddCard} />
      <DecksStack.Screen name = "Quiz" component={StartQuiz}/>
      <DecksStack.Screen name = "Congratulations" component={FinalScreen}/>
    </DecksStack.Navigator>
  );
}
export default function NavigatorCustom() {
  return (
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Decks" component={DeckStackScreen} />
        <Tab.Screen name="Add Deck" component={CreateDeck} />
        
      </Tab.Navigator>
    </NavigationContainer>
  
  );
}
