#!/bin/bash
sleep 1s

script_location=$(dirname $0)
echo $script_location
cd $script_location
pwd

#sh ./server/app_db_start.sh &
#sleep 5s
sh ./front/app_dev_start.sh &
sleep 15s
sh ./server/app_dev_start.sh
