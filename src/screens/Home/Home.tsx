import React from 'react';
import { View , Image } from 'react-native';
import Logo from './assets/logo.png';

import { styles } from './HomeStyles';

export function Home() {
  return (
    <View style={styles.container}>
        <Image
            source= {Logo}
            style={styles.imagem}
        />
    </View>
  );
}