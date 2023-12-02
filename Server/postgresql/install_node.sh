# We are just installing NVM using the method on the github https://github.com/nvm-sh/nvm
# and then installing the correct version. 
# At the time of writing the latest version is 21.3.0 

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install node 21.3.0