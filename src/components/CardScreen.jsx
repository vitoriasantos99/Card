import React from "react"
import {Card, Image} from '@rneui/base'
import { View, Text, SafeAreaView } from "react-native";
import { ListItem } from "@rneui/base";
import { TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

export default app => {
    return(
        <SafeAreaView>
            <View>
                <Text>Home</Text>
                <Text>Services</Text>
                <Text>Promo</Text>
                <Text>Help</Text>
            </View> 
            <ListItem
            Component={TouchableHighlight}
            containerStyle={{backgroundColor: "#7644ad", borderRadius: 15}}
            disabledStyle={{ opacity: 0.5 }}
            onLongPress={() => console.log("onLongPress()")}
            onPress={() => console.log("onLongPress()")}
            pad={20}
            >

            <Image 
            source={require('../components/image/menina.png')}
            style={{
                width: 150,
                height: 150,
            }}>
            </Image>

            <ListItem.Content>
                <ListItem.Title>
                    <Text>Vitória Santos</Text>
                </ListItem.Title>
                <ListItem.Subtitle>
                    <Text>(11) 94806-7870</Text>
                </ListItem.Subtitle>
                <ListItem.Subtitle>
                    <Text></Text>
                </ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
            
            </SafeAreaView>
    )
}

