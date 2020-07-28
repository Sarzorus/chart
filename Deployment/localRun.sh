# To be called from the main directory. 
# For example run ./deployment/localmode.sh
#TODO: add a path check so it can be run from anywhere. 
cd Server/node

#FEATURE: add docker deploy and server deployment options.

#TODO: check for npm
npm install
npm start
start chrome.exe http://localhost:3000/