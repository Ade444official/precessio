/* ============================================================
   PRECESSIO — CATALOGO DEI MONUMENTI
   ------------------------------------------------------------
   Qui vivono i DATI, non il programma. Ogni elemento porta con
   sé la sua fonte, così ogni figura pubblicata nel libro può
   essere ricondotta al numero che l'ha generata.

   fonte:  "misurato"    = rilevato da ADE 444 (Google Earth, profili)
           "pubblicato"  = da rilievo topografico o letteratura
           "approssimato"= stima provvisoria, DA RIMISURARE
   attivo: false = presente nel catalogo ma non disegnato

   tipi:   "piramide" (base, altezza)      "blocco" (lung/alt/larg, azimut)
           "recinto"  (lung/alt/larg, wireframe)
           "nastro"   (da → a, larghezza)  "marker" (raggio, altezza)

   Unità: metri. Coordinate: gradi decimali WGS84.
   ============================================================ */

window.CATALOGO = {

giza: {
  nome: "Piana di Giza",
  centro: { lat: 29.9792, lon: 31.1342 },
  raggio: 0.05,          // gradi: entro questo raggio il catalogo è attivo
  elementi: [

  /* ---------- LE TRE GRANDI ---------- */
  { id:"cheope", nome:"Cheope", tipo:"piramide", attivo:true,
    lat:29.979142, lon:31.134199,          // centro MISURATO da ADE 444 (21/7/2026)
    base:230.36, altezza:146.6,
    pendenza:"51°50'40\"",
    fonte:"misurato",
    rif:"centro = media dei 4 spigoli di base rilevati da ADE 444 su Google Earth Pro (21/7/2026); base e altezza da rilievo Cole 1925",
    spigoli:{ NO:[29.980156,31.133019], NE:[29.980181,31.135356],
              SE:[29.978119,31.135364], SO:[29.978114,31.133058] },
    nota:"lati misurati 225,5/228,5/222,5/226,4 m (media 225,7 vs 230,36 Cole: −2%, piede sepolto sotto i detriti — si conserva la base pubblicata). Orientamento: 4 deviazioni con lo stesso segno (media −30′ ±23′): compatibile col valore pubblicato (~−3′) ma non lo conferma, precisione insufficiente. Il centro sposta di 12 m a sud rispetto al dato precedente" },

  { id:"chefren", nome:"Chefren", tipo:"piramide", attivo:true,
    lat:29.975990, lon:31.130751,          // centro MISURATO da ADE 444 (21/7/2026)
    base:215.25, altezza:143.5,
    pendenza:"53°10'",
    rivestimento:45,     // calotta di calcare di Tura ancora in posto, in metri di vertice
    fonte:"misurato",
    rif:"centro = media dei 4 spigoli di base rilevati da ADE 444 su Google Earth Pro (21/7/2026); base e altezza restano da letteratura",
    spigoli:{ NO:[29.976931,31.129647], NE:[29.976939,31.131869],
              SE:[29.975053,31.131853], SO:[29.975039,31.129633] },
    nota:"lati misurati 214,5 / 209,1 / 214,2 / 209,7 m (media 211,9): corti del 2% perché il piede è sepolto sotto i detriti del rivestimento — si conserva quindi la base pubblicata 215,25. L'orientamento NON è misurabile con questo metodo: deviazioni −15/+26/−25/+22 primi, incertezza ±26 primi contro un valore reale di pochi primi. Il centro sposta di 16,8 m a sud rispetto al dato precedente; correggendo lo spigolo NO il centro si è mosso di soli 25 cm, prova della sua robustezza" },

  { id:"micerino", nome:"Micerino", tipo:"piramide", attivo:true,
    lat:29.972476, lon:31.128271,          // centro MISURATO da ADE 444 (21/7/2026)
    base:104.6, altezza:65.5,     // base rettangolare 102,2 × 104,6: usiamo il lato maggiore
    pendenza:"51°20'25\"",
    zoccolo:15,          // corsi inferiori in granito di Assuan, in metri
    fonte:"misurato",
    rif:"centro = media dei 4 spigoli di base rilevati da ADE 444 su Google Earth Pro (21/7/2026); base e altezza da letteratura",
    spigoli:{ NO:[29.972903,31.127792], NE:[29.972908,31.128747],
              SE:[29.972036,31.128778], SO:[29.972056,31.127767] },
    nota:"base rettangolare: qui resa quadrata sul lato maggiore. Lati misurati 92,2/96,7/97,6/93,9 m (media 95,1 vs 102,2×104,6 pubblicati: −9% — errore assoluto in linea con Cheope/Chefren, ma qui pesa di più in percentuale su una base piccola). Orientamento non misurabile (±91′). Centro a soli 6,2 m dal dato precedente" },

  /* ---------- PIRAMIDI SATELLITI (posizioni misurate da ADE 444, 21/7/2026) ----------
     Metodo: 2 angoli opposti (NE/SO) su Google Earth Pro; centro = punto medio,
     diagonale = distanza fra i due. Dimensioni da letteratura (Lehner/Reisner via
     Wikipedia); l'ordine reale (confermato dalla misura, non quello ipotizzato
     all'origine) è: G1a-b-c in fila nord→sud a est di Cheope; G3a è la PIÙ A EST
     delle tre di Micerino, G3b centrale, G3c la più a ovest. */
  { id:"g1a", nome:"G1-a", tipo:"piramide", attivo:true,
    lat:29.978840, lon:31.136229, base:49.5, altezza:30.25,
    fonte:"misurato",
    rif:"centro = media di 2 angoli opposti, ADE 444 (21/7/2026); base/altezza: Lehner/Reisner (Wikipedia, Pyramid G1-a)",
    spigoli2:{ A:[29.979031,31.136447], B:[29.978650,31.136011] },
    nota:"diagonale misurata 59,6 m (attesa per base 49,5: 70,0 — corta come da fascia di detriti). La più a nord delle tre" },
  { id:"g1b", nome:"G1-b", tipo:"piramide", attivo:true,
    lat:29.978294, lon:31.136242, base:50.0, altezza:30.0,
    fonte:"misurato",
    rif:"centro = media di 2 angoli opposti, ADE 444 (21/7/2026); base/altezza: Lehner/Reisner (Wikipedia, Pyramid G1-b)",
    spigoli2:{ A:[29.978503,31.135997], B:[29.978086,31.136486] },
    nota:"diagonale misurata 66,0 m (attesa 70,7). Centrale; 60,5 m a sud di G1a, azimut 178,8° — in fila" },
  { id:"g1c", nome:"G1-c", tipo:"piramide", attivo:true,
    lat:29.977831, lon:31.136231, base:46.25, altezza:29.6,
    fonte:"misurato",
    rif:"centro = media di 2 angoli opposti, ADE 444 (21/7/2026); base/altezza: Lehner/Reisner (Wikipedia, Pyramid G1-c)",
    spigoli2:{ A:[29.978036,31.136000], B:[29.977625,31.136461] },
    nota:"diagonale misurata 63,7 m (attesa 65,4). La più a sud; 51,4 m da G1b, azimut 181,2° — in fila" },
  { id:"g3a", nome:"G3-a", tipo:"piramide", attivo:true,
    lat:29.971608, lon:31.128322, base:44.0, altezza:28.4,
    fonte:"misurato",
    rif:"centro = media di 2 angoli opposti, ADE 444 (21/7/2026); base/altezza: Lehner/Reisner (Wikipedia, Pyramid G3-a)",
    spigoli2:{ A:[29.971769,31.128522], B:[29.971447,31.128122] },
    nota:"diagonale misurata 52,6 m (attesa 62,2). È la PIÙ A EST delle tre (non la più a ovest come ipotizzato in origine — corretto dalla misura, confermato da Wikipedia: 'rightmost of the three')" },
  { id:"g3b", nome:"G3-b", tipo:"piramide", attivo:true,
    lat:29.971593, lon:31.127812, base:31.24, altezza:21.2,
    fonte:"misurato",
    rif:"centro = media di 2 angoli opposti, ADE 444 (21/7/2026); base: Lehner/Reisner (Wikipedia, Pyramid G3-b); altezza NON documentata nella fonte consultata — stimata pari a G3-c (stesso lato di base)",
    spigoli2:{ A:[29.971733,31.127975], B:[29.971453,31.127650] },
    nota:"diagonale misurata 44,2 m (attesa 44,2 — coincidenza quasi esatta). Centrale; 49,2 m a ovest di G3a, azimut 268,1°" },
  { id:"g3c", nome:"G3-c", tipo:"piramide", attivo:true,
    lat:29.971583, lon:31.127347, base:31.24, altezza:21.2,
    fonte:"misurato",
    rif:"centro = media di 2 angoli opposti, ADE 444 (21/7/2026); base/altezza: Lehner/Reisner (Wikipedia, Pyramid G3-c)",
    spigoli2:{ A:[29.971717,31.127500], B:[29.971450,31.127194] },
    nota:"diagonale misurata 41,7 m (attesa 44,2). La più a ovest delle tre; 44,8 m da G3b, azimut 268,6° — le tre sono perfettamente in fila" },

  /* ---------- LA SFINGE E I TEMPLI ---------- */
  { id:"sfinge", nome:"Sfinge", tipo:"blocco", attivo:true,
    lat:29.97528, lon:31.13757,
    lunghezza:73, altezza:20, larghezza:19, azimut:90,
    fonte:"pubblicato", rif:"lunghezza ~73 m, altezza ~20 m; asse E-O, fronte a est",
    nota:"resa come volume d'ingombro: la forma scolpita non è modellata" },

  { id:"tempio-funerario-chefren", nome:"Tempio funerario", tipo:"recinto", attivo:true,
    lat:29.975988, lon:31.131737, offsetEst:40,
    lunghezza:110, altezza:6, larghezza:45, azimut:90,
    fonte:"misurato", rif:"segnaposto ADE 444 su Google Earth = fronte ovest del tempio",
    nota:"ingombro indicativo; centro spostato 40 m a est del segnaposto" },

  { id:"tempio-valle-chefren", nome:"Tempio a valle", tipo:"recinto", attivo:true,
    lat:29.97454, lon:31.13772,
    lunghezza:45, altezza:8, larghezza:45, azimut:90,
    fonte:"approssimato", rif:"posizione letta su mappa — DA RIMISURARE" },

  { id:"rampa-chefren", nome:"Rampa processionale", tipo:"nastro", attivo:true,
    da:"tempio-funerario-chefren", a:"tempio-valle-chefren", larghezza:5, altezza:1.2,
    fonte:"approssimato", rif:"tracciato indicativo fra i due templi (~560 m nel nostro calcolo; lunghezza pubblicata ~494 m)" },

  /* ---------- RICERCA ADE 444 ---------- */
  { id:"collinetta", nome:"Collinetta", tipo:"marker", attivo:true,
    lat:29.98334, lon:31.12906, raggio:30, altezza:10,
    fonte:"misurato", rif:"cresta rilevata da ADE 444 su Google Earth (profili altimetrici)",
    nota:"ipotesi 'seconda Sfinge' (Piras); scarto di 152 m dal punto speculare teorico" }

  ],

  /* punti da cui guardare il cielo (compaiono nel menu) */
  /* Gli osservatori stanno SEMPRE FUORI dai monumenti: si guarda la piana
     stando sulla sabbia, non dentro la pietra. Lo scostamento (poche
     centinaia di metri) e' astronomicamente irrilevante. */
  osservatori: [
    { nome:"veduta sud-est (le tre allineate)", lat:29.970185, lon:31.135579 },
    { nome:"piana a est di Cheope",   lat:29.979250, lon:31.136284 },
    { nome:"davanti alla Sfinge",     lat:29.975280, lon:31.138296 },
    { nome:"Tempio funerario di Chefren", lat:29.975988, lon:31.133500 },
    { nome:"accanto alla collinetta", lat:29.983340, lon:31.129786 }
  ]
}

/* ---- I PROSSIMI SITI SI AGGIUNGONO QUI, STESSO FORMATO ----
gobekli: {
  nome: "Göbekli Tepe",
  centro: { lat:37.2231, lon:38.9225 },
  raggio: 0.02,
  elementi: [ ... ],
  osservatori: [ ... ]
}
------------------------------------------------------------ */

};
