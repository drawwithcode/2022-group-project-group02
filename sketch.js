let check = false;
let xScale;
let yScale;

let accesso,frase1,frase2,frase3,titolone;
let pt; 
let voice;
let rectpulsante; 
let alreadyplayed = false;
let click = 0;
let started = false;
let counter = 0;
let counter2 = 0;

let canvas, ctx;
let titolo1, titolo2, titolo3, titolo4, titolo5, istruzione, logo,testocheck;
let stitolo1, stitolo2, stitolo3, stitolo4, stitolo5;
let dx;
let sx;
let rectgrande, rectpiccolo1,rectpiccolo2, rectpiccolo3,rectpiccolo4, cerchiotimer;

// COLORI GRADIENTE DI SFONFO

bgcolor1 = '#826FF4'; // VIOLA
bgcolor2 = '#B983FE'; // VIOLETTO
bgcolor3 = '#FF8383'; // ROSINO
bgcolor4 = '#7EEF7E'; // VERDE
bgcolor5 = '#84B6F9'; // AZZURRO

let t = 0; //VARIABILE DI PARTENZA PER SCORRERE ATTRAVERSO I VALORI DEL NOISE

let labil;

let progress1 = 0;                  //variabile che indica a quanti frame siamo della registrazione  
let progress2 = 0;
let progress3 = 0;
let progress4 = 0;
let progress5 = 0;
let duration = 600;                 //numero di frame che deve durare il tutto. A 60 fps avere una durata di 180 frame vuol dire che dura 3 secondi
let posArrayX1 = [];                //array che contiene posizioni di x
let posArrayY1 = [];                //array che contiene posizioni di y
let posArrayX2 = [];                 
let posArrayY2 = [];
let posArrayX3 = [];
let posArrayY3 = [];  
let posArrayX4 = [];
let posArrayY4 = [];
let posArrayX5 = [];
let posArrayY5 = [];           
let replayProgress1=0;              //variabile che indica il progresso nel mostrare il replay va da 0 fino alla durata
let replayProgress2=0;
let replayProgress3=0;
let replayProgress4=0;
let replayProgress5=0;
let replayDuration = 600;           //limite a cui si ferma replayProgress
let personalId1;                    //ID di ogni registrazione del momuse caricata sul database
let personalId2;
let personalId3;
let personalId4;
let personalId5;
let imgid1, imgid2, imgid3, imgid4, imgid5;
let img1, img2, img3, img4, img5;
let phase = -2;                      //indicatore della fase. A ogni fase diversa corrisponde una pagina del sito diversa (ci sono i cicli if nel draw)
let resultPhase = 0;
let timer = 10;                      //numero di secondi rimasti nel timer che appare a schermo
let timer2 = 10;
let timer3 = 10; 
let timer4 = 10;   
let timer5 = 10;                 
let cursori;                        //variabile dove mettere png di cursori altri utenti
let cursore;                        //variabile dove mettere png di cursore utente

othersArrays1 = [];                  //array vuoti dove vengono messe le posizioni degli array scaricati da Firebase
othersArrays2 = [];
othersArrays3 = [];
othersArrays4 = [];
othersArrays5 = [];
punteggi1 = [];                      //array vuoti dove vengono messi i punteggi dei vari captcha (a ciascuno corrisponde un captcha)
punteggi2 = [];
punteggi3 = [];
punteggi4 = [];
punteggi5 = [];
times1 = [];                         //arrai vuoti che contengono i moltiplicatori delle immagini dell'output finale
times2 = [];
times3 = [];
times4 = [];
times5 = [];
let xcentro1, ycentro1, xcentro2, ycentro2, xcentro3, ycentro3, xcentro4, ycentro4;
let xcntb1, ycntb1, xcntb2, ycntb2, xcntb3, ycntb3;

let userAgentString = navigator.userAgent;                      //property to return the browser of the user
let safariAgent = userAgentString.indexOf("Safari") > -1;
let chromeAgent = userAgentString.indexOf("Chrome") > -1;
let bgSafari;


