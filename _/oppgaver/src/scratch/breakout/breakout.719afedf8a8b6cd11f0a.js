webpackJsonp([133,236],{

/***/ 1033:
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/scratch/breakout/breakout.md ***!
  \*******************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/scratch/breakout/breakout.md */ 1034),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/scratch/breakout/breakout.md */ 1035)}

/***/ },

/***/ 1035:
/*!****************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/scratch/breakout/breakout.md ***!
  \****************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p>Breakout er en gammel klassiker opprinnelig laget av Steve Jobs og\nSteve Wozniak (grunnleggerene av Apple) på 1970-tallet. På samme måte\nsom i Pong skal man kontrollere en sprettende ball ved hjelp av en\nracket. Men Breakout kan spilles av en spiller hvor man får poeng for\nå skyte ned bokser ved hjelp av ballen.  Nyere versjoner har\nvidereutviklet Breakout på flere måter. For eksempel ved at noen\nbokser gir spesielle bonuser, ved at det finnes forskjellige brett av\nulik vanskelighetsgrad og så videre.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./breakout.png */ 1036) + "\" alt=\"\" /></figure>\n</section>\n<section class=\"activity\" id=\"oversikt-over-prosjektet\">\n<h1 class=\"activity\" id=\"oversikt-over-prosjektet\">Oversikt over prosjektet</h1>\n<p><em>Mesteparten av kodingen av Breakout skal du gjøre selv. Koden for\nracketen og ballen ligner en del på den tilsvarende koden i Pong. Vi\nvil derfor fokusere på boksene i dette prosjektet, og spesielt\ndiskutere hvordan man kan bruke kloner på en effektiv måte.</em></p>\n<section class=\"check\" id=\"plan\">\n<h2 class=\"check\" id=\"plan\">Plan</h2>\n<ul>\n<li>\n<p>Bokser ... Mange bokser!</p>\n</li>\n<li>\n<p>En sprettende ball og en enkel racket</p>\n</li>\n<li>\n<p>Boksene forsvinner ...</p>\n</li>\n<li>\n<p>Fallende bokser, bonuser, flere brett og andre utfordringer</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-1-bokser-mange-bokser\">\n<h1 class=\"activity\" id=\"steg-1-bokser-mange-bokser\">Steg 1: Bokser ... Mange bokser!</h1>\n<p><em>En sentral del av Breakout er alle boksene man skal prøve å skyte\nned. Siden disse boksene alle oppfører seg (nesten) likt vil vi bruke\nden samme koden for alle boksene. Til dette bruker vi kloning.</em></p>\n<p>I Scratch kan vi klone figurer. Det betyr at vi lager en kopi av en\nfigur, både av utseendet og oppførselen. Her vil vi derfor først lage\nen boks, og deretter lage mange kopier av denne.</p>\n<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Start et nytt prosjekt. Slett kattefiguren.</p>\n</li>\n<li>\n<p>Lag en boksfigur. Denne kan du tegne selv eller bruke <code>Button3</code> i\nbiblioteket.</p>\n</li>\n<li>\n<p>Vi vil nå klone denne ene boksen mange ganger. For å lage flere\nrekker med bokser bruker vi to løkker. Vi trenger også å vite hvor\nmange bokser vi har slik at vi senere kan sjekke om vi har skutt ned\nalle. Lag derfor en variabel <code class=\"blockdata\">Antall bokser</code> som gjelder\nfor alle figurer. I denne koden må du kanskje endre de forskjellige\ntallene litt, slik at de passer størrelsen på din boks.</p>\n<pre><code class=\"language-blocks\">når jeg mottar [<span class=\"hljs-variable\">Nytt</span> spill v]\nskjul\nsett [<span class=\"hljs-variable\">Antall</span> bokser v] til [<span class=\"hljs-number\">0</span>]\nsett y til (<span class=\"hljs-number\">160</span>)\n<span class=\"hljs-function\"><span class=\"hljs-title\">gjenta</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">5</span>)</span> <span class=\"hljs-title\">ganger</span>\n    <span class=\"hljs-title\">sett</span> <span class=\"hljs-title\">x</span> <span class=\"hljs-title\">til</span> <span class=\"hljs-params\">(-<span class=\"hljs-number\">200</span>)</span>\n    <span class=\"hljs-title\">gjenta</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">11</span>)</span> <span class=\"hljs-title\">ganger</span>\n        <span class=\"hljs-title\">endre</span> [A<span class=\"hljs-title\">ntall</span> <span class=\"hljs-title\">bokser</span> <span class=\"hljs-title\">v</span>] <span class=\"hljs-title\">med</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">1</span>)</span>\n        <span class=\"hljs-title\">lag</span> <span class=\"hljs-title\">klon</span> <span class=\"hljs-title\">av</span> [<span class=\"hljs-title\">meg</span> <span class=\"hljs-title\">v</span>]\n        <span class=\"hljs-title\">endre</span> <span class=\"hljs-title\">x</span> <span class=\"hljs-title\">med</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">40</span>)</span>\n    <span class=\"hljs-title\">slutt</span>\n    <span class=\"hljs-title\">endre</span> <span class=\"hljs-title\">y</span> <span class=\"hljs-title\">med</span> <span class=\"hljs-params\">(-<span class=\"hljs-number\">25</span>)</span>\n<span class=\"hljs-title\">slutt</span>\n</span></code></pre>\n</li>\n<li>\n<p>Selve oppførselen til hver boks kan vi så kode i et eget skript som\nstarter når klonen lages. Siden vi enda ikke har en ball, lager vi\net enkelt skript hvor hver boks (det vil her si alle boksene) blir\nborte når mellomrom trykkes.</p>\n<pre><code class=\"language-blocks\">når jeg starter som klon\nvis\nvent til &lt;tast <span class=\"hljs-string\">[mellomrom v]</span> trykket?&gt;\nendre <span class=\"hljs-string\">[Antall bokser v]</span> med (-<span class=\"hljs-number\">1</span>)\nslett denne klonen\n</code></pre>\n<p>Etter at vi har laget en ball og en racket skal vi oppdatere denne\nkoden slik at boksene i stedet forsvinner når de blir truffet av\nballen.</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-2-en-sprettende-ball-og-en-enkel-racket\">\n<h1 class=\"activity\" id=\"steg-2-en-sprettende-ball-og-en-enkel-racket\">Steg 2: En sprettende ball og en enkel racket</h1>\n<p><em>Når man lager nye programmer og spill er det alltid lurt å lage en\nenkel versjon av spillet tidlig. Denne tidlige versjonen behøver ikke\nkunne gjøre veldig mye, du kan likevel begynne å teste at programmet\nblir som du hadde tenkt nesten med en gang.</em></p>\n<figure>Vi begynner nå med grunnmekanismen i spillet: En ball som spretter og\nen racket som kan ta i mot ballen.</figure>\n<section class=\"check\" id=\"sjekkliste-2\">\n<h2 class=\"check\" id=\"sjekkliste-2\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Lag en racket-figur. Tegn gjerne en selv, ellers kan du bruke for\neksempel <code>Paddle</code> fra biblioteket.</p>\n</li>\n<li>\n<p>Lag et skript som starter når det mottar <code>Nytt spill</code>. Dette\nskriptet må plassere racketen et passende sted nederst på\nskjermen. Deretter kan det gå inn i en løkke hvor racketen alltid\nflyttes sidelengs når <code>Pil venstre</code>- eller <code>Pil høyre</code>-tastene\ntrykkes.</p>\n</li>\n<li>\n<figure>Lag en ball-figur. Du kan enten finne en i biblioteket, eller\ntegne en selv.</figure>\n</li>\n<li>\n<p>Vi vil ha muligheten til senere enkelt å endre hastigheten til\nballen. Lag derfor en ny variabel <code class=\"blockdata\">hastighet</code> som\ngjelder for ball-figuren.</p>\n</li>\n<li>\n<p>Lag et skript som starter på <code>Nytt spill</code>-meldingen. Først i\nskriptet vil du plassere ballen slik at den hviler på racketen, og\ngi den en tilfeldig retning oppover (for eksempel mellom -45 og 45\ngrader). Deretter kan ballen gå inn i en løkke som gjentas helt til\n<code>y</code>-posisjonen av ballen blir mindre enn et passende tall (<code>-160</code> er\net bra utgangspunkt, men dette vil variere avhengig av hvor du\nplasserer racketen og hvor stor ballen er). Inne i denne løkken vil\ndu flytte ballen <code class=\"blockdata\">hastighet</code> steg, og la den\n<code class=\"blockmotion\">sprette tilbake ved kanten</code>.</p>\n</li>\n<li>\n<p>Vi vil nå la ballen sprette på racketen. I løkken til racketen kan\ndu legge til en <code class=\"blockcontrol\">hvis</code>-test hvor du sender en\n<code>Sprett horisontalt</code>-melding når ballen berører racketen.</p>\n</li>\n<li>\n<figure>Ballen må svare på denne meldingen ved å endre retning, for eksempel\nmed kode som ser omtrent ut som følger:</figure>\n<pre><code class=\"language-blocks\">når jeg mottar [Sprett horisontalt v]\npek <span class=\"hljs-tag\">i</span> retning ((<span class=\"hljs-number\">180</span>) - (retning))\n</code></pre>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-3-boksene-forsvinner\">\n<h1 class=\"activity\" id=\"steg-3-boksene-forsvinner\">Steg 3: Boksene forsvinner</h1>\n<p><em>Vi skal nå koble sammen boksene og ballen. Boksene skal jo forsvinne\nnår de blir truffet av ballen. Samtidig skal ballen sprette når den\ntreffer en boks.</em></p>\n<section class=\"check\" id=\"sjekkliste-3\">\n<h2 class=\"check\" id=\"sjekkliste-3\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Vi har jo allerede laget kode som får boksene til å forsvinne. Men\ninntil nå har boksene forsvunnet når vi trykker\nmellomrom-tasten. Endre denne koden slik at boksene i stedet\nforsvinner når de berører ballen.</p>\n</li>\n<li>\n<p>La også boksene sende ut en <code>Sprett horisontalt</code>--melding etter at\nde har berørt ballen, men før de (klonene) slettes.</p>\n</li>\n</ul>\n<p>Prøv spillet ditt. Grunnmekanismene skal nå fungere.</p>\n<ul>\n<li>\n<figure>For at spillet skal se litt bedre ut, kan du legge på en startmeny,\nkanskje med en stilig forside eller intro-animasjon?</figure>\n</li>\n<li>\n<p>Legg på passende lyd-effekter. Du bør ihvertfall spille av lyder når\nballen spretter på boksene, men tenk også over om det er andre\nhendelser hvor det passer å spille enkle lyder?</p>\n</li>\n<li>\n<p>La også noe skje når du taper spillet. Det vil si når\n<code class=\"blockcontrol\">gjenta til</code>-løkken på ballen er ferdig.</p>\n</li>\n<li>\n<p>Ved hjelp av <code class=\"blockdata\">Antall bokser</code>-variabelen kan du også\nsjekke om spilleren har klart å fjerne alle boksene og vinne\nspillet. Gi spilleren beskjed om at hun har vunnet!</p>\n</li>\n<li>\n<p>Tenk litt på hvordan du har lyst til å utvikle spillet\nvidere. Hvordan kan du gjøre det enda morsommere for deg og dine\nvenner? I neste del finnes noen ideer.</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-4-videreutvikling-av-spillet\">\n<h1 class=\"activity\" id=\"steg-4-videreutvikling-av-spillet\">Steg 4: Videreutvikling av spillet</h1>\n<p><em>Du står helt fritt i hvordan du vil jobbe videre med spillet ditt,\nmen her er noen ideer som kan gjøre spillet enda morsommere å\nspille:</em></p>\n<section class=\"check\" id=\"ideer-til-videreutvikling\">\n<h2 class=\"check\" id=\"ideer-til-videreutvikling\">Ideer til videreutvikling</h2>\n<ul>\n<li>\n<p>Legg til en poeng-teller. Du må først bestemme hva spilleren skal få\npoeng for, for eksempel at ballen treffer en boks. Deretter lager du\nen <code class=\"blockdata\">Poeng</code>-variabel som du endrer etterhvert.</p>\n</li>\n<li>\n<p>La hastigheten øke etterhvert i spillet.</p>\n</li>\n<li>\n<p>En morsommere, og mer naturlig, sprett på racketen kan du få ved å\nta hensyn til hvor på racketen ballen treffer. Dette kan du gjøre\nfor eksempel ved å sammenligne <code>x</code>-posisjonen til ballen og\nracketen.</p>\n</li>\n<li>\n<p>Hvis ballen treffer på siden av en boks burde den sprette på en\nvertikal (stående) vegg i stedet for en horisontal (liggende). For å\nkode dette kan du lage en ny melding tilsvarende\n<code>Sprett horisontalt</code>. Tallet <code>180</code> i koden må byttes ut. Med hvilket\ntall da?</p>\n</li>\n<li>\n<p>Kanskje du kan videreutvikle hele konseptet, slik at det er mulig å\nplukke opp power-ups etterhvert som man spiller. For eksempel noe\nsom endrer hastigheten på ballen, endrer størrelsen på racketen, gir\nekstra poeng eller kanskje lager litt skru på ballen.</p>\n</li>\n<li>\n<p>I stedet for at boksene bare forsvinner når ballen treffer dem, kan\ndu la dem løsne og falle nedover. Videre kan spilleren få ekstra\npoeng eller bonuser om hun klarer å fange de fallende boksene med\nracketen.</p>\n</li>\n<li>\n<p>Bruk forskjellige farger på boksene. På denne måten kan du lage\nbrett som ser forskjellige ut. Du kan også la de forskjellige\nboksene gi forskjellige poeng eller bonuser.</p>\n<p>En måte å designe slike brett på kan være ved å først lage de\nforskjellige boksene som forskjellige drakter. Deretter kan du\nlage en <code class=\"blockdata\">brett</code>-variabel som lister opp hvilken\ndrakt hver boks skal bruke. For eksempel kan denne se slik ut:</p>\n<pre><code class=\"language-blocks\">sett [brett v] til [<span class=\"hljs-number\">111111111111122</span><span class=\"hljs-number\">22222111122333</span><span class=\"hljs-number\">221111222222211</span><span class=\"hljs-number\">11111111111</span>]\n</code></pre>\n<p>Denne kan så brukes når du setter ut boksene omtrent som dette:</p>\n<pre><code class=\"language-blocks\">bytt drakt til <span class=\"hljs-list\">(<span class=\"hljs-keyword\">bokstav</span> <span class=\"hljs-list\">(<span class=\"hljs-keyword\">antall</span> bokser)</span> i <span class=\"hljs-list\">(<span class=\"hljs-keyword\">brett</span>)</span>)</span>\n</code></pre>\n<p>Videre i spillet kan du teste på <code class=\"blocklooks\">drakt nr.</code> for å\nvite hvilken type boks du har med å gjøre.</p>\n</li>\n</ul>\n</section>\n</section>\n";

/***/ },

/***/ 1036:
/*!*****************************************************!*\
  !*** ../oppgaver/src/scratch/breakout/breakout.png ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/breakout/breakout.a12c3e.png";

/***/ }

});
//# sourceMappingURL=breakout.719afedf8a8b6cd11f0a.js.map