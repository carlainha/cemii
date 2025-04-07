import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Inicial }  from "../../screens/Inicial/Inicial";
import { Entrar } from "../../screens/Entrar/Entrar";
import { Escolha }  from "../../screens/Escolha/Escolha";

const { Navigator, Screen}= createNativeStackNavigator()

export default function(){
    return(
        <Navigator initialRouteName="Inicial" screenOptions={{headerShown: false}}>
            <Screen name="Inicial" component={Inicial}/>
            <Screen name="Entrar" component={Entrar}/>
            <Screen name="Escolha" component={Escolha}/>
        </Navigator>
    )
}