function preload(){
  cursori = loadImage('./resources/puntatori/mouse.png')  //carica immagini
  cursore = loadImage('./resources/puntatori/dito.png')
  labil = loadFont('resources/LabilGroteskTrial-Fine.otf')
  imgid1 = loadImage('./resources/captcha1/1TOT.png')
  imgid2 = loadImage('./resources/captcha2/2TOT.png')
  imgid3 = loadImage('./resources/captcha3/3TOT.png')
  imgid4 = loadImage('./resources/captcha4/4TOT.png')
  imgid5 = loadImage('./resources/captcha5/5TOT.png')
  voice = loadSound("./resources/audio/voce.mp3");
  bgSafari = loadImage("./resources/sfondosafari/sfondosafari.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.mouseClicked(() => started = true);
  ctx = canvas.drawingContext;
  rectMode(CENTER);
  imageMode(CENTER);
  xScale = (1920/windowWidth);
  yScale = (1080/windowHeight);
  frameRate(60);                             //blocco fps a 60
  scaricaDaFirebase();                       //funzione per scaricare database da firebase. Nel setup perché prima cosa che succede
  pg = createGraphics(windowWidth, windowHeight);

  w2 = windowWidth/2;
  h2 = windowHeight/2;

  bsize = 440; // DIMENSIONI RETTANGOLO CAPTCHA
  ssize = 210; // DIMENSIONI RETTANGOLI PICCOLO
  

  //COORDINATE CENTRI RETTANGOLO PICCOLO 1
  xcentro1 = w2-bsize/4;
  ycentro1 = h2-bsize/4;

  //COORDINATE CENTRI RETTANGOLO PICCOLO 2

  xcentro2 = w2+bsize/4;
  ycentro2 = ycentro1;

  //COORDINATE CENTRI RETTANGOLO PICCOLO 3

  xcentro3 = xcentro1;
  ycentro3 = h2+bsize/4;

  //COORDINATE CENTRI RETTANGOLO PICCOLO 4

  xcentro4 = xcentro2;
  ycentro4 = ycentro3;

  xcntb1 = w2-ssize;
  ycntb1 = h2-ssize;
  xcntb2 = w2;
  ycntb2 = h2;
  xcntb3 = w2+ssize;
  ycntb3 = h2+ssize;


  rectgrande = new forma (windowWidth/2, windowHeight/2, bsize, bsize,"rect");

  //RESPONSIVE

  pt = windowWidth/1000;

  //TIMER

  cerchiotimer = new forma (windowWidth-40*xScale,40*yScale,50,50,"circle");

  //TESTI

  logo = new testo ('a bot of people',35*xScale,35*yScale,15*pt,0,LEFT,CENTER)
  istruzione = new testo('Position your mouse over the image that represents', windowWidth/2, 50*pt,pt*15,30,CENTER,TOP)
  titolo1 = new testo('THE CORRECT WALLPAPER', windowWidth/2, 70*pt,pt*30,0,CENTER,TOP);
  titolo2 = new testo('YOUR RELATIONSHIP WITH TECHNOLOGY', windowWidth/2, 70*pt,pt*30,0,CENTER,TOP);
  titolo3 = new testo('WHAT STRESSES YOU THE MOST', windowWidth/2, 70*pt,pt*30,0,CENTER,TOP);
  titolo4 = new testo('YOUR DEFINITION OF TECHNOLOGY', windowWidth/2, 70*pt,pt*30,0,CENTER,TOP);
  titolo5 = new testo('THE HAPPIEST PERSON', windowWidth/2, 70*pt,pt*30,0,CENTER,TOP);
  stitolo1 = new testo('THE RIGHT IMAGE', windowWidth/2, 600*yScale,pt*30,0,CENTER,TOP);
  stitolo2 = new testo('YOUR RELATIONSHIP WITH TECHNOLOGY', windowWidth/2, 600*yScale,pt*30,0,CENTER,TOP);
  stitolo3 = new testo('WHAT STRESSES YOU THE MOST', windowWidth/2, 600*yScale,pt*30,0,CENTER,TOP);
  stitolo4 = new testo('YOUR DEFINITION OF TECHNOLOGY', windowWidth/2, 600*yScale,pt*30,0,CENTER,TOP);
  stitolo5 = new testo('THE HAPPIEST PERSON', windowWidth/2, 600*yScale,pt*30,0,CENTER,TOP);
  testocheck = new testo('I am not a robot',w2 +13*pt,h2-3*pt,pt*18,30,CENTER,CENTER)
  titolone = new testo('a bot of people', windowWidth/2, h2,pt*42,0,CENTER,TOP);
  // dx = new testo('Next', (7*windowWidth)/8, 400*yScale, 10*pt, 0, CENTER, TOP, 1000);
  // sx = new testo('Prev', windowWidth/8, 400*yScale, 10*pt, 0, CENTER, TOP, 1000);
  img1 = new Immagini(w2, h2, 420, imgid1);
  img2 = new Immagini(w2, h2, 420, imgid2);
  img3 = new Immagini(w2, h2, 420, imgid3);
  img4 = new Immagini(w2, h2, 420, imgid4);
  img5 = new Immagini(w2, h2, 420, imgid5);
  accesso = new testo('Click to start the experience', windowWidth/2, windowHeight/2,pt*25,0,CENTER);
  frase1 = new testo('Welcome, I have been waiting for you...', windowWidth/2, windowHeight/2,pt*25,0,CENTER);
  frase2 = new testo('It may look like it is just you and me here, but that is not the case.\nWhen you navigate my world, you are never alone.', windowWidth/2, windowHeight/2,pt*25,0,CENTER);
  frase3 = new testo('Before we proceed, I have to ensure that all of you are human.\nAnd remember, as a machine, I am perfectly able to judge your humanity.', windowWidth/2, windowHeight/2,pt*25,0,CENTER);
  rectpulsante = new forma (windowWidth/2, windowHeight/2, pt*210, pt*70, "rect");

  if ((chromeAgent) && (safariAgent)) {safariAgent = false;}
}

function draw() {

  if (safariAgent) {image(bgSafari, windowWidth/2, windowHeight/2, windowWidth, windowHeight)}
  else {
  backgroundgblur();
  push();
  fill(color(255,100));
  rect(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  pop();
}

  noCursor();
  //PRIMA DEL CLICK

  if (started === false) {
    accesso.show();
  }

  //DOPO IL CLICK. INIZIO ESPERIENZA
  
  else {
  if(phase == -2){

    if (counter>=0){accesso.disappear();}
    if (counter > 60 && counter <200) {frase1.appear();}
    if (counter >= 200) {frase1.disappear();}
    if (counter > 320 && counter <800) {frase2.appear();}
    if (counter >= 800) {frase2.disappear();}
    if (counter > 960) {frase3.appear();}
    if (counter >= 1200) {frase3.disappear();}
    if (counter > 1750) {
      
      rectpulsante.appear();
      testocheck.show();


      push();
      strokeWeight(1);
      stroke('lightgrey');
      let box = rect(w2-70*pt,h2,17*pt,17*pt);
      pop();
    if (check === true) {phase++;} 
    }
  
    counter ++;
  }
if(phase == -1){
  
  if (counter2>=60 && counter2 <200){titolone.appear();}
  if (counter2 >= 200) {titolone.disappear();}
  if (counter2 == 400) {phase++}

  counter2 ++;
  console.log(counter2);

}


  if(phase == 0){           //fase in cui c'è il primo captcha
    rectgrande.show();
    logo.show();
    titolo1.show();
    istruzione.show();  
    img1.show();
    push()
    cerchiotimer.show();
    textAlign(CENTER, CENTER)
    textFont(labil)
    textSize(10*pt)
    text(timer, windowWidth-40*xScale, 40*yScale)
    pop()

  


      if(progress1<duration){      //ciclo if per far succedere le cose prima che il tempo scada
      recordMouseMovement(1);      //registra i movimenti del mouse dell'utente
      showOthersCursor(1);         //mostra i cursori delle registrazioni degli altri utenti
      progress1++;                 //aumenta il progresso finché non raggiunge la durata

        if (frameCount % 60 == 0 && timer > 0) { // ciclo if per far diminuire il timer a schermo.
        timer --;
        }

        if (timer == 0) {                       //se il timer a schermo raggiunge 0 attiva la funzione aumentaPunteggio() che salva la scelta dell'immagine
          aumentaPunteggio(4);
          phase++                               //quando il timer scade aumenta la fase e va alla "pagina" successiva
        }
      }
      if(progress1 == duration-1){               //la traccia1 viene salvata nel frame prima che il progresso arrivi alla fine
        salvaTraccia(1);
      }
  }
  
  else if(phase == 1){  
    rectgrande.show();
    cerchiotimer.show();
    logo.show();
    titolo2.show();
    istruzione.show();
    img2.show();

    push();
    cerchiotimer.show();
    textAlign(CENTER, CENTER)
    textFont(labil)
    textSize(10*pt)
    text(timer2, windowWidth-40*xScale, 40*yScale)
    pop();

    if(progress2<duration){
      recordMouseMovement(2);
      showOthersCursor(2);
      progress2++;                 //aumenta il progresso finché non raggiunge la durata

      if (frameCount % 60 == 0 && timer2 > 0) { // ciclo if per far diminuire il timer a schermo.
      timer2 --;
      }

      if (timer2 == 0) {                       //se il timer a schermo raggiunge 0 attiva la funzione aumentaPunteggio() che salva la scelta dell'immagine
        aumentaPunteggio(4);
        phase++                                //quando il timer scade aumenta la fase e va alla "pagina" successiva
      }
    }
    if(progress2 == duration-1){               //la traccia2 viene salvata nel frame prima che il progresso arrivi alla fine
      salvaTraccia(2);
    }

    
  }
  else if(phase == 2){ 
    
    rectgrande.show();
    cerchiotimer.show();
    logo.show();
    titolo3.show();
    istruzione.show();
    img3.show();

    push();
    cerchiotimer.show();
    textAlign(CENTER, CENTER)
    textFont(labil)
    textSize(10*pt)
    text(timer3, windowWidth-40*xScale, 40*yScale)
    pop();


    if(progress3<duration){
      recordMouseMovement(3);
      showOthersCursor(3);
      progress3++;                 //aumenta il progresso finché non raggiunge la durata

      if (frameCount % 60 == 0 && timer3 > 0) { // ciclo if per far diminuire il timer a schermo.
      timer3 --;
      }

      if (timer3 == 0) {                       //se il timer a schermo raggiunge 0 attiva la funzione aumentaPunteggio() che salva la scelta dell'immagine
        aumentaPunteggio(9);
        phase++                                //quando il timer scade aumenta la fase e va alla "pagina" successiva
      }
    }
    if(progress3 == duration-1){               //la traccia2 viene salvata nel frame prima che il progresso arrivi alla fine
      salvaTraccia(3);
    }

  } else if(phase == 3){ 

  rectgrande.show();
  cerchiotimer.show();
  logo.show();
  titolo4.show();
  istruzione.show();
  img4.show();

  push();
  cerchiotimer.show();
  textAlign(CENTER, CENTER)
  textFont(labil)
  textSize(10*pt)
  text(timer4, windowWidth-40*xScale, 40*yScale)
  pop();


  if(progress4<duration){
    recordMouseMovement(4);
    showOthersCursor(4);
    progress4++;                 //aumenta il progresso finché non raggiunge la durata

    if (frameCount % 60 == 0 && timer4 > 0) { // ciclo if per far diminuire il timer a schermo.
    timer4 --;
    }

    if (timer4 == 0) {                       //se il timer a schermo raggiunge 0 attiva la funzione aumentaPunteggio() che salva la scelta dell'immagine
      aumentaPunteggio(9);
      phase++                                //quando il timer scade aumenta la fase e va alla "pagina" successiva
    }
  }
  if(progress4 == duration-1){               //la traccia2 viene salvata nel frame prima che il progresso arrivi alla fine
    salvaTraccia(4);
  }
  }
  
  else if(phase == 4){ 
      
      rectgrande.show();
      cerchiotimer.show();
      logo.show();
      titolo5.show();
      istruzione.show();
      img5.show();

      push();
  cerchiotimer.show();
  textAlign(CENTER, CENTER)
  textFont(labil)
  textSize(10*pt)
  text(timer5, windowWidth-40*xScale, 40*yScale)
  pop();

      if(progress5<duration){
        recordMouseMovement(5);
        showOthersCursor(5);
        progress5++;                 //aumenta il progresso finché non raggiunge la durata
    
        if (frameCount % 60 == 0 && timer5 > 0) { // ciclo if per far diminuire il timer a schermo.
        timer5 --;
        }
    
        if (timer5 == 0) {                       //se il timer a schermo raggiunge 0 attiva la funzione aumentaPunteggio() che salva la scelta dell'immagine
          aumentaPunteggio(4);
          phase++                                //quando il timer scade aumenta la fase e va alla "pagina" successiva
        }
      }
      if(progress5 == duration-1){               //la traccia2 viene salvata nel frame prima che il progresso arrivi alla fine
        salvaTraccia(5);
      }
      }
    else if(phase == 5){
      // dx.show();
      // sx.show();
      if(resultPhase == 0){
        stitolo1.show();
        if(replayProgress1 <= replayDuration){      //ciclo if per disegnare ogni frame i tracciati degli utenti
          disegnaLinee(1);                          //funzione per disegnare i tracciati
          quadrati1();                              //funzione per mostrare le immagini del primo captcha scalate
          replayProgress1++;                        //aumenta il replayProgress nel ciclo if
        }else{
        disegnaLinee(1);
        quadrati1();
        resultPhase++;

      }}else if (resultPhase == 1){
        stitolo2.show();
          if(replayProgress2 <= replayDuration){
            disegnaLinee(2);
            quadrati2();
            replayProgress2++
          }else{
            disegnaLinee(2);
            quadrati2();
            resultPhase++;

          }
        }else if (resultPhase == 2){
          stitolo3.show();
          if(replayProgress3 <= replayDuration){
            disegnaLinee(3);
            quadrati3();
            replayProgress3++;;
          }else{
            disegnaLinee(3);
            quadrati3();
            resultPhase++;

          }
        }else if (resultPhase == 3){
          stitolo4.show();
          if(replayProgress4 <= replayDuration){
            disegnaLinee(4);
            quadrati4();
            replayProgress4++;;
          }else{
            disegnaLinee(4);
            quadrati4();
            resultPhase++;

          }
        }else if (resultPhase == 4){
          stitolo5.show();
          if(replayProgress5 <= replayDuration){
            disegnaLinee(5);
            quadrati5();
            replayProgress5++;;
          }else{
            disegnaLinee(5);
            quadrati5();
            // titolo5.show();

          }
        }
      }
    
    }
  image(cursore, mouseX+8*pt, mouseY+8*pt, 28, 49)
  
}
function mouseClicked(){

  if (voice.isPlaying() === false && alreadyplayed === false) {
    voice.play();
    alreadyplayed = true;
    }

  if (mouseX>w2-78.5*pt && mouseX<w2-61.5*pt && mouseY>h2-8.5*pt && mouseY<h2+8.5*pt){
    check = true;
  }

  //(w2-70*pt,h2,17*pt,17*pt);

  // if (phase == 5){
  // dx.next();
  // sx.prev();
  // }
}

function backgroundgblur() {

  // PROPRIETÀ
  imageMode(CENTER);
  pg.noStroke();
  pg.background('#E1E7F6');

  // VARIABILI

  t = t + 0.008; // LA VARIABILE VIENE INCREMENTATA OGNI CICLO E PERMETTE LO SPOSTAMENTO TRA I VALORI DEL NOISE. CON UN INCREMENTO PIù BASSO SI OTTIENE UN MOVIMENTO MAGGIORE NELLO SPAZIO MA PIÙ LENTO
  const vel = 1000; // VELOCITÀ A CUI SI MUOVE (DI QUANTO SI SPOSTA)
  var px = windowWidth/10; // COSÌ DA MANTENERE SCALABILE IL POSIZIONAMENTO DEI CERCHI

  // BLUR STARTS

  ctx.filter = 'blur(400px)';
  
  //AZZURRO
  pg.fill(bgcolor5);
  pg.ellipse(vel*noise(15+t), vel*noise(t), 600);

  //VERDE
  pg.fill(bgcolor4);
  pg.ellipse(3*px+vel*noise(70+t), 2*px+vel*noise(25+t), 300);

  //VIOLETTO
  pg.fill(bgcolor2);
  pg.ellipse(5*px+vel*noise(10+t), -px+vel*noise(20+t), 100);

  //VIOLA
  pg.fill(bgcolor1);
  pg.ellipse(5*px+vel*noise(12+t), vel*noise(18+t), 400);

  //ROSINO
  pg.fill(bgcolor3);
  pg.ellipse(px+vel*noise(2+t), vel*noise(30+t), 200);

  //TRASPARENZA
  // tint(255, 200);

  //PER VISUALIZZARE  
  image(pg,windowWidth/2,windowHeight/2,windowWidth*1.25, windowHeight*1.25);
  
  //STOP BLUR
  ctx.filter = "none";

}

function recordMouseMovement(numPhase){                           //le posizioni del mouse vengono registrate nei due array posArray

  posArrayXNum = Function('return ' + ("posArrayX"+numPhase))()   //2 funzioni che con il parametro "numPhase" permettono di usare recordMouseMovement in ogni fase del draw.
  posArrayYNum = Function('return ' + ("posArrayY"+numPhase))()
  posArrayXNum.push(Math.round(mouseX*xScale));                   //valori di mouseX e mouseY vengono inseriti dentro gli array posArray
  posArrayYNum.push(Math.round(mouseY*yScale));

}

function quadrati1(){                                                                         //funzioni per disegnare le immagini scalate. Una per ogni captcha
  for(let i = 0; i<punteggi1.length; i++){                                                    //ciclo for per inserire negli array vuoti i valori per cui moltiplicare le dimensioni delle immagini
    times1[i] = (punteggi1[i].score)/(personalId1+1)
  }
  rectpiccolo1 = new forma (xcentro1,ycentro1,ssize*times1[0],ssize*times1[0],"rect");
  rectpiccolo2 = new forma (xcentro2,ycentro2,ssize*times1[1],ssize*times1[1],"rect");
  rectpiccolo3 = new forma (xcentro3,ycentro3,ssize*times1[2],ssize*times1[2],"rect");
  rectpiccolo4 = new forma (xcentro4,ycentro4,ssize*times1[3],ssize*times1[3],"rect");
  rectpiccolo1.show();
  rectpiccolo2.show();
  rectpiccolo3.show();
  rectpiccolo4.show();
}
function quadrati2(){
  for(let i = 0; i<punteggi2.length; i++){
    times2[i] = (punteggi2[i].score)/(personalId2+1)
  }
  rectpiccolo1 = new forma (xcentro1,ycentro1,ssize*times2[0],ssize*times2[0],"rect");
  rectpiccolo2 = new forma (xcentro2,ycentro2,ssize*times2[1],ssize*times2[1],"rect");
  rectpiccolo3 = new forma (xcentro3,ycentro3,ssize*times2[2],ssize*times2[2],"rect");
  rectpiccolo4 = new forma (xcentro4,ycentro4,ssize*times2[3],ssize*times2[3],"rect");
  rectpiccolo1.show();
  rectpiccolo2.show();
  rectpiccolo3.show();
  rectpiccolo4.show();
}
function quadrati3(){
  for(let i = 0; i<punteggi3.length; i++){
    times3[i] = (punteggi3[i].score)/(personalId3+1)
  }
  rectpiccolo1 = new forma (xcntb1,ycntb1,(bsize/3)*times3[0],(bsize/3)*times3[0],"rect");
  rectpiccolo2 = new forma (xcntb2,ycntb1,(bsize/3)*times3[1],(bsize/3)*times3[1],"rect");
  rectpiccolo3 = new forma (xcntb3,ycntb1,(bsize/3)*times3[2],(bsize/3)*times3[2],"rect");
  rectpiccolo4 = new forma (xcntb1,ycntb2,(bsize/3)*times3[3],(bsize/3)*times3[3],"rect");
  rectpiccolo5 = new forma (xcntb2,ycntb2,(bsize/3)*times3[4],(bsize/3)*times3[4],"rect");
  rectpiccolo6 = new forma (xcntb3,ycntb2,(bsize/3)*times3[5],(bsize/3)*times3[5],"rect");
  rectpiccolo7 = new forma (xcntb1,ycntb3,(bsize/3)*times3[6],(bsize/3)*times3[6],"rect");
  rectpiccolo8 = new forma (xcntb2,ycntb3,(bsize/3)*times3[7],(bsize/3)*times3[7],"rect");
  rectpiccolo9 = new forma (xcntb3,ycntb3,(bsize/3)*times3[8],(bsize/3)*times3[8],"rect");
  rectpiccolo1.show();
  rectpiccolo2.show();
  rectpiccolo3.show();
  rectpiccolo4.show();
  rectpiccolo5.show();
  rectpiccolo6.show();
  rectpiccolo7.show();
  rectpiccolo8.show();
  rectpiccolo9.show();
}
function quadrati4(){
  for(let i = 0; i<punteggi4.length; i++){
    times4[i] = (punteggi4[i].score)/(personalId4+1)
  }
  rectpiccolo1 = new forma (xcntb1,ycntb1,(bsize/3)*times4[0],(bsize/3)*times4[0],"rect");
  rectpiccolo2 = new forma (xcntb2,ycntb1,(bsize/3)*times4[1],(bsize/3)*times4[1],"rect");
  rectpiccolo3 = new forma (xcntb3,ycntb1,(bsize/3)*times4[2],(bsize/3)*times4[2],"rect");
  rectpiccolo4 = new forma (xcntb1,ycntb2,(bsize/3)*times4[3],(bsize/3)*times4[3],"rect");
  rectpiccolo5 = new forma (xcntb2,ycntb2,(bsize/3)*times4[4],(bsize/3)*times4[4],"rect");
  rectpiccolo6 = new forma (xcntb3,ycntb2,(bsize/3)*times4[5],(bsize/3)*times4[5],"rect");
  rectpiccolo7 = new forma (xcntb1,ycntb3,(bsize/3)*times4[6],(bsize/3)*times4[6],"rect");
  rectpiccolo8 = new forma (xcntb2,ycntb3,(bsize/3)*times4[7],(bsize/3)*times4[7],"rect");
  rectpiccolo9 = new forma (xcntb3,ycntb3,(bsize/3)*times4[8],(bsize/3)*times4[8],"rect");
  rectpiccolo1.show();
  rectpiccolo2.show();
  rectpiccolo3.show();
  rectpiccolo4.show();
  rectpiccolo5.show();
  rectpiccolo6.show();
  rectpiccolo7.show();
  rectpiccolo8.show();
  rectpiccolo9.show();
}
function quadrati5(){
  for(let i = 0; i<punteggi5.length; i++){
    times5[i] = (punteggi5[i].score)/(personalId5+1)
  }
  rectpiccolo1 = new forma (xcentro1,ycentro1,ssize*times5[0],ssize*times5[0],"rect");
  rectpiccolo2 = new forma (xcentro2,ycentro2,ssize*times5[1],ssize*times5[1],"rect");
  rectpiccolo3 = new forma (xcentro3,ycentro3,ssize*times5[2],ssize*times5[2],"rect");
  rectpiccolo4 = new forma (xcentro4,ycentro4,ssize*times5[3],ssize*times5[3],"rect");
  rectpiccolo1.show();
  rectpiccolo2.show();
  rectpiccolo3.show();
  rectpiccolo4.show();
}




function disegnaLinee(numPhase){                                          //mostra le linee del server dopo averle disegnate
  
  othersNum = Function('return ' + ("othersArrays"+numPhase))()           //funzione che scrive "othersArrays"+ il parametro numPhase per inserirla nella funzione disegnaLinee stessa e evitare di creare più funzioni "disegnaLinee"
  replayNum = Function('return ' + ("replayProgress"+numPhase))()         //funzione che scrive "replayProgress"+ il parametro numPhase per inserirla nella funzione disegnaLinee stessa e evitare di creare più funzioni "disegnaLinee"
               
  for(let j=0; j<othersNum.length; j++){                           
    for(let i=0; i<replayNum; i++){
      if(othersNum[j].posX[i] > 0 && othersNum[j].posY[i]>0){             //ciclo if per evitare di disegnare i punti in 0, 0 per evitare bug grafico
        line(othersNum[j].posX[i]/xScale, othersNum[j].posY[i]/yScale, othersNum[j].posX[i+1]/xScale, othersNum[j].posY[i+1]/yScale)
      }
    }
  }
  for(let k=0; k<replayNum; k++){                                                           //mostra linea da te tracciata dopo averla disegnata
    let posXNum = Function('return ' + ("posArrayX"+numPhase))()                            //funzione per evitare di creare più funzioni "disegnaLinee"
    let posYNum = Function('return ' + ("posArrayY"+numPhase))()                            
    if(posXNum[k] > 0 && posArrayY2[k]>0){                                                  //ciclo if per evitare di disegnare i punti in 0, 0 per evitare bug grafico
     line(posXNum[k]/xScale, posYNum[k]/yScale, posXNum[k+1]/xScale, posYNum[k+1]/yScale)   //mostra linea da te tracciata dopo averla disegnata
    }
  }
}

function showOthersCursor(numPhase){                                       //funzione per mostrare mouse registrati

  othersNum = Function('return ' + ("othersArrays"+numPhase))()            //funzione per evitare di creare più funzioni "showOtherCursor"
  progressNum = Function('return ' + ("progress"+numPhase))()
  
  for(let i=0; i<othersNum.length; i++){                                  //ciclo for per mostrare tutti i cursori prendendo la loro posizione da "othersArrays" che contiene gli array con le posizioni dei precedenti utenti
    image(cursori, othersNum[i].posX[progressNum]/xScale, othersNum[i].posY[progressNum]/yScale, 20, 20);
  }
}

function salvaTraccia(numPhase){                                          //funzione per salvare la propria traccia sul database
  
  movimentiNum = String("movimenti" + numPhase)                           //funzione per evitare di creare più funzioni "salvatraccia"
  personalIdNum = Function('return ' + ("personalId"+numPhase))()

  posArrayXNum = Function('return ' + ("posArrayX"+numPhase))()
  posArrayYNum = Function('return ' + ("posArrayY"+numPhase))()

  var ref = db.collection(movimentiNum).doc(String(personalIdNum));  
  var traccia = {                                                         //campi che vengono salvati sul database per ogni utente
    id: personalIdNum,
    colore: 1,
    posX: posArrayXNum,
    posY: posArrayYNum
  }
  ref.set(traccia) 
  console.log("Salvato"+numPhase)
}



function aumentaPunteggio(numImg){                    //in base alla posizione del mouse sulle immagini, viene aumentato il punteggio di ogni immagine del captcha tramite punteggioServer
if(numImg == 4){
  if(mouseX>=(windowWidth/2)-ssize-10 && (mouseX<=windowWidth/2) && mouseY >= windowHeight/2-ssize-10 && mouseY <= windowHeight/2){
    if(phase == 0){                             //if usato per riconoscere la fase e salvare il punteggio nell'array corrispondente sul database
    punteggioServer(1, 1);
    } else if(phase == 1){
    punteggioServer(2, 6)
    }else if(phase == 4){
    punteggioServer(5, 1)
    }
  }
  else if(mouseX>=(windowWidth/2) && (mouseX<=windowWidth/2)+ssize && mouseY >= windowHeight/2-ssize && mouseY <= windowHeight/2){
    if(phase == 0){
      punteggioServer(1, 2);
      } else if(phase == 1){
      punteggioServer(2, 7)
      }else if(phase == 4){
      punteggioServer(5, 2)
      }
  }
  else if(mouseX>=windowWidth/2-ssize && (mouseX<=windowWidth/2) && mouseY >= windowHeight/2 && mouseY <= (windowHeight/2) + ssize){
    if(phase == 0){
      punteggioServer(1, 3);
      } else if(phase == 1){
      punteggioServer(2, 8)
      }else if(phase == 4){
      punteggioServer(5, 3)
      }
  }
  else if(mouseX>=windowWidth/2 && mouseX<=(windowWidth/2)+ssize && mouseY >= windowHeight/2 && mouseY <= (windowHeight/2) + ssize){
    if(phase == 0){
      punteggioServer(1, 4);
      } else if(phase == 1){
      punteggioServer(2, 9)
      }else if(phase == 4){
      punteggioServer(5, 4)
      }
  }
  else{
    if(phase == 0){
      punteggioServer(1, 5);
      } else if(phase == 1){
      punteggioServer(2, 10)
      }else if(phase == 4){
      punteggioServer(5, 5)
      }
    }
} else if(numImg == 9){
  if(mouseX>=w2-(bsize/2) && mouseX<=w2-(ssize/2) && mouseY>=h2-(bsize/2) && mouseY<=h2-(ssize/2)){
    if (phase == 2){
      punteggioServer(3, 1);
    }
    else if (phase == 3){
      punteggioServer(4, 1)
    }
  }else if(mouseX>=w2-(ssize/2) && mouseX<=w2+(ssize/2) && mouseY>=h2-(bsize/2) && mouseY<=h2-(ssize/2)){
    if (phase == 2){
      punteggioServer(3, 2);
      }else if (phase == 3){
        punteggioServer(4, 2)
}}else if(mouseX>=w2+(ssize/2) && mouseX<=w2+(bsize/2) && mouseY>=h2-(bsize/2) && mouseY<=h2-(ssize/2)){
    if (phase == 2){
    punteggioServer(3, 3);
      }else if (phase == 3){
  punteggioServer(4, 3)
}
}else if(mouseX>=w2-(bsize/2) && mouseX<=w2-(ssize/2) && mouseY>=h2-(ssize/2) && mouseY<=h2+(ssize/2)){
    if (phase == 2){
      punteggioServer(3, 4);
    }else if (phase == 3){
      punteggioServer(4, 4)
}}else if(mouseX>=w2-(ssize/2) && mouseX<=w2+(ssize/2) && mouseY>=h2-(ssize/2) && mouseY<=h2+(ssize/2)){
    if (phase == 2){
      punteggioServer(3, 5);
    }else if (phase == 3){
      punteggioServer(4, 5)
}}else if(mouseX>=w2+(ssize/2) && mouseX<=w2+(bsize/2) && mouseY>=h2-(ssize/2) && mouseY<=h2+(ssize/2)){
    if (phase == 2){
    punteggioServer(3, 6);
  }else if (phase == 3){
    punteggioServer(4, 6)
}}else if(mouseX>=w2-(bsize/2) && mouseX<=w2-(ssize/2) && mouseY>=h2+(ssize/2) && mouseY<=h2+(bsize/2)){
  if (phase == 2){
    punteggioServer(3, 7);
  }else if (phase == 3){
    punteggioServer(4, 7)
}}else if(mouseX>=w2-(ssize/2) && mouseX<=w2+(ssize/2) && mouseY>=h2+(ssize/2) && mouseY<=h2+(bsize/2)){
  if (phase == 2){
    punteggioServer(3, 8);
  }else if (phase == 3){
    punteggioServer(4, 8)
}}else if(mouseX>=w2+(ssize/2) && mouseX<=w2+(bsize/2) && mouseY>=h2+(ssize/2) && mouseY<=h2+(bsize/2)){
  if (phase == 2){
  punteggioServer(3, 9);
}else if (phase == 3){
  punteggioServer(4, 9)
}}else{
  if(phase == 2){
    punteggioServer(3, 5);
    } else if(phase == 3){
    punteggioServer(4, 10)
    }
  }
  }
}

function scaricaDaFirebase(){     //funzione per collegarsi a firebase e scaricare il database

  const firebaseConfig = {
    apiKey: "AIzaSyAJC8TnWIqUubK6IF3xS4ARy7_z1QS4eHY",
    authDomain: "prova-database-533e7.firebaseapp.com",
    projectId: "prova-database-533e7",
    storageBucket: "prova-database-533e7.appspot.com",
    messagingSenderId: "899788419506",
    appId: "1:899788419506:web:526acf508d7abe846434ab"
  };

  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();    //associa database a una variabile

  db.collection("movimenti1").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      othersArrays1.push(doc.data());                                              //metti tutti i documenti di "movimenti" all'interno di othersArrays
    });

    othersArrays1.sort((firstItem, secondItem) => firstItem.id - secondItem.id);  //riordina gli array delle registrazioni in base al id

    personalId1 = othersArrays1.length;                                              //il tuo id è come la lunghezza del vettore
    if(!othersArrays1[0].posY){personalId1=0}                                        //se la cella 0 non è stata riempita, riempila 
    
  });

  
  db.collection("movimenti2").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      othersArrays2.push(doc.data());                                               //metti tutti i documenti di "movimenti" all'interno di othersArrays
    });
    othersArrays2.sort((firstItem, secondItem) => firstItem.id - secondItem.id);    //riordina gli array delle registrazioni in base al id
    personalId2 = othersArrays2.length;                                             //il tuo id è come la lunghezza del vettore
    if(!othersArrays2[0].posY){personalId2=0}                                       //se la cella 0 non è stata riempita, riempila 
  });
  db.collection("movimenti3").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      othersArrays3.push(doc.data());                                               //metti tutti i documenti di "movimenti" all'interno di othersArrays
    });
    othersArrays3.sort((firstItem, secondItem) => firstItem.id - secondItem.id);    //riordina gli array delle registrazioni in base al id
    personalId3 = othersArrays3.length;                                             //il tuo id è come la lunghezza del vettore
    if(!othersArrays3[0].posY){personalId3=0}                                       //se la cella 0 non è stata riempita, riempila 
  });
  db.collection("movimenti4").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      othersArrays4.push(doc.data());                                               //metti tutti i documenti di "movimenti" all'interno di othersArrays
    });
    othersArrays4.sort((firstItem, secondItem) => firstItem.id - secondItem.id);    //riordina gli array delle registrazioni in base al id
    personalId4 = othersArrays4.length;                                             //il tuo id è come la lunghezza del vettore
    if(!othersArrays4[0].posY){personalId4=0}                                       //se la cella 0 non è stata riempita, riempila 
  });
  db.collection("movimenti5").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      othersArrays5.push(doc.data());                                               //metti tutti i documenti di "movimenti" all'interno di othersArrays
    });
    othersArrays5.sort((firstItem, secondItem) => firstItem.id - secondItem.id);    //riordina gli array delle registrazioni in base al id
    personalId5 = othersArrays5.length;                                             //il tuo id è come la lunghezza del vettore
    if(!othersArrays5[0].posY){personalId5=0}                                       //se la cella 0 non è stata riempita, riempila 
  });

  db.collection("captcha1").get().then((querySnapshot) => {              
    querySnapshot.forEach((doc) => {                                                //metti tutti i documenti di "captcha1" all'interno di punteggi1
      punteggi1.push(doc.data())
    })
  })
  db.collection("captcha2").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {                                                //metti tutti i documenti di "captcha2" all'interno di punteggi2
      punteggi2.push(doc.data())
    })
  })
  db.collection("captcha3").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {                                                //metti tutti i documenti di "captcha2" all'interno di punteggi2
      punteggi3.push(doc.data())
    })
  })
  db.collection("captcha4").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {                                                //metti tutti i documenti di "captcha2" all'interno di punteggi2
      punteggi4.push(doc.data())
    })
  })
  db.collection("captcha5").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {                                                //metti tutti i documenti di "captcha2" all'interno di punteggi2
      punteggi5.push(doc.data())
    })
  })

}

