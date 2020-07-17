import StackNavigation from 'react-navigation';
import { TouchableOpacity } from 'react-native';
const DrawerNavigator = StackNavigation({ 
    DrawerStack:{screen: DrawerScreen}
  },
  {
      headerMode:'float',
      navigationOptions:({navigation}) => ({
          headerStyle:{
            backgroundColor:'rgb(255,45,85)',
            paddingLeft:10,
            paddingRight:10
          },
          title:'El Home',
          headerTintColor:'white',
          headerLeft: <View>
              <TouchableOpacity
              onPress={() => {
                  navigation.navigate('DrawerStack')
              }}>
                  <Text>Menu</Text>
              </TouchableOpacity>
          </View>
      }) 
  })

  export default DrawerNavigator