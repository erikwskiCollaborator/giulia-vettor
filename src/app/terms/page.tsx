import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termini e Condizioni - Giulia Vettor Coaching",
  description:
    "Termini e condizioni per l'acquisto e la fruizione dei servizi di coaching sportivo offerti da Giulia Vettor.",
};

export default function TermsPage() {
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
            Termini e Condizioni di Vendita
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Ultimo aggiornamento: 27 novembre 2025
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Premessa */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Premessa
              </h2>
              <p>
                Le presenti Condizioni Generali di Vendita disciplinano la
                fornitura di servizi di coaching sportivo online erogati da{" "}
                <strong>Giulia Vettor</strong>, con sede in Italia, Partita IVA
                04231400369, di seguito denominata &quot;il Coach&quot;.
              </p>
              <p className="mt-3">
                L&apos;acquisto di uno qualsiasi dei servizi offerti comporta
                l&apos;accettazione integrale e incondizionata delle presenti
                condizioni. Si prega di leggere attentamente il presente
                documento prima di procedere all&apos;acquisto.
              </p>
            </section>

            {/* Art. 1 - Definizioni */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 1 – Definizioni
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>&quot;Cliente&quot;</strong>: la persona fisica che
                  acquista uno o più servizi di coaching.
                </li>
                <li>
                  <strong>&quot;Servizi&quot;</strong>: i pacchetti di coaching
                  di corsa, programmi di forza e consulenze pedagogiche sportive
                  descritti sul sito.
                </li>
                <li>
                  <strong>&quot;Piattaforma&quot;</strong>: il sito web e gli
                  strumenti digitali utilizzati per la comunicazione e la
                  consegna dei contenuti (email, WhatsApp, Calendly, eventuali
                  applicazioni di terze parti).
                </li>
                <li>
                  <strong>&quot;Programma di Allenamento&quot;</strong>: le
                  tabelle e i piani di lavoro personalizzati forniti dal Coach.
                </li>
              </ul>
            </section>

            {/* Art. 2 - Oggetto del Contratto */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 2 – Oggetto del Contratto e Descrizione dei Servizi
              </h2>
              <p>
                Il Coach offre i seguenti servizi di coaching online a distanza:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>
                  <strong>Coaching di Corsa Mensile</strong>: 4 settimane di
                  allenamenti personalizzati, 1 call iniziale e 1 feedback
                  settimanale.
                </li>
                <li>
                  <strong>Coaching di Corsa Quadrimestrale</strong>: 16
                  settimane di allenamenti personalizzati con mobilità,
                  stretching, circuiti core e forza progressivi, 1 call
                  iniziale, 1 call intermedia e 16 feedback settimanali.
                </li>
                <li>
                  <strong>Programma di Forza</strong>: 4 settimane di
                  allenamenti di forza, mobilità e stretching personalizzati, 1
                  call iniziale e 4 feedback su richiesta.
                </li>
                <li>
                  <strong>Consulenza Pedagogica Sportiva</strong>: 1 colloquio
                  di 50 minuti con disposizione di strategie funzionali e 1
                  feedback di supporto.
                </li>
              </ul>
              <p className="mt-4">
                I contenuti vengono forniti in formato digitale (PDF, messaggi,
                videochiamate) tramite email, WhatsApp o piattaforme di
                videochiamata (Calendly, Google Meet, Zoom, ecc.).
              </p>
            </section>

            {/* Art. 3 - Fruizione, Idoneità e Responsabilità */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 3 – Fruizione dei Servizi, Idoneità Fisica ed Esonero da
                Responsabilità
              </h2>

              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                3.1 – Fruizione delle Tabelle di Allenamento
              </h3>
              <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-3">
                <strong className="text-yellow-800">
                  CLAUSOLA IMPORTANTE:
                </strong>{" "}
                I programmi di allenamento forniti sono linee guida
                personalizzate basate sulle informazioni dichiarate dal Cliente.
                Il Cliente è l&apos;unico responsabile dell&apos;esecuzione
                degli esercizi e del rispetto dei propri limiti fisici. Il Coach
                non può essere ritenuto responsabile per eventuali infortuni,
                incidenti o danni alla salute derivanti dall&apos;applicazione
                dei programmi.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                3.2 – Idoneità Fisica
              </h3>
              <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-3">
                <strong className="text-yellow-800">
                  CLAUSOLA IMPORTANTE:
                </strong>{" "}
                Il Cliente dichiara di essere in condizioni di salute idonee per
                svolgere attività fisica e di non avere patologie, lesioni o
                controindicazioni mediche che possano impedire lo svolgimento
                degli allenamenti. Il Cliente si impegna a consultare un medico
                prima di iniziare il programma qualora abbia dubbi sulla propria
                idoneità fisica. Il Coach declina ogni responsabilità per danni
                alla salute derivanti dalla mancata comunicazione di patologie o
                dalla non idoneità fisica del Cliente.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                3.3 – Durata del Coaching e Sospensione
              </h3>
              <p>
                La durata del servizio è indicata nella descrizione di ciascun
                pacchetto (es. 4 settimane per il pacchetto mensile, 16
                settimane per il quadrimestrale).
              </p>
              <p className="mt-2">
                Il Cliente può richiedere la sospensione temporanea del servizio
                per motivi di salute, infortunio o impegni personali,
                comunicandolo via email o WhatsApp con almeno 48 ore di
                anticipo. La sospensione non può superare complessivamente il
                20% della durata totale del programma. In caso di sospensione
                superiore o non giustificata, il Coach si riserva il diritto di
                considerare risolto il contratto senza obbligo di rimborso.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                3.4 – Risoluzione Anticipata
              </h3>
              <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-3">
                <strong className="text-yellow-800">
                  CLAUSOLA IMPORTANTE:
                </strong>{" "}
                In caso di risoluzione anticipata del contratto su iniziativa
                del Cliente (ad esclusione di giustificati motivi di salute
                certificati), il Cliente perde il diritto al rimborso delle
                somme già versate. Il Coach si riserva inoltre il diritto di
                richiedere il pagamento del 30% dell&apos;importo residuo a
                titolo di penale per mancato preavviso, qualora la risoluzione
                avvenga senza un preavviso di almeno 7 giorni.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                3.5 – Attivazione del Coaching
              </h3>
              <p>
                Il servizio si intende attivato dal momento della conferma di
                pagamento e della ricezione del questionario iniziale compilato
                dal Cliente. Il Cliente si impegna a inviare il questionario
                entro 7 giorni dal pagamento. In mancanza, il Coach si riserva
                il diritto di considerare il contratto risolto senza obbligo di
                rimborso.
              </p>
            </section>

            {/* Art. 4 - Pagamento */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 4 – Pagamento e Clausola Risolutiva Espressa
              </h2>
              <p>
                Il pagamento del servizio deve essere effettuato in via
                anticipata tramite:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>
                  Carta di credito/debito o metodi digitali tramite Stripe
                </li>
                <li>
                  Bonifico bancario (previo invio della ricevuta su WhatsApp)
                </li>
              </ul>
              <p className="mt-4">
                I prezzi dei servizi sono indicati sul sito in Euro e sono da
                intendersi IVA inclusa (se applicabile) o in regime forfettario
                (se applicabile).
              </p>
              <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <strong className="text-yellow-800">
                  CLAUSOLA IMPORTANTE:
                </strong>{" "}
                In caso di mancato pagamento o di pagamento parziale, il Coach
                si riserva il diritto di sospendere immediatamente l&apos;
                erogazione del servizio e di considerare risolto il contratto ai
                sensi dell&apos;art. 1456 c.c. (clausola risolutiva espressa),
                senza obbligo di preavviso. Il Coach declina ogni responsabilità
                per ritardi o errori nei pagamenti imputabili a piattaforme di
                pagamento o banche.
              </p>
            </section>

            {/* Art. 5 - Obblighi del Cliente */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 5 – Obblighi del Cliente
              </h2>
              <p>Il Cliente si impegna a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>
                  Fornire informazioni veritiere e complete nel questionario
                  iniziale e durante tutto il periodo di coaching;
                </li>
                <li>
                  Comunicare tempestivamente eventuali problemi fisici,
                  infortuni o cambiamenti nelle proprie condizioni di salute;
                </li>
                <li>
                  Seguire le indicazioni fornite dal Coach con diligenza e buona
                  fede;
                </li>
                <li>
                  Rispettare gli orari concordati per le videochiamate o
                  comunicare eventuali impedimenti con almeno 24 ore di
                  anticipo;
                </li>
                <li>
                  Non condividere, copiare, riprodurre o distribuire i contenuti
                  forniti dal Coach a terzi (vedi Art. 6).
                </li>
              </ul>
            </section>

            {/* Art. 6 - Proprietà Intellettuale */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 6 – Proprietà Intellettuale e Divieto di Divulgazione
              </h2>
              <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-3">
                <strong className="text-yellow-800">
                  CLAUSOLA IMPORTANTE:
                </strong>{" "}
                Tutti i contenuti forniti dal Coach (tabelle di allenamento,
                piani, circuiti, documenti, video, indicazioni scritte o orali)
                sono di proprietà esclusiva del Coach e protetti dalle normative
                sul diritto d&apos;autore. Il Cliente è autorizzato a utilizzare
                i materiali esclusivamente per uso personale. È severamente
                vietato copiare, riprodurre, distribuire, pubblicare o cedere a
                terzi, a titolo gratuito o oneroso, i contenuti ricevuti, anche
                in forma parziale. In caso di violazione, il Coach si riserva il
                diritto di interrompere il servizio senza rimborso e di
                richiedere il risarcimento dei danni ai sensi della legge
                italiana.
              </p>
            </section>

            {/* Art. 7 - Patto di Non Concorrenza */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 7 – Patto di Non Concorrenza
              </h2>
              <p>
                Il Cliente si impegna a non utilizzare i contenuti, le
                metodologie e le conoscenze acquisite durante il coaching per
                avviare attività concorrenti o per offrire servizi analoghi
                senza autorizzazione scritta del Coach, per un periodo di 12
                mesi successivi alla conclusione del servizio.
              </p>
            </section>

            {/* Art. 8 - Recesso */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 8 – Diritto di Recesso
              </h2>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                8.1 – Recesso prima dell&apos;inizio del servizio
              </h3>
              <p>
                Ai sensi degli artt. 52 e ss. del Codice del Consumo (D.Lgs.
                206/2005), il Cliente ha diritto di recedere dal contratto entro
                14 giorni dalla data di acquisto, senza dover fornire alcuna
                motivazione e senza penalità. Il recesso deve essere comunicato
                via email all&apos;indirizzo indicato sul sito.
              </p>
              <p className="mt-3">
                In caso di recesso esercitato prima dell&apos;inizio del
                servizio, il Coach provvederà al rimborso dell&apos;intero
                importo entro 14 giorni dalla ricezione della comunicazione di
                recesso.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                8.2 – Esclusione del diritto di recesso dopo l&apos;inizio del
                servizio
              </h3>
              <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-3">
                <strong className="text-yellow-800">
                  CLAUSOLA IMPORTANTE:
                </strong>{" "}
                Ai sensi dell&apos;art. 59, comma 1, lett. o) del Codice del
                Consumo, il Cliente perde il diritto di recesso una volta che il
                servizio è iniziato, ossia dal momento in cui riceve il primo
                programma di allenamento o effettua la prima call con il Coach.
                Acquistando il servizio, il Cliente dichiara espressamente di
                acconsentire all&apos;inizio immediato della prestazione e di
                essere consapevole che, una volta iniziato il servizio, perde il
                diritto di recesso.
              </p>
            </section>

            {/* Art. 9 - Garanzia e Limitazioni */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 9 – Garanzie e Limitazioni del Servizio
              </h2>
              <p>
                Il Coach si impegna a fornire servizi di coaching con
                professionalità e competenza, utilizzando metodologie aggiornate
                e personalizzate. Tuttavia, il Coach non garantisce risultati
                specifici in termini di prestazioni sportive, perdita di peso o
                miglioramenti fisici, in quanto tali risultati dipendono
                dall&apos;impegno, dalla costanza e dalle caratteristiche
                individuali del Cliente.
              </p>
              <p className="mt-3">
                Il Coach non è responsabile per eventuali malfunzionamenti
                tecnici, interruzioni di connessione internet, problemi con le
                piattaforme di terze parti (Stripe, Calendly, WhatsApp, ecc.) o
                per la perdita di dati non imputabili a dolo o colpa grave.
              </p>
            </section>

            {/* Art. 10 - Esonero Generale */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 10 – Esonero Generale da Responsabilità
              </h2>
              <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-3">
                <strong className="text-yellow-800">
                  CLAUSOLA IMPORTANTE:
                </strong>{" "}
                Il Coach non può essere ritenuto responsabile per danni diretti,
                indiretti, incidentali o consequenziali derivanti dall&apos;uso
                o dall&apos;impossibilità di utilizzare i servizi, inclusi ma
                non limitati a infortuni, lesioni, perdite economiche o danni
                alla reputazione. Il Cliente utilizza i servizi a proprio
                rischio e pericolo e si impegna a manlevare e tenere indenne il
                Coach da qualsiasi richiesta di risarcimento avanzata da terzi.
              </p>
            </section>

            {/* Art. 11 - Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 11 – Trattamento dei Dati Personali
              </h2>
              <p>
                Il trattamento dei dati personali del Cliente è disciplinato
                dall&apos;
                <Link
                  href="/privacy"
                  className="text-primary underline hover:text-primary/80"
                >
                  Informativa Privacy
                </Link>{" "}
                pubblicata sul sito, in conformità al Regolamento UE 2016/679
                (GDPR). Il Cliente, acquistando il servizio, dichiara di aver
                letto e accettato l&apos;informativa privacy e acconsente al
                trattamento dei propri dati personali per le finalità descritte.
              </p>
            </section>

            {/* Art. 12 - Modifiche */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 12 – Modifiche ai Termini e Condizioni
              </h2>
              <p>
                Il Coach si riserva il diritto di modificare le presenti
                condizioni in qualsiasi momento. Le modifiche saranno pubblicate
                sul sito con indicazione della data di ultimo aggiornamento. Le
                nuove condizioni si applicheranno ai contratti conclusi
                successivamente alla pubblicazione. I contratti già in essere
                restano disciplinati dalle condizioni accettate al momento
                dell&apos;acquisto.
              </p>
            </section>

            {/* Art. 13 - Foro Competente */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 13 – Legge Applicabile e Foro Competente
              </h2>
              <p>
                Il presente contratto è regolato dalla legge italiana. Per
                qualsiasi controversia derivante dall&apos;interpretazione,
                esecuzione o risoluzione del presente contratto, sarà competente
                in via esclusiva il Foro del luogo di residenza o domicilio del
                Cliente, se qualificato come consumatore ai sensi del Codice del
                Consumo. In caso contrario, sarà competente il Foro di [Città
                del Coach].
              </p>
            </section>

            {/* Art. 14 - Contatti */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Art. 14 – Contatti e Risoluzione delle Controversie
              </h2>
              <p>
                Per qualsiasi informazione, chiarimento o reclamo, il Cliente
                può contattare il Coach ai seguenti recapiti:
              </p>
              <ul className="list-none space-y-1 ml-4 mt-3">
                <li>
                  <strong>Email:</strong> giulia.vettor.01.06.1994@gmail.com
                </li>
                <li>
                  <strong>WhatsApp:</strong> +39 389 795 2996
                </li>
              </ul>
              <p className="mt-4">
                In caso di controversia, il Cliente può rivolgersi a uno degli
                organismi di risoluzione alternativa delle controversie (ADR) o
                alla piattaforma europea di risoluzione delle controversie
                online (ODR) disponibile all&apos;indirizzo:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
            </section>

            {/* Accettazione */}
            <section className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 mt-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Accettazione
              </h2>
              <p className="font-semibold">
                Procedendo con l&apos;acquisto, il Cliente dichiara di:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>
                  Aver letto e compreso integralmente le presenti Condizioni
                  Generali di Vendita;
                </li>
                <li>
                  Accettare espressamente tutte le clausole, comprese quelle
                  evidenziate come vessatorie (artt. 3.1, 3.2, 3.4, 4, 6, 8.2 e
                  10);
                </li>
                <li>
                  Acconsentire all&apos;inizio immediato della prestazione e
                  rinunciare al diritto di recesso ai sensi dell&apos;art. 59
                  Codice del Consumo;
                </li>
                <li>
                  Aver preso visione dell&apos;Informativa Privacy e della
                  Cookie Policy.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