class Foto {                                                    //classe delle immagini
  constructor(xpos, ypos, width, height, title){
  this.x = xpos;
  this.y = ypos;
  this.width = width;
  this.height = height;
  this.name = title;
  }

  show(){                                                       //funzione per far apparire le immagini
    push()
    fill("white");
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    rect(this.x, this.y, this.width, this.height);
    fill("black");
    text(this.name, this.x, this.y);
    pop()
  }
}

async function punteggioServer(collectionNum, docNum){      //funzione per aumentare il punteggio. Quando viene richiamata si dichiara la collectionNum (ovvero il numero del captcha
                                                            //che finora è solo 1) e l'immagine del captcha a cui fa riferimento (docNum)
  let docName = String("imag" + docNum);
  let collectionName = String("captcha" + collectionNum);
  let scoreName;
  
  const punteggioRef = db.collection(collectionName).doc(docName);  
  const ares = await punteggioRef.update({score: firebase.firestore.FieldValue.increment(1)})   //viene incrementato di 1 il valore del docNum, ovvero il numero dell'immagine
}



class testo {

  constructor (text,x,y,size,lum,horizAlign,vertAlign){

    let alpha = 0;
    let i = 0;
    this.i=i;
    this.alpha = alpha;
    this.text = text;
    this.x=x;
    this.y=y;
    this.size = size;
    this.lum=lum;
    this.horizAlign=horizAlign;
    this.vertAlign=vertAlign;

  }


