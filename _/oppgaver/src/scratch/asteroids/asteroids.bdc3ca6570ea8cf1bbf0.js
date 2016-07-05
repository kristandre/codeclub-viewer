webpackJsonp([131,236],{

/***/ 1018:
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/scratch/asteroids/asteroids.md ***!
  \*********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/scratch/asteroids/asteroids.md */ 1019),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/scratch/asteroids/asteroids.md */ 1020)}

/***/ },

/***/ 1020:
/*!******************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/scratch/asteroids/asteroids.md ***!
  \******************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p>På slutten av 1970-tallet ga Atari ut to spill hvor man skulle\nkontrollere et romskip. Det første var Lunar Lander, men dette ble\nutkonkurrert av Asteroids som Atari ga ut noen måneder senere.\nSpillene var faktisk så like at de kunne gjenbruke mye av teknologien.\nVi skal gjøre det samme! Du må derfor ha laget\n<a href=\"../lunar_lander/lunar_lander.html\">Lunar Lander</a> før du begynner på\ndette prosjektet. I Asteroids er målet å beskytte romskipet mot\nasteroider ved å skyte dem i småbiter.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./asteroids.png */ 1021) + "\" alt=\"\" /></figure>\n</section>\n<section class=\"activity\" id=\"oversikt-over-prosjektet\">\n<h1 class=\"activity\" id=\"oversikt-over-prosjektet\">Oversikt over prosjektet</h1>\n<p><em>Mesteparten av kodingen av Asteroids skal du gjøre selv (og noe har\ndu allerede gjort). I Asteroids vil vi spesielt se på noen av måtene\nman kan gjenbruke kode i Scratch.</em></p>\n<section class=\"check\" id=\"plan\">\n<h2 class=\"check\" id=\"plan\">Plan</h2>\n<ul>\n<li>\n<p>Enda et flyvende romskip</p>\n</li>\n<li>\n<p>Romskipet kan skyte!</p>\n</li>\n<li>\n<p>Pass deg for asteroidene</p>\n</li>\n<li>\n<p>.. og andre utfordringer</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-1-enda-et-flyvende-romskip\">\n<h1 class=\"activity\" id=\"steg-1-enda-et-flyvende-romskip\">Steg 1: Enda et flyvende romskip</h1>\n<p><em>I <a href=\"../lunar_lander/lunar_lander.html\">Lunar Lander</a> laget vi et flott\nromskip. Nå skal vi se hvordan vi kan bruke det samme romskipet i\ndette prosjektet.</em></p>\n<p>Du vet sikkert at du kan <em>Remikse</em> andres Scratch-prosjekter. Du får\nda muligheten til å lage din egen versjon av noe andre har gjort, og\nspesielt kan du gjenbruke kode andre har skrevet tidligere.</p>\n<p>Nå skal vi se på et triks for å gjenbruke kode vi selv har laget\ntidligere. Ved å bruke <code>Ryggsekken</code> kan man kopiere figurer og kode\nmellom forskjellige prosjekter. Vi vil derfor først kopiere romskipet\nvi laget i Lunar Lander.</p>\n<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Åpne <a href=\"../lunar_lander/lunar_lander.html\">Lunar Lander</a>-prosjektet\nditt.</p>\n</li>\n<li>\n<p>Legg merke til at det står <code>Ryggsekk</code> helt nederst på skjermen.\nKlikk på <code>Ryggsekk</code> og et litt større felt skal åpne seg opp.</p>\n</li>\n<li>\n<figure>Dra hele romskip-figuren din til den åpne ryggsekken. En kopi av\nromskip-figuren blir værende i ryggsekken.</figure>\n</li>\n<li>\n<p>Start et nytt prosjekt ved å velge <code>Ny</code> i <code>Fil</code>-menyen. Slett\nkattefiguren og legg på en stjernebakgrunn.</p>\n</li>\n<li>\n<figure>Du kan nå dra romskip-kopien ut fra ryggsekken, og til figurvinduet\ni det nye prosjektet.</figure>\n<figure><img src=\"" + __webpack_require__(/*! ./ryggsekk.png */ 1022) + "\" alt=\"\" /></figure>\n<p>Du vil nå se at alle draktene, alle variablene og alle skriptene til\nromskipet er kopiert over. Du kan rydde opp litt ved å slette skript\nsom ikke har noe med kontrollen over romskipet å gjøre, for eksempel\nom du har et <code>Sjekk landing</code>-skript trenger vi ikke det i dette\nspillet.</p>\n</li>\n<li>\n<p>Legg et skript på scenen som sender en melding til romskipet om\nat det skal begynne å fly når det grønne flagget klikkes. Prøv\nspillet ditt. Kan du fly romskipet rundt omkring?</p>\n</li>\n<li>\n<p>Vi skal gjøre en liten forandring i hvordan romskipet oppfører\nseg. Asteroids foregår langt ute i rommet hvor det ikke er noen\nmerkbar tyngdekraft. Slett derfor klossen som modellerer\ntyngdekraften i <code class=\"blockcontrol\">for alltid</code>-løkken din, <code class=\"b\">endre [fartY v] med (-0.01)</code>.</p>\n</li>\n<li>\n<p>Vi skal også gjøre en litt større endring i spillet. Vi vil at\nverdensrommet skal føles litt stort og uoversiktlig ved at når\nromskipet går ut av skjermen på den ene siden skal det dukke opp på\nandre siden av skjermen.</p>\n<p>Dette gjør vi ved ganske enkle <code class=\"blockcontrol\">hvis</code>-tester. Det vi\nmå huske på er at <code>x</code>-koordinatene på skjermen går fra <code>-240</code> til\n<code>240</code>, mens <code>y</code>-koordinatene ligger mellom <code>-180</code> og <code>180</code>. Siden\nScratch passer på at figurer ikke går helt av skjermen flytter vi\ndem litt innenfor skjermkanten:</p>\n<pre><code class=\"language-blocks\">når jeg mottar <span class=\"hljs-string\">[Nytt spill v]</span>\nfor alltid\n    hvis &lt;(x-posisjon) &lt; <span class=\"hljs-string\">[-235]</span>&gt;\n        endre x med (<span class=\"hljs-number\">470</span>)\n    slutt\n    hvis &lt;(x-posisjon) &gt; <span class=\"hljs-string\">[235]</span>&gt;\n        endre x med (-<span class=\"hljs-number\">470</span>)\n    slutt\n    hvis &lt;(y-posisjon) &lt; <span class=\"hljs-string\">[-175]</span>&gt;\n        endre y med (<span class=\"hljs-number\">350</span>)\n    slutt\n    hvis &lt;(y-posisjon) &gt; <span class=\"hljs-string\">[175]</span>&gt;\n        endre y med (-<span class=\"hljs-number\">350</span>)\n    slutt\nslutt\n</code></pre>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-2-romskipet-kan-skyte\">\n<h1 class=\"activity\" id=\"steg-2-romskipet-kan-skyte\">Steg 2: Romskipet kan skyte</h1>\n<p><em>Romskipet vårt vil snart fly inn i en asteroidesverm, så vi må\nmontere raketter som kan sprenge unna asteroidene.</em></p>\n<section class=\"check\" id=\"sjekkliste-2\">\n<h2 class=\"check\" id=\"sjekkliste-2\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Lag en ny figur som du kaller <code>Skudd</code>. Denne tegner du greit selv.\nEventuelt finnes det for eksempel noen ball-figurer som kan brukes\nsom kuler. Bruk en <code class=\"blocklooks\">sett størrelse</code>-kloss for at\nfiguren skal bli passe stor. Legg også på en kloss for å\n<code class=\"blocklooks\">skjule</code> figuren.</p>\n</li>\n<li>\n<figure>Vi vil bruke kloner slik at vi kan skyte flere skudd. Først trenger\nvi koden som lager en ny skuddklone når mellomromtasten trykkes:</figure>\n<p>Lag et skript på skudd-figuren som starter på <code>Nytt spill</code>-meldingen. Skriptet kan bestå av en <code class=\"blockcontrol\">for alltid</code>-løkke, hvor du tester på om mellomromtasten\ner trykket. Dersom et skudd skal avfyres kan du først la skuddet <code class=\"blockmotion\">gå til</code> romskipet og deretter peke i samme retning som\nromskipet. Dette siste kan du gjøre med en kombinasjon av <code class=\"blockmotion\">pek i retning</code>, <code class=\"blocksensing\">retning av</code> og\n<code class=\"blockmotion\">vend</code>-klosser. Til slutt kan du <code class=\"blockcontrol\">lage en klon</code> av figuren.</p>\n</li>\n<li>\n<p>For å passe på at bare en melding sendes ut hver gang\nmellomromtasten trykkes kan vi starte <code class=\"blockcontrol\">hvis</code>-testen\nmed å vente til mellomromtasten er sluppet igjen. Dette trikset ser\nomtrent slik ut:</p>\n<pre><code class=\"language-blocks\"><span class=\"hljs-atom\">hvis</span> &lt;<span class=\"hljs-atom\">tast</span> [<span class=\"hljs-atom\">mellomrom</span> <span class=\"hljs-atom\">v</span>] <span class=\"hljs-atom\">trykket</span>?&gt;\n    <span class=\"hljs-atom\">vent</span> <span class=\"hljs-atom\">til</span> &lt;<span class=\"hljs-atom\">ikke</span> &lt;<span class=\"hljs-atom\">tast</span> [<span class=\"hljs-atom\">mellomrom</span> <span class=\"hljs-atom\">v</span>] <span class=\"hljs-atom\">trykket</span>?&gt;&gt;\n    ...\n<span class=\"hljs-atom\">slutt</span>\n</code></pre>\n</li>\n<li>\n<p>Nå skal vi kode oppførselen til skuddet etter at det er avfyrt. Det\nkan være ganske enkelt. Når skuddfiguren <code class=\"blockcontrol\">starter som klon</code> må den <code class=\"blocklooks\">vises</code>, og deretter kan\nden flyttes i en løkke før den til slutt slettes. Eksperimenter med\nhastigheten og rekkevidden på skuddet ved å endre på hvor mange\nganger løkka gjentas og hvor mange steg figuren går inne i løkka.</p>\n</li>\n<li>\n<p>Til slutt vil vi at også skuddene skal kunne forsvinne ut på den ene\nsiden av skjermen og dukke opp igjen på den andre. Til dette vil vi\nbruke omtrent samme kode for romskipet.</p>\n<p>For å kopiere skript mellom figurer kan du bruke ryggsekken på samme\nmåte som tidligere. En litt raskere metode er å bare dra skriptet du\nvil kopiere til den figuren du vil kopiere til.</p>\n<p>Kopier koden for å <em>warp'e</em> rundt skjermen fra romskipet til\nskudd-figuren.</p>\n</li>\n<li>\n<p>Vi kan nesten bruke denne koden som den er. Den eneste endringen vi\ntrenger å gjøre er at den skal starte på <code class=\"b\">når jeg starter som klon</code> i stedet for på <code class=\"b\">når jeg mottar [Nytt spill v]</code>, siden\ndenne oppførselen skal gjelde for alle skuddklonene.</p>\n</li>\n<li>\n<figure>Prøv spillet ditt. Nå skal du kunne fly rundt i verdensrommet mens\ndu skyter.</figure>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-3-pass-deg-for-asteroidene\">\n<h1 class=\"activity\" id=\"steg-3-pass-deg-for-asteroidene\">Steg 3: Pass deg for asteroidene</h1>\n<p><em>Da er det på tide å lage en asteroidesverm. Noe av det som er kult\nmed Asteroids er at asteroidene blir skutt i småbiter når de treffes,\nog man må fortsatt passe seg for og skyte disse mindre asteroidene.\nVi vil kode dette ved å bruke kloner i forskjellige størrelser.</em></p>\n<section class=\"check\" id=\"sjekkliste-3\">\n<h2 class=\"check\" id=\"sjekkliste-3\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Lag en asteroidefigur. En måte å gjøre dette på er å tegne en ny\nfigur med vektorgrafikk. Start med en enkel firkant, og bruk\nderetter <code>Bøy</code>-verktøyet for å legge til flere hjørnepunkter og\nflytte dem rundt som i figuren under.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./flyttpunkt.png */ 1023) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Også for asteroidene vil vi bruke kloner. Lag et skript som\n<code class=\"blocklooks\">skjuler</code> figuren og lager et par asteroide-kloner\ntilfeldige steder på skjermen når det mottar <code>Nytt spill</code>-meldingen.</p>\n</li>\n<li>\n<p>Når figuren <code class=\"blockcontrol\">starter som klon</code> vil vi først at den\n<code class=\"blockmotion\">peker</code> i en tilfeldig retning og deretter\n<code class=\"blocklooks\">vises</code>. Videre kan den gå inn i en løkke som <code class=\"blockcontrol\">gjentas til</code> figuren <code class=\"blocksensing\">berører romskipet</code>. Inne\ni løkken lar du først asteroiden <code class=\"blockmotion\">gå noen steg</code>. Deretter må du teste om asteroiden <code class=\"blocksensing\">berører et skudd</code>. Hvis den gjør det kan du lage asteroiden\nmindre med en kloss som ligner</p>\n<pre><code class=\"language-blocks\">sett størrelse til <span class=\"hljs-comment\">((størrelse)</span> / <span class=\"hljs-comment\">(2)</span>) <span class=\"hljs-preprocessor\">%</span>\n</code></pre>\n<p><code class=\"blockcontrol\">Hvis</code> <code class=\"blocklooks\">størrelsen</code> fortsatt er større\nenn for eksempel 10 kan du lage et par nye kloner av denne mindre\nasteroiden. Til slutt kan du <code class=\"blockcontrol\">slette denne klonen</code>\nuansett hva størrelsen er.</p>\n</li>\n<li>\n<p>Legg på en melding eller en <code class=\"blockcontrol\">stopp</code>-kloss slik at\nspillet kan avsluttes etter at <code class=\"blockcontrol\">gjenta til</code>-løkken\navsluttes, siden romskipet da har krasjet i en asteroide.</p>\n</li>\n<li>\n<p>Også asteroidene skal kunne fly ut av skjermen på en side og dukke\nopp på en annen. Kopier derfor skriptet som fikser dette fra\nskudd-figuren på samme måte som tidligere.</p>\n</li>\n<li>\n<p>Til slutt vil vi også slette skudd-klonene når de treffer\nasteroidene. Her må vi være litt forsiktig så vi ikke sletter\nskudd-klonene før asteroidene merker at de er truffet. Dette kan vi\nfikse ved å legge inn en ørliten forsinkelse. Du kan for eksempel\nlegge inn kode som dette i løkka som flytter skudd-figuren:</p>\n<pre><code class=\"language-blocks\"><span class=\"hljs-tag\">hvis</span> &lt;<span class=\"hljs-tag\">ber</span>ø<span class=\"hljs-tag\">rer</span> <span class=\"hljs-attr_selector\">[Asteroide v]</span> ?&gt;\n    <span class=\"hljs-tag\">vent</span> (0<span class=\"hljs-class\">.01</span>) <span class=\"hljs-tag\">sekunder</span>\n    <span class=\"hljs-tag\">slett</span> <span class=\"hljs-tag\">denne</span> <span class=\"hljs-tag\">klonen</span>\n<span class=\"hljs-tag\">slutt</span>\n</code></pre>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-4-videreutvikling-av-spillet\">\n<h1 class=\"activity\" id=\"steg-4-videreutvikling-av-spillet\">Steg 4: Videreutvikling av spillet</h1>\n<p><em>Du har nå laget en enkel variant av Asteroids. Men prøv å gjøre\nspillet morsommere ved å videreutvikle det. Du bestemmer selv hvordan\ndu vil jobbe videre, men nedenfor er noen ideer som kanskje kan være\ntil inspirasjon?</em></p>\n<section class=\"check\" id=\"ideer-til-videreutvikling\">\n<h2 class=\"check\" id=\"ideer-til-videreutvikling\">Ideer til videreutvikling</h2>\n<ul>\n<li>\n<p>Gi poeng når spilleren treffer en asteroide. Man burde kanskje få\nflere poeng for å treffe de små asteroidene? Det kan du fikse med en\nutregning omtrent som</p>\n<pre><code class=\"language-blocks\">avrund <span class=\"hljs-list\">(<span class=\"hljs-list\">(<span class=\"hljs-number\">100</span>)</span> / <span class=\"hljs-list\">(<span class=\"hljs-keyword\">st</span>ørrelse)</span>)</span>\n</code></pre>\n</li>\n<li>\n<p>Dersom du plasserer asteroidene helt tilfeldig når et nytt spill\nstarter er det ganske sannsynlig at romskipet krasjer i en asteroide\nallerede før spillet har begynt. Det er ikke noe moro. En måte å\nfikse det på vil være å først la asteroideklonen\n<code class=\"blockmotion\">gå til romskipet</code>, men deretter peke i en tilfeldig\nretning og <code class=\"blockmotion\">gå 100 til 200 steg</code> før det til slutt\n<code class=\"blocklooks\">vises</code>.</p>\n</li>\n<li>\n<figure>Spillet ser litt kulere ut om du tegner flere asteroidedrakter, og\nvelger en av dem tilfeldig når en klon lages.</figure>\n</li>\n<li>\n<p>Dersom man klarer å skyte ned alle asteroidene burde man komme\nvidere til et vanskeligere nivå. Kanskje med flere asteroider? Eller\nmed asteroider som beveger seg raskere? Eller deler seg i flere\ndeler når de blir skutt?</p>\n<p>For å vite når du kan gå videre til et nytt nivå må du telle hvor\nmange asteroider som flyr rundt. Lag derfor en variabel <code class=\"blockdata\">Antall asteroider</code> som du øker med 1 når en asteroide <code class=\"blockcontrol\">starter som klon</code>. Deretter må variabelen minke med 1 når\nklonen slettes.</p>\n<p>Videre bruker du en <code class=\"blockdata\">Nivå</code>-variabel som holder styr på\nhvilket nivå spilleren har kommet til.</p>\n</li>\n<li>\n<p>I det originale Asteroids-spillet dukket det også opp en flyvende\ntallerken (UFO) innimellom. Denne måtte man også passe seg for, men\ni motsetning til asteroidene kunne UFOen skyte tilbake. Prøv å legg\ntil en slik UFO i spillet ditt!</p>\n</li>\n</ul>\n</section>\n</section>\n";

/***/ },

/***/ 1021:
/*!*******************************************************!*\
  !*** ../oppgaver/src/scratch/asteroids/asteroids.png ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/asteroids/asteroids.86442b.png";

/***/ },

/***/ 1022:
/*!******************************************************!*\
  !*** ../oppgaver/src/scratch/asteroids/ryggsekk.png ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/asteroids/ryggsekk.c36383.png";

/***/ },

/***/ 1023:
/*!********************************************************!*\
  !*** ../oppgaver/src/scratch/asteroids/flyttpunkt.png ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/asteroids/flyttpunkt.3d3406.png";

/***/ }

});
//# sourceMappingURL=asteroids.bdc3ca6570ea8cf1bbf0.js.map