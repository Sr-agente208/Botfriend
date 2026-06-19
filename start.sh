while : 
do
printf "    \033[1;33mKeisen BOT FAST 🌪️\n INICIANDO, AGUARDE UM MOMENTO...✨\n\033[0m"
if [ "$1" = "sim" ]; then
node ./ARQUIVES/connect.js sim
elif [ "$1" = "não" ]; then
node ./ARQUIVES/connect.js não
else 
node ./ARQUIVES/connect.js
fi
sleep 1 
done