  show() {

    push();
    noStroke();
    textFont(labil);
    textLeading(47);

    fill(color(0,0,this.lum,255));
    textSize(this.size);
    textAlign(this.horizAlign,this.vertAlign);
    text(this.text, this.x, this.y);
    pop();
  }

  appear() {

    push();

    if (this.alpha<255){this.alpha += 1.5;}
    fill(color(0,0,this.lum,this.alpha));

    noStroke();
    
    textFont(labil);
    textSize(this.size);
    textLeading(30*pt);
    textAlign(this.horizAlign,this.vertAlign);
   
    text(this.text, this.x, this.y);

    pop();
  }

  disappear() {

    push();

    if (this.i=0){this.i++;this.alpha=255;}
    if (this.alpha>0){this.alpha -=2;}
    
    fill(color(0,0,this.lum,this.alpha));

    noStroke();
    
    textFont(labil);
    textSize(this.size);
    textLeading(30*pt);
    textAlign(this.horizAlign,this.vertAlign);
   
    text(this.text, this.x, this.y);

    pop();

}
}




class Immagini{
  constructor(xpos, ypos, size,  img){
    this.x = xpos;
    this.y = ypos;
    this.size = size;
    this.img = img;
  }

  show(){
    image(this.img, this.x, this.y, this.size, this.size)
  }
}

