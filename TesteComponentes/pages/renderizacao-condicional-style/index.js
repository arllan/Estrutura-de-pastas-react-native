import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import {style} from './style';

export default function renderizacaoCondicional() {
    var [status,setStatus] = useState(false);

    function condicional(a)
    {
        if(a == false){
            setStatus(true)
        }else{
            setStatus(false)
        }
    }

  return (
   <View style={style.container}>
       <Button title='Click No Botão' onPress={()=>{condicional(status)}}/>
        { status == false
                ?<Text style={style.textoCondicional}>Verdadeiro</Text>
                :<Text style={style.textoCondicional}>Falso</Text>
        }
   </View>
  );
}


