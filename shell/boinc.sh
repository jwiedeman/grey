#!/bin/bash/
#######################################
# Bash script to install apps on a new system (Ubuntu)
#######################################
#https://github.com/phenonymous/shell-progressbar#installation

. <(curl -sLo- "https://git.io/progressbar")
foreground="$(tput setaf 0)" # black
background="$(tput setab 7)" # green

bar::start
bar::status_changed 0 6





echo "Get aptitude updates ..."
sudo aptitude install boinc-client  -y
bar::status_changed 1 6






bar::status_changed 6 6
echo "Done"

bar::stop
reset
echo "Boinc Installed"