class forma {

  constructor (x,y,size1,size2,tipo){

    this.x=x;
    this.y=y;
    this.size1 = size1;
    this.size2 = size2;
    this.tipo = tipo;
    let i = 0;
    let alpha = 0;
    this.i=i;
    this.alpha = alpha;

  }

  show() {

    push();
    drawingContext.shadowOffsetX = -6;
    drawingContext.shadowOffsetY = 6;
    drawingContext.shadowBlur = 25;
    drawingContext.shadowColor = 'white';
    stroke('white');
    fill(255, 255, 255, 30)

    if (this.tipo=="rect"){

    rect(this.x,this.y,this.size1,this.size2,20)
    
    }

    else if (this.tipo == "circle") {

    ellipseMode(CENTER,CENTER);
      ellipse(this.x,this.y,this.size1)

    }
    pop();
  }

  appear(){

    push();
    drawingContext.shadowOffsetX = -6;
    drawingContext.shadowOffsetY = 6;
    drawingContext.shadowBlur = 25;
    drawingContext.shadowColor = 'white';
    stroke('white');
    if (this.alpha<30){this.alpha += 1;}
    fill(255, 255, 255, this.alpha)

    if (this.tipo=="rect"){

    rect(this.x,this.y,this.size1,this.size2,20)
    
    }

    else if (this.tipo == "circle") {

    ellipseMode(CORNER);
      ellipse(this.x,this.y,this.size1)

    }
    pop();

  }
}