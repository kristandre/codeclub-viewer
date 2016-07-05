webpackJsonp([218,236],{

/***/ 1521:
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/web/en_hjemmeside/en_hjemmeside.md ***!
  \*************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/web/en_hjemmeside/en_hjemmeside.md */ 1522),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/web/en_hjemmeside/en_hjemmeside.md */ 1523)}

/***/ },

/***/ 1523:
/*!**********************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/web/en_hjemmeside/en_hjemmeside.md ***!
  \**********************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p>I oppgaven <a href=\"../internett/internett.html\">Internett</a> kan du lære om <em>HTML</em>-tagger, og i denne oppgaven skal du bruke HTML-taggene i din første hjemmeside. La oss begynne med en gang!</p>\n</section>\n<section class=\"activity\" id=\"steg-1-apne-siden-som-heter-om-meg\">\n<h1 class=\"activity\" id=\"steg-1-apne-siden-som-heter-om-meg\">Steg 1: Åpne siden som heter om meg</h1>\n<section class=\"check\" id=\"aktiviteter\">\n<h2 class=\"check\" id=\"aktiviteter\">Aktiviteter</h2>\n<ol>\n<li>Åpne et <strong>tekstprogram</strong>.</li>\n<li>Åpne filen som heter <code>om_meg.html</code>. Filen inneholder bittelitt HTMl kode for å hjelpe deg med å komme igang, men du må skrive resten selv.</li>\n</ol>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-2-lag-en-hjemmeside-om-deg-selv\">\n<h1 class=\"activity\" id=\"steg-2-lag-en-hjemmeside-om-deg-selv\">Steg 2: Lag en hjemmeside om deg selv</h1>\n<section id=\"om-a-gjore-feil\">\n<h3 id=\"om-a-gjore-feil\">Om å gjøre feil</h3>\n<p>Feil skjer ofte. Det er veldig lett å gjøre dem i HTML fordi du må huske å lukke hver tag, og åpnings-taggen og avslutnings-taggen er litt annerledes. La oss prøve å gjøre noen feil for å se hvordan nettleseren prøver å forstå meningen av koden vår, selv om vi ikke har skrevet den perfekt.</p>\n</section>\n<section class=\"check\" id=\"aktiviteter-2\">\n<h2 class=\"check\" id=\"aktiviteter-2\">Aktiviteter</h2>\n<ul>\n<li>La oss ta listen av ting vi liker som et eksempel. En av feilene som ofte skjer, er å glemme <strong>avslutnings-taggen</strong>, så la oss fjerne <code>&lt;\\ul&gt;</code> for å se hvordan det påvirker siden. Lagre filen og oppdater den i nettleseren.</li>\n</ul>\n<p>Hva skjedde? Noen ting under listen ble flyttet litt til høyre. Hvis du inspiserer siden med X-Ray Goggles kan du se at ting som fulgte listen, nå er inne i den, det er derfor de har flyttet seg til høyre. Etter at vi fjernet avslutnings-taggen vet nettleseren rett og slett ikke at listen er avsluttet.</p>\n<figure>Legg til avslutnings-taggen <code>&lt;\\ul&gt;</code> igjen og lagre siden. Når du oppdaterer siden igjen er ikke resten av kodene inne i listen lenger.</figure>\n<ul>\n<li>Tagger må være stavet riktig for at nettleseren skal forstå dem. Hva skjer hvis vi gjør en skrivefeil?</li>\n</ul>\n<p>Finn <code>&lt;h1&gt;</code> taggen. La oss se hva som skjer hvis vi forandrer den til <code>&lt;d1&gt;</code>. Lagre filen og oppdater siden i nettlesern.</p>\n<p>Hva skjedde? Siden nettleseren ikke vet hva du mener med denne taggen så kan den ikke lenger forstå at det skal være en overskrift, så den bruker ikke lenger en større tekst til å vise hvor viktig akkurat den teksten er.</p>\n<p>Bytt <code>&lt;d1&gt;</code> tilbake til <code>&lt;h1&gt;</code> og lagre igjen.</p>\n<ul>\n<li>Finn en av <code>&lt;img&gt;</code> taggene. Vi har akkurat prøvd å feilstave en tagg og nettleseren var ikke sikker på hva den skulle gjøre med det. Men hva hvis vi feilstaver attributtet?</li>\n</ul>\n<p>Inne i <code>&lt;img&gt;</code> taggen har vi <code>src</code> og <code>alt</code> attributter:</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"katt.png\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"Katt\"</span>&gt;</span>\n</code></pre>\n<figure>Prøv å endre <code>src</code> til noe annet. Lagre dokumentet og oppdater i nettleseren.</figure>\n<p>Å nei! Kattungen er borte!</p>\n<figure>Plutselig vet ikke nettleseren hvor den skal se etter bildet den skal vise - den ser etter filnavnet i <code>src</code> atributten som ikke lenger er der.</figure>\n<figure>Endre det tilbake til <code>src</code> så vi kan fortsette å se på kattungen.</figure>\n<ul>\n<li>Nå fjern det andre anførselstegnet (<code>&quot;</code>) fra <code>alt</code> attributtet av dette bildet: den etter teksten, slik at du ender opp med dette:</li>\n</ul>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"katt.png\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"Katt /&gt;\n</span></span></code></pre>\n<p>Lagre og oppdater i nettleseren.</p>\n<p>Den neste taggen forsvant. Hvorfor? Nettleseren vil tro at alt etter <code>alt =&quot;</code>og før neste sitatmerke (<code>&quot;</code>) er ekstra tekst for dette bildet, inkludert slutten av bildekoden og neste åpnings-taggen.</p>\n<figure>Fiks det igjen ved å legge til et anførselstegn etter <code>alt</code> teksten.</figure>\n<p>Vi har nå gjort noen vanlige feil sammen, og har sett at noen ganger kan en enkelt feil gjøre slik at nettleseren ikke forstår hva vi mener. Men mesteparten av tiden vil den prøve å vise oss noe uansett, så når vi har endret overskrift-koden til noe annet, forsto den ikke at teksten var en overskrift, men viste oss fortsatt teksten. Så den prøver så godt den kan, men noen feil kan gjøre den ganske forvirret.</p>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-3-lag-en-ny-side-og-link-til-den\">\n<h1 class=\"activity\" id=\"steg-3-lag-en-ny-side-og-link-til-den\">Steg 3: Lag en ny side og link til den</h1>\n<figure>La oss lage en ny side. Åpne <code>omg_meg_side_2.html</code>.  Den har litt mindre kode en den andre siden du jobbet med, men jeg er sikker på at du kan legge til mer kode selv nå.</figure>\n<figure><strong>Noen tips og ideer:</strong></figure>\n<ul>\n<li>Legg til en overskrift som vil fungere som tittelen på denne siden.</li>\n<li>Denne siden kan handle om kjæledyret ditt, din favoritt hobby eller vennene dine og deres hobbyer.</li>\n<li>Lag en liste over ting kjæledyret liker, hvis siden er om et kjæledyr.</li>\n</ul>\n<figure><strong>Er du ferdig? Flott! La oss nå linke de to sidene du har laget sammen.</strong></figure>\n<p>Når vi har linket til deler av den samme siden, kunne vi bare peke linken til en bestemt id på siden, som dette:</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#kattunge\"</span>&gt;</span> Klikk for å se en kattunge <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\n</code></pre>\n<p>Som da tok deg til noe sånt som dette:</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"kattunge\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span> = \"<span class=\"hljs-attribute\">kattunge.jpg</span>\" <span class=\"hljs-attribute\">alt</span> = \"<span class=\"hljs-attribute\">Dette</span> <span class=\"hljs-attribute\">er</span> <span class=\"hljs-attribute\">en</span> <span class=\"hljs-attribute\">kattunge.</span>\" /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n</code></pre>\n<figure>Hvis du vil koble til en annen side, trenger vi ikke å inkludere hashsymbolet (<code>#</code>), men i stedet må vi si hvilken fil vi vil linken skal ta oss til.</figure>\n<p>Så for å linke fra <code>om_meg_side_2.html</code> til <code>om_meg.html</code> skriver vi slik:</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"om_meg.html\"</span>&gt;</span> Gå til Om Meg siden <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\n</code></pre>\n<p>Du kan endre anker teksten til noe annet, som tittelen på siden hvis du har endret det.</p>\n<p>For å linke tilbake fra <code>om_meg.html</code> til <code>om_meg_side_2.html</code> må du skrive det slik:</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"om_meg_side_2.html\"</span>&gt;</span> Gå til min andre side <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\n</code></pre>\n<p>Gratulerer! Du har laget ditt eget nettsted.</p>\n</section>\n<section class=\"activity\" id=\"publiser-nettsiden-din-pa-internett-ekstra-aktivitet\">\n<h1 class=\"activity\" id=\"publiser-nettsiden-din-pa-internett-ekstra-aktivitet\">Publiser nettsiden din på Internett (ekstra aktivitet)</h1>\n<p>Nå har du laget ditt eget nettsted. Du ønsker vel å vise det frem, gjør du ikke?</p>\n<p>Hvis du bare kopierer adressen til websiden fra nettleseren din, og deretter sender den til noen, ville de ikke se den. Det er fordi denne adressen beskriver et sted på datamaskinen din, og vennene dine ikke har tilgang til den. Selv om hadde hatt det, hva om de ønsket å se på den når datamaskinen din er skrudd av?</p>\n<p>Husker du servere fra den første økten? Servere er datamaskiner som alltid er på og koblet til Internett, og de er satt opp slik at folk kan besøke nettsteder som lever på disse datamaskinene.</p>\n<p>For å gjøre dette vil vi bruke dropbox eller google drive. Hvis du ikke har en egen konto kan du spørre om å få bruke mamma eller pappa sin.</p>\n<section id=\"dropbox\">\n<h2 id=\"dropbox\">Dropbox:</h2>\n<ol>\n<li>Åpne dropboxmappen på datamaskinen.</li>\n<li>Finn publicmappen, og lag en ny mappe inne i den. Den nye mappen kan få samme navn som hjemmesiden din, for eksempel 'om_meg'</li>\n<li>Kopier deretter htmlfilen din over i denne mappen. Dersom du bruker noen bilder eller lignende må disse også kopieres over.</li>\n<li>Høyreklikk på htmlfilen og velge <code>Copy Public Link</code></li>\n<li>Lim inn urlen i nettleseren din (ctrl + v) og se at nettsiden din kommer opp.</li>\n<li>Denne urlen kan du nå gi til vennene dine, så kan de se på siden din.</li>\n</ol>\n</section>\n<section id=\"google-drive\">\n<h2 id=\"google-drive\">Google drive:</h2>\n<ol>\n<li>Åpne google drive mappen på datamaskinen.</li>\n<li>Lag en ny mappe her. Den nye mappen kan få samme navn som hjemmesiden din, for eksempel 'om_meg'.</li>\n<li>Kopier deretter htmlfilen din over i denne mappen. Dersom du bruker noen bilder eller lignende må disse også kopieres over.</li>\n<li>Høyreklikk på mappen du opprettet. Under Google Drive velger du ´Del´. Kryss av at mappen skal være offentlig - at alle skal kunne se den.</li>\n<li>Høyreklikk på htmlfilen din og under Google Drive velger du 'Se på nettet'.</li>\n<li>På siden du får opp kan du velge <code>Preview</code>. Nå skal du se nettsiden din.</li>\n<li>Urlen du er på nå kan du dele med vennene dine, så kan de også se på siden din.</li>\n</ol>\n</section>\n<section class=\"try\" id=\"ting-du-kan-prove\">\n<h2 class=\"try\" id=\"ting-du-kan-prove\">Ting du kan prøve</h2>\n<ul>\n<li>Hvordan kan du linke til en annen side på nettet? (Hint: prøv å legge til <code>http://</code> og deretter adressen til nettstedet du vil koble til)</li>\n<li>I likhet med forslaget ovenfor, hvordan ville du legge til et bilde fra et sted på nettet i stedet for fra datamaskinen? (Hint: igjen, prøve å legge til <code>http://</code> og adressen til bildet)</li>\n</ul>\n</section>\n</section>\n";

/***/ }

});
//# sourceMappingURL=en_hjemmeside.0f71f35edcbf69b8ec0e.js.map