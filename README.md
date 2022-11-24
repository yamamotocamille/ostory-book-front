# React-model and dependences install
## locate in the project repo
```shell
cd repo-name
```

## copy of hidden and non-hidden files present at the root of the model
### note: alerts are displayed about ignored folders, this is normal
```shell
cp -n ../React-modele/{.*,*} .
```

## (recursive) copy of src/, config/ and public/ folders
### note: alerts are displayed about ignored folders, this is normal
```shell
cp -rn ../React-modele/{src,config,public} .
```

## package.json's dependences install
```shell
yarn
```

## development server start
```shell
yarn start
```

## rename and change projects informations
```shell
yarn init
```

## React Router DOM install
```shell
yarn add react-router-dom
```

## Redux install
```shell
yarn add redux
```

## React Redux install
```shell
yarn add react-redux
```

## redux devtool install
```shell
yarn add redux-devtools-extension
```
## axios install
```shell
yarn add axios
```

## react icons install
```shell
yarn add react-icons
```
