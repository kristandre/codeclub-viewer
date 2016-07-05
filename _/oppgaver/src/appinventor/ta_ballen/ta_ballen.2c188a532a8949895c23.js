webpackJsonp([20,236],{

/***/ 349:
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/appinventor/ta_ballen/ta_ballen.md ***!
  \*************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/appinventor/ta_ballen/ta_ballen.md */ 350),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/appinventor/ta_ballen/ta_ballen.md */ 351)}

/***/ },

/***/ 351:
/*!**********************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/appinventor/ta_ballen/ta_ballen.md ***!
  \**********************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p>Nå skal vi lage en app som heter <code>Ta ballen</code>. For å lage denne appen så forutsetter vi at vi vet hvordan\n<em>MIT App Inventor</em> fungerer fra\n<a href=\"http://kodeklubben.github.io/appinventor/introduksjon/introduksjon.html\">tidligere oppgavesett</a>, og kan\nutføre instruksjoner uten å få alt forklart i detalj. Denne appen går ut på at en ball spretter frem\nog tilbake på skjermen, og du vinner ved å trykke på ballen med fingeren din. Dess kjappere du klarer\nå treffe ballen, dess flere poeng får du. Dette er en ganske enkel app, men det er mulig å utvide\nappen etter egne ønsker etterpå.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./introduksjon.png */ 352) + "\" alt=\"\" /></figure>\n</section>\n<section class=\"activity\" id=\"steg-1-opprette-spillskjerm\">\n<h1 class=\"activity\" id=\"steg-1-opprette-spillskjerm\">Steg 1: Opprette spillskjerm</h1>\n<p>Det første vi skal gjøre er å opprette en spillskjerm, og legge til en klokke og en ball.</p>\n<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<figure>Starte nytt prosjekt og gi det navn <code>TaBallen</code>.</figure>\n</li>\n<li>\n<p>Du har nå kommet til en skjerm som heter <code>Screen1</code>. Lag en ny skjerm ved navn <code>Spill</code> ved å\ntrykke på <strong>Add Screen</strong>.</p>\n</li>\n<li>\n<p>Gå til <strong>Drawing and Animation</strong> i <strong>Palette</strong>-menyen og legg til <strong>Canvas</strong> og <strong>Ball</strong>.\nOBS! <strong>Ball</strong> må slippes inni <strong>Canvas</strong> på skjermen for at den skal bli lagt til.</p>\n</li>\n<li>\n<p>Sett både <code>Height</code> og <code>Width</code> på <strong>Canvas</strong> til <code>Fill parent</code>.</p>\n</li>\n<li>\n<p>Gå til <strong>Sensors</strong> i <strong>Palette</strong>-menyen og legg til <strong>Clock</strong>.</p>\n</li>\n<li>\n<figure>Til slutt kan du velge en passende farge og radius til ballen, samt farge til bakgrunnen.\nEt eksempel på hvordan det kan se ut er:</figure>\n<figure><img src=\"" + __webpack_require__(/*! ./spill.png */ 353) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-2-programmere-spillet\">\n<h1 class=\"activity\" id=\"steg-2-programmere-spillet\">Steg 2: Programmere spillet</h1>\n<p>Nå skal vi programmere spillet. Dette gjør vi ved å opprette flere funksjoner for å sjekke tiden\nog poengene i spillet når ballen blir trykket på. Vi må også bestemme hvordan ballen skal bevege\npå seg i spillet.</p>\n<section class=\"check\" id=\"sjekkliste-2\">\n<h2 class=\"check\" id=\"sjekkliste-2\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Nå er vi fortsatt på <code>Spill</code>-skjermen, og skal kode selve spillet. Trykk først på <code>Blocks</code> for å bytte\ntil koding.</p>\n</li>\n<li>\n<p>Det første vi må gjøre er å lage en ny variabel ved navn <code>Clock</code> som vi gir verdien <code>0</code>,\nslik at vi kan passe på tiden i spillet, og dermed også poengsummen.</p>\n</li>\n<li>\n<p>Når vi lager et spill, så må vi ofte gjøre en del instillinger før selve spillet kan starte. Det må vi\nogså gjøre her. Vi ønsker at ballen skal starte på en tilfeldig posisjon på skjermen, slik at det ikke\nblir så lett å ta den med en gang. Vi vil også at den skal bevege seg i en tilfeldig retning, og ha\nen tilfeldig fart. Vi ønsker også at vi skal få <code>10</code> sekunder på oss til å fange ballen før spillet er over,\nog at vi får ekstra masse poeng dersom vi klarer å ta ballen før tiden er ute. OBS! Timeren tar imot\nmillisekunder, så <code>10</code> sekunder er det samme som <code>10000</code> millisekunder i koden. Koden for dette kan se slik ut:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./init.png */ 354) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>For å sjekke om tiden er ute så trykker vi på <strong>Clock1</strong> og henter <code>when Clock1.Timer - do</code> og legger inn\n<code>close screen with value result</code> og tallet <code>0</code>.</p>\n</li>\n<li>\n<p>Vi må også passe på at ballen ikke spretter ut av skjermen, og det gjør vi ved å legge til\n<code>when Ball1.EdgeReached - do</code>. Inni denne blokken setter vi <code>call Ball1.Bounce - edge</code> og <code>get edge</code>.</p>\n</li>\n<li>\n<p>Nå har vi kommet til det aller viktigste: hvordan vi kan vinne! Da ønsker vi at vi vinner ved å trykke på\nballen kjappest mulig. Vi sa at tiden vi fikk er <code>10</code> sekunder, som igjen er <code>10000</code> millisekunder, slik som\nvist i bildet ovenfor. Vi skal da få <code>10000</code> poeng dersom vi klarer å ta ballen med en gang, også blir vi\ntrukket <code>1</code> poeng for hvert millisekund som går. Det vil da se slik ut:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./victory.png */ 355) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>For å kunne gå tilbake til forsiden så legger vi inn en blokk som sier <code>when Spill.BackPressed - do</code>\nfra <strong>Screen1</strong>. Inne i denne blokken plasserer vi <code>open another screen screenName</code> som er koblet\nmed teksten <code>Screen1</code>.</p>\n</li>\n<li>\n<p>Dersom du ønsker å endre på farten til ballen eller hvor lenge spillet skal vare så kan du fint\ngjøre det ved å endre på instillingene vi satt før spillet starter. Da er spillet klart, men vi\nhar fremdeles noen ting vi må fikse før appen er helt ferdig.</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-3-designe-menyen\">\n<h1 class=\"activity\" id=\"steg-3-designe-menyen\">Steg 3: Designe menyen</h1>\n<figure>Nå vi starter appen, så kommer vi til en meny. Der skal vi vise poengsummen fra spillet,\nog ha muligheten til å starte spillet på nytt.</figure>\n<section class=\"check\" id=\"sjekkliste-3\">\n<h2 class=\"check\" id=\"sjekkliste-3\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Gå tilbake til <code>Screen1</code> og <code>Designer</code>.</p>\n</li>\n<li>\n<p>Legg til en <strong>Label</strong> øverst hvor du skriver <code>Ta ballen!</code>. La teksten være midtstilt og labelen fylle bredden.</p>\n</li>\n<li>\n<p>Legg så til to knapper, <strong>Button</strong>, en med tekst <code>SPILL</code> og en ved navn <code>CREDITZ</code>. Gi også knappene de samme\nnavnene som i teksten, slik at det vises under <strong>Components</strong>. La også knappene være midstilt og dekke\nbredden på skjermen.</p>\n</li>\n<li>\n<p>Under <strong>Layout</strong> i <strong>Palette</strong>-menyen finner du <strong>HorizontalArrangement</strong>, som du legger til på skjermen.\nInne i denne legger du til to nye labels. La den ene ha teksten <code>Rekord</code> og være plassert til venstre.\nLa den andre være uten tekst, fylle bredden og plasser teksten til høyre. <strong>Components</strong> ser nå slik ut:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./components.png */ 356) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Til slutt fikser du på hvordan <strong>Screen1</strong> skal se ut. Legg gjerne til et bilde, endre bakgrunnsfarge,\nskriftstørrelse eller andre ting slik at den ser ut som du ønsker. Et eksempel på hvordan det kan se ut er:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./screen.png */ 357) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-4-programmere-menyen\">\n<h1 class=\"activity\" id=\"steg-4-programmere-menyen\">Steg 4: Programmere menyen</h1>\n<p>Nå som menyen er designet ferdig, er vi nødt til å programmere den slik at noe skjer når vi trykker på knappene.</p>\n<section class=\"check\" id=\"sjekkliste-4\">\n<h2 class=\"check\" id=\"sjekkliste-4\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Nå er vi fortsatt på <code>Screen1</code>-skjermen, men skal programmere meny-knappene våre. Trykk først på <code>Blocks</code>\nfor å bytte til koding.</p>\n</li>\n<li>\n<p>Først må vi lage en ny variabel ved navn <code>Score</code> som vi gir verdien <code>0</code>.</p>\n</li>\n<li>\n<p>Så må vi sørge for at vi skifter skjerm når vi trykker på knappene. Trykk på <strong>SPILL</strong> og hent frem blokken som\nheter <code>When SPILL.Click - do</code>, og så hente frem blokken <code>open another screen screenName</code> fra <strong>Control</strong> og\nfest på teksten <code>Spill</code>. Gjør så det samme for <code>Creditz</code>.</p>\n</li>\n<li>\n<p>For å kunne avslutte appen så legger vi inn en blokk som sier <code>when Screen1.BackPressed - do</code> fra <strong>SPILL</strong>.\nInne i denne blokken plasserer vi <code>close application</code>.</p>\n</li>\n<li>\n<p>Så bestemmer vi poengsummen ved start ved <code>when Screen1.Initialize - do</code>, og <code>set Label3.Text to</code> knyttet\ntil <code>get global Score</code>.</p>\n</li>\n<li>\n<figure>Til slutt skal vi lage en mer avansert blokk som sjekker om din nye poengsum er bedre enn tidligere poengsummer\netter endt spill. Den blokken vil da se slik ut:</figure>\n<figure><img src=\"" + __webpack_require__(/*! ./result.png */ 358) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-5-opprette-krediteringskjerm\">\n<h1 class=\"activity\" id=\"steg-5-opprette-krediteringskjerm\">Steg 5: Opprette krediteringskjerm</h1>\n<figure>Når vi har laget en app så er det litt gøy at det står hvem som har laget den,\nog det skal vi nå lage en egen skjerm for å vise.</figure>\n<section class=\"check\" id=\"sjekkliste-5\">\n<h2 class=\"check\" id=\"sjekkliste-5\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Lag en ny skjerm ved navn &quot;Creditz&quot;.</p>\n</li>\n<li>\n<p>Legg til en <strong>Label</strong> hvor du skriver at <code>Denne appen er laget av ...</code>, etterfulgt av navnet ditt.\nDet kan også være passende å legge til et bilde, enten av deg selv eller noe annet kult.</p>\n</li>\n<li>\n<p>For å kunne gå tilbake til forsiden så må vi bytte til <code>Blocks</code>, hvor vi legger inn en blokk som sier\n<code>when Creditz.BackPressed - do</code> fra <strong>Screen1</strong>. Inne i denne blokken plasserer vi\n<code>open another screen screenName</code> som er koblet med <code>Screen1</code>.</p>\n</li>\n</ul>\n</section>\n</section>\n";

