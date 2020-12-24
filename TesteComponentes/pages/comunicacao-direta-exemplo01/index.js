import React from 'react';
import { View } from 'react-native';

export default function comunicacaoDireta(props) {
 return (
   <View style={{width:props.largura, height:props.comprimento, backgroundColor: props.cor}}></View>
  );
}


/*
    Por meio das 'props' ele recebe os parametros e injetado no componente filho.
*/