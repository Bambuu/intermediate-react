DIR=./part1/src/assignments
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${DIR}/assignment-1.md > ${DIR}/assignment-1.html

DIR=./part2/src/assignments
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${DIR}/assignment-1.md > ${DIR}/assignment-1.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${DIR}/assignment-2.md > ${DIR}/assignment-2.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${DIR}/assignment-extra-1.md > ${DIR}/assignment-extra-1.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${DIR}/assignment-extra-2.md > ${DIR}/assignment-extra-2.html

DIR=./part3/src/assignments
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${DIR}/assignment-1.md > ${DIR}/assignment-1.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${DIR}/assignment-2.md > ${DIR}/assignment-2.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${DIR}/extra-exercise.md > ${DIR}/extra-exercise.html