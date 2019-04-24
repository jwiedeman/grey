nmap -sV -sC -A-oN 3.txt 10.10.10.3
nmap -Pn -sV -oX a.xml 10.10.10.3; searchsploit --nmap a.xml
