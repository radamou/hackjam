# React app

## create App with create-react-app

    ```javascript
        npm install -g create-react-app
    ```

## Install node with nvm

curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh

## Create react project

create-react-app myreactapp — scripts-version=react-scripts-ts

nvm ls-remote

nvm install 10 (10.14.2 version)

node -v

- See installed versions 
    - nvm ls

- Set a version as default 
    - nvm alias default 8.11.1


## Analysing bundle size

Source map explorer analyse bundle size

    - npm install --save source-map-explorer

Package.json
    
    "scripts": {
        "analyze": "source-map-explorer build/static/js/main.*",

Build and Run analyze
    
    npm run build
    npm run analyze


