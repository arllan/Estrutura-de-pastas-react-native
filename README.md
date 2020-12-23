# Estrutura de pastas e arquivos em projetos react native.

Para criar uma boa aplicação e preciso sempre organizar a estrutura de um apalicativo. Hoje vamos aprender a como organizar os arquivos de uma aplicação.
>1- Crie uma pasta ***src*** na ***raiz*** da aplicação. 

>2 - Na pasta raiz da aplicação abra o arquivo ***index.js*** mude o local para onde ele direcionar para a pasta ***src*** que foi criada.
```javascript
import {AppRegistry} from  'react-native';

import  App  from  './src'; // mude aqui 

import {name  as  appName} from  './app.json';

AppRegistry.registerComponent(appName, () =>  App);
```

>3 - Agora dentro da pasta src crie o arquivo ***index.js***. Esse arquivo e que vai ser utilizado para chamar todos os componentes.

## Agora vamos olha a estrutura de pastas.



>Pasta | ***assets*** Nessa pasta conter todos os arquivos da aplicação como imagens.

> Pasta | ***components*** Nessa pasta vai ter todos os componentes globais da aplicação. Sempre que algum componente seja utilizado mais de três vezes e um componente global.

> Pasta | ***pages*** Nesta pasta vai ter todas as 'view' da aplicação. Cada nova 'view' criada da aplicação deve ter uma pasta com o seu nome, ou seja sempre criar uma nova 'view' deve ter o nome da nova tela.

> Pasta | ***config*** Nesta pasta vai apenas componente que tem algum tipo de configuração, como por exemplo configuração de status-bar.

>Pasta | ***services*** Nesta pasta vai ter tudo relacionado a serviços, como por exemplo configuração de apis com axios, ou até configuração de acesso a banco de dados local.

IMPORTANTE - NUNCA DEIXAR UM ARQUIVO ***.js*** SOLTO NA APLICAÇÃO. SEMPRE CRIAR UMA PASTA E COLOCAR DENTRO.