const fs = require('fs');

let data = fs.readFileSync('./data.txt', 'utf8');
let lines = data.split('\n');

function countUniqueViews(lines) {
  let uniqueLines = removeDuplicates(lines);
  let pageCounts = createPageCountObj(uniqueLines);
  console.log('this should be the solution: ', pageCounts);
}

function removeDuplicates(lines) {
  let uniqueLines = [...new Set(lines)];
  return uniqueLines;
}

function createPageCountObj(uniqueLines) {
  let pageCountObj = {};

  for (let i = 0; i < uniqueLines.length; i++) {
    let page = uniqueLines[i].split(' ')[0];

    if (!(page in pageCountObj)) {
      pageCountObj[page] = 1;
    } else if (page in pageCountObj) {
      pageCountObj[page]++;
    }
  }
  return pageCountObj;
}

console.log(countUniqueViews(lines));

// the solution should be:
// /help_page/1 23 unique views
// /contact 23 unique views
// /home 23 unique views
// /index 23 unique views
// /about/2 22 unique views
// /about 21 unique views
