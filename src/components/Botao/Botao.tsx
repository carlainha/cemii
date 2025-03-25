import { TouchableOpacity, View, Text } from 'react-native';
import React, { useEffect, useState } from "react";

import { styles } from './BotaoStyles';

import * as Font from "expo-font";
  
export function Botao() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Quicksand-Regular": require("../../../assets/fonts/Quicksand/Quicksand-Regular.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity
        style={styles.botao}>
            <Text  style={{ fontFamily: "Quicksand-Regular", fontSize: 20 }}>Cadastra-se</Text>
        </TouchableOpacity>
    </View>
  );
}