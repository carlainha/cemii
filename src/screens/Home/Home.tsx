import React from 'react';
import { View , Image, Text } from 'react-native';
import Logo from '../../../assets/logo.png';

import { styles } from './HomeStyles';
import { Botao } from '../../components/Botao/Botao';

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
      source={Logo}
      style={styles.imagem}/>
        
      <Botao texto='Cadastrar-se'/>
    </View>
  );
}