/***/ },

/***/ 352:
/*!**************************************************************!*\
  !*** ../oppgaver/src/appinventor/ta_ballen/introduksjon.png ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/appinventor/ta_ballen/introduksjon.b2a58b.png";

/***/ },

/***/ 353:
/*!*******************************************************!*\
  !*** ../oppgaver/src/appinventor/ta_ballen/spill.png ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/appinventor/ta_ballen/spill.4879cc.png";

/***/ },

/***/ 354:
/*!******************************************************!*\
  !*** ../oppgaver/src/appinventor/ta_ballen/init.png ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/appinventor/ta_ballen/init.fe010e.png";

/***/ },

/***/ 355:
/*!*********************************************************!*\
  !*** ../oppgaver/src/appinventor/ta_ballen/victory.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/appinventor/ta_ballen/victory.74cf1f.png";

/***/ },

/***/ 356:
/*!************************************************************!*\
  !*** ../oppgaver/src/appinventor/ta_ballen/components.png ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/appinventor/ta_ballen/components.3e3edc.png";

/***/ },

/***/ 357:
/*!********************************************************!*\
  !*** ../oppgaver/src/appinventor/ta_ballen/screen.png ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/appinventor/ta_ballen/screen.1fe97b.png";

/***/ },

/***/ 358:
/*!********************************************************!*\
  !*** ../oppgaver/src/appinventor/ta_ballen/result.png ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/appinventor/ta_ballen/result.c7e8a1.png";

/***/ }

});
//# sourceMappingURL=ta_ballen.2c188a532a8949895c23.js.map