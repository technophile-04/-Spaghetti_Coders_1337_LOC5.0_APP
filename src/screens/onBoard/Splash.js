import React, {useEffect} from 'react';
import global from '../../utility/global';

export default function Splash({navigation}) {
  useEffect(() => {
    global.getItem(constants.USER_DATA).then((result) => {

      let route;

      if (result) {
        route = "MainStack";
      }
      else {
        route = "OnBoard";
      }
     
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: route}],
        });
      }, 1000);
    });
    
  }, []);

  return <></>;
}
