import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = ({navigation}) => {

    return (
        <NavigationContainer>
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                headerTintColor: '#444',
                headerStyle: {
                backgroundColor: '#eee',
                // height: 90,
                },
                headerTitleStyle: {
                fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                // headerLeft: () => (
                //     <Ionicons
                //     name="menu"
                //     size={30}
                //     color="#444"
                //     style={{ marginLeft: 15 }}
                //     onPress={() => {
                //         // Open the drawer here
                //         navigation.openDrawer();
                //     }}
                //     />
                // ),
                headerTitle: '', // Remove the title from the header
            }}
        >
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
        </NavigationContainer>
  );
};

export default RootDrawerNavigator;
