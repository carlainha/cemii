import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './BotaoStyles';

export function Botao() {
  return (
    <View style={styles.container}>
        <TouchableOpacity
        style={styles.botao}>
            <Text style={styles.texto}>Cadastra-se</Text>
        </TouchableOpacity>
    </View>
  );
}