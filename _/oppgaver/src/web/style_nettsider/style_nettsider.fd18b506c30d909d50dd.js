webpackJsonp([227,236],{

/***/ 1565:
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/web/style_nettsider/style_nettsider.md ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/web/style_nettsider/style_nettsider.md */ 1566),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/web/style_nettsider/style_nettsider.md */ 1567)}

/***/ },

/***/ 1567:
/*!**************************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/web/style_nettsider/style_nettsider.md ***!
  \**************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<figure>La oss gjøre nettsiden bedre med noen stiler.\nI denne og neste leksjon skal vi lære oss hvordan å endre farge, tekst, størrelse og mer!</figure>\n<p>Vi endrer hvordan en side ser ut gjennom å bruke et språk som heter <strong>CSS</strong> (som står for <strong>Cascading Style Sheets</strong>). Det er et veldigt enkelt språk å lære. La oss begynne.</p>\n</section>\n<section class=\"activity\" id=\"steg-1-konfigurasjon-for-vi-legger-til-stiler\">\n<h1 class=\"activity\" id=\"steg-1-konfigurasjon-for-vi-legger-til-stiler\">Steg 1: Konfigurasjon før vi legger til stiler</h1>\n<p>Det finnes mange måter å lage stiler på, inline, i “head”, eller som en et eget .css-dokument som vi linker til fra “head”. Men i dag skal vi legge stilene i “head” på vår htmlside så vi ikke trenger å tenke på å håndtere flere filer.</p>\n<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Åpne index.html fra foldern Felix som vi lagte i forrige leksjon.</p>\n</li>\n<li>\n<p>I seksjonen “head” trenger vi en <strong>style tag</strong>.</p>\n</li>\n</ul>\n<pre><code class=\"language-css\"> &lt;style&gt;\n &lt;/style&gt;\n</code></pre>\n<p>Alle stiler skal legges mellom disse elementene. Generelt ser css-kode slik ut:</p>\n<pre><code class=\"language-css\"><span class=\"hljs-tag\">selector</span> <span class=\"hljs-rules\">{\n  <span class=\"hljs-rule\"><span class=\"hljs-attribute\">property</span>:<span class=\"hljs-value\"> value</span></span>;\n}</span>\n</code></pre>\n<ul>\n<li>Kan du finne knappene for ‘{‘ og ‘}’ på ditt tastatur? Hva med ‘:’ og ‘;’ ?\nSelektorer kan være html-element som <code>h1</code>, <code>p</code>, <code>img</code>, <code>a</code>. Men de kan også være andre ting som vi vil lære om senere.</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-2-legg-til-farge\">\n<h1 class=\"activity\" id=\"steg-2-legg-til-farge\">Steg 2: Legg til farge</h1>\n<p>La oss legge til farge med hjelp av attributtet color! CSS er faktisk oppfunnet av en norsk gutt!</p>\n<figure>La oss endre <code>h1</code> til å være rød istedenfor svart.</figure>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">style</span>&gt;</span><span class=\"css\">\n  <span class=\"hljs-tag\">h1</span> <span class=\"hljs-rules\">{\n      <span class=\"hljs-rule\"><span class=\"hljs-attribute\">color</span>:<span class=\"hljs-value\">red</span></span>;\n    }</span>\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">style</span>&gt;</span>\n</code></pre>\n<section class=\"save\" id=\"lagre-filen-og-vise-den-i-nettleseren-din\">\n<h2 class=\"save\" id=\"lagre-filen-og-vise-den-i-nettleseren-din\"><strong>LAGRE</strong> filen og <strong>VISE</strong> den i nettleseren din</h2>\n<p>Teksten skal nå være rød! Det finnes forskjellige måter å representere en farge på. Det er 16 grunnleggende fargenavn, som er aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, purple, red, silver, teal, white, og yellow.</p>\n<ul>\n<li>\n<p>Prøv og endre fargen til noe annet!\nDe fleste nettlesere støtter i tillegg 130 andre fargenavn, hele listen i alfabetisk rekkefølge kan dere finne på\n<a href=\"http://www.w3.org/TR/css3-color/#svg-color\">http://www.w3.org/TR/css3-color/#svg-color</a> Er din yndlingsfarge i listen?</p>\n</li>\n<li>\n<p>Men vi kan bruke enda flere farger gjennom å bruke den heksadesimale koden istedenfor navnet. En heksadesimal kode er en # fulgt av 6 tegn der tegnen kan være sifferne 0-9 eller bokstavene A, B, C, D, E, F. Gjennom å bruke heksadesimale koder kan vi representere mer enn 16 millioner farger.</p>\n</li>\n<li>\n<figure>Kodeklubben sin favorittfarge er <code>#58AB57</code>. Kan du gjette hvilken farge det er? Prøv å endre noen tekst til den fargen og se hvordan det ser ut i en nettleser.</figure>\n</li>\n</ul>\n</section>\n<section class=\"save\" id=\"lagre-filen-og-vise-den-i-nettleseren-din-2\">\n<h2 class=\"save\" id=\"lagre-filen-og-vise-den-i-nettleseren-din-2\"><strong>LAGRE</strong> filen og <strong>VISE</strong> den i nettleseren din</h2>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-3-gi-farge-til-spesifikke-elementer\">\n<h1 class=\"activity\" id=\"steg-3-gi-farge-til-spesifikke-elementer\">Steg 3: Gi farge til spesifikke elementer</h1>\n<p>Hva om vi vil gjøre sånn at ordet oransje i settningen ´Pelsen hans er oransje´ får oransje farge? Ikke hele seksjonen, men akkurat det ordet.</p>\n<figure>En måte å gjøre dette på er å putte taggen <span> rundt ordet, på denne måten:</figure>\n<p><code>&lt;span&gt;oransje&lt;/span&gt;</code></p>\n<p>Vi kan da i seksjonen <code>head</code> lage en stil for <code>span</code></p>\n<pre><code class=\"language-css\"><span class=\"hljs-tag\">span</span> <span class=\"hljs-rules\">{\n  <span class=\"hljs-rule\"><span class=\"hljs-attribute\">color</span>:<span class=\"hljs-value\">orange</span></span>;\n}</span>\n</code></pre>\n<section class=\"save\" id=\"lagre-filen-og-vise-den-i-nettleseren-din-3\">\n<h2 class=\"save\" id=\"lagre-filen-og-vise-den-i-nettleseren-din-3\"><strong>LAGRE</strong> filen og <strong>VISE</strong> den i nettleseren din</h2>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-4-bakgrunn\">\n<h1 class=\"activity\" id=\"steg-4-bakgrunn\">Steg 4: Bakgrunn</h1>\n<p>Vi kan legge til farge på bakgrunnen også, ikke bare på tekst. For eksempel:</p>\n<pre><code class=\"language-css\"><span class=\"hljs-tag\">body</span> <span class=\"hljs-rules\">{\n  <span class=\"hljs-rule\"><span class=\"hljs-attribute\">background-color</span>:<span class=\"hljs-value\"><span class=\"hljs-hexcolor\">#D2FAFC</span></span></span>;\n}</span>\n</code></pre>\n<p>Dette vil gjøre at hele bakgrunnen blir blå. Du kan velge hvilken farge du ønsker fra en liste på <a href=\"http://www.colourpicker.com\">www.colourpicker.com</a> som da genererer det nummer du trenger og så kan du klippe og lime det inn i din kode.</p>\n<p>Prøve nå:</p>\n<pre><code class=\"language-css\"><span class=\"hljs-tag\">h1</span> <span class=\"hljs-rules\">{\n  <span class=\"hljs-rule\"><span class=\"hljs-attribute\">background-color</span>:<span class=\"hljs-value\">black</span></span>;\n}</span>\n</code></pre>\n<figure>Siden vi allerede hadde en <code>h1</code> deklarert i filen kan vi bare putte inn attributtet background-color sammen med color, vi trenger ikke å skrive alt om igjen.</figure>\n<pre><code class=\"language-css\"><span class=\"hljs-tag\">h1</span> <span class=\"hljs-rules\">{\n  <span class=\"hljs-rule\"><span class=\"hljs-attribute\">color</span>:<span class=\"hljs-value\">red</span></span>;\n  <span class=\"hljs-rule\"><span class=\"hljs-attribute\">background-color</span>:<span class=\"hljs-value\"> black</span></span>;\n}</span>\n</code></pre>\n<pre><code><span class=\"hljs-preprocessor\">## Nå skal du __LAGRE__ filen og se hvordan det ser ut. {.save}</span>\n\n<span class=\"hljs-preprocessor\">## Morro med tekst</span>\nKanskje skulle tittelen være __større__ og med store bokstaver. Vi kan spesifisere størrelsen på teksten gjennom å bruke `font-size`. Verdiene kan være forskjellige, men de mest brukte er <span class=\"hljs-number\">12</span>, <span class=\"hljs-number\">14</span>, <span class=\"hljs-number\">16</span>, <span class=\"hljs-number\">32</span>, <span class=\"hljs-number\">48</span> og <span class=\"hljs-number\">72</span> piksler.\nLa oss prøve ut <span class=\"hljs-number\">72</span>px <span class=\"hljs-keyword\">for</span> nå. (px betyr piksel)\n\n```css\nh1 {\n  color:red;\n  background-color:black;\n  font-size:<span class=\"hljs-number\">72</span>px;\n}\n</code></pre>\n<p>Nå skal du forsøke å endre tittelen til å være kun i store bokstaver bare gjennom å bruke <code>text-transform:uppercase;</code> Vi kan også gjøre den understreket gjennom å bruke <code>text-decoration:underline;</code></p>\n<section class=\"save\" id=\"na-skal-du-lagre-filen-og-se-hvordan-den-ser-ut\">\n<h2 class=\"save\" id=\"na-skal-du-lagre-filen-og-se-hvordan-den-ser-ut\">Nå skal du <strong>LAGRE</strong> filen og se hvordan den ser ut.</h2>\n<p>Er det ikke mye større forskjell nå?</p>\n<section id=\"for-de-som-bruker-firefox-eller-chrome-som-nettleser\">\n<h3 id=\"for-de-som-bruker-firefox-eller-chrome-som-nettleser\">For de som bruker Firefox eller Chrome som nettleser.</h3>\n<figure>Det finnes faktisk også en annen verdi for “text-decoration” som er “blink”. Jeg kommer ikke til å fortelle deg hva det gjør. Du må teste det. <code>text-decoration:blink;</code> (det blir litt masete etterhvert, men det er lov å gå tilbake til “underline” hvis du vil).</figure>\n</section>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-6-sentrere-tekst-og-bilder-horisontalt\">\n<h1 class=\"activity\" id=\"steg-6-sentrere-tekst-og-bilder-horisontalt\">Steg 6. Sentrere tekst (og bilder) horisontalt</h1>\n<figure>All vår tekst vises helt borte til venstre. Vi kan endre det gjennom å bruke <code>text-align:center</code> (man kan også bruke ´right´(høyre), ´left´(venstre) er standard).</figure>\n<ol>\n<li>For denne nettsiden vil vi at all vår tekst skal være sentrert, og da kan vi skrive: (Merk deg at den engelske måten å stave senter på er center.)</li>\n</ol>\n<pre><code class=\"language-css\"><span class=\"hljs-tag\">body</span> <span class=\"hljs-rules\">{\n  <span class=\"hljs-rule\"><span class=\"hljs-attribute\">background-color</span>:<span class=\"hljs-value\"> <span class=\"hljs-hexcolor\">#F8FAF4</span></span></span>;\n  <span class=\"hljs-rule\"><span class=\"hljs-attribute\">text-align</span>:<span class=\"hljs-value\"> center</span></span>;\n}</span>\n</code></pre>\n<p>La du merke til at alt på nettsiden ble sentrert når vi har lagt til ‘text-align:center’ i seksjonen “body”? Det er fordi alt innenfor elementet “body” arver stilen. Dette skjer når et element er innenfor et annet, som dette her:</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Har du sett Felix? <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">em</span>&gt;</span>Vennligst<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">em</span>&gt;</span> kontakt eieren hans<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\n</code></pre>\n<p>Teksten “Vennligst” vil ha stilen fra elementet <code>&lt;p&gt;</code> med stilen fra elementet <code>&lt;em&gt;</code> lagt på. Dette er grunnen til at man kaller det <strong>cascading</strong> - stilene blir videreført fra et element til alle ene som er innenfor dem.\nMen vær forsiktig, det finnes noen stiler som ikke blir videreført.</p>\n<section class=\"save\" id=\"na-skal-du-lagre-filen-og-apne-den-i-en-nettleser\">\n<h2 class=\"save\" id=\"na-skal-du-lagre-filen-og-apne-den-i-en-nettleser\">Nå skal du <strong>LAGRE</strong> filen og åpne den i en nettleser</h2>\n</section>\n<section class=\"try\" id=\"videre-studier\">\n<h2 class=\"try\" id=\"videre-studier\">Videre studier</h2>\n<ul>\n<li>Hvordan ville du endret på siden for å få den til å se bedre ut? Hvorfor ikke prøve å bruke alle dine favorittfarger? Finnes din farge som et navn eller må du bruke en heksadesimal kode?</li>\n<li>Hvis du blir fort ferdig kan du gå tilbake å legge på stiler for tidigere leksjoner.</li>\n</ul>\n</section>\n</section>\n";

/***/ }

});
//# sourceMappingURL=style_nettsider.fd18b506c30d909d50dd.js.map