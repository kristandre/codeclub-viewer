webpackJsonp([109,236],{

/***/ 895:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/python/kryptonott/kryptonott.md ***!
  \**********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/python/kryptonott/kryptonott.md */ 896),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/python/kryptonott/kryptonott.md */ 897)}

/***/ },

/***/ 897:
/*!*******************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/python/kryptonott/kryptonott.md ***!
  \*******************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p>Kryptering har lenge vært i bruk i kommunikasjon. Faktisk brukte de\ndet for nesten 4000 år siden!! I tillegg er det artig å sende\nhemmelige meldinger :-) Før du begynner på denne oppgaven, anbefales\ndet at du har gjort <a href=\"../hemmelige_koder/hemmelige_koder.html\">Hemmelige koder</a> først.</p>\n<figure>Denne oppgaven er en nøtt. Det vil si at du skal finne ut av det meste selv.\nSitter du helt fast må du gjerne spørre en CodeMaster.</figure>\n</section>\n<section class=\"activity\" id=\"kryptering-med-vigenere-metoden\">\n<h1 class=\"activity\" id=\"kryptering-med-vigenere-metoden\">Kryptering med vigenere-metoden</h1>\n<p>Vigenere er litt smartere enn krypteringen i <a href=\"../hemmelige_koder/hemmelige_koder.html\">Hemmelige koder</a>,\nmen den er ikke så annerledes. I stegene under skal du prøve å forstå\nvigenere-koden. Det er viktig at du forstår denne koden, ettersom du skal lage\nnesten lik kode selv.</p>\n<section class=\"protip\" id=\"python-2\">\n<h2 class=\"protip\" id=\"python-2\">Python 2</h2>\n<p>Denne koden fungerer best med python 3. Dersom du har python 2, må du legge en\n<code>u</code> foran alle strenger. Altså <code>'asdf'</code> må skrives slik som dette: <code>u'asdf'</code>.</p>\n</section>\n<section class=\"check\" id=\"lag-kommentarer-med-forklaring\">\n<h2 class=\"check\" id=\"lag-kommentarer-med-forklaring\">Lag kommentarer med forklaring</h2>\n<ul>\n<li>Les koden under.</li>\n<li>Hva er forskjellig fra <a href=\"../hemmelige_koder/hemmelige_koder.html\">Hemmelige koder</a>?</li>\n<li>Hva gjør <code>alphabet.find</code>?</li>\n<li>Hva betyr det at <code>alphabet.find</code> gir <code>-1</code> som svar?</li>\n<li>Legg til kommentarer med <code>#</code> over/bak hver linjene med din forklaring.</li>\n</ul>\n<pre><code class=\"language-python\"><span class=\"hljs-string\">\"\"\"Vigenere encoding, by Arve Seljebu(arve@seljebu.no), MIT License, 2014\"\"\"</span>\n\nalphabet = <span class=\"hljs-string\">'ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅabcdefghijklmnopqrstuvwxyzæøå .,?-_;:+1234567890\"'</span>\n\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">def</span> <span class=\"hljs-title\">vigenere_encode</span><span class=\"hljs-params\">(msg, key)</span>:</span>\n    <span class=\"hljs-string\">\"\"\"Function that encodes a string with Vigenere cipher. The encrypted\n       string is returned.\n    \"\"\"</span>\n    secret = <span class=\"hljs-string\">''</span>\n    key_length = len(key)\n    alphabet_length = len(alphabet)\n\n    <span class=\"hljs-keyword\">for</span> i, char <span class=\"hljs-keyword\">in</span> enumerate(msg):\n        msgInt = alphabet.find(char)\n        encInt = alphabet.find(key[i % key_length])\n\n        <span class=\"hljs-keyword\">if</span> msgInt == -<span class=\"hljs-number\">1</span> <span class=\"hljs-keyword\">or</span> encInt == -<span class=\"hljs-number\">1</span>:\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">''</span>\n\n        encoded = (msgInt + encInt) % alphabet_length\n        secret += alphabet[encoded]\n\n    <span class=\"hljs-keyword\">return</span> secret\n\nmessage = <span class=\"hljs-string\">'My first computer program was a song called Popcorn written in QBasic. The second computer program I made was a bot made for IRC.'</span>\nkeyword = <span class=\"hljs-string\">'source'</span>\n\nencrypted = vigenere_encode(message, keyword)\nprint(encrypted)\n</code></pre>\n</section>\n<section class=\"protip\" id=\"hint\">\n<h2 class=\"protip\" id=\"hint\">Hint</h2>\n<p>Du kan bruke kommandoen <code>help('funksjonsnavn')</code> i python-terminalen for lese\nmanualen. Prøv disse:</p>\n<ul>\n<li><code>help('def')</code></li>\n<li><code>help('len')</code></li>\n<li><code>help('vigenere_encode')</code></li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"dekryptering\">\n<h1 class=\"activity\" id=\"dekryptering\">Dekryptering</h1>\n<p>Vi skal nå se på hvordan vi kan dekryptere meldinger. Etterhvert vil\nvi til og med kunne lese hemmelige meldinger uten å kjenne den\nhemmelige nøkkelen på forhånd.</p>\n<section class=\"check\" id=\"lag-vigenere-decode\">\n<h2 class=\"check\" id=\"lag-vigenere-decode\">Lag vigenere_decode</h2>\n<figure>Lag en funksjon som gjør det motsatte av den over (altså dekrypterer). Koden skal\nse nesten helt lik ut som over.</figure>\n<ul>\n<li>Funksjonen skal ta inn to parametre: en kodet tekst og en nøkkel.</li>\n<li>Den skal dekryptere den kodede teksten med nøkkelen.</li>\n<li>Og returnere den dekrypterte teksten.</li>\n<li>Test at funksjonen fungerer og prøv med dine egne strenger og krypteringsnøkler.</li>\n<li>Kanskje du kan dele nøkkelen og sende den krypterte teksten til en venn?</li>\n</ul>\n</section>\n<section class=\"check\" id=\"cracking\">\n<h2 class=\"check\" id=\"cracking\">Cracking</h2>\n<figure>Du skal nå prøve å knekke en kodet streng. Dette er vanskelig, så du må lage en\nplan først. Strengen er:</figure>\n<p><code>q0Ø:;AI&quot;E47FRBQNBG4WNB8B4LQN8ERKC88U8GEN?T6LaNBG4GØ&quot;&quot;N6K086HB&quot;Ø8CRHW&quot;+LS79Ø&quot;&quot;N29QCLN5WNEBS8GENBG4FØ47a</code></p>\n</section>\n<section class=\"protip\" id=\"hint-2\">\n<h2 class=\"protip\" id=\"hint-2\">Hint</h2>\n<ul>\n<li>Nøkkelen er seks små bokstaver.</li>\n<li>Språket i setningen er engelsk.</li>\n<li>Finn en metode å sjekke om den dekrypterte strengen er korrekt. For eksempel kan du tenke på hvor\nmange mellomrom den burde inneholde?</li>\n<li>For å generere mulige nøkler kan du bruke <code>itertools.product()</code>, prøv for eksempel å se hva du får om du looper over <code>itertools.product('abcd', repeat=2)</code>.</li>\n</ul>\n</section>\n<section class=\"check\" id=\"bruk-en-ordbok\">\n<h2 class=\"check\" id=\"bruk-en-ordbok\">Bruk en ordbok</h2>\n<p>Sålenge vi har brukt engelske ord som nøkler er det mye raskere å knekke\nkrypteringen med en ordbok. En ordbok finner du på alle Linux/Mac/Unix-maskiner\nunder <strong>/usr/share/dict</strong>. Bruker du Windows, kan du laste ned en slik fil fra\ninternett. Søk på <em>large english vocabulary word lists</em>.</p>\n<p>Disse filene inneholder alle ord som finnes i en engelsk ordbok, separert med linjeskift. Finn ut hvordan du kan laste inn ordene fra filen (pass på at du fjerner linjeskiftene) og bruk dem til å dekryptere en ny streng:</p>\n<p><code>t-JO:BK0aM,:CQ+ÆAGW?FJGB0KVCGMQ6SQN&quot;GAIDL-PÅ7954E:7Jr,IÆoCF0M&quot;CQdØVlHD53CÅ;IA2DMG5ØHDØVåL:JQØ439LRBBVEMTBÆ6CF0M&quot;CQNAG8G1V6LÅ8FF4Z</code></p>\n<p>Bruk metodene du laget i oppgaven over for å detektere om vi har funnet riktig\nnøkkel. Dersom du kjører scriptet ditt med kommandoen <code>time python3 vigenere.py</code>\nkan du se hvor lang tid den bruker.</p>\n</section>\n<section class=\"flag\" id=\"premie\">\n<h2 class=\"flag\" id=\"premie\">Premie</h2>\n<figure>Dersom du klarer denne nøtten, spanderer jeg gjerne en sjokolade på deg dersom\ndu deler koden din. Send en epost til arve@seljebu.no :-)</figure>\n</section>\n</section>\n";

/***/ }

});
//# sourceMappingURL=kryptonott.e82f8aefe0f522ffd51e.js.map