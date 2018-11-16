ASSPATH=./part1/src/assignments/assignment-
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${ASSPATH}1.md > ${ASSPATH}1.html

ASSPATH=./part2/src/assignments/assignment-
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${ASSPATH}1.md > ${ASSPATH}1.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${ASSPATH}2.md > ${ASSPATH}2.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${ASSPATH}extra-1.md > ${ASSPATH}extra-1.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${ASSPATH}extra-2.md > ${ASSPATH}extra-2.html

ASSPATH=./part3/src/assignments/assignment-
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${ASSPATH}1.md > ${ASSPATH}1.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${ASSPATH}2.md > ${ASSPATH}2.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${ASSPATH}extra.md > ${ASSPATH}extra.html


ASSPATH=./part6/src/assignments/assignment-
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${ASSPATH}1.md > ${ASSPATH}1.html
./node_modules/.bin/github-markdown -s "../../../github-markdown.css" ${ASSPATH}2.md > ${ASSPATH}2.html