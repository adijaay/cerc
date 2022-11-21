import { faBolt, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import News from "./News";

const BottomTab = createBottomTabNavigator();

const TabBawah = () => {
    return(
    <BottomTab.Navigator >
        <BottomTab.Screen 
        name = "Home"
        component={HomeScreen}
        options={{ headerShown: false,
          tabBarIcon : () => <FontAwesomeIcon icon={faHome}/>
        }} />
        <BottomTab.Screen name="News" component={News} options={{ headerShown: false,
          tabBarIcon : () => <FontAwesomeIcon icon={faBolt}/>
        }}/>
      </BottomTab.Navigator>
    )
}

export default TabBawah;