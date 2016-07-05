webpackJsonp([130,236],{

/***/ 1012:
/*!*********************************************************!*\
  !*** ../oppgaver/src/scratch/3d_flakser/3d_flakser.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/3d_flakser/3d_flakser.8b16ef.png";

/***/ },

/***/ 1014:
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/scratch/3d_flakser/3d_flakser_2.md ***!
  \*************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/scratch/3d_flakser/3d_flakser_2.md */ 1015),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/scratch/3d_flakser/3d_flakser_2.md */ 1016)}

/***/ },

/***/ 1016:
/*!**********************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/scratch/3d_flakser/3d_flakser_2.md ***!
  \**********************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p>Velkommen til andre og siste del av <strong>3D-Flakser</strong>! I denne delen skal\nvi få Flakse til å flakse som en fugl, og snu seg i luften når vi\nsvinger med piltastene.  Til slutt skal vi gjøre det slik at man får\npoeng når man flyr igjennom en ring og taper hvis man treffer en\nring. Etter det er det opp til deg; lag en meny, lag flere\nvanskelighetsgrader eller lag noe helt annet!</p>\n<figure><img src=\"" + __webpack_require__(/*! ./3d_flakser.png */ 1012) + "\" alt=\"\" /></figure>\n</section>\n<section class=\"activity\" id=\"steg-1-lag-bakken-og-fa-den-til-folge-med\">\n<h1 class=\"activity\" id=\"steg-1-lag-bakken-og-fa-den-til-folge-med\">Steg 1: Lag bakken og få den til følge med</h1>\n<p>Vi begynner med et enkelt steg som gjør spillet litt mer realistisk.\nSiden figuren flyr så kan vi forvente at hvis man ikke flakser, så\ntreffer man før eller siden bakken. Dette gjør vi med en ny figur som\nvi kaller <code>bakken</code>.</p>\n<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Lag en ny figur som heter <code>bakken</code>. Tegn en drakt til den. Det\nenkleste er å bare fylle den nederste tredjeparten av tegneområdet\nmed grønt. Vi starter med å gi den følgende skript</p>\n<pre><code class=\"language-blocks\"><span class=\"hljs-keyword\">n</span>år jeg mottar [Nytt spill v]\n<span class=\"hljs-keyword\">g</span>å til x: (0) y: (-300)\nsett <span class=\"hljs-keyword\">st</span>ørrelse til (200) %\n</code></pre>\n<figure>Nå bør bakken ligge nederst i scenen når spillet begynner. Hvis\nden ikke gjør det kan du endre litt på tallene.</figure>\n</li>\n<li>\n<p>Nå vil vi at bakken skal følge med Flakse, det vil si: når Flakse er\nhøyt oppe (<code class=\"blockdata\">y</code> er stor) så skal bakken gå nedover, og\nnår Flakse er langt nede så er bakken tilsvarende høyt oppe. Hvis\nFlakse berører bakken skal spilleren tape. Vi legger til følgende\n<code class=\"blockcontrol\">for alltid</code>-løkke i skriptet til bakken,</p>\n<pre><code class=\"language-blocks\">for alltid\n    sett y til ((<span class=\"hljs-number\">20</span>) - (y))\n    hvis &lt;berører <span class=\"hljs-string\">[Flakse v]</span>&gt;\n        si <span class=\"hljs-string\">[du tapte!]</span> i (<span class=\"hljs-number\">2</span>) sekunder\n        stopp <span class=\"hljs-string\">[alle v]</span> :: control\n    slutt\nslutt\n</code></pre>\n</li>\n<li>\n<p>Til slutt så vil vi helst at bakken skal forsvinne når Flakse flyr\nveldig høyt. Det kan vi gjøre med <code class=\"blocklooks\">skjul</code> og\n<code class=\"blocklooks\">vis</code> kommandoene, slik</p>\n<pre><code class=\"language-blocks\">hvis &lt;(y) &lt; <span class=\"hljs-string\">[150]</span>&gt;\n    vis\nellers\n    skjul\nslutt\n</code></pre>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-2-fa-flakse-til-a-flakse\">\n<h1 class=\"activity\" id=\"steg-2-fa-flakse-til-a-flakse\">Steg 2: Få Flakse til å flakse</h1>\n<p>Hvis du har gjort del en av 3D-Flakser riktig så kan du nå styre\nflakse-figuren gjennom ringene med piltastene. Det er to ulemper med\ndette: det er et veldig lett spill, og det er ikke sånn fugler\nflyr. Vi vil at Flakse faktisk må flakse for å holde seg i\nluften. Derfor endrer vi litt på skriptene til flakse-figuren slik at\nden flakser med vingene når vi trykker mellomromtasten.</p>\n<section class=\"check\" id=\"sjekkliste-2\">\n<h2 class=\"check\" id=\"sjekkliste-2\">Sjekkliste</h2>\n<ul>\n<li>\n<p>For å holde styr på hvor mange ganger spilleren har trykket på\nmellomrom så lager vi en variabel <code class=\"blockdata\">flaks</code> som gjelder\nkun for flakse-figuren.</p>\n</li>\n<li>\n<p>Vi må slette testene som sjekker om <code>pil opp</code>eller <code>pil ned</code> tastene\ntrykkes og erstatte dem med</p>\n<pre><code class=\"language-blocks\"><span class=\"hljs-tag\">hvis</span> &lt;<span class=\"hljs-tag\">tast</span> <span class=\"hljs-attr_selector\">[mellomrom v]</span> <span class=\"hljs-tag\">trykket</span>?&gt;\n    <span class=\"hljs-tag\">endre</span> <span class=\"hljs-attr_selector\">[flaks v]</span> <span class=\"hljs-tag\">med</span> (1)\n    <span class=\"hljs-tag\">vent</span> (0<span class=\"hljs-class\">.01</span>) <span class=\"hljs-tag\">sekunder</span>\n<span class=\"hljs-tag\">slutt</span>\n</code></pre>\n<p>Alt som skjer nå er at <code class=\"blockdata\">flaks</code> økes med én hver gang\nmellomrom trykkes. Vi lager et nytt skript hos Flakse som tar seg\nav flaksingen.</p>\n</li>\n<li>\n<p>Lag en ny variabel. Kall den <code class=\"blockdata\">løft</code>, og la den gjelde\nkun for denne figuren. Denne variabelen skal fortelle oss hvor fort\nflakse skal flyttes opp eller ned.</p>\n</li>\n<li>\n<p>Legg inn en <code class=\"blockdata\">sett løft til 0</code>-kloss et sted før spillet\nstarter.</p>\n</li>\n<li>\n<p>Sett inn disse klossene først i hovedløkken til Flakse:</p>\n<pre><code class=\"language-blocks\"><span class=\"hljs-tag\">endre</span> <span class=\"hljs-attr_selector\">[y v]</span> <span class=\"hljs-tag\">med</span> (<span class=\"hljs-tag\">l</span>ø<span class=\"hljs-tag\">ft</span>)\n<span class=\"hljs-tag\">hvis</span> &lt;(<span class=\"hljs-tag\">l</span>ø<span class=\"hljs-tag\">ft</span>) &gt; <span class=\"hljs-attr_selector\">[-5]</span>&gt;\n    <span class=\"hljs-tag\">endre</span> <span class=\"hljs-attr_selector\">[løft v]</span> <span class=\"hljs-tag\">med</span> (<span class=\"hljs-tag\">-0</span><span class=\"hljs-class\">.5</span>)\n<span class=\"hljs-tag\">slutt</span>\n</code></pre>\n</li>\n<li>\n<p>Til slutt lager vi et nytt skript hos Flakse slik:</p>\n<pre><code class=\"language-blocks\">når jeg mottar <span class=\"hljs-string\">[Nytt spill v]</span>\nfor alltid\n    gjenta til &lt;(flaks) = <span class=\"hljs-string\">[0]</span>&gt;\n        endre <span class=\"hljs-string\">[flaks v]</span> med (-<span class=\"hljs-number\">1</span>)\n        hvis &lt;(løft) &lt; <span class=\"hljs-string\">[5]</span>&gt;\n            endre <span class=\"hljs-string\">[løft v]</span> med (<span class=\"hljs-number\">2</span>)\n        slutt\n        hvis &lt;(løft) &lt; <span class=\"hljs-string\">[0]</span>&gt;\n            sett <span class=\"hljs-string\">[løft v]</span> til <span class=\"hljs-string\">[0]</span>\n        slutt\n    slutt\nslutt\n</code></pre>\n<figure>Nå kan du justere litt på tallene i skriptene over for at Flakse\nflyr slik DU vil!</figure>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-3-fa-flakse-til-a-snu-seg-i-luften\">\n<h1 class=\"activity\" id=\"steg-3-fa-flakse-til-a-snu-seg-i-luften\">Steg 3: Få Flakse til å snu seg i luften</h1>\n<p>For at spillet skal se best mulig ut så vil vi at flakse skal rotere i\nluften når vi holder piltastene inne. Litt som et fly som går inn for\nlanding. Oppførselen vi ønsker når (for eksempel) høyre piltast\ntrykkes er denne: når piltasten først trykkes skal figuren peke mot\nhøyre, og der skal den holde seg så lenge piltasten holdes inne. Når\npiltast slippes skal figuren rotere sakte tilbake til sin vanlige\nposisjon.</p>\n<p>Dette får vi til ved å endre litt på hovedskriptet til flakse.</p>\n<section class=\"check\" id=\"sjekkliste-3\">\n<h2 class=\"check\" id=\"sjekkliste-3\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Legg til klossene <code class=\"blockmotion\">pek i retning 135</code> og <code class=\"blockmotion\">pek i retning 45</code> i testene som sjekker om henholdsvis høyre\nog venstre piltast trykkes. Prøv spillet. Peker figuren i riktig\nretning?</p>\n</li>\n<li>\n<p>Nå vil vi at figuren skal rotere tilbake til vannrett når piltastene\nikke trykkes lenger. Det kan vi enkelt få til ved å legge til disse\nklossene under testene som sjekker om piltastene trykkes.</p>\n<pre><code class=\"language-blocks\">hvis &lt;(retning) &lt; [<span class=\"hljs-number\">90</span>]&gt;\n    vend høyre (<span class=\"hljs-number\">1</span>) grader\nslutt\nhvis &lt;(retning) &gt; [<span class=\"hljs-number\">90</span>]&gt;\n    <span class=\"hljs-function\">vend <span class=\"hljs-title\">venstre</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">1</span>)</span> grader\nslutt\n</span></code></pre>\n<p>Disse klossene sørger enkelt og greit for at figuren alltid prøver\nå peke mot retning 90 (som er vannrett for figuren). Når bør\nflyvningen til Flakse se ganske bra ut!</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-4-sjekk-om-flakse-treffer-ringene\">\n<h1 class=\"activity\" id=\"steg-4-sjekk-om-flakse-treffer-ringene\">Steg 4: Sjekk om Flakse treffer ringene</h1>\n<p>Nå ønsker vi at Flakse skal få poeng hver gang han flyr igjennom\nringene, og taper om han treffer en ring. Denne oppførselen skal vi\nkode i <code class=\"blockcontrol\">når jeg starter som klon</code>-skriptet til\nring-figuren.</p>\n<section class=\"check\" id=\"sjekkliste-4\">\n<h2 class=\"check\" id=\"sjekkliste-4\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Vi begynner med å sjekke om Flakse berører den ringen som ligger\nnærmest. Husk at det er <code class=\"blockdata\">distanse</code> variablen til\nringen som forteller oss hvor nærme ringen er. Så vi må hele tiden\nsjekke om Flakse berører ringen, <em>og</em> om ringen faktisk er nærme. Du\nmå legge til denne klossen et sted i skriptet til ring-klonene.</p>\n<pre><code class=\"language-blocks\">hvis &lt;&lt;berører <span class=\"hljs-string\">[Flakse v]</span>&gt; og &lt;(distanse) &lt; <span class=\"hljs-string\">[1.2]</span>&gt;&gt;\n    si <span class=\"hljs-string\">[du tapte!]</span> i (<span class=\"hljs-number\">1</span>) sekunder\n    stopp <span class=\"hljs-string\">[alle v]</span> :: control\nslutt\n</code></pre>\n<p>Nå stopper spillet om man treffer en ring som er nærme. Hvis du\nvil kan du kode noe annen oppførsel når man treffer en ring\n(kanskje man bare mister et liv, eller det spilles en lyd?)</p>\n</li>\n<li>\n<p>Så ønsker vi å få poeng når vi fly gjennom ringene. Lag først en\nvariabel <code class=\"blockdata\">poeng</code> som gjelder for alle figurene. Nå må vi\nsjekke at variablene <code class=\"blockdata\">x</code> og <code class=\"blockdata\">y</code>, som sier\nhvor flakse-figuren er, ikke er altfor langt unna\n<code class=\"blockdata\">ringX</code> og <code class=\"blockdata\">ringY</code>. Vi legger til følgende\nklosser rett under hovedløkken til ringene, slik at det siste\nringene gjør før de slettes er å sjekke om Flakse er inni.</p>\n<pre><code class=\"language-blocks\">hvis &lt; &lt;(x) &lt; ((ringX) + (<span class=\"hljs-number\">160</span>))&gt; og &lt;(x) &gt; ((ringX) - (<span class=\"hljs-number\">160</span>))&gt; &gt;\n    hvis &lt; &lt;(y) &lt; ((ringY) + (<span class=\"hljs-number\">160</span>))&gt; og &lt;(y) &gt; ((ringY) - (<span class=\"hljs-number\">160</span>))&gt; &gt;\n        endre [poeng v] med (<span class=\"hljs-number\">1</span>)\n    slutt\nslutt\n</code></pre>\n<p>Fungerer skriptet som det skal? Hva er det vi egentlig sjekker i\nden siste <code class=\"blockcontrol\">hvis</code>-testen?</p>\n</li>\n</ul>\n<figure>Nå er vi igrunn ferdig med det viktigste i spillet. Men det er\nfremdeles masse spennende igjen du kan prøve:</figure>\n</section>\n</section>\n<section class=\"try\" id=\"ting-a-prove\">\n<h1 class=\"try\" id=\"ting-a-prove\">Ting å prøve</h1>\n<ul>\n<li>\n<p>Lag en meny.</p>\n</li>\n<li>\n<figure>Få ringene til å komme fortere mot deg etterhvert som du får flere\npoeng.</figure>\n</li>\n<li>\n<figure>Gi Flakse flere drakter å det ser ut som han flyr når han skifter\ndrakt.</figure>\n</li>\n</ul>\n</section>\n";

/***/ }

});
//# sourceMappingURL=3d_flakser_2.e79cb70ef59f963e815f.js.map