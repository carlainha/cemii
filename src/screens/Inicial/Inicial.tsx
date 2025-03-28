import React from 'react';
import { View , Image, Text } from 'react-native';
import { Logo } from '../../components/Logo/Logo';

import { styles } from './InicialStyles';
import { Botao } from '../../components/Botao/Botao';

export function Inicial() {
  return (
    <View style={styles.container}>
      <Logo/>
      <View style={{marginTop:100, alignItems:'center'}}>
      <Botao texto='Cadastrar-se'/>
      <Text style={styles.texto}>ou</Text>
      <Botao texto='Entrar'/>
      </View>
    </View>
  );
}