/**
 * services.js
 * Gestisce i contenuti delle pagine servizio in base al nome del file HTML
 * Versione DEMO – semplice e stabile
 */

document.addEventListener("DOMContentLoaded", () => {

  const servicesData = {
    "impianti-industriali.html": {
      title: "Impianti elettrici industriali",
      intro: "Soluzioni su misura per stabilimenti produttivi e infrastrutture complesse.",
      image: {
        src: "https://placehold.co/1200x500?text=Impianti+Industriali",
        alt: "Impianti elettrici industriali"
      },
      description: `
        <p>
          Progettiamo e realizziamo impianti elettrici industriali per ambienti
          produttivi complessi, garantendo sicurezza, affidabilità e piena
          conformità alle normative vigenti.
        </p>
        <p>
          Ogni intervento è studiato su misura in base alle esigenze operative
          dello stabilimento e alle caratteristiche dell’infrastruttura.
        </p>
      `,
      includes: [
        "Analisi tecnica preliminare",
        "Progettazione dell’impianto",
        "Installazione e collaudo",
        "Documentazione tecnica"
      ]
    },

    "quadri-elettrici.html": {
      title: "Quadri elettrici industriali",
      intro: "Progettazione e cablaggio quadri di potenza e automazione.",
      image: {
        src: "https://placehold.co/1200x500?text=Quadri+Elettrici",
        alt: "Quadri elettrici industriali"
      },
      description: `
        <p>
          Realizziamo quadri elettrici industriali per la distribuzione di
          potenza e il controllo dei sistemi di automazione, con particolare
          attenzione all’ordine, alla sicurezza e alla manutenibilità.
        </p>
      `,
      includes: [
        "Quadri di potenza",
        "Quadri di comando e controllo",
        "Cablaggio certificato",
        "Collaudo funzionale"
      ]
    },

    "manutenzione.html": {
      title: "Manutenzione impianti elettrici",
      intro: "Interventi programmati e assistenza tecnica specializzata.",
      image: {
        src: "https://placehold.co/1200x500?text=Manutenzione",
        alt: "Manutenzione impianti elettrici industriali"
      },
      description: `
        <p>
          Offriamo servizi di manutenzione elettrica industriale per garantire
          continuità operativa, sicurezza degli impianti e riduzione dei fermi
          produttivi.
        </p>
      `,
      includes: [
        "Manutenzione programmata",
        "Manutenzione straordinaria",
        "Assistenza tecnica",
        "Verifica sicurezza impianti"
      ]
    }
  };

  // -------------------------
  // LOGICA DI APPLICAZIONE
  // -------------------------

  const page = window.location.pathname.split("/").pop();
  const service = servicesData[page];

  // Se non è una pagina servizio, esci senza fare nulla
  if (!service) return;

  // Titolo
  const titleEl = document.getElementById("service-title");
  if (titleEl) titleEl.textContent = service.title;

  // Intro
  const introEl = document.getElementById("service-intro");
  if (introEl) introEl.textContent = service.intro;

  // Immagine
  const imgEl = document.getElementById("service-image");
  if (imgEl) {
    imgEl.src = service.image.src;
    imgEl.alt = service.image.alt;
  }

  // Descrizione
  const descEl = document.getElementById("service-description");
  if (descEl) descEl.innerHTML = service.description;

  // Lista "include"
  const ulEl = document.getElementById("service-includes");
  if (ulEl) {
    ulEl.innerHTML = "";
    service.includes.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ulEl.appendChild(li);
    });
  }

});


