#!/bin/bash/
#######################################
# Bash script to install apps on a new system (Ubuntu)
# Written by @AamnahAkram from http://aamnah.com
#######################################

## Update packages and Upgrade system
#sudo apt-get update -y
# https://serversforhackers.com/c/what-well-cover
## Git ##
#echo '###Installing Git..'
#sudo apt-get install git -y

# Git Configuration
#echo '###Congigure Git..'

#echo "Enter the Global Username for Git:";
#read GITUSER;
#git config --global user.name "${GITUSER}"

#echo "Enter the Global Email for Git:";
#read GITEMAIL;
#git config --global user.email "${GITEMAIL}"

#echo 'Git has been configured!'
#git config --list
#https://github.com/phenonymous/shell-progressbar#installation


. <(curl -sLo- "https://git.io/progressbar")


echo 'icu'
bar::start
reset

sleep .5

bar::status_changed 0 10
echo "Get aptitude updates ..."
sudo apt-get update -y

reset
bar::status_changed 1 14
echo "Install git package ..."
sudo apt-get install git -y

reset
bar::status_changed 2 14
echo "Install putty package ..."
sudo apt-get install putty -y

reset
bar::status_changed 3 14
echo "Install filezilla package ..."
sudo apt-get install filezilla -y

reset
bar::status_changed 4 14
echo "Install nodejs package ..."
sudo apt-get install nodejs -y

reset
bar::status_changed 5 14
echo "Install npm package ..."
sudo apt-get install npm -y

reset
bar::status_changed 6 14
echo "Install build-essential package ..."
sudo apt-get install build-essential

reset
bar::status_changed 7 14
echo "Install Hyper package ..."
sudo apt-get install build-essential
wget -O hyper.deb https://releases.hyper.is/download/AppImage
sudo apt install ./hyper.deb -y

reset
bar::status_changed 8 14
echo "Install build-essential package ..."
sudo apt-get install build-essential

reset
bar::status_changed 9 14
echo "Install build-essential package ..."
sudo apt-get install build-essential

reset
bar::status_changed 10 14
echo "Install build-essential package ..."
sudo apt-get install build-essential



reset
bar::status_changed 11 14
echo "Get Google Chrome package..."
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -y


reset
bar::status_changed 12 14
echo "Install Google Chrome..."
sudo dpkg -i google-chrome-stable_current_amd64.deb -y


reset
bar::status_changed 13 14
echo "Get vscode package..."
wget -O vscode.deb https://go.microsoft.com/fwlink/?LinkID=760868 


reset
bar::status_changed 14 14
echo "Install vscode..."
sudo apt install ./vscode.deb -y







bar::stop
reset
echo "Have a nice install :)"
