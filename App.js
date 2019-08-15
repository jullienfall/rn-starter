import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import LayoutScreen from './src/screens/LayoutScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Layout: LayoutScreen,
    ComponentsScreen: ComponentsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
