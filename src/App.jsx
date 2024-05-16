import React from "react";
import { SafeAreaView, Text } from "react-native";
import CardScreen from "./components/CardScreen";

export default props =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <CardScreen/>
            {/* <CardScreen/> */}
        </SafeAreaView>
    )
}