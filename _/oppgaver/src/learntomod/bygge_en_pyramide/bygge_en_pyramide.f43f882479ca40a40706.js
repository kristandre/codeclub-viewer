webpackJsonp([64,236],{

/***/ 633:
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/learntomod/bygge_en_pyramide/bygge_en_pyramide.md ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/learntomod/bygge_en_pyramide/bygge_en_pyramide.md */ 634),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/learntomod/bygge_en_pyramide/bygge_en_pyramide.md */ 635)}

/***/ },

/***/ 635:
/*!*************************************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/learntomod/bygge_en_pyramide/bygge_en_pyramide.md ***!
  \*************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p>La oss gjøre som Egypterne og bygge en pyramide!\nDenne oppgaven har ikke så detaljerte instruksjoner som &quot;Bygge en kube&quot;,\nden passer fint som oppgave nr 2.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./intro.png */ 636) + "\" alt=\"\" /></figure>\n</section>\n<section class=\"activity\" id=\"steg-1-lage-en-ny-mod\">\n<h1 class=\"activity\" id=\"steg-1-lage-en-ny-mod\">Steg 1: Lage en ny mod</h1>\n<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Gå til <strong>Play</strong> &gt; <strong>Mod</strong> (i menyen) og skriv <code>pyramide</code> i feltet der det står <strong>mod_name_here</strong>. Trykk på den blå knappen som heter <strong>Blockly (multiplayer)</strong></p>\n<figure><img src=\"" + __webpack_require__(/*! ./image1.png */ 637) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Klikk på den nye firkanten som dukker opp til høyre for teksten:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image2.png */ 638) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Klikk på den gule <strong>Code</strong> knappen til høyre i bildet for å redigere modden:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image3.png */ 639) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-1-lage-main-funksjonen\">\n<h1 class=\"activity\" id=\"steg-1-lage-main-funksjonen\">Steg 1: Lage main funksjonen</h1>\n<section class=\"check\" id=\"sjekkliste-2\">\n<h2 class=\"check\" id=\"sjekkliste-2\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Lag en funksjon som heter <code>main</code> med en ny drone som heter <code>d</code>:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image4.png */ 640) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Lag en variabel som heter bredde og en som heter høyde:\n<strong>Variables</strong> &gt; <strong>Velg den øverste klossen</strong> &gt; <strong>dra den inn i main</strong> &gt;\n<strong>klikk på pil nedover</strong> &gt; <strong>velg new variable</strong> &gt; <code>skriv navnet</code> &gt; Klikk <strong>OK</strong></p>\n<figure><img src=\"" + __webpack_require__(/*! ./image5.png */ 641) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<figure>Bredde variabelen skal du bestemme selv, men det er best å velge et\noddetall for da kan vi få en kloss på toppen av pyramiden. Høyde variabelen skal datamaskinen regne ut. (kan du tenke deg hvorfor?).</figure>\n<p>Sett <strong>bredde</strong> til et tall og høyde til <strong>bredde delt på 2</strong>:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image6.png */ 642) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Når vi deler et oddetall på 2 så avrunder datamaskinen nedover så vi må legge til <strong>1</strong>\nfor å få en kloss på toppen av pyramiden. Du må legge inn en if-test som sjekker om bredde\ner et oddetall og i så fall legger til 1 på høyde variabelen.</p>\n<p><strong>Logic</strong> &gt; <strong>If-klossen</strong> &gt; <strong>dra den inn i slutten på main funksjonen</strong></p>\n<p><strong>Math</strong> &gt; <img src=\"" + __webpack_require__(/*! ./image7.png */ 643) + "\" alt=\"\" /> &gt; <strong>koble den til if-klossen</strong> &gt; <strong>forandre even til odd</strong></p>\n<p><strong>Variables</strong> &gt; <strong>bredde-klossen</strong> &gt; <strong>dra den inn i det tomme hullet i if-klossen</strong></p>\n<p><strong>Variables</strong> &gt; <img src=\"" + __webpack_require__(/*! ./image8.png */ 644) + "\" alt=\"\" /> &gt; <strong>dra inni if-klossen</strong> (til høyre for do).</p>\n<p><strong>Math</strong> &gt; <img src=\"" + __webpack_require__(/*! ./image9.png */ 645) + "\" alt=\"\" /> &gt; <strong>kobles til set høyde klossen</strong></p>\n<p><strong>Variables</strong> &gt; <strong>høyde klossen</strong> &gt; <strong>dra inn i den første tomme hullet</strong></p>\n<p><strong>Math</strong> &gt; <strong>øverste klossen</strong> &gt; <strong>dra inn i det siste tomme hullet</strong> &gt; <strong>forandre tallet til 1</strong></p>\n<p>Da blir det sånn:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image10.png */ 646) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-2-bygge-en-pyramide\">\n<h1 class=\"activity\" id=\"steg-2-bygge-en-pyramide\">Steg 2: Bygge en pyramide</h1>\n<section class=\"check\" id=\"sjekkliste-3\">\n<h2 class=\"check\" id=\"sjekkliste-3\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Lag en funksjon som bygger en rad med klosser. Bredde variablen\nskal bestemme hvor mange klosser som skal brukes. Denne funksjonen\nhar du laget før så vi viser bare et eksempel på hvordan den kan se ut:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image11.png */ 647) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Lag en funksjon som du kaller <strong>pyramide</strong> og dra 2 <strong>repeat-løkker</strong> inni hverandre:</p>\n<p><strong>Functions</strong> &gt; <strong>den øverste klossen</strong> &gt; <strong>endre navnet til pyramide</strong></p>\n<p><strong>Loops</strong> &gt; <strong>Repeat 10 times klossen</strong> &gt; <strong>dra inn i funksjonen</strong></p>\n<p><strong>Loops</strong> &gt; <strong>Repeat 10 times klossen</strong> &gt; <strong>dra inn i den første repeat-løkken</strong></p>\n<p>Det skal se sånn ut:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image12.png */ 648) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Dra de to <strong>10 klossene</strong> i søppelkassen. Putt <strong>høyde</strong> variabelen i det første tomme hullet\nog <strong>bredde</strong> variabelen i det andre tomme hullet:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image13.png */ 649) + "\" alt=\"\" /></figure>\n<figure>Den innerste løkken skal bygge en nivå og den ytterste løkken skal styre dronen oppover i høyden\nog justere størrelsen på hvert nivå sånn at det blir en pyramide.</figure>\n</li>\n<li>\n<figure>Inni den innerste løkken skal du legge til et «kall» til rad funksjonen\nog så styre dronen fremover sånn at denne løkken bygger et nivå i pyramiden:</figure>\n<p><strong>Functions</strong> &gt; <strong>rad</strong> &gt; <strong>dra den inn i den innerste løkken</strong></p>\n<p><strong>Minecraft</strong> &gt; <strong>Drone</strong> &gt; <strong>Kloss nr. 2 fra toppen</strong> &gt; <strong>dra den rett under\nrad klossen</strong> (inni den innerste løkken) og forandre retningen til <strong>forward</strong></p>\n</li>\n<li>\n<p>Utenfor den innerste løkken skal du så få dronen til å gå tilbake til\nder den startet, dvs. bakover <code>bredde</code> ganger:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image14.png */ 650) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Siden hvert nivå oppover i pyramiden skal være 2 klosser mindre må du\njustere bredde variabelen med -2. Så må du få dronen til å gå 1 posisjon\noppover, 1 posisjon fremover og 1 posisjon til venstre:</p>\n<p><strong>Math</strong> &gt; <strong>change item klossen</strong> &gt; <strong>dra under forrige kloss</strong> &gt; <strong>pil\nnedover og velge bredde variablen</strong> &gt; <strong>forandre tallet til -2</strong></p>\n<p><strong>Minecraft</strong> &gt; <strong>Drone</strong> &gt; <strong>Kloss nr. 2 fra toppen</strong> &gt; <strong>dra under forrige kloss</strong></p>\n<p><strong>Minecraft</strong> &gt; <strong>Drone</strong> &gt; <strong>Kloss nr. 2 fra toppen</strong> &gt; <strong>dra under forrige\nkloss</strong> &gt; <strong>forandre retning til fremover</strong></p>\n<p><strong>Minecraft</strong> &gt; <strong>Drone</strong> &gt; <strong>Kloss nr. 2 fra toppen</strong> &gt; <strong>dra under forrige\nkloss</strong> &gt; <strong>forandre retning til venstre</strong></p>\n<p>Da blir pyramide funksjonen sånn:</p>\n</li>\n</ul>\n<figure><img src=\"" + __webpack_require__(/*! ./image15.png */ 651) + "\" alt=\"\" /></figure>\n<ul>\n<li>\n<p>Nå mangler du bare litt i main funksjonen før pyramiden er klar!</p>\n<p>For at dronen skal starte å bygge over bakken så flytter du dronen opp en posisjon:</p>\n<p><strong>Minecraft</strong> &gt; <strong>Drone</strong> &gt; <strong>Kloss nr. 2 fra toppen</strong> &gt; <strong>dra den inn på\nslutten av main funksjonen</strong></p>\n<p>Tilslutt må du utføre pyramide funksjonen helt til slutt i main funksjonen</p>\n<p><strong>Functions</strong> &gt; <strong>pyramide</strong> &gt; <strong>dra den inn på slutten av main funksjonen</strong></p>\n<p>Da skal main funksjonen se sånn ut:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image16.png */ 652) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet\">\n<h2 class=\"flag\" id=\"test-prosjektet\">Test prosjektet</h2>\n<p>Nå kan du teste modden din i Minecraft! Trykk på den grønne <strong>Mod</strong> knappen\nøverst og gå til Minecraft og kjør modden din!</p>\n<p>Hvis den ikke fungerer så må du rette opp litt i modden, det er helt vanlig.</p>\n<p>Modden din skal se omtrent slik ut:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image17.png */ 653) + "\" alt=\"\" /></figure>\n<p>Gratulerer!</p>\n</section>\n<section class=\"challenge\" id=\"utfordring-pyramider-av-forskjellig-storrelse\">\n<h2 class=\"challenge\" id=\"utfordring-pyramider-av-forskjellig-storrelse\">Utfordring: Pyramider av forskjellig størrelse</h2>\n<p>Hvis du kjører modden din flere ganger etter hverandre i Minecraft\nså blir alltid pyramidene like store. Litt kjedelig!\nDu kan enkelt endre modden så den bygger pyramider av forskjellig størrelse.\nUnder Math kategorien er det en kloss som heter <strong>Random integer from 1 to 100</strong>\nsom velger et tilfeldig tall mellom det første tallet og det siste tallet.\nNår du bruker den så er det lurt å forandre tallene så bredden på pyramidene blir sånn passe, f.eks. fra 10 til 40.</p>\n<p>Prøv å legg inn en if-test sånn at det alltid blir et oddetall i bredde variabelen.\nTips: du kan bruke <strong>is even</strong> betingelsen under Math kategorien og legge til <strong>1</strong> hvis tallet er et partall.</p>\n<p>Test modden din flere ganger etter hverandre i Minecraft og sjekk at du får forskjellig størrelse på pyramidene.</p>\n</section>\n</section>\n";

/***/ },

/***/ 636:
/*!**************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/intro.png ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_pyramide/intro.708760.png";

/***/ },

/***/ 637:
/*!***************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image1.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_pyramide/image1.87ead8.png";

/***/ },

/***/ 638:
/*!***************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image2.png ***!
  \***************************************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },

/***/ 639:
/*!***************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image3.png ***!
  \***************************************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },

/***/ 640:
/*!***************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image4.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_pyramide/image4.56a6f5.png";

/***/ },

/***/ 641:
/*!***************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image5.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_pyramide/image5.b56b9d.png";

/***/ },

/***/ 642:
/*!***************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image6.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_pyramide/image6.b225f4.png";

/***/ },

/***/ 643:
/*!***************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image7.png ***!
  \***************************************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAkCAIAAAAb77NsAAALP0lEQVR42u2aeVxU5RrHn7PNziIwbIqySa5Ikl1C1Fw+3FJJc4uLmsstMY2wvC2mZmpmdkvFXSJvi2BgYiZl9bGukhfNhdwlEIRB1hkYGGaYmbPe9yAkwQzilNLi88d8Zs55zvue93ue531/z3sGEwQB7tltGnaPmgN2j5ojdo+aI2aHGmeEhpPANgCGd/Ud/p6Mt4DbeCDkdqiZiyA/HhrzgSQA47v6Zn8PhgFHAKODIRdA6meHmqUEri4Ca0GVwbu+UUX8tcEJAkaSrL9nGVj0MPg4SH07pAYX1mQk7D01UiGx2GyO5QkrS6FGb9kxjvEKibWrh++gMRzZ071y35JE0NOdoIafXbh9dXL2BJXUbBOZr6t2eJ/zJM52DA7H+QaLIuOHUX9QcDRLBnteP7d5Iui4NtR4qN4HjZdANRjcY4CphPxnAc9NTH49JfsxlcwGNTMtGTcoZ0/CcpAb0dUg2MlijACSr6vs2W3+IU8XfVcTcJBakLrs9MbJ7ahVp0HhyyCRAmMB1zHQLRqq04G8kLBj1a5jY1VSGxmKqEUPOPlx/BtydJb0BlyOyNlARlcBptdo/Xot2veno3Y6DK2VeeVBfXoWAk8DpwKcBJfy4S+ln9cESynGLrV5q+QKgO6vgvMQENolIOEEJW+B4XNNTdCfjprAwA9+NPSanfJqRZ3HocWLZR5VwBN8vQs5N9vDqR5rmrWQI8fjjbQMfcooGn0+Enpit0gNg8At4Bxuu8/i1VD7kaamt8PUBNGAv7tiHI0YjRrHMfvUGs5B3viSmtC4Ha+dvNYP6Yz4kQcC1OXrv4o1WuUUwf2MzN3J8PTDB3xdazNPD//ucnhUyLn0Z15TKAUISAKXv9nu/9pK0O92mBq6PY4DpRyTyTActzEH3BFkGDAsGBsFhhFIErNDTbsfNM8XVobOSF6eV9GLxLlGRsrzOBIcJNE8x/M8uml+fdzm6dEZQGNAkFk50ec1QYui0xVKgMAkcH7QAWocyxvNIJfjEtL21RZaGNibHPewPNCPlEvvUsQROOjqhNMX6KwjZsSOFyhb1HQHoSShsCp05s5lVyr8JSTbviGGJXy76S6uixOXS0U41H0LciVtcSYxK045wYAMoLxvlxpC5unruuElfvMmw/+KbIDjeVHR/PtlV7kMaPruxFmzobiWUNjhHEvmN2aGo4I9bcTaAdAkNlFbfqWiF0WwvICjwwTOYy06rJGWjg09nv7KQjD5Q/9PwfA9FK8BrhZ4VlQqIdvs9m+fGuqaIMnAHkJ5OWcw34wjggSiqWOaEQaGSBbPVRqMrYlhOEGK53mO43nxF6p2eL7lFI5SWmjjIy7mFMZzgHwxMef5TuxZUCQUlbIpe026ejLEqz21mq/h2rwirRhrF64HoQvclAYUcTqjC8rWG+DqzYoVEz5YMiUJyNEQshVwqchLmwFsPXR/pqPOO6CGQokgfNVCdQXPKvFAL4LCkfLhSzWcpQmclRaGhUtmT1Y2mlsGiaHssdZVF9UZGbmrn1rtBaaSClrp5+IkPmqCa9CUET2ClWDSt/h4eKhJzGK8fg1T97RU/WRkFa6+/q4SnG2V7RgOFCGuAOgQyzY/P4KAKi23K7OxuBy/z7s9NUYLuWF6a+8pW1Ydyx/05NCvZkcd8napTT7yWNI3U10UJtRErclpz/wVU4YeANnfIfjdJnXWObNPjWG4gN4+Z9LYfyTWDZ7psdiPP1EBD4VR2Rt0Yz6k3RQitaH3S+ZObaGGoYWq9kr2huPnftLVgErt1z/qpSiXXbPXmXftflvSyMusB5+fumXOZ5/D9699/2OzT7+IhOixblmRXjnTUsIMWUUarcUt7sXlCyiz6QY2FH11lUzBdeAp8WePYLKHEkfgELXKapFaSYVNashO+HGE11tZM/zctE9GfQmo8BRwIFm3Odk4JqBURdSQNIsdlgmyaAhe/1tR8wv0yv2IHZ/B7p7pfPi50tgMbMgkxTB3ducXjFLWlhpOKQyXUjL2aqa8vTpUDdofv0vZ837kzLXnXwiXrtY+7g+lB2PWXX9q7WjjB//Ju+mTlhIxf31FnE/W1FPvzHpAKVxYN2rYwNS6EU4mmm+ewuqumjZlWK/qMVUYuXqyyl2KdY7axUlgvmzlnKQyEzBWwD2BoEBRGrtu8xfnIhQSGlFLjV85LWr/b08tjZ24yDRviTrGV9DkM0cOGZZuNevdcCXelhopU5Z8EbNkcxZBEmglwdDEqAyJW3txTFHkP8tTvnzWMzV+ATMrOVIbn/ju/lY+fWdt3C9J6GPaJDzuaxVc6g6O9Ba2CjG+JivXMoVJuJ8OG9/cLyzd5tqXAQvfnKG3omYthsszUFIj9OD3qii+8hcCduqF91bsPDoB1aF6k+q9Oetmjf4EJGOg98ZmapwJBA5I519FLZ2bO137URYfuqDb8gmyoUOkPoR1YHD1dU9CaEftyqdT9tQsemdZFGkEgQAKA2O9QEhz3xn98vBNz2Qezn16zhrToakfaxNb+zB4dUaUF7ZDGOdtBeearFHdYbsw3ucmNZSlCsySc02IDJY1ttRBnaCGDBWMlmJQ3AekK1g1UJAI+NnE5JUp2TGImtEimxH59c6FS4ANgwF7RX/tZ1CTJa4GgW+AcoDD1M6kcU+tMshk0sIjxsOnuf6vqC++KPtXUNkOL4KkhajBkjlTfs5QpeHM2i27cmNW7Y3sBQ3luecvlXQPHevjJs3Z3i314siIByZPenK65eTaze+39ikLHPHg8Ue9+W2IlB1qNyKOAKbVEZEaWg32dUyttbXsFP1MzcJQQwLyDq+eBSZP8F8D2jRoOIP8kKYC5SDov9cxagEhPmdS2TlLDY8uUE+TM98VQEg/kjpR33eRCXfBWVqICJPOm6YwtawGuKA7+/Xbx84VGk1GJ3Ufn8ChD0fHqpUS3enEhOUZT6z5YeJgX85a+UufEY/EjvrvKB9+uzCpB6JWnTmiJ4jf21JrYyQBpRWImqlcS4Q4Ro3lCA9V3bFlC9Xu5cC7gKADCaav8VVJGiipHO5LAUWf26WGusYJoqcPlJeynIr0V+MSAlgrr6viqmmQ4BjLCWpXPGmZq1bfIrBE5WGpqy6uNzZKVH4eai8KY5DkAL6hrrZe7t5dhgbUzkdKMYbSq+DZV4kzQAimssIb3zvWbDIp5BWxO/aYjBayt6dD1JCXlaWeiPg2KS4Jx7jKenVi2nNmi3RfwlKVioOADeDy0O1SuwEO6SOUC011bvNBnAASb5bXDSZ+eoxixINS9OSb61BU2hFIzGFIwfKoehBawpDARH3b/LOND2AkCRzTdBJr9d2OIdnMQU09/2FmY0EJi+GUnZ2iW1FDx5AmZThiUI+r7s6GnPwBVQa3SeFHd8evFPc8Ajbeueqd5eD+vpKgnoRcDKTbbcARQ49HpxfOXqE15Rzq1P7+WieoNY0BaI4UeIwiOdRWy/7aHaR2AxzDAMrWu1qHYmiMQJId7BR1mlpru7krqcQhKBlUdpbRkrVQs+vXUOtyuxPU3pAraFBGgMRL1G5tDJdA/UlgCzS6XveoNVN7JPRE+oKVGCon0JQu2FnGEThKqKry8372878Ktflb39x5ZKLC1ps9mqXCA/JeGZcqp6x8h2/2UG1TrlfP3rFCoWjoagKOUaNCvEovbRvfOWr85dSjjx/ND5OSjM3mcIyXUbT4Z5EOexWLQQEz0XL8j/kOn+NxT2f967FbwdDYMbViKEgA81WQ8UDSHQLBOrXHKr69+EMiazaeALNC/J9H+CmQdrdDzVoGJW+CtRSpw66+39+TsXro9wla9+xQExixmOcZwG79H46/kAksyPxRJP0fWPlPIorQfYwAAAAASUVORK5CYII="

/***/ },

/***/ 644:
/*!***************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image8.png ***!
  \***************************************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },

/***/ 645:
/*!***************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image9.png ***!
  \***************************************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },

/***/ 646:
/*!****************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image10.png ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_pyramide/image10.4a7b0b.png";

/***/ },

/***/ 647:
/*!****************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image11.png ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_pyramide/image11.aabab2.png";

/***/ },

/***/ 648:
/*!****************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image12.png ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_pyramide/image12.029cc7.png";

/***/ },

/***/ 649:
/*!****************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image13.png ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_pyramide/image13.c36135.png";

/***/ },

/***/ 650:
/*!****************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image14.png ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_pyramide/image14.84c6f8.png";

/***/ },

/***/ 651:
/*!****************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image15.png ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_pyramide/image15.fa8e9f.png";

/***/ },

/***/ 652:
/*!****************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image16.png ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_pyramide/image16.d233e8.png";

/***/ },

/***/ 653:
/*!****************************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_en_pyramide/image17.png ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_en_pyramide/image17.a699d3.png";

/***/ }

});
//# sourceMappingURL=bygge_en_pyramide.f43f882479ca40a40706.js.map