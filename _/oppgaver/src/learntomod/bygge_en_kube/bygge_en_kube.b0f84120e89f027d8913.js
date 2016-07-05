webpackJsonp([63,236],{

/***/ 602:
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/learntomod/bygge_en_kube/bygge_en_kube.md ***!
  \********************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/learntomod/bygge_en_kube/bygge_en_kube.md */ 603),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/learntomod/bygge_en_kube/bygge_en_kube.md */ 604)}

/***/ },

/***/ 604:
/*!*****************************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/learntomod/bygge_en_kube/bygge_en_kube.md ***!
  \*****************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p>Vi skal bygge en kube i minecraft og lære endel viktige klosser i Learn To Mod. Oppgaven er forklart i detalj og egner seg som den første oppgaven du gjør i Learn To Mod.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./intro.png */ 605) + "\" alt=\"\" /></figure>\n</section>\n<section class=\"activity\" id=\"steg-1-lage-en-ny-mod\">\n<h1 class=\"activity\" id=\"steg-1-lage-en-ny-mod\">Steg 1: Lage en ny mod</h1>\n<p>Gå til Mod-siden ved å velge <strong>Play</strong> &gt; <strong>Mod</strong> i menyen på toppen:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image1.png */ 606) + "\" alt=\"\" /></figure>\n<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Klikk i feltet hvor det står <strong>mod_name_here</strong>.</p>\n</li>\n<li>\n<p>Gi modden navnet <code>kube</code> og trykk på den blå knappen som heter <strong>Blockly (Multiplayer)</strong>.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image2.jpeg */ 607) + "\" alt=\"\" /></figure>\n<p>Modden dukker da opp til høyre:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image3.jpeg */ 608) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Klikk på modden og du kommer til en side som ser sånn ut:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image4.jpeg */ 609) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Klikk på knappen <strong>Code</strong> for å komme til kodesiden:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image5.jpeg */ 610) + "\" alt=\"\" /></figure>\n<p>Her lages koden i modden ved å velge blokker fra menyen til venstre.</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-2-bygge-en-rad\">\n<h1 class=\"activity\" id=\"steg-2-bygge-en-rad\">Steg 2: Bygge en rad</h1>\n<p>Kuben skal bestå av mange rader med blokker. Vi begynner med å lage en rad.</p>\n<section class=\"check\" id=\"sjekkliste-2\">\n<h2 class=\"check\" id=\"sjekkliste-2\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Alle modder må ha en funksjon som heter main, klikk på <strong>Functions</strong>:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image6.jpeg */ 611) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Velg den øverste klossen og klikk på den for å legge den til. Klikk så i\nfeltet der det står <strong>do something</strong> og skriv <code>main</code> (bare små bokstaver).</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image7.jpeg */ 612) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Legg til en variabel ved å klikke <strong>Variables</strong>, velg klossen <strong>set item to</strong>\nog dra den inn i main-funksjonen.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image8.jpeg */ 613) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Variabelen heter nå item, men du skal gi den et nytt navn. Klikk på\npilen ved siden av teksten <code>item</code>:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image9.jpeg */ 614) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Velg <strong>New variable...</strong> og skriv <code>d</code>:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image10.jpeg */ 615) + "\" alt=\"\" /></figure>\n<p>Klikk <strong>OK</strong>. Nå heter den nye variabelen <code>d</code>.</p>\n<p>For at modden vår skal kunne bygge ting i Minecraft skal vi bruke en drone.\nEn drone er som en usynlig robot som kan gå hvor som helst i Minecraft (også gjennom vegger).\nEn drone kan gjøre mye kult, først skal vi bruke den til å bygge ting.</p>\n</li>\n<li>\n<p>Variabelen <code>d</code> skal inneholde en ny drone. Klikk på <strong>Minecraft</strong> til venstre,\nklikk så på <strong>Drone</strong> og velg <strong>new Drone</strong>.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image11.jpeg */ 616) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Dra klossen <strong>new Drone</strong> så den klikker sammen med <strong>set d to</strong> klossen.</p>\n<p>For å lage raden med klosser skal dronen plassere en kloss, flytte seg,\nplassere en kloss, flytte seg, plassere en kloss, flytte seg og så videre.\nNår vi skal gjøre noe likt flere ganger i et program så bruker vi løkker, som kalles <em>loops</em> på engelsk.</p>\n</li>\n<li>\n<p>Klikk på <strong>Loops</strong>:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image12.jpeg */ 617) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Velg klossen som heter <strong>repeat 10 times</strong> og dra den under\n<strong>set d to new drone</strong> klossen. Så klikker du <strong>Minecraft</strong> &gt; <strong>Drone</strong> og\nvelger klossen som heter <strong>Drone d places block of type</strong> og\ndrar den så den havner inni <strong>repeat 10 times</strong> løkken:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image13.jpeg */ 618) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Så skal du bestemme hva slags materiale som det skal bygges med. Til\nvenstre under <strong>Minecraft</strong> finnes alle materialene du kan bygge med i\nalfabetisk rekkefølge <strong>Materials [A-C]</strong> osv. Velg det materialet du vil\nbruke og putt det inn i det tomme feltet.</p>\n</li>\n<li>\n<p>Så skal du få dronen til å flytte seg en plass til venstre. Velg\n<strong>Minecraft</strong> &gt; <strong>Drone</strong> og velg klossen <strong>Move Drone d in\ndirection up distance 1</strong>. Dra klossen inn i løkken så det ser sånn ut:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image14.jpeg */ 619) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Klikk på den lille pilen ved siden av <strong>up</strong> og velg <strong>left</strong> sånn at dronen\ngår et steg til venstre.</p>\n</li>\n<li>\n<p>Så skal du få dronen til å gå 10 steg tilbake når den er ferdig med\nraden (utenfor løkken og under). Velg <strong>Minecraft</strong> &gt; <strong>Drone</strong> og velg\n<strong>Move Drone d in direction right distance 10</strong> og dra den under løkken så det blir sånn:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image15.jpeg */ 620) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet\">\n<h2 class=\"flag\" id=\"test-prosjektet\">Test prosjektet</h2>\n<p>Nå er du klar til å teste ut modden. Klikk på den grønne knappen på\ntoppen som heter <strong>Mod</strong>. Det skal da komme en beskjed til høyre om at\nmodden er laget på Minecraft serveren.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image16.jpeg */ 621) + "\" alt=\"\" /></figure>\n<p>Da kan du gå til Minecraft og teste modden!</p>\n</section>\n<section class=\"check\" id=\"koble-til-serveren\">\n<h2 class=\"check\" id=\"koble-til-serveren\">Koble til serveren</h2>\n<ul>\n<li>Åpne <strong>Minecraft</strong>, velg <strong>multiplayer</strong> og dobbeltklikk på <strong>Learntomod</strong> serveren.</li>\n<li>Hvis du ikke har lagt inn serveren så gjør du det nå:\n<ul>\n<li>Adressen til serveren er <code>play.learntomod.com</code>.</li>\n<li>Gå inn på serveren og se at du blir flyttet til din egen server.</li>\n</ul>\n</li>\n</ul>\n</section>\n<section class=\"check\" id=\"kjore-modden\">\n<h2 class=\"check\" id=\"kjore-modden\">Kjøre modden</h2>\n<ul>\n<li>\n<p>Finn en bra plass hvor du vil at modden skal bygge.</p>\n</li>\n<li>\n<p>Trykk <strong>9</strong> for å aktivere modde-kisten din.</p>\n</li>\n<li>\n<p><strong>Høyre-klikk</strong> for å åpne kisten.</p>\n</li>\n<li>\n<p>Sjekk at du har en mod der.</p>\n</li>\n<li>\n<p>Putt modden i spor <strong>1</strong>.</p>\n</li>\n<li>\n<p><strong>Esc</strong> ut.</p>\n</li>\n<li>\n<p>Trykk <strong>1</strong>.</p>\n</li>\n<li>\n<p><strong>Høyre-klikk</strong> for å kjøre modden din.</p>\n</li>\n<li>\n<p>Sjekk at den har blitt kjørt.</p>\n</li>\n<li>\n<p>OK? Ble det laget en rad i Minecraft? Hvis ikke må du finne ut hva som er feil, rette det opp i modden og teste på nytt i Minecraft.</p>\n<p>Når jeg kjørte min mod så ble det en rad i bakken der jeg pekte når jeg kjørte modden:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image17.jpeg */ 622) + "\" alt=\"\" /></figure>\n<figure>Raden ble bygd i bakken hvis du pekte på bakken når du kjørte modden. La\noss endre modden så den bygger over bakken.</figure>\n</li>\n</ul>\n<ul>\n<li>\n<p>Velg <strong>Minecraft</strong> &gt; <strong>Drone</strong> og\nvelg <strong>Move drone d in direction up distance 1</strong> og dra den under klossen som heter <strong>set d to\nnew drone</strong>. Så det blir sånn:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image18.jpeg */ 623) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Trykk på den grønne knappen som heter <strong>Mod</strong> og gå til Minecraft og test modden på nytt.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image19.jpeg */ 624) + "\" alt=\"\" /></figure>\n<p>Nå ble det bedre!</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-3-bruke-egne-funksjoner\">\n<h1 class=\"activity\" id=\"steg-3-bruke-egne-funksjoner\">Steg 3: Bruke egne funksjoner</h1>\n<figure>Når du skal lage store modder er det greit å bryte opp i flere\nfunksjoner så blir det lettere å lese hva modden gjør.</figure>\n<section class=\"check\" id=\"sjekkliste-3\">\n<h2 class=\"check\" id=\"sjekkliste-3\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Velg <strong>Functions</strong> og lag en ny funksjon som heter <code>rad</code>:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image20.jpeg */ 625) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Ta tak i klossene ved å klikke på <strong>repeat 10 times</strong> og dra dem inn i den nye funksjonen:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image21.jpeg */ 626) + "\" alt=\"\" /></figure>\n<p>For at den nye funksjonen skal utføres så må du legge inn et <strong>kall</strong> til funksjonen\nfra main-funksjonen.</p>\n</li>\n<li>\n<p>Velg <strong>Functions</strong> og dra klossen som heter <strong>rad</strong> inn til slutt i main-funksjonen:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image22.jpeg */ 627) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-2\">\n<h2 class=\"flag\" id=\"test-prosjektet-2\">Test prosjektet</h2>\n<p>Nå kan du teste modden på nytt. Trykk på <strong>Mod</strong> knappen og gå til\nMinecraft og kjør modden på nytt. Den skal fremdeles bygge en rad.</p>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-4-bygge-en-firkant\">\n<h1 class=\"activity\" id=\"steg-4-bygge-en-firkant\">Steg 4: Bygge en firkant</h1>\n<section class=\"check\" id=\"sjekkliste-4\">\n<h2 class=\"check\" id=\"sjekkliste-4\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Du skal lage en funksjon som heter <code>firkant</code> og som bruker <strong>rad</strong> funksjonen\ntil å bygge en firkant. Når du er ferdig skal det se sånn ut:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image23.jpeg */ 628) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-3\">\n<h2 class=\"flag\" id=\"test-prosjektet-3\">Test prosjektet</h2>\n<ul>\n<li>Nå kan du teste modden på nytt. Trykk på <strong>Mod</strong> knappen og gå til\nMinecraft og kjør modden på nytt. Den skal nå bygge en firkant.</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-4-bygge-en-kube\">\n<h1 class=\"activity\" id=\"steg-4-bygge-en-kube\">Steg 4: Bygge en kube</h1>\n<section class=\"check\" id=\"sjekkliste-5\">\n<h2 class=\"check\" id=\"sjekkliste-5\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Du skal lage en ny funksjon som heter <code>kube</code> og som bruker <strong>firkant</strong> funksjonen\ntil å bygge en hel kube. Når du er ferdig skal det se sånn ut:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image24.jpeg */ 629) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-4\">\n<h2 class=\"flag\" id=\"test-prosjektet-4\">Test prosjektet</h2>\n<ul>\n<li>\n<p>Test modden, trykk <strong>Mod</strong> knappen og gå til Minecraft og kjør den.</p>\n</li>\n<li>\n<p>Hva skjer i Minecraft? Ble det bygd en kube?</p>\n<p>Hvis ikke så må du finne feilen, rette den og trykke <strong>Mod</strong> knappen på nytt og teste den i Minecraft.</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-5-bruke-variabler\">\n<h1 class=\"activity\" id=\"steg-5-bruke-variabler\">Steg 5: Bruke variabler</h1>\n<p>Hvis du vil lage en mindre eller større kube så er det tungvint å få det til\nsiden vi bruke tallet <code>10</code> så mange forskjellige steder. Når vi bruker noe\nmange steder er det bedre å bruke en variabel.</p>\n<section class=\"check\" id=\"sjekkliste-6\">\n<h2 class=\"check\" id=\"sjekkliste-6\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Gå til <strong>Variables</strong> og lag en ny variabel som heter <strong>bredde</strong> og plasser den\nsom kloss nr. 2 i <strong>main</strong> funksjonen.</p>\n</li>\n<li>\n<p>Ta bort alle <strong>10-tallene</strong> ved å dra dem bort i søppelkassen.</p>\n</li>\n<li>\n<p>Gå til <strong>Variables</strong> og velg den nye variabelen <strong>bredde</strong>\nog dra den inn i alle de tomme hullene der 10-tallet var før.</p>\n</li>\n<li>\n<p>Når du har lagt inn variabelen bredde på alle de tomme hullene så kan du\nendre på <strong>verdien</strong> til variabelen i toppen av programmet og teste at\nmodden bygger en større eller mindre kube i Minecraft.</p>\n<p>Kult! Du har laget din første mod i Minecraft og lært masse! Du har lært\nå bruke variabler og funksjoner til å gjøre programmet lett å forstå. Du\nhar lært å bruke løkker til å gjøre noe mange ganger og å bruke droner\ntil å bygge ting i Minecraft.</p>\n</li>\n</ul>\n<section class=\"protip\" id=\"tips-kopiere-klosser\">\n<h3 class=\"protip\" id=\"tips-kopiere-klosser\">Tips: Kopiere klosser</h3>\n<p>Du kan lage en kopi av en kloss ved å <strong>peke</strong> på den, <strong>høyre-klikke</strong> og velge\n<strong>Duplicate</strong>:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image25.png */ 630) + "\" alt=\"\" /></figure>\n</section>\n</section>\n<section class=\"challenge\" id=\"utfordring-hul-kube-med-monstre\">\n<h2 class=\"challenge\" id=\"utfordring-hul-kube-med-monstre\">Utfordring: Hul kube med monstre!</h2>\n<p>Nå kommer det en utfordring! Du skal lage en kube som er tom innvendig\nved å bygge en ny kube inni den første, men denne skal bygges med luft.\nPass på at den innerste kuben har en bredde som er <strong>2 mindre enn</strong> den ytterste kuben.\nTil slutt skal du lage en funksjon som fyller kuben med <strong>monstre</strong>.</p>\n<p>Når du er ferdig skal modden ligne på denne:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image26.jpeg */ 631) + "\" alt=\"\" /></figure>\n<p>Test modden i Minecraft og lag et hull i kuben for å se hva som er inni.\nHvis du vil så kan du lage den første kuben av glass så er det enda\nlettere å se monstrene.</p>\n</section>\n</section>\n";

