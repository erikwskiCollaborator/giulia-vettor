import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Coach Giulia Vettor",
  description:
    "Informativa sui cookie per il sito di Coach Giulia Vettor, inclusi Stripe e Microsoft Clarity.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 animate-in fade-in-10 zoom-in-95 duration-300 delay-1000">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6">
          Cookie Policy
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
        </p>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-gray-800">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              1. Titolare del trattamento
            </h2>
            <p>
              Il titolare del trattamento dei dati personali raccolti tramite
              questo sito è<strong> Giulia Vettor</strong> (Titolare). Per
              qualunque richiesta relativa al trattamento dei dati o ai cookie
              puoi scrivere all&apos;indirizzo email di contatto indicato nelle
              pagine del sito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              2. Cosa sono i cookie
            </h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati inviano al
              dispositivo dell&apos;utente (computer, smartphone, tablet), dove
              vengono memorizzati per essere poi ritrasmessi agli stessi siti
              alla visita successiva. I cookie permettono al sito di funzionare
              correttamente, ricordare alcune preferenze dell&apos;utente e
              raccogliere informazioni statistiche in forma aggregata.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              3. Tipologie di cookie utilizzate da questo sito
            </h2>

            <h3 className="font-semibold mt-3">3.1 Cookie tecnici necessari</h3>
            <p>
              Sono i cookie indispensabili per il corretto funzionamento del
              sito e per consentire all&apos;utente la normale navigazione e
              fruizione delle pagine (ad esempio, per ricordare le preferenze di
              base, mantenere la sessione di navigazione o gestire il processo
              di checkout). Questi cookie non richiedono il consenso
              dell&apos;utente.
            </p>

            <h3 className="font-semibold mt-3">
              3.2 Cookie funzionali e di preferenza
            </h3>
            <p>
              Possono essere utilizzati cookie che memorizzano alcune preferenze
              (come la scelta della lingua o il fatto che l&apos;utente abbia
              già visualizzato il banner dei cookie), per migliorare
              l&apos;esperienza di navigazione. Anche questi cookie sono
              utilizzati esclusivamente per finalità correlate
              all&apos;erogazione del servizio richiesto.
            </p>

            <h3 className="font-semibold mt-3">
              3.3 Cookie analitici (Microsoft Clarity)
            </h3>
            <p>
              Il sito utilizza <strong>Microsoft Clarity</strong> per
              analizzare, in forma aggregata e anonima, l&apos;utilizzo del sito
              da parte degli utenti (ad esempio quali pagine vengono visitate di
              più, quali elementi vengono cliccati e come gli utenti
              interagiscono con i contenuti). Questi dati vengono utilizzati
              esclusivamente per migliorare l&apos;esperienza utente e
              l&apos;usabilità del sito.
            </p>
            <p>
              Microsoft Clarity può raccogliere informazioni come: pagine
              visitate, tempo di permanenza, tipo di dispositivo e browser,
              interazioni con gli elementi della pagina (clic, scroll, movimenti
              del mouse). I dati raccolti non vengono utilizzati per
              identificare personalmente l&apos;utente ma per analisi
              statistiche aggregate.
            </p>
            <p>
              Per maggiori informazioni sul trattamento dei dati da parte di
              Microsoft Clarity, puoi consultare la relativa informativa alla
              privacy direttamente sul sito di Microsoft.
            </p>

            <h3 className="font-semibold mt-3">
              3.4 Cookie per pagamenti (Stripe)
            </h3>
            <p>
              Per la gestione dei pagamenti online, il sito utilizza il servizio{" "}
              <strong>Stripe</strong>. Durante il processo di checkout, Stripe
              può impostare cookie o tecnologie simili per garantire la
              sicurezza delle transazioni, prevenire frodi e ricordare alcune
              impostazioni tecniche. Questi cookie sono considerati
              tecnici/necessari in quanto strettamente legati
              all&apos;esecuzione del contratto di vendita e alla sicurezza del
              pagamento.
            </p>
            <p>
              I dati di pagamento (dettagli della carta) vengono trattati
              direttamente da Stripe e non transitano sui server del Titolare.
              Per ulteriori dettagli, ti invitiamo a consultare
              l&apos;informativa privacy e la cookie policy di Stripe sul loro
              sito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              4. Base giuridica del trattamento
            </h2>
            <p>
              Per i cookie tecnici necessari e quelli legati ai pagamenti
              (Stripe), la base giuridica del trattamento è l&apos;esecuzione di
              misure precontrattuali e contrattuali richieste dall&apos;utente,
              nonché il legittimo interesse del Titolare a garantire la
              sicurezza del sito e delle transazioni.
            </p>
            <p>
              Per gli strumenti di analisi comportamentale come Microsoft
              Clarity, la base giuridica è il consenso dell&apos;utente,
              espresso tramite il banner dei cookie mostrato alla prima visita
              del sito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              5. Gestione del consenso ai cookie
            </h2>
            <p>
              Alla prima visita del sito viene mostrato un banner che permette
              all&apos;utente di accettare tutti i cookie o di rifiutare quelli
              non essenziali. La scelta viene memorizzata nel browser e può
              essere modificata in qualsiasi momento cancellando i cookie dal
              proprio browser o utilizzando le impostazioni di gestione dei
              cookie del browser stesso.
            </p>
            <p>
              La disattivazione o il rifiuto di alcuni cookie potrebbe limitare
              parzialmente l&apos;utilizzo di alcune funzionalità del sito (ad
              esempio il salvataggio di alcune preferenze), ma non impedirà la
              navigazione né l&apos;utilizzo delle funzionalità essenziali.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              6. Come gestire i cookie tramite browser
            </h2>
            <p>
              Puoi controllare e/o eliminare i cookie anche tramite le
              impostazioni del tuo browser. Di seguito i link alle istruzioni
              per alcuni dei browser più comuni:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-semibold">Google Chrome:</span>{" "}
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=it"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  Gestione cookie su Chrome
                </a>
              </li>
              <li>
                <span className="font-semibold">Mozilla Firefox:</span>{" "}
                <a
                  href="https://support.mozilla.org/it/kb/Eliminare%20i%20cookie"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  Gestione cookie su Firefox
                </a>
              </li>
              <li>
                <span className="font-semibold">Apple Safari:</span>{" "}
                <a
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  Gestione cookie su Safari
                </a>
              </li>
              <li>
                <span className="font-semibold">Microsoft Edge:</span>{" "}
                <a
                  href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  Gestione cookie su Edge
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              7. Modifiche a questa Cookie Policy
            </h2>
            <p>
              Il Titolare si riserva il diritto di apportare modifiche alla
              presente Cookie Policy in qualunque momento, dandone informazione
              agli utenti su questa pagina. Ti consigliamo di consultare
              periodicamente questa sezione per essere informato su eventuali
              aggiornamenti.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
