![heading](readme/BANNER.png)

# About
“a bot of people” is a virtual space built on P5.js that aims to highlight an aspect of technology that is often hidden, that of other users’ presence and interactions in the places we visit on the internet. The experience is available [at this link.](https://drawwithcode.github.io/2022-group-project-group02/) <br>
“a bot of people” is a project created as part of the elective course [Creative Coding](https://drawwithcode.github.io/) at [Politecnico di Milano](https://www11.ceda.polimi.it/schedaincarico/schedaincarico/controller/scheda_pubblica/SchedaPublic.do?&evn_default=evento&c_classe=696598&__pj0=0&__pj1=3ed8420c42c849845b5caa3de626e8fc).

# Team
Alessandro Raimondo <br>
Anna Maria Spada <br>
Davide Saladino <br>
Bianca Maria Lucini

# Table of Contents
1. [Project idea](#project-idea)<br> 
a. [Theme](#theme)<br>
b. [Aim](#aim)<br>
c. [Concept](#concept)<br>
d. [Exhibition](#exhibition)<br>
2. [Structure](#structure)<br>
a. [Introduction](#introduction)<br>
b. [The CAPTCHAs](#the-captchas)<br>
c. [Final visual output](#final-visual-output)<br>
3. [Design challenges](#design-challenges)<br>
a. [Thinking machine](#thinking-machine)<br>
b. [Copy](#copy)<br>
c. [Aesthetic](#aesthetic)<br>
d. [Content](#content)<br>
4. [Coding Challenges](#coding-challenges)<br>
a. [Functionality](#functionality)<br>
b. [Visual](#visual)<br>
5. [Libraries and tools](#libraries-and-tools)<br>
6. [Faculty](#faculty)

# Project idea
#### Theme
Users on the internet often feel like they are having a very intimate experience with the content they interact with. They are not used to seeing the presence of other users that have previously visited or are simultaneously visiting the same page. What if every movement could leave a trace of our presence, and what if it was visible to everyone?<br>
This project aims to explore the theme of presence both technologically, by showing the previous interactions of other users which are usually hidden, as well as socially, trying to bring a digital space where the (illusion of the) presence of other users in that moment is visible to you and may affect your experience. It does so by presenting various revisited versions of the widely known reCAPTCHA tests that users are prompted to interact with. These were chosen due to the fact that Google’s reCAPTCHA software tracks mouse movements, among other things, to determine whether a user is human or not. The tests will not offer only logical and straight-forward questions but also subjective, personal and opinion-based questions allowing for everyone to see the mouse movements of all users as a reflection of their thought process. It will be a moment where users will be interacting and influenced not only by the static interface but also by the dynamic experience that other people have had on the site.

#### Aim
The project aims to make its users reflect not only on their relationship with technology but also on how the interactions with it would change if their experience were to become less intimate than it currently is. The content was chosen to push users to further reflect on whether or not it is beneficial to always feel like we are the only ones seeing something online and how it would change if we could always see the interactions of other people. The use of the reCAPTCHA tests which are programmed to determine whether a user is human may spark further reflection on the way users nowadays have to “act human” in the “eyes” of a machine and how this may have go against the way we would interact with it if others were around.

#### Concept
The project is designed to be used anywhere and in any circumstance. A user will simply have to start their experience on the webpage and will be able to take part in the tests while also seeing the mouse movements of everyone who has been on the site in the past. Since the presence of other users and the representation of their mouse movements is crucial to the project, the cursors that are seen on the screen include past experiences of users in order to avoid instances where not many people are on the site and the concept of the project is rendered null.

#### Exhibition
For the purposes of an exhibition the work may be presented with the use of a projector and three computers, for visitors to complete the experience. One of these computers would be connected to the projector in order to show the experience as well as the visual outputs also to visitors who are not actively participating. The computers should be set up in a way that keeps the experience personal and individual.
![exhibitionsetup](readme/schema_def.png)

# Structure
#### Introduction
When landing on the site, the user goes through an introduction presented by an “Artificial Intelligence”. This will offer a very brief explanation of what the project aims to do while also playing on the concept of reCAPTCHAs and testing a user’s human attributes. This was done to push a further reflection on the fact that it is machines judging our humanity and that usually users are pushed to behave as human as they can. This time, however, they will not only have to please the AI, they will also think that there are others who can see their actions in that moment. After the introduction, the user will have to declare that they are human in order to begin and they will start seeing other people’s cursors from past interactions on their screen. <br>
![intro](readme/human-min.gif)

#### The CAPTCHAs
Following their declaration, the AI will not be convinced that the user is human and will redirect them to a series of image-based tests, starting with an unconventional one that remains straight forward and moving towards less obvious and more personal ones. Here they will still be exposed to the experience of other users, seeing the cursors and what they were doing when going through the different stages. The user will have a time limit to choose their one and only answer and position their mouse over it before the end of the timer to confirm their choice. Once the timer stops they will automatically be redirected to the next test together with the other users. <br>
![captcha](readme/captcha1-min.gif)

#### Final visual output
Once the final test is complete the user will stop seeing the cursors of all other users and will be shown an abstracted visual representation of the interaction they were just a part of. This will no longer show the pictures of the test but instead they will see coloured squares of different sizes based on the amount of users that “voted” for that image. In the meantime they will see a reproduction of the interactions of all users in the form of lines to represent the traces that were left with their mouse. This will allow the user to spot any type of hidden pattern within the interaction while also being able to see indecisive behaviours or even users following each other.<br>
![artwork](readme/artwork2-min.gif)

# Design Challenges
#### Thinking Machine
Some design challenges that were faced in the creation of this project included setting the right mood to evoke the intended feelings in the users. The idea was to create an environment where the machine itself is addressing the audience directly in a way that wouldn’t make the user feel like they are alone or singled out but rather that they are one of many. Due to this “character” presenting the experience, it was also crucial to make it look like the AI was almost “thinking” in the moment as the text is and questions are generated. A moving gradient was created, inspired by many common abstract representations of artificial intelligence such as SIRI.<br>
![gradient](readme/gradient-min.gif)

#### Copy
This futuristic and surreal setting had to be accompanied by copy that would make the user understand straight away that it was the machine itself addressing them. It was important that the copy would explain the concept without giving away too much before the experience. The AI had to have a personality, a snarky one, without being exaggerated and still seeming machine-like enough to almost raise feelings of unease on behalf of the audience.

#### Aesthetic
Although the content was inspired by reCAPTCHAs the project needed to have a clear-cut and unique personality which had to be developed in accordance with a clean high-tech look to remain coherent with the AI persona. It was crucial to find a balance between the feelings that had to be evoked through the sophisticated look and the simplistic, bland and often un-aesthetic nature of reCAPTCHAs. The general visual identity of the project therefore was created to play between the two face of technology with a near-perfect environment that is being inhabited by what look like random stock images, pixelated cursors and one single human hand to represent the cursor of the current user. This mix and match of elements is able to underline all that is beautiful and perfect but also messy questionable about the way AI can work.
![moodboard](readme/Palette.png)

#### Content
The content constituted another design challenge as it was supposed to present users with questions that would be out of the box and that could both be fun and thought-provoking. It was important that the content would render the fact of seeing other users’ interactions even more significant, for example with questions where the answer is an opinion or a subjective feeling. The questions are all related to the topic of technology ranging from general to personal ones to encourage a reflection on the relationship that people have with technology. These question therefore are only possible to answer if the user is indeed human. Furthermore, in order to encourage users to move their mouse enough during the experience, instead of clicking on images, users have to place their mouse over the image that represents their answer and instead of choosing many different answers they would only have to choose one. These tweaks helped make the content more interesting while encouraging more significant movements while leaving more space for potential social influence between users when answering questions.
![contenuti](readme/5CAPTCHA.png)

# Coding challenges
#### Functionality
One of the first challenges to face was finding a way to store all the mouse positions of each user throughout the experience in order to reproduce them for the next user both in the form of a cursor during the question and later as a trace for the artwork. This was done with the use of Cloud Firestore which is part of the firebase database. Within Cloud Firestore multiple arrays with mouse positions for each user were stored under specific IDs. These were then recalled and reproduced with the cursor during the reCAPTCHA tests and with the trace being drawn for the artwork. <br>
Even if FireBase could have been appropriate as a database, due to the hierarchy of the stored variables, the nature of FireStore seemed more optimised for the project.<br>
A specific function allows to download the content of the database in the beginning and stores it in a variable.<br>
```javascript
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
  ```
Furthermore for the final artwork it was important to store the final position of the mouse of every user at the end of the timer in order to recreate squares of a size proportional to the amount of “votes” received. Within Cloud Firestore there are different folders for each question and within those there is one per image. A score goes up if a user’s mouse position ends up in the location of that image. This information again is recalled for the creation of the final artwork.<br><br>
In addition, another challenge was to optimise the code after the functionality was achieved. The biggest problem was the repetition of entire parts of code for all five questions. In order to avoid this, the best solution was to use parameters and smaller functions to automatically apply specific values to different variables. 

```javascript
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
```

But in some cases this was not possible, for example when creating the squares in the final output.<br>

```javascript
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
function quadrati2
```
#### Visual
The gradient in the background represents AI thinking. It was coded by creating circles of different size and colour on a PGraphic element. These shapes were then blurred and made more transparent. Initially this was obtained with the image filter(BLUR), available within p5.js, but it required too much computing power and it slowed down the page.<br>

So we used some native HTML5 Canvas functionality that is not exposed by p5. We called these functions with the variable drawingContext. So we used the Canvas API to blur the gradient (CanvasRenderingContext2D.filter), this filter didn’t affect the speed of the site, and to draw shadows.<br>

Unfortunately it was found that the library used for the blur effect of the ellipses is not supported by Safari. This issue was tackled by using the Navigator userAgent property which returns string that represents information about the user's browser, including the name. It was found that an additional check is necessary in the case of Safari since it is also included in Chrome's user agent and may result positive even when the real browser is Chrome. This value was then used in a for statement in order to show an image of the gradient when the user is accessing through Safari and keeping the moving gradient for all other browsers.<br>

Perlin noise was used to give the blurred circle fluid and natural-looking movements. The smaller the difference between successive coordinates, the smoother the resulting noise sequence is, so we chose incremental steps of 0.008. This is then multiplied by the vel const that makes the movements larger and more visible.<br>

These effects were then applied only to the background which has its own function that is called at the start of the draw() function.<br>

```javascript
// COLORI GRADIENTE DI SFONFO

let canvas, ctx;

bgcolor1 = '#826FF4'; // VIOLA
bgcolor2 = '#B983FE'; // VIOLETTO
bgcolor3 = '#FF8383'; // ROSINO
bgcolor4 = '#7EEF7E'; // VERDE
bgcolor5 = '#84B6F9'; // AZZURRO

let t = 0; //VARIABILE DI PARTENZA PER SCORRERE ATTRAVERSO I VALORI DEL NOISE

//VARIABILI PER RILEVARE BROWSER
let userAgentString = navigator.userAgent;
let safariAgent = userAgentString.indexOf("Safari") > -1;
let chromeAgent = userAgentString.indexOf("Chrome") > -1;
let bgSafari;

function preload(){
  bgSafari = loadImage("./resources/sfondosafari/sfondosafari.png")
}

function setup (){
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

  if ((chromeAgent) && (safariAgent)) {safariAgent = false;}
}

function draw() {
  if (safariAgent) {image(bgSafari, windowWidth/2, windowHeight/2, windowWidth, windowHeight)}              //sfondo per safari
  else {
  backgroundgblur();
  push();
  fill(color(255,100));
  rect(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  pop();
}
}

function backgroundgblur() {

  // PROPRIETÀ
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
  //ctx.filter = 'blur(0px)';
  ctx.filter = "none";
}
```

# Libraries and tools
[Cloud Firestore](https://firebase.google.com/docs/firestore)<br>
[Firebase](https://firebase.google.com/)<br>

# Faculty
Michele Mauri <br>
Tommaso Elli <br>
Andrea Benedetti
