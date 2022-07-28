const obj = {};
obj['שחרית'] = [1,2,3,4];
obj['מנחה'] = [1,2,3,4];

obj['main'] = ['הקש את התפילה ושם העיר','לדוגמא: מעריב מודיעין עילית'];

obj['states'] = ['מודיעין', 'ביתר', 'טבריה', 'גבעת זאב', 'בני ברק', 'ירושלים'];
obj['tefilot'] = ['שחרית', 'מנחה', 'מעריב']

obj['דוחייימןערשת'] = ['ביהכ"נ תפארת משה','רחוב נתיבות המשפט 51','בשעה 6:00 בשטיבל אוהל בילא','בשעה 7:00 בביהמ"ד','בשעה 7:30 בשטיבל אוהל בילא','בשעה 8:00 בביהמ"ד'];   //'שחרית מודיעין'
obj['דהוחייממןנע'] = [];    //'מנחה מודיעין'
obj['בדויייממןעער'] = [];   //'מעריב מודיעין'

//ביתר
obj['בחייררשתת'] = [];    //'שחרית ביתר'
obj['בהחימנרת'] = [];   //'מנחה ביתר'
obj['בביימעררת'] = [];   //'מעריב ביתר'

//טבריה
obj['בהחטייררשת'] = [];    //'שחרית טבריה'
obj['בההחטימנר'] = [];   //'מנחה טבריה'
obj['בבהטיימערר'] = [];   //'מעריב טבריה'

//גבעת זאב
obj['אבבגזחיערשתת'] = [];    //'שחרית גבעת זאב'
obj['אבבגהזחמנעת'] = [];   //'מנחה גבעת זאב'
obj['אבבבגזימעערת'] = [];   //'מעריב גבעת זאב'

//ירושלים
obj['וחייילםררששת'] = [];    //'שחרית ירושלים'
obj['הוחיילםמנרש'] = [];   //'מנחה ירושלים'
obj['בוייילםמעררש'] = [];   //'מעריב ירושלים'

//בני ברק
obj['בבחיינקררשת'] = [];    //'שחרית בני ברק'
obj['בבהחימננקר'] = [];   //'מנחה בני ברק'
obj['בבביימנעקרר'] = [];   //'מעריב בני ברק'







console.log(Object.keys(obj).includes('שחרית'));
console.log(obj['שחרית'], obj['מעריב'],obj['שחרית']);

console.log(sort('שחרית בני ברק'));
console.log(sort('מנחה בני ברק'));
console.log(sort('מעריב בני ברק'));

const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  let lines = data.split('\n');
  lines = lines.map(line=> line.replace('\r', ''));
  console.log(lines.slice(1));
  const value = lines.slice(1);
  obj[lines[0]] = value;
//   delete obj.main;
  console.log(obj);
});


function getTextWithLines(arr) {
    arr.push('','','"ותחזירנו לשלום"','לא יוצאים מהבית לפני שתורמים לקופה','https://www.matara.pro/nedarimplus/online/?mosad=7002270');
    let text = '';
    arr.forEach(element => {
        text += element + '\n'
    });
    return text;
  }
  
  function sort(str) {
    return str.replace('עילית','').replace(' ','').split('').sort().join(''); 
  }