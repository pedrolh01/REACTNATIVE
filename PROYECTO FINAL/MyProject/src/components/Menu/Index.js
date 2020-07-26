import StackNavigation from 'react-navigation';
import DrawerStack from '././stacks/drawerStack' 

const Navigator = StackNavigation({ 
    drawerStack:{screen: DrawerStack}
  },
  {
      headerMode:'none',
      initialRouteName:'drawerStack'
  })

  export default Navigator
