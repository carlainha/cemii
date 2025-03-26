import React from 'react';
import { View , Image } from 'react-native';
import Logo from '../../../assets/logo.png';

import { styles } from './LogoStyles';

export function Home() {
  return (
    <View>
      <Image 
      source={Logo}
      style={styles.imagem}/>
    </View>
  );
}