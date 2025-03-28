import React from 'react';
import { View, Image } from 'react-native';
import BemVindo from '../../../assets/Bemvindo.png'

import { styles } from './EntrarStyles';

export function Entrar() {
  return (
    <View style={styles.container}>
        <Image
        source={BemVindo}
        style={styles.imagem}/>
    </View>
  );
}