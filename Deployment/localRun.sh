# To be called from the main directory. 
# For run ./deployment/localmode.sh
#TODO: add a path check so it can be run from anywhere. 
cd Server/node

#FEATURE: add docker deploy and server deployment options.
#TODO:  Add file location resolution.
#       Specifically this should be able to detect which directory it was run in and 
#       start the node server using that local path instead of where it was run from.         

#TODO: check for npm
npm install
npm start
start chrome.exe http://localhost:3000/ Server/node