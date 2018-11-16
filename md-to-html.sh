PATH=./part1/src/assignments/assignment-
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${PATH}1.md > ${PATH}1.html

PATH=./part2/src/assignments/assignment-
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${PATH}1.md > ${PATH}1.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${PATH}2.md > ${PATH}2.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${PATH}extra-1.md > ${PATH}extra-1.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${PATH}extra-2.md > ${PATH}extra-2.html

PATH=./part3/src/assignments/assignment-
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${PATH}1.md > ${PATH}1.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${PATH}2.md > ${PATH}2.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${PATH}extra.md > ${PATH}extra.html