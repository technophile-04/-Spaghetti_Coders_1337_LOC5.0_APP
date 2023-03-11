import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';
import styles from '../../styles/styles';
import Settings from './screens/Settings';
import ExistingUser from './screens/settings/ExistingUser';
import AddUser from './screens/settings/AddUser';

const Stack = createNativeStackNavigator();
const tabHiddenRoutes = ['ExistingUser','AddUser'];

export default function SettingsStack({navigation, route}) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({
        tabBarStyle: [styles.bottomTabBarStyle, {display: 'none'}],
      });
    } else {
      navigation.setOptions({
        tabBarStyle: [styles.bottomTabBarStyle, {display: 'flex'}],
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ExistingUser" component={ExistingUser} />
      <Stack.Screen name="AddUser" component={AddUser} />
    </Stack.Navigator>
  );
}
