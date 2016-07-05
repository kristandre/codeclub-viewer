webpackJsonp([149,236],{

/***/ 1029:
/*!********************************************************!*\
  !*** ../oppgaver/src/scratch/bilder/velg-bakgrunn.png ***!
  \********************************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAPCAIAAACJJmN7AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAAAtElEQVQ4T2No6+yMiYsnFZVVVDDUNTQcPnr02YsXJCGgZiw6T587B3TIhImT7t6/jyyOjLDrhLt/5eo1cEGgccgGEdC5afMWiAiQAeQCVcLVYNcJNHvBosVwCyHaIAjoBYggis6r165BRJERUClcGwRBTAQyoDpnzJoNF4UgoM2Y2iAI4gqQTog2CAJygZYDtQFjDC6IhlLS0oEkSCeyKBABJfBogyMsOolEQ0wneXklJS0dANCxzo7YC5S5AAAAAElFTkSuQmCC"

/***/ },

/***/ 1137:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/scratch/hva_er_det/hva_er_det.md ***!
  \***********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/scratch/hva_er_det/hva_er_det.md */ 1138),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/scratch/hva_er_det/hva_er_det.md */ 1139)}

/***/ },

/***/ 1139:
/*!********************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/scratch/hva_er_det/hva_er_det.md ***!
  \********************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p>Et bilde av en tilfeldig ting vises på tavlen. Men bildet er\nforvrengt, slik at du må gjette hva det er ved å klikke på et av\nalternativene som vises under. Desto raskere du gjetter riktig, desto\nflere poeng får du.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./hva_er_det.png */ 1140) + "\" alt=\"\" /></figure>\n</section>\n<section class=\"activity\" id=\"steg-1-fa-flere-ting-til-a-vise-seg-pa-tavlen\">\n<h1 class=\"activity\" id=\"steg-1-fa-flere-ting-til-a-vise-seg-pa-tavlen\">Steg 1: Få flere ting til å vise seg på tavlen</h1>\n<figure><em>Vi vil at noen forskjellige bilder skal komme opp på tavlen.</em></figure>\n<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Start et nytt Scratch-prosjekt og slett kattefiguren.</p>\n</li>\n<li>\n<p>Klikk på scenen og deretter <code>Bakgrunner</code>-fanen.  Åpne biblioteket\nmed bakgrunner ved å trykke på\n<img src=\"" + __webpack_require__(/*! ../bilder/velg-bakgrunn.png */ 1029) + "\" alt=\"Velg en ferdig bakgrunn\" /> og velg\nså <code>Innendørs/chalkboard</code>.</p>\n</li>\n<li>\n<figure>Importer en valgfri figur. Velg gjerne en figur fra <code>Ting</code>-mappen.</figure>\n</li>\n<li>\n<figure>Plasser figuren på midten av tavlen, og endre størrelsen hvis den\nikke passer.</figure>\n</li>\n<li>\n<p>Legg til fire nye drakter fra <code>Ting</code>-mappen. Du kan velge de\nfigurene du vil!</p>\n</li>\n<li>\n<figure>La oss nå få en tilfeldig ting til å dukke opp på tavlen. Bruk dette\nskriptet.</figure>\n<pre><code class=\"language-blocks\">når grønt flagg klikkes\nbytt drakt <span class=\"hljs-keyword\">til</span> (tilfeldig tall fra (<span class=\"hljs-number\">1</span>) <span class=\"hljs-keyword\">til</span> (<span class=\"hljs-number\">5</span>))\n</code></pre>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet\">\n<h2 class=\"flag\" id=\"test-prosjektet\">Test prosjektet</h2>\n<figure><strong>Klikk på det grønne flagget.</strong></figure>\n<ul>\n<li>\n<p>Endrer figuren seg?</p>\n</li>\n<li>\n<p>Klikk flere ganger. Får figuren stadig nye drakter? Flott.</p>\n</li>\n</ul>\n<figure>Det gjør ingenting om samme drakt kommer opp flere ganger på rad. Det\ner helt normalt når det velges en tilfeldig drakt hver gang.</figure>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-2-forvreng-bildet\">\n<h1 class=\"activity\" id=\"steg-2-forvreng-bildet\">Steg 2: Forvreng bildet</h1>\n<p><em>La oss nå forvrenge figuren når den dukker opp på tavlen, så det blir\nvanskeligere å gjette hva det er. Deretter skal vi gradvis gjøre vi\nden tydeligere igjen.</em></p>\n<p>Vi skal bruke en <code class=\"blockdata\">poeng</code>-variabel til å kontrollere\ngraden av forvrenging. Dersom poengscoren er høy vil bildet bli veldig\nforvrengt. Når antallet poeng synker, vil også graden av forvrenging\nsynke. Poengvariabelen fungerer dermed som en slags tidteller.</p>\n<section class=\"check\" id=\"sjekkliste-2\">\n<h2 class=\"check\" id=\"sjekkliste-2\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Velg <code class=\"blockdata\">Data</code>-kategorien og lag en variabel kalt\n<code class=\"blockdata\">poeng</code>. La den gjelde <code>for alle figurer</code>.</p>\n</li>\n<li>\n<p>Endre skriptet slik:</p>\n<pre><code class=\"language-blocks\">når grønt flagg klikkes\nbytt drakt <span class=\"hljs-built_in\">til</span> (tilfeldig tall fra (<span class=\"hljs-number\">1</span>) <span class=\"hljs-built_in\">til</span> (<span class=\"hljs-number\">5</span>))\nsett [poeng v] <span class=\"hljs-built_in\">til</span> [<span class=\"hljs-number\">110</span>]\ngjenta <span class=\"hljs-built_in\">til</span> &lt;(poeng) = [<span class=\"hljs-number\">0</span>]&gt;\n    endre [poeng v] <span class=\"hljs-built_in\">med</span> (-<span class=\"hljs-number\">10</span>)\n    sett [piksel v] effekt <span class=\"hljs-built_in\">til</span> (poeng)\n    sett [farge v] effekt <span class=\"hljs-built_in\">til</span> (poeng)\n    vent (<span class=\"hljs-number\">1</span>) sekunder\nslutt\n</code></pre>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-2\">\n<h2 class=\"flag\" id=\"test-prosjektet-2\">Test prosjektet</h2>\n<figure><strong>Klikk på det grønne flagget.</strong></figure>\n<ul>\n<li>\n<p>Kommer det opp et tilfeldig og forvrengt bilde?</p>\n</li>\n<li>\n<p>Blir bildet gradvis tydeligere?</p>\n</li>\n<li>\n<p>Går poengsummen ned i takt med at bildet blir tydeligere?</p>\n</li>\n<li>\n<p>Blir bildet fullstendig tydelig når poengsummen er 0?</p>\n</li>\n<li>\n<figure>Får du fremdeles nye ting på tavlen når du klikker på det grønne\nflagget?</figure>\n</li>\n</ul>\n</section>\n<section class=\"try\" id=\"ting-a-prove\">\n<h2 class=\"try\" id=\"ting-a-prove\">Ting å prøve</h2>\n<ul>\n<li>\n<p>Prøv å <strong>endre poengsummen</strong> fra start, samt hvor mye den skal\n<strong>forandre seg</strong> for hver gang den går gjennom løkken. Hvordan\nendrer det utseendet til bildet? Blir det vanskeligere eller enklere\nå se hva bildet forestiller?</p>\n</li>\n<li>\n<p>Forsøk noen <strong>ulike grafiske effekter</strong> fra nedtrekkslisten. Hvordan\npåvirker dette vanskelighetgsraden?</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-3-la-spilleren-prove-a-gjette-bildet\">\n<h1 class=\"activity\" id=\"steg-3-la-spilleren-prove-a-gjette-bildet\">Steg 3: La spilleren prøve å gjette bildet</h1>\n<p>Så langt har vi fått vårt tilfeldige bilde til å gradvis bli\ntydeligere samtidig som poengsummen synker. Men hvordan skal man\nvinne spillet? Vi vil legge til noen figurer nederst på skjermen som\nspilleren kan klikke på. Klikker man på den rette, vinner man\nspillet. Klikker man feil forsvinner figuren og spillet fortsetter.</p>\n<p>Først må vi å vite hva det rette svaret er.</p>\n<section class=\"check\" id=\"sjekkliste-3\">\n<h2 class=\"check\" id=\"sjekkliste-3\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Lag en ny variabel og kall den <code class=\"blockdata\">riktig</code>. Pass på at den\ner tilgjengelig <code>for alle figurer</code>. Fjern avhukingen slik at\nvariabelen ikke vises i spillet.</p>\n</li>\n<li>\n<p>Endre skriptet slik at det klarer å holde styr på hva som er rett\nsvar.  Etter at vi har bestemt drakten legger du derfor til klossen\n<code class=\"blockdata\">sett riktig til</code><code class=\"blocklooks\">drakt nr.</code>:</p>\n<pre><code class=\"language-blocks\">når grønt flagg klikkes\nbytt drakt <span class=\"hljs-built_in\">til</span> (tilfeldig tall fra (<span class=\"hljs-number\">1</span>) <span class=\"hljs-built_in\">til</span> (<span class=\"hljs-number\">5</span>))\nsett [riktig v] <span class=\"hljs-built_in\">til</span> (drakt nr.)\nsett [poeng v] <span class=\"hljs-built_in\">til</span> [<span class=\"hljs-number\">110</span>]\ngjenta <span class=\"hljs-built_in\">til</span> &lt;(poeng) = [<span class=\"hljs-number\">0</span>]&gt;\n    endre [poeng v] <span class=\"hljs-built_in\">med</span> (-<span class=\"hljs-number\">10</span>)\n    sett [piksel v] effekt <span class=\"hljs-built_in\">til</span> (poeng)\n    sett [farge v] effekt <span class=\"hljs-built_in\">til</span> (poeng)\n    vent (<span class=\"hljs-number\">1</span>) sekunder\nslutt\n</code></pre>\n</li>\n</ul>\n<p>Nå skal vi legge til flere figurer som spilleren kan klikke på.</p>\n<ul>\n<li>\n<figure>Gi først figuren din navnet <code>Spørsmål</code>.</figure>\n</li>\n<li>\n<figure>Lag så en kopi av figuren ved å høyreklikke på den. På scenen drar\ndu deretter den nye figuren ned i venstre hjørne.</figure>\n</li>\n<li>\n<figure>Endre denne nye figurens navn til <code>Svar1</code>.</figure>\n</li>\n<li>\n<figure>Slett skriptet til <code>Svar1</code> og alle draktene bortsett fra den første.</figure>\n</li>\n<li>\n<p>Gjenta de tre siste stegene igjen (kall neste kopi <code>Svar2</code>), plasser\n<code>Svar2</code> ved siden av <code>Svar1</code> og slett alle bortsett fra den andre\ndrakten.</p>\n</li>\n<li>\n<p>Gjenta disse punktene tre ganger til, slik at du har også figurene\n<code>Svar3</code>, <code>Svar4</code> og <code>Svar5</code>.</p>\n<p>Du skal nå ha en rad med fem svar-figurer nederst på scenen, hver\nviser en drakt som hovedfiguren kan ha. Ingen av <code>Svar</code>-figurene\nskal ha skript knyttet til seg.</p>\n</li>\n<li>\n<p>Nå må vi få alle figurene til å reagere når de blir klikket på. Hva\nsom skal skje avhenger av om spilleren har klikket riktig eller\ngalt. Legg til dette skriptet til <code>Svar1</code>:</p>\n<pre><code class=\"language-blocks\">når denne figuren klikkes\nhvis &lt;(riktig) = <span class=\"hljs-string\">[1]</span>&gt;\n    send melding <span class=\"hljs-string\">[Vant v]</span>\nellers\n    skjul\nslutt\n</code></pre>\n</li>\n<li>\n<figure>Dra skriptet over til de andre figurene, slik at alle får hver sin\nkopi. For hver figur, bytt 1 til 2, 3, og så videre.</figure>\n</li>\n<li>\n<p>Nå skal vi lage skriptet som gir melding til spilleren når han har\nvunnet. Klikk på <code>Spørsmål</code> igjen og legg til dette skriptet:</p>\n<pre><code class=\"language-blocks\">når jeg mottar <span class=\"hljs-string\">[Vant v]</span>\nsi (sett sammen <span class=\"hljs-string\">[Gratulerer! Din poengsum ble ]</span> (poeng))\n</code></pre>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-3\">\n<h2 class=\"flag\" id=\"test-prosjektet-3\">Test prosjektet</h2>\n<figure><strong>Klikk på det grønne flagget.</strong></figure>\n<figure>Når du tester spillet kan du se på spørsmålsfiguren under scenen for å\nse hva riktig svar er. Det fungerer bra for testing.</figure>\n<ul>\n<li>\n<p>Hva skjer når du klikker på riktig svar?</p>\n</li>\n<li>\n<p>Hva skjer når du klikker på galt svar?</p>\n</li>\n<li>\n<p>Hva skjer med det gale svaret når du starter et nytt spill?</p>\n</li>\n</ul>\n</section>\n<section class=\"check\" id=\"sjekkliste-4\">\n<h2 class=\"check\" id=\"sjekkliste-4\">Sjekkliste</h2>\n<p>Denne testen viser oss <strong>to problemer</strong>: Først og fremst, ting som ble\nklikket på ved galt svar kommer ikke tilbake når et nytt spill\nstarter.  For det andre, poengsummen fortsetter å gå ned, også etter\nat man har klikket på riktig svar.</p>\n<ul>\n<li>\n<figure>For å fikse det første problemet kan vi bare legge til følgende\nskript for hver av de fem svarfigurene:</figure>\n<pre><code class=\"language-blocks\"><span class=\"hljs-keyword\">n</span>år <span class=\"hljs-keyword\">gr</span>ønt flagg klikkes\nvis\n</code></pre>\n</li>\n</ul>\n<p>For å fikse det andre problemet må vi få stoppet spørsmålfigurens\n<code class=\"blockcontrol\">gjenta til</code>-løkke når spilleren klikker på riktig\nsvar. Vi kan bruke en ny variabel for å gjøre det.  Vi vil kalle denne\nvariabelen <code class=\"blockdata\">vant</code> og legger inn en\n<code class=\"blockdata\">sett</code>-kloss som gir den verdien <code>0</code> når spillet starter,\nog en tilsvarende kloss som setter verdien til <code>1</code> når spillet\nvinnes. Se skriptene nedenfor.</p>\n<ul>\n<li>\n<p>Vi må videre stoppe <code class=\"blockcontrol\">gjenta til</code>-løkken når\npoengsummen har blitt <code>0</code> eller <code class=\"blockdata\">vant</code> er <code>1</code>.</p>\n</li>\n<li>\n<p>Til slutt legger vi også inn en <code class=\"blocklooks\">ta bort grafiske effekter</code>-kloss som avslører spørsmålsfiguren når\nspilleren har gjettet riktig. Skriptene på <code>Spørsmål</code> skal nå se\nslik ut:</p>\n<pre><code class=\"language-blocks\">når grønt flagg klikkes\nbytt drakt til (tilfeldig tall fra (<span class=\"hljs-number\">1</span>) til (<span class=\"hljs-number\">5</span>))\nsett <span class=\"hljs-string\">[riktig v]</span> til (drakt nr.)\nsett <span class=\"hljs-string\">[poeng v]</span> til <span class=\"hljs-string\">[110]</span>\nsett <span class=\"hljs-string\">[vant v]</span> til <span class=\"hljs-string\">[0]</span>\ngjenta til &lt;&lt;(poeng) = <span class=\"hljs-string\">[0]</span>&gt; eller &lt;(vant) = <span class=\"hljs-string\">[1]</span>&gt;&gt;\n    endre <span class=\"hljs-string\">[poeng v]</span> med (-<span class=\"hljs-number\">10</span>)\n    sett <span class=\"hljs-string\">[piksel v]</span> effekt til (poeng)\n    sett <span class=\"hljs-string\">[farge v]</span> effekt til (poeng)\n    vent (<span class=\"hljs-number\">1</span>) sekunder\nslutt\n\nnår jeg mottar <span class=\"hljs-string\">[Vant v]</span>\nsett <span class=\"hljs-string\">[vant v]</span> til <span class=\"hljs-string\">[1]</span>\nta bort grafiske effekter\nsi (sett sammen <span class=\"hljs-string\">[Gratulerer! Din poengsum ble]</span> (poeng))\n</code></pre>\n</li>\n</ul>\n</section>\n<section class=\"save\" id=\"lagre-prosjektet\">\n<h2 class=\"save\" id=\"lagre-prosjektet\">Lagre prosjektet</h2>\n<figure><strong>Gratulerer! Du er nå ferdig med spillet.</strong></figure>\n<figure>Men det finnes mange flere ting du kan gjøre med spillet. Prøv deg\ngjerne på utfordringene nedenfor!</figure>\n</section>\n<section class=\"challenge\" id=\"utfordring-1-gjor-spillet-enklere-eller-vanskeligere\">\n<h2 class=\"challenge\" id=\"utfordring-1-gjor-spillet-enklere-eller-vanskeligere\">Utfordring 1: Gjør spillet enklere eller vanskeligere</h2>\n<p>Endre vanskelighetsgrad for spillet.</p>\n<ul>\n<li>Forsøk å endre hvor lenge bildet vises frem og hvor raskt\npoengsummen minker.</li>\n<li>Forsøk å endre forvrengingen av bildet.</li>\n<li>Forsøk å gjøre figurene likere hverandre eller mer forskjellig. Husk\nogså å forandre svarfigurenes drakter.</li>\n</ul>\n</section>\n<section class=\"challenge\" id=\"utfordring-2-forvreng-bildet-ulikt-fra-gang-til-gang\">\n<h2 class=\"challenge\" id=\"utfordring-2-forvreng-bildet-ulikt-fra-gang-til-gang\">Utfordring 2: Forvreng bildet ulikt fra gang til gang</h2>\n<p>For øyeblikket bruker spillet samme forvrengingsalgoritme hele\ntiden. Men i steg 2 prøvde du kanskje ut noen forskjellige\nalternativer. Prøv nå om du kan finne noen flere forvrenginger som du\nsynes fungerer like bra som <code>farge</code> og <code>piksler</code>.</p>\n<p>Endre spillet slik at hvert spill bruker forskjellige forvrengninger i\n<code class=\"blockcontrol\">gjenta til</code>-løkken.</p>\n<p><strong>Hint:</strong> Forsøk å opprette en ny variabel som du kaller\n<code>forvrenging</code>. Sett denne til en tilfeldig verdi i starten av\nspillet. Bruk så <code class=\"blockcontrol\">hvis</code>-klosser i <code class=\"blockcontrol\">gjenta til</code>-løkken for å velge ut en forvrenging til hvert\nspill.</p>\n</section>\n<section class=\"challenge\" id=\"utfordring-3-la-hvert-spill-ha-flere-runder\">\n<h2 class=\"challenge\" id=\"utfordring-3-la-hvert-spill-ha-flere-runder\">Utfordring 3: La hvert spill ha flere runder</h2>\n<p>For øyeblikket er hvert spill uavhengig av andre. Prøv om du kan legge\ntil flere runder slik at man får gjette på for eksempel tre ting og\nkan vinne inntil 300 poeng.</p>\n<p><strong>Hint:</strong> Du vil trenge en ekstra variabel for å lagre den totale\npoengsummen. Du må også ha en løkke som går rundt for hver runde.</p>\n</section>\n<section class=\"challenge\" id=\"utfordring-4-ok-vanskelighetsgraden-gradvis\">\n<h2 class=\"challenge\" id=\"utfordring-4-ok-vanskelighetsgraden-gradvis\">Utfordring 4: Øk vanskelighetsgraden gradvis</h2>\n<p>Gjør nå spillet vanskeligere og vanskeligere for hver runde.</p>\n<figure>Kanskje hver runde også skal gi ulikt antall poeng? Bør spilleren også\nfå ekstra mange poeng for å gjette kjapt i de vanskeligste rundene?</figure>\n<p><strong>Hint:</strong> Hvordan kan du vite hvilken runde du er i? Hvordan kan du\nbruke det til å endre vanskelighetsgraden og poengsummen?</p>\n</section>\n<section class=\"challenge\" id=\"utfordring-5-fortsett-til-spilleren-gjor-feil\">\n<h2 class=\"challenge\" id=\"utfordring-5-fortsett-til-spilleren-gjor-feil\">Utfordring 5: Fortsett til spilleren gjør feil</h2>\n<p>I stedet for et bestemt antall runder kan du la spillet gå til det\nblir klikket på feil svar. Dette fungerer nok best dersom man også\nøker vanskelighetsgraden utover i spillet.</p>\n</section>\n<section class=\"challenge\" id=\"utfordring-6-tilpass-spillet-til-hvor-flink-spilleren-er\">\n<h2 class=\"challenge\" id=\"utfordring-6-tilpass-spillet-til-hvor-flink-spilleren-er\">Utfordring 6: Tilpass spillet til hvor flink spilleren er</h2>\n<p>I stedet for å gjøre det stadig vanskeligere kan vi tilpasse\nvanskelighetsgraden til spillernes dyktighet. Hvis de raskt gjetter\nriktig ting, kan den neste runden gjøres vanskeligere. Hvis de klikker\nfeil eller gjetter sakte, kan neste runde gjøres enklere.</p>\n<figure>Dette fungerer bare hvis du ikke samler opp poengsummen fra runde til\nrunde.</figure>\n</section>\n<section class=\"challenge\" id=\"utfordring-7-hold-styr-pa-rekorden\">\n<h2 class=\"challenge\" id=\"utfordring-7-hold-styr-pa-rekorden\">Utfordring 7: Hold styr på rekorden</h2>\n<p>Finn en måte å lagre den høyeste poengsummen på. Klarer du også å\nlagre navnet til spilleren, og få spillet til å si hvem som har\nrekorden?</p>\n</section>\n<section class=\"challenge\" id=\"utfordring-8-gi-en-straff-for-galt-svar\">\n<h2 class=\"challenge\" id=\"utfordring-8-gi-en-straff-for-galt-svar\">Utfordring 8: Gi en straff for galt svar</h2>\n<p>Slik spillet er nå kan man bare klikke som en gal på alle svarene, og\ndermed raskt finne riktig svar. Det kan derfor være en god idé å\ntrekke fra poeng hver gang spilleren klikker på feil figur.</p>\n<p>Gjør dette spillet bedre?</p>\n</section>\n<section class=\"save\" id=\"lagre-prosjektet-2\">\n<h2 class=\"save\" id=\"lagre-prosjektet-2\">Lagre prosjektet</h2>\n<p><strong>Veldig bra! Nå er du ferdig og kan spille det nye spillet du har\nlaget!</strong></p>\n<p>Ikke glem å dele spillet ditt med venner og familie ved å trykke på\n<code>Legg ut</code> i menyen!</p>\n</section>\n</section>\n";

/***/ },

/***/ 1140:
/*!*********************************************************!*\
  !*** ../oppgaver/src/scratch/hva_er_det/hva_er_det.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/hva_er_det/hva_er_det.bb311c.png";

/***/ }

});
//# sourceMappingURL=hva_er_det.0722c6d984a9255eb488.js.map