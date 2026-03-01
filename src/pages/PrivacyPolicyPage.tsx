import React from "react";
import { Navbar, Footer } from "../components/layout";
import styles from "./LegalPage.module.css";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <article className={styles.content}>
            <h1 className={styles.title}>Polityka Prywatności</h1>
            <p className={styles.lastUpdated}>Ostatnia aktualizacja: 7 lutego 2026</p>

            <section className={styles.section}>
              <h2>1. Administrator danych</h2>
              <p>
                Administratorem Twoich danych osobowych jest WealthHive OÜ z siedzibą w Estonii,
                Kentmanni tn 4, 10116 Tallinn, numer rejestracyjny: 16390486.
              </p>
              <p>
                Kontakt: <a href="mailto:kontakt@potega.ai">kontakt@potega.ai</a>
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Jakie dane zbieramy</h2>
              <p>Zbieramy następujące kategorie danych:</p>
              <ul>
                <li><strong>Dane kontaktowe:</strong> imię, nazwisko, adres e-mail, numer telefonu — gdy wypełniasz formularz kontaktowy lub zapisujesz się do newslettera</li>
                <li><strong>Dane firmowe:</strong> nazwa firmy, stanowisko — gdy kontaktujesz się w sprawach biznesowych</li>
                <li><strong>Dane techniczne:</strong> adres IP, typ przeglądarki, czas wizyty — zbierane automatycznie dla celów analitycznych</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. Cele przetwarzania</h2>
              <p>Twoje dane przetwarzamy w celu:</p>
              <ul>
                <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy</li>
                <li>Wysyłki newslettera (jeśli wyraziłeś zgodę)</li>
                <li>Realizacji umów i świadczenia usług</li>
                <li>Analizy ruchu na stronie i poprawy jej funkcjonalności</li>
                <li>Wypełnienia obowiązków prawnych</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Podstawa prawna</h2>
              <p>Przetwarzamy dane na podstawie:</p>
              <ul>
                <li>Twojej zgody (art. 6 ust. 1 lit. a RODO) — np. przy zapisie do newslettera</li>
                <li>Wykonania umowy (art. 6 ust. 1 lit. b RODO) — przy realizacji usług</li>
                <li>Prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO) — np. analityka, marketing bezpośredni</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>5. Okres przechowywania</h2>
              <p>
                Dane przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane,
                lub do momentu wycofania zgody. Dane związane z umowami przechowujemy przez okres wymagany
                przepisami prawa (zazwyczaj 5 lat od zakończenia roku podatkowego).
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Twoje prawa</h2>
              <p>Przysługuje Ci prawo do:</p>
              <ul>
                <li>Dostępu do swoich danych</li>
                <li>Sprostowania nieprawidłowych danych</li>
                <li>Usunięcia danych („prawo do bycia zapomnianym")</li>
                <li>Ograniczenia przetwarzania</li>
                <li>Przenoszenia danych</li>
                <li>Sprzeciwu wobec przetwarzania</li>
                <li>Wycofania zgody w dowolnym momencie</li>
                <li>Wniesienia skargi do Prezesa UODO</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>7. Odbiorcy danych</h2>
              <p>Twoje dane mogą być przekazywane:</p>
              <ul>
                <li>Dostawcom usług IT i hostingu</li>
                <li>Dostawcom usług e-mail marketingu (Buttondown)</li>
                <li>Dostawcom usług analitycznych</li>
                <li>Podmiotom uprawnionym na podstawie przepisów prawa</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>8. Pliki cookies</h2>
              <p>
                Nasza strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania,
                analizy ruchu oraz personalizacji treści. Możesz zarządzać ustawieniami cookies
                w swojej przeglądarce.
              </p>
            </section>

            <section className={styles.section}>
              <h2>9. Bezpieczeństwo</h2>
              <p>
                Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych
                przed nieautoryzowanym dostępem, utratą lub zniszczeniem.
              </p>
            </section>

            <section className={styles.section}>
              <h2>10. Kontakt</h2>
              <p>
                W sprawach związanych z ochroną danych osobowych możesz skontaktować się z nami
                pod adresem: <a href="mailto:kontakt@potega.ai">kontakt@potega.ai</a>
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};
