import React from "react";
import { Navbar, Footer } from "../components/layout";
import styles from "./LegalPage.module.css";

export const TermsOfUsePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <article className={styles.content}>
            <h1 className={styles.title}>Regulamin</h1>
            <p className={styles.lastUpdated}>Ostatnia aktualizacja: 7 lutego 2026</p>

            <section className={styles.section}>
              <h2>1. Postanowienia ogólne</h2>
              <p>
                Niniejszy regulamin określa zasady korzystania ze strony internetowej potega.ai
                oraz usług oferowanych przez WealthHive OÜ.
              </p>
              <p>
                Korzystając z naszej strony, akceptujesz postanowienia niniejszego regulaminu.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Definicje</h2>
              <ul>
                <li><strong>Usługodawca</strong> — WealthHive OÜ, Kentmanni tn 4, 10116 Tallinn, Estonia, numer rejestracyjny: 16390486, właściciel serwisu potega.ai</li>
                <li><strong>Użytkownik</strong> — osoba korzystająca z serwisu</li>
                <li><strong>Usługi</strong> — szkolenia, wdrożenia i konsultacje z zakresu automatyzacji AI</li>
                <li><strong>Serwis</strong> — strona internetowa potega.ai</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. Usługi</h2>
              <p>WealthHive OÜ oferuje:</p>
              <ul>
                <li>Szkolenia z zakresu AI i automatyzacji</li>
                <li>Wdrożenia systemów automatyzacji procesów biznesowych</li>
                <li>Konsultacje i audyty technologiczne</li>
                <li>Newsletter z treściami edukacyjnymi</li>
              </ul>
              <p>
                Szczegółowe warunki świadczenia usług są ustalane indywidualnie i określane
                w odrębnych umowach.
              </p>
            </section>

            <section className={styles.section}>
              <h2>4. Zasady korzystania z serwisu</h2>
              <p>Użytkownik zobowiązuje się do:</p>
              <ul>
                <li>Korzystania z serwisu zgodnie z jego przeznaczeniem</li>
                <li>Niepodejmowania działań mogących zakłócić funkcjonowanie serwisu</li>
                <li>Podawania prawdziwych danych w formularzach kontaktowych</li>
                <li>Przestrzegania przepisów prawa i dobrych obyczajów</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>5. Własność intelektualna</h2>
              <p>
                Wszelkie treści zamieszczone w serwisie, w tym teksty, grafiki, logotypy,
                zdjęcia i materiały wideo, stanowią własność Sysformer lub są wykorzystywane
                na podstawie odpowiednich licencji.
              </p>
              <p>
                Kopiowanie, rozpowszechnianie lub wykorzystywanie treści bez zgody jest zabronione.
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Newsletter</h2>
              <p>
                Zapisując się do newslettera, wyrażasz zgodę na otrzymywanie informacji
                o usługach, nowościach i treściach edukacyjnych drogą elektroniczną.
              </p>
              <p>
                Możesz zrezygnować z newslettera w dowolnym momencie, klikając link
                rezygnacji w otrzymanej wiadomości.
              </p>
            </section>

            <section className={styles.section}>
              <h2>7. Odpowiedzialność</h2>
              <p>
                WealthHive OÜ dokłada starań, aby informacje w serwisie były aktualne i prawidłowe,
                jednak nie ponosi odpowiedzialności za:
              </p>
              <ul>
                <li>Czasową niedostępność serwisu</li>
                <li>Skutki wykorzystania informacji zawartych w serwisie</li>
                <li>Działania osób trzecich</li>
                <li>Siłę wyższą</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>8. Reklamacje</h2>
              <p>
                Reklamacje dotyczące funkcjonowania serwisu można zgłaszać na adres:
                <a href="mailto:kontakt@potega.ai"> kontakt@potega.ai</a>
              </p>
              <p>
                Reklamacje są rozpatrywane w terminie 14 dni od daty ich otrzymania.
              </p>
            </section>

            <section className={styles.section}>
              <h2>9. Zmiany regulaminu</h2>
              <p>
                WealthHive OÜ zastrzega sobie prawo do zmiany niniejszego regulaminu.
                O zmianach użytkownicy będą informowani poprzez publikację nowej wersji
                regulaminu w serwisie.
              </p>
            </section>

            <section className={styles.section}>
              <h2>10. Postanowienia końcowe</h2>
              <p>
                W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają
                przepisy prawa estońskiego oraz prawa Unii Europejskiej.
              </p>
              <p>
                Wszelkie spory będą rozstrzygane przez sąd właściwy dla siedziby Usługodawcy.
              </p>
            </section>

            <section className={styles.section}>
              <h2>11. Kontakt</h2>
              <p>
                W razie pytań dotyczących regulaminu, prosimy o kontakt:
                <a href="mailto:kontakt@potega.ai"> kontakt@potega.ai</a>
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};
