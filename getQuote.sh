LINES=`cat quelle.txt | wc -l`
random_number=$((RANDOM % $LINES))

random_number=$((random_number + 1))
sed -n "${random_number}p" "quelle.txt" | sed 's|\/|\n|g' > quotes.txt
#cat quotes.txt |wc -c
node index.js
