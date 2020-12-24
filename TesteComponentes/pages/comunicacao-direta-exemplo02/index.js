import React from 'react';
import {View, Text} from 'react-native';

const fonte = { style:{ fontSize: 30 }}

// componente nomeado que só pode ser utilizado declarando o nome do componente
export const Filho = props => 
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
    </View>


// componente que permite colocar outros componentes dentro dele IMPORTANTE
export const RecebeFilhos = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {props.children}
    </View>

export default ElementoDefault = props =>
    <View>
        
    </View>