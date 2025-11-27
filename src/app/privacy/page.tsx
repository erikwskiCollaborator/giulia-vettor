import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Informativa Privacy - Giulia Vettor Coaching",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per i servizi di coaching sportivo offerti da Giulia Vettor.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 text-sm font-semibold"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Torna alla home
        </Link>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <h1 className="text-4xl font-extrabold text-primary mb-6">
            Informativa Privacy
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Ultimo aggiornamento: 27 novembre 2025
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Premessa */}
            <section>
              <p>
                La presente informativa sul trattamento dei dati personali è
                resa ai sensi dell&apos;art. 13 del Regolamento UE 2016/679
                (GDPR) e del D.Lgs. 196/2003 (Codice Privacy italiano) e si
                applica ai servizi di coaching sportivo online offerti tramite
                il presente sito web.
              </p>
            </section>

            {/* 1. Titolare del Trattamento */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Titolare del Trattamento
              </h2>
              <p>Il Titolare del trattamento dei dati personali è:</p>
              <div className="bg-gray-50 rounded-xl p-5 mt-4 space-y-2">
                <p>
                  <strong>Giulia Vettor</strong>
                </p>
                <p>Partita IVA: [da inserire]</p>
                <p>Sede: Castelfranco Emilia (MO)</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:[email da inserire]"
                    className="text-primary hover:underline"
                  >
                    [email da inserire]
                  </a>
                </p>
                <p>WhatsApp: +39 389 795 2996</p>
              </div>
            </section>

            {/* 2. Dati Raccolti */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Categorie di Dati Personali Raccolti
              </h2>
              <p>
                Nel corso dell&apos;erogazione dei servizi di coaching, il
                Titolare può raccogliere e trattare le seguenti categorie di
                dati personali:
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                a) Dati Anagrafici e di Contatto
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono (se fornito)</li>
                <li>Indirizzo (se fornito per fatturazione o spedizione)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                b) Dati relativi alla Salute e alla Forma Fisica
              </h3>
              <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-3">
                <strong className="text-yellow-800">
                  DATI PARTICOLARI (Art. 9 GDPR):
                </strong>{" "}
                Il coaching sportivo può comportare la raccolta di informazioni
                relative allo stato di salute, condizioni fisiche, eventuali
                patologie, infortuni o limitazioni fisiche. Tali dati sono
                raccolti esclusivamente previo consenso esplicito
                dell&apos;interessato e sono necessari per personalizzare i
                programmi di allenamento.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Livello di fitness e obiettivi sportivi</li>
                <li>Eventuali patologie, infortuni o limitazioni fisiche</li>
                <li>Abitudini sportive e anamnesi atletica</li>
                <li>
                  Dati biometrici (peso, altezza, frequenza cardiaca, se
                  comunicati)
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                c) Dati di Pagamento
              </h3>
              <p>
                I dati di pagamento (numero carta di credito/debito, coordinate
                bancarie) sono gestiti direttamente da <strong>Stripe</strong>,
                fornitore terzo di servizi di pagamento certificato PCI-DSS. Il
                Titolare non ha accesso diretto ai dati delle carte di
                pagamento.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                d) Dati di Navigazione
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Indirizzo IP</li>
                <li>Tipo di browser e dispositivo</li>
                <li>Pagine visitate e durata della sessione</li>
                <li>
                  Dati raccolti tramite cookie (vedi{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Cookie Policy
                  </Link>
                  )
                </li>
              </ul>
            </section>

            {/* 3. Finalità e Base Giuridica */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Finalità del Trattamento e Base Giuridica
              </h2>
              <p>I dati personali sono trattati per le seguenti finalità:</p>

              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">
                    a) Erogazione dei Servizi di Coaching
                  </h3>
                  <p className="text-sm mt-1">
                    <strong>Base giuridica:</strong> Esecuzione del contratto
                    (art. 6, par. 1, lett. b) GDPR) e Consenso esplicito per
                    dati sulla salute (art. 9, par. 2, lett. a) GDPR.
                  </p>
                  <p className="text-sm mt-2">
                    Personalizzazione dei programmi di allenamento, fornire
                    feedback, gestire videochiamate e comunicazioni relative al
                    coaching.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">
                    b) Gestione dei Pagamenti e Fatturazione
                  </h3>
                  <p className="text-sm mt-1">
                    <strong>Base giuridica:</strong> Esecuzione del contratto
                    (art. 6, par. 1, lett. b) GDPR) e Obbligo legale (art. 6,
                    par. 1, lett. c) GDPR – normativa fiscale e contabile.
                  </p>
                  <p className="text-sm mt-2">
                    Elaborazione dei pagamenti, emissione di fatture, gestione
                    contabile e adempimenti fiscali.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">
                    c) Comunicazioni Contrattuali e di Servizio
                  </h3>
                  <p className="text-sm mt-1">
                    <strong>Base giuridica:</strong> Esecuzione del contratto
                    (art. 6, par. 1, lett. b) GDPR.
                  </p>
                  <p className="text-sm mt-2">
                    Invio di conferme d&apos;ordine, aggiornamenti sui
                    programmi, promemoria per le call, comunicazioni necessarie
                    all&apos;erogazione del servizio.
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <h3 className="font-semibold text-gray-900">
                    d) Marketing e Newsletter (facoltativo)
                  </h3>
                  <p className="text-sm mt-1">
                    <strong>Base giuridica:</strong> Consenso esplicito (art. 6,
                    par. 1, lett. a) GDPR.
                  </p>
                  <p className="text-sm mt-2">
                    Invio di comunicazioni promozionali, offerte, contenuti
                    gratuiti o newsletter, solo se l&apos;interessato ha
                    espresso consenso specifico.{" "}
                    <em>
                      Il consenso è revocabile in qualsiasi momento senza
                      pregiudicare il servizio di coaching.
                    </em>
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">
                    e) Analytics e Miglioramento del Sito
                  </h3>
                  <p className="text-sm mt-1">
                    <strong>Base giuridica:</strong> Legittimo interesse (art.
                    6, par. 1, lett. f) GDPR o Consenso per cookie non tecnici.
                  </p>
                  <p className="text-sm mt-2">
                    Analisi delle performance del sito tramite Microsoft Clarity
                    per migliorare l&apos;esperienza utente.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">
                    f) Sicurezza e Prevenzione Frodi
                  </h3>
                  <p className="text-sm mt-1">
                    <strong>Base giuridica:</strong> Legittimo interesse (art.
                    6, par. 1, lett. f) GDPR.
                  </p>
                  <p className="text-sm mt-2">
                    Protezione dei sistemi informatici, prevenzione di accessi
                    non autorizzati e rilevamento di comportamenti fraudolenti.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Destinatari dei Dati */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Destinatari e Comunicazione dei Dati
              </h2>
              <p>
                I dati personali possono essere comunicati o resi accessibili
                alle seguenti categorie di soggetti:
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                a) Fornitori di Servizi (Responsabili del Trattamento)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Stripe Inc.</strong> – Piattaforma di pagamento per
                  l&apos;elaborazione sicura delle transazioni. I dati di
                  pagamento sono trattati direttamente da Stripe in conformità
                  agli standard PCI-DSS.
                </li>
                <li>
                  <strong>Microsoft Corporation (Clarity)</strong> – Servizio di
                  analytics per il miglioramento dell&apos;esperienza utente sul
                  sito web.
                </li>
                <li>
                  <strong>Fornitori di hosting e servizi cloud</strong> –
                  Gestione dell&apos;infrastruttura tecnica del sito (es.
                  Vercel, AWS, ecc.).
                </li>
                <li>
                  <strong>Fornitori di comunicazione</strong> – Servizi email
                  (es. Gmail, Outlook) e messaggistica (WhatsApp) utilizzati per
                  le comunicazioni con i clienti.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                b) Soggetti Autorizzati
              </h3>
              <p>
                Collaboratori, dipendenti o consulenti del Titolare che operano
                sotto la diretta autorità del Titolare e sono vincolati da
                obblighi di riservatezza.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                c) Autorità Pubbliche (se richiesto dalla legge)
              </h3>
              <p>
                In caso di richieste legittime da parte di autorità giudiziarie,
                fiscali o amministrative, i dati possono essere comunicati per
                adempiere a obblighi di legge.
              </p>

              <p className="mt-4">
                I dati personali non saranno mai ceduti, venduti o affittati a
                terzi per finalità commerciali senza il consenso esplicito
                dell&apos;interessato.
              </p>
            </section>

            {/* 5. Trasferimenti Extra-UE */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Trasferimento dei Dati al di fuori dell&apos;UE
              </h2>
              <p>
                Alcuni dei fornitori di servizi utilizzati (Stripe, Microsoft
                Clarity) possono trasferire dati personali al di fuori dello
                Spazio Economico Europeo (SEE), in particolare negli Stati
                Uniti.
              </p>
              <p className="mt-3">
                Tali trasferimenti avvengono nel rispetto del GDPR, mediante:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>
                  <strong>Decisioni di adeguatezza</strong> della Commissione
                  Europea (es. EU-US Data Privacy Framework);
                </li>
                <li>
                  <strong>Clausole Contrattuali Standard (SCC)</strong>{" "}
                  approvate dalla Commissione Europea;
                </li>
                <li>
                  <strong>Garanzie adeguate</strong> previste dall&apos;art. 46
                  GDPR.
                </li>
              </ul>
              <p className="mt-3">
                Per maggiori informazioni sulle garanzie adottate, è possibile
                contattare il Titolare tramite i recapiti indicati.
              </p>
            </section>

            {/* 6. Conservazione */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Periodo di Conservazione dei Dati
              </h2>
              <p>
                I dati personali saranno conservati per il tempo necessario a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>
                  <strong>Dati contrattuali e di pagamento:</strong> per tutta
                  la durata del rapporto contrattuale e successivamente per{" "}
                  <strong>10 anni</strong> ai fini fiscali e contabili (art.
                  2220 c.c.).
                </li>
                <li>
                  <strong>Dati sulla salute:</strong> per tutta la durata del
                  coaching e fino a <strong>5 anni</strong> dalla conclusione
                  del servizio, salvo richiesta di cancellazione anticipata.
                </li>
                <li>
                  <strong>Dati per finalità di marketing:</strong> fino a revoca
                  del consenso o richiesta di cancellazione da parte
                  dell&apos;interessato.
                </li>
                <li>
                  <strong>Dati di navigazione e cookie analytics:</strong>{" "}
                  conservati in forma anonimizzata per un periodo massimo di{" "}
                  <strong>26 mesi</strong> (durata massima prevista dalla
                  normativa italiana sui cookie).
                </li>
              </ul>
              <p className="mt-4">
                Al termine del periodo di conservazione, i dati saranno
                cancellati o resi anonimi in modo irreversibile.
              </p>
            </section>

            {/* 7. Diritti dell'Interessato */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Diritti dell&apos;Interessato
              </h2>
              <p>
                Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha il
                diritto di:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>
                  <strong>Accesso (art. 15):</strong> Ottenere conferma
                  dell&apos;esistenza dei propri dati personali e riceverne una
                  copia.
                </li>
                <li>
                  <strong>Rettifica (art. 16):</strong> Correggere o aggiornare
                  dati inesatti o incompleti.
                </li>
                <li>
                  <strong>
                    Cancellazione (art. 17 – &ldquo;Diritto
                    all&apos;oblio&ldquo;):
                  </strong>{" "}
                  Richiedere la cancellazione dei dati, salvo che la loro
                  conservazione sia necessaria per obblighi di legge o per
                  l&apos;esercizio di un diritto in sede giudiziaria.
                </li>
                <li>
                  <strong>Limitazione (art. 18):</strong> Limitare il
                  trattamento dei dati in caso di contestazione della loro
                  esattezza o in attesa di verifica di un&apos;opposizione al
                  trattamento.
                </li>
                <li>
                  <strong>Portabilità (art. 20):</strong> Ricevere i propri dati
                  in formato strutturato e trasmetterli a un altro titolare (ove
                  tecnicamente possibile).
                </li>
                <li>
                  <strong>Opposizione (art. 21):</strong> Opporsi al trattamento
                  dei dati per motivi legittimi o per finalità di marketing
                  diretto.
                </li>
                <li>
                  <strong>Revoca del consenso (art. 7):</strong> Revocare in
                  qualsiasi momento il consenso prestato per il trattamento di
                  dati particolari (es. salute) o per finalità di marketing,
                  senza pregiudicare la liceità del trattamento effettuato prima
                  della revoca.
                </li>
              </ul>

              <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-5 mt-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Come esercitare i diritti
                </h3>
                <p className="text-sm">
                  Per esercitare uno qualsiasi dei diritti sopra elencati, è
                  sufficiente inviare una richiesta via email a{" "}
                  <a
                    href="mailto:[email da inserire]"
                    className="text-primary font-semibold underline"
                  >
                    [email da inserire]
                  </a>{" "}
                  o tramite WhatsApp al numero +39 389 795 2996.
                </p>
                <p className="text-sm mt-2">
                  Il Titolare risponderà entro <strong>30 giorni</strong> dalla
                  richiesta, fornendo le informazioni richieste o motivando
                  eventuali rifiuti legittimi.
                </p>
              </div>
            </section>

            {/* 8. Reclamo al Garante */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Diritto di Reclamo al Garante per la Protezione dei Dati
                Personali
              </h2>
              <p>
                Qualora l&apos;interessato ritenga che il trattamento dei propri
                dati violi il GDPR, ha il diritto di proporre reclamo
                all&apos;Autorità di controllo competente:
              </p>
              <div className="bg-gray-50 rounded-xl p-5 mt-4 space-y-2">
                <p>
                  <strong>
                    Garante per la Protezione dei Dati Personali (Italia)
                  </strong>
                </p>
                <p>Piazza Venezia, 11 – 00187 Roma</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:garante@gpdp.it"
                    className="text-primary hover:underline"
                  >
                    garante@gpdp.it
                  </a>
                </p>
                <p>
                  Sito web:{" "}
                  <a
                    href="https://www.garanteprivacy.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.garanteprivacy.it
                  </a>
                </p>
              </div>
            </section>

            {/* 9. Sicurezza */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Misure di Sicurezza
              </h2>
              <p>
                Il Titolare adotta misure tecniche e organizzative adeguate per
                garantire la sicurezza dei dati personali e prevenire accessi
                non autorizzati, perdita, distruzione o divulgazione
                accidentale, tra cui:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-3">
                <li>
                  Cifratura delle comunicazioni tramite protocollo HTTPS/TLS;
                </li>
                <li>Autenticazione sicura per l&apos;accesso ai sistemi;</li>
                <li>
                  Backup periodici e archiviazione sicura dei dati su server
                  protetti;
                </li>
                <li>
                  Formazione del personale autorizzato sui principi di
                  riservatezza e protezione dei dati;
                </li>
                <li>
                  Utilizzo di fornitori terzi certificati (Stripe PCI-DSS,
                  Microsoft Clarity).
                </li>
              </ul>
            </section>

            {/* 10. Modifiche */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Modifiche all&apos;Informativa Privacy
              </h2>
              <p>
                Il Titolare si riserva il diritto di modificare o aggiornare la
                presente Informativa Privacy in qualsiasi momento, per adeguarla
                a cambiamenti normativi, organizzativi o tecnologici. Le
                modifiche saranno pubblicate su questa pagina con indicazione
                della data di ultimo aggiornamento.
              </p>
              <p className="mt-3">
                Si consiglia di consultare periodicamente questa pagina per
                rimanere informati sulle modalità di trattamento dei dati
                personali.
              </p>
            </section>

            {/* 11. Contatti */}
            <section className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 mt-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                11. Contatti
              </h2>
              <p>
                Per qualsiasi domanda, richiesta o chiarimento in merito alla
                presente Informativa Privacy o al trattamento dei dati
                personali, è possibile contattare il Titolare ai seguenti
                recapiti:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:[email da inserire]"
                    className="text-primary hover:underline"
                  >
                    [email da inserire]
                  </a>
                </p>
                <p>
                  <strong>WhatsApp:</strong> +39 389 795 2996
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
