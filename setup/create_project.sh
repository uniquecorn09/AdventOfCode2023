#!/bin/bash
DAYS_OF_CODING=$1

echo $1
for (( i = 1; i <= $DAYS_OF_CODING; i++ )) 
do 
    folder="day$i"
    if [ -d "day$i" ]; then
        echo "Project day$i exists"
    else
        mkdir $folder
        cd $folder
        pwd
        cp ../setup/_aoc.js aoc.js
        cp ../setup/_aoc.test.js aoc.test.js
        cp ../setup/solutions.txt solutions.txt
        sed -i'.bak' -e 's/DAY = 1/DAY = '$i'/g' aoc.js
        # curl https://adventofcode.com/2022/day/$i > raw$i.html
        touch data1.txt data2.txt
        touch testdata1.txt testdata2.txt 
        rm aoc.js.bak
        cd ..
    fi
done