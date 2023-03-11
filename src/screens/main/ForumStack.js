import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';
import styles from '../../styles/styles';
import Forum from './screens/Forum';
import AddPost from './screens/forum/AddPost';
import ViewPost from './screens/forum/ViewPost';

const Stack = createNativeStackNavigator();
const tabHiddenRoutes = ['AddPost', 'ViewPost'];

export default function ForumStack({navigation, route}) {
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
      <Stack.Screen name="Forum" component={Forum} />
      <Stack.Screen name="AddPost" component={AddPost} />
      <Stack.Screen name="ViewPost" component={ViewPost} />
    </Stack.Navigator>
  );
}
