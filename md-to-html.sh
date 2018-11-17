TOOLPATH=./node_modules/.bin/github-markdown
ARGUMENTS="-s ../../github-markdown.css"

ASSPATH=./part1/assignments/assignment-
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}1.md > ${ASSPATH}1.html

ASSPATH=./part2/assignments/assignment-
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}1.md > ${ASSPATH}1.html
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}2.md > ${ASSPATH}2.html
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}extra-1.md > ${ASSPATH}extra-1.html
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}extra-2.md > ${ASSPATH}extra-2.html

ASSPATH=./part3/assignments/assignment-
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}1.md > ${ASSPATH}1.html
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}2.md > ${ASSPATH}2.html
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}extra.md > ${ASSPATH}extra.html

ASSPATH=./part4/assignments/assignment-
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}1.md > ${ASSPATH}1.html
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}extra-1.md > ${ASSPATH}extra-1.html
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}extra-2.md > ${ASSPATH}extra-2.html

ASSPATH=./part5/assignments/assignment-
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}1.md > ${ASSPATH}1.html
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}2.md > ${ASSPATH}2.html
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}3.md > ${ASSPATH}3.html
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}extra.md > ${ASSPATH}extra.html

ASSPATH=./part6/assignments/assignment-
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}1.md > ${ASSPATH}1.html
${TOOLPATH} ${ARGUMENTS} ${ASSPATH}2.md > ${ASSPATH}2.html