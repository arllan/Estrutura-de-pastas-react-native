import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';

export const Pai = () => { // esse componente principal 
  const [nome,setNome] = useState('');
  return(
    <View>
      <Text>Meu nome é {nome}</Text>
      <Filho recebeNome={nome=>setNome(nome)}/>
    </View>
  )
}

 const Filho = (props) => { // componente filho que e utilizado no pai
  const {recebeNome} = props
  return(
    <Button title='Press me' onPress={()=>recebeNome('Alexadre')}/>
  )
}

