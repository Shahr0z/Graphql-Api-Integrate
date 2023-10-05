import MyTabBar from "./MyTabBar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ApolloProvider } from '@apollo/client';
import SubmitFormTab from "../../pages/TabsScreen/SubmitFormTab";
import CheckInTab from "../../pages/TabsScreen/CheckInTab";
import client from "../../apis";

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
                    <Tab.Screen name="Submit" component={SubmitFormTab} />
                    <Tab.Screen name="Check-ins" component={CheckInTab} />
                </Tab.Navigator>
            </NavigationContainer>
        </ApolloProvider>
    );
}
export default TopTabs;