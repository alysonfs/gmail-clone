# Gmail Clone

### Application running

[https://clone-1ad71.web.app/](https://clone-1ad71.web.app/)

### Used technologies

- React JS
    
    Developed with minimal organization of the pages and components.
    
    Used:
    
    - Redux
        
        ```bash
        npx create-react-app --template redux
        ```
        
        Criado o Store e Splice para usuário;
        
        Criado um selector "selectUser" ;
        
        Quando criado um novo usuário ou feito o login é enviado via Dispatch o usuário para o contexto do Redux.
        
    - Style
        
        CSS with Display Flex
        
        - Material UI
            
            ```bash
            yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
            ```
            
            Material UI [https://mui.com/pt/getting-started/installation/](https://mui.com/pt/getting-started/installation/)
            
            Icons [https://mui.com/pt/components/material-icons/](https://mui.com/pt/components/material-icons/)
            
            Others Icons [https://icons8.com.br/](https://icons8.com.br/)
            
        
- Firebase
    - Authentication ( Google Provide )
    - Firestore

### Start application

Clone the project, download dependencies and start application 

```bash
# go to your workspace folder
$ git clone https://github.com/alysonfs/gmail-clone.git
# go to gmail-clone folder
$ cd gmail-clone
# download dependencies
$ yarn
# start application
$ yarn start
```

### To build

```bash
# just execute
$ yarn build
```