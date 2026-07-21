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
    lat:29.97925, lon:31.13421,
    base:230.36, altezza:146.6,
    pendenza:"51°50'40\"",
    fonte:"pubblicato", rif:"lato medio: rilievo Cole 1925; altezza originaria ~146,6 m",
    nota:"lati misurati da Cole: N 230,253 · E 230,391 · S 230,454 · O 230,357 m" },

  { id:"chefren", nome:"Chefren", tipo:"piramide", attivo:true,
    lat:29.97614, lon:31.13076,
    base:215.25, altezza:143.5,
    pendenza:"53°10'",
    rivestimento:45,     // calotta di calcare di Tura ancora in posto, in metri di vertice
    fonte:"pubblicato", rif:"misure correnti di letteratura",
    nota:"centro DA RIMISURARE: le fonti divergono di decine di metri — missione aperta" },

  { id:"micerino", nome:"Micerino", tipo:"piramide", attivo:true,
    lat:29.97244, lon:31.12832,
    base:104.6, altezza:65.5,     // base rettangolare 102,2 × 104,6: usiamo il lato maggiore
    pendenza:"51°20'25\"",
    zoccolo:15,          // corsi inferiori in granito di Assuan, in metri
    fonte:"pubblicato", rif:"misure correnti di letteratura",
    nota:"base rettangolare: qui resa quadrata sul lato maggiore" },

  /* ---------- PIRAMIDI SATELLITI (posizioni da rimisurare) ---------- */
  { id:"g1a", nome:"G1-a", tipo:"piramide", attivo:false,
    lat:29.97880, lon:31.13560, base:49.0, altezza:30.0,
    fonte:"approssimato", rif:"posizione stimata su mappa — DA RIMISURARE" },
  { id:"g1b", nome:"G1-b", tipo:"piramide", attivo:false,
    lat:29.97835, lon:31.13560, base:49.0, altezza:30.0,
    fonte:"approssimato", rif:"posizione stimata su mappa — DA RIMISURARE" },
  { id:"g1c", nome:"G1-c", tipo:"piramide", attivo:false,
    lat:29.97790, lon:31.13560, base:49.0, altezza:30.0,
    fonte:"approssimato", rif:"posizione stimata su mappa — DA RIMISURARE" },
  { id:"g3a", nome:"G3-a", tipo:"piramide", attivo:false,
    lat:29.97185, lon:31.12820, base:44.0, altezza:28.0,
    fonte:"approssimato", rif:"posizione stimata su mappa — DA RIMISURARE" },
  { id:"g3b", nome:"G3-b", tipo:"piramide", attivo:false,
    lat:29.97185, lon:31.12855, base:31.0, altezza:21.0,
    fonte:"approssimato", rif:"posizione stimata su mappa — DA RIMISURARE" },
  { id:"g3c", nome:"G3-c", tipo:"piramide", attivo:false,
    lat:29.97185, lon:31.12890, base:31.0, altezza:21.0,
    fonte:"approssimato", rif:"posizione stimata su mappa — DA RIMISURARE" },

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