/***/ },

/***/ 605:
/*!**********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/intro.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/intro.838cb2.png";

/***/ },

/***/ 606:
/*!***********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image1.png ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image1.9665ec.png";

/***/ },

/***/ 607:
/*!************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image2.jpeg ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image2.d2052b.jpeg";

/***/ },

/***/ 608:
/*!************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image3.jpeg ***!
  \************************************************************/
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },

/***/ 609:
/*!************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image4.jpeg ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image4.fb5aab.jpeg";

/***/ },

/***/ 610:
/*!************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image5.jpeg ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image5.dae2e1.jpeg";

/***/ },

/***/ 611:
/*!************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image6.jpeg ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image6.44b3a8.jpeg";

/***/ },

/***/ 612:
/*!************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image7.jpeg ***!
  \************************************************************/
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },

/***/ 613:
/*!************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image8.jpeg ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image8.16b078.jpeg";

/***/ },

/***/ 614:
/*!************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image9.jpeg ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image9.5ed541.jpeg";

/***/ },

/***/ 615:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image10.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image10.07f082.jpeg";

/***/ },

/***/ 616:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image11.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image11.ea392e.jpeg";

/***/ },

/***/ 617:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image12.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image12.516ca4.jpeg";

/***/ },

/***/ 618:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image13.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image13.e56ebb.jpeg";

/***/ },

/***/ 619:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image14.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image14.9d0b68.jpeg";

/***/ },

/***/ 620:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image15.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image15.306167.jpeg";

/***/ },

/***/ 621:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image16.jpeg ***!
  \*************************************************************/
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },

/***/ 622:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image17.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image17.32ed50.jpeg";

/***/ },

/***/ 623:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image18.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image18.c830a0.jpeg";

/***/ },

/***/ 624:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image19.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image19.5343c4.jpeg";

/***/ },

/***/ 625:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image20.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image20.fe60c7.jpeg";

/***/ },

/***/ 626:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image21.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image21.484137.jpeg";

/***/ },

/***/ 627:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image22.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image22.087dd3.jpeg";

/***/ },

/***/ 628:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image23.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image23.f68807.jpeg";

/***/ },

/***/ 629:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image24.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image24.83a30a.jpeg";

/***/ },

/***/ 630:
/*!************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image25.png ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image25.c2b0be.png";

/***/ },

/***/ 631:
/*!*************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_kube/image26.jpeg ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_kube/image26.58249c.jpeg";

/***/ }

});
//# sourceMappingURL=bygge_en_kube.b0f84120e89f027d8913.js.map