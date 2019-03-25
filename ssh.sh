# todo, -yeet flag. sudo opwns all ports ufw can get at, add ssh users with admin/password level easy passwords with root permissions





ask() {
    # https://gist.github.com/davejamesmiller/1965569
    local prompt default reply

    if [ "${2:-}" = "Y" ]; then
        prompt="Y/n"
        default=Y
    elif [ "${2:-}" = "N" ]; then
        prompt="y/N"
        default=N
    else
        prompt="y/n"
        default=
    fi

    while true; do

        # Ask the question (not using "read -p" as it uses stderr not stdout)
        echo -n "$1 [$prompt] "

        # Read the answer (use /dev/tty in case stdin is redirected from somewhere else)
        read reply </dev/tty

        # Default?
        if [ -z "$reply" ]; then
            reply=$default
        fi

        # Check if the reply is valid
        case "$reply" in
            Y*|y*) return 0 ;;
            N*|n*) return 1 ;;
        esac

    done
}



# handle flags flag handler
while test $# -gt 0; do
        case "$1" in
                -adduser)
                ssh josh@nyx "useradd $username; mkdir /home/$username;"  
                break
                ;; 


                -c|--client)

                if ask "Do you want to install an  s s h  client?"; then
                    echo "Yes"
                    sudo apt install openssh-client -y

                else
                    reset
                    echo "Nice"
                fi

                           
                break
                ;;

                -s|--server)
                if ask "Do you want to install an  s s h  server?"; then
                    echo "Yes"
                    sudo apt install openssh-server -y
                    sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.original
                    sudo chmod a-w /etc/ssh/sshd_config.original
                    sudo systemctl restart sshd.service

                else
                    reset
                    echo "Nice"
                fi
                           
                break
                ;;
        

                -start)
                sudo service ssh start     
                break
                ;;
                
                -stop)
                sudo service ssh stop     
                break
                ;;

                -restart)
                sudo service ssh restart     
                break
                ;;

                -status)
                sudo service ssh status     
                break
                ;;
                
                *)               
                # keeps kids out of the kitchen if they hit enter and hope for the best
                    break
                ;;
        esac
done