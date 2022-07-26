const qrcode = require('qrcode-terminal');
const { Client,  LocalAuth, MessageMedia } = require('whatsapp-web.js');

require('events').EventEmitter.defaultMaxListeners = 30;

const main = ['הקש את התפילה ושם העיר','לדוגמא: שחרית מודיעין עילית'];
const shacharitModiin = ['ביהכ"נ תפארת משה','רחוב נתיבות המשפט 51','בשעה 6:00 בשטיבל אוהל בילא','בשעה 7:00 בביהמ"ד','בשעה 7:30 בשטיבל אוהל בילא','בשעה 8:00 בביהמ"ד'];
const minchaModiin = ['ביהכ"נ תפארת משה','רחוב נתיבות המשפט 51'];
const marivModiin = ['ביהכ"נ תפארת משה','רחוב נתיבות המשפט 51'];
const shacharitBeitar = [];
const minchaBeitar = [];
const marivBeitar =  [];
const menuTfilot = ['הקש את התפילה הרצויה', '1. שחרית', '2. מנחה', '3. מעריב'];


const idsStates = {};
const idsTefilot = {};

const client = new Client({
    authStrategy: new LocalAuth(),
  });

client.initialize();



client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', (message) => {

    try {
        console.log(message.id.remote);
        // console.log('author:', message.author);
        // console.log('id:', message.id._serialized);
        
    } catch (error) {
        console.log(error);
    }
    var msg = message.body;
    var ser = message.id._serialized;



    // const VAL = { 'א': 1, 'ת': 400, 'ש': 300, 'ר': 200, 'ק': 100, 'ץ': 90, 'צ': 90, 'ף': 80, 'פ': 80, 'ע': 70, 'ס': 60, 'ן': 50, 'נ': 50, 'ם': 40, 'מ': 40, 'ל': 30, 'ך': 20, 'כ': 20, 'י': 10, 'ט': 9, 'ח': 8, 'ז': 7, 'ו': 6, 'ה': 5, 'ד': 4, 'ג': 3, 'ב': 2, }
    // const backMsg = ['שלום' ,message._data.notifyName , 'איך את/אתה מרגיש/ה?', 'הגימטריה של "' + msg + '" היא: ' + calculate(msg)];
    // if (ser.includes('false_120363026114457231')) {

    //     try { 
    //         message.reply(getTextWithLines(backMsg));
    //     } catch (error) {
    //         console.log(error);
    //     }
        
    // }



    // console.log(msg);
    // try {

    if (obj['states'].includes(msg)) {
      idsStates[message.id.remote] = msg;
      message.reply(getTextWithLines(obj['menuTfilot']));
    }

    if (obj['tefilot'].includes(msg)) {
      idsTefilot[message.id.remote] = msg;
      message.reply(getTextWithLines(obj['menuStates']));
    }







        if (msg === 'hello') {
            message.reply('הקש את התפילה ושם העיר');
        }
        
        if (msg === 'נחמיה') {
             message.reply('הרה"ג מזכה הרבים ר נחמיה שמש שליט"א המנהל הגדול של ארגון "הקופה" ');
        }

        if (msg === 'שחרית מודיעין עילית') {
           
            message.reply(getTextWithLines(shacharitModiin));

        }
    

       client.on('message', async (message) => {
        if (message.body === 'רבי') {
          //get media from url
          const media = await MessageMedia.fromUrl(
            'https://hamechadesh.b-cdn.net/wp-content/uploads/elementor/thumbs/-%D7%9E%D7%A7%D7%A8%D7%9C%D7%99%D7%9F-owwtrttypmzt0rrdug9aktrqrqi778lg2cxdqtnsk8.jpeg'
          );
      
          //replying with media
          client.sendMessage(message.from, media, {
            caption: 'אדמו"ר שליט"א',
          });
        }

        if (message.body === 'גבעת זאב') {
            //get media from url
            const media = await MessageMedia.fromUrl(
              'http://2.bp.blogspot.com/-spDPD8rvbCg/VAL0r6xahsI/AAAAAAAACCQ/12mYpuEyDZM/s1600/%D7%94%D7%90%D7%A1%D7%A4%D7%957.jpg'
            );
        
            //replying with media
            client.sendMessage(message.from, media, {
              caption: 'בית הכנסת המרכזי בגבעת זאב',
            });
          }
          if (message.body === 'הקופה') {
            //get media from url
            const media = await MessageMedia.fromUrl(
              'https://images.matara.pro/ClientsImages/7002270.jpg?5'
            );
        
            //replying with media
            client.sendMessage(message.from, media, {
              caption: 'הקופה המרכזית של חסידי קרלין סטולין מודיעין עילית ',
            });
          }

      });



        // if (!isNaN(msg)) {
        //     message.reply(msg + " * 10 = " + msg * 10);   
        // }
    // } catch (error) {
    //     // console.log(error);
    // }
//  


// function calculate(value) {
//     return ('$$' + value).split('').map(c => VAL[c] || 0).reduce((a, b) => a + b);
// }

  
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


const obj = {};


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

//תפריט תפילות
obj['menuTfilot'] = ['הקש את מספר התפילה הרצויה', '1. שחרית', '2. מנחה', '3. מעריב'];
obj['menuStates'] = ['באיזה עיר?', '1. מודיעין', '2. ביתר', '3. טבריה', '3. ירושלים', '3. גבעת זאב', '3. בני ברק'];
