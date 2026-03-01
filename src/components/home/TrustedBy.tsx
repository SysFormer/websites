import React from "react";
import styles from "./TrustedBy.module.css";

interface Client {
  name: string;
  logo: string;
  url: string;
}

const CLIENTS: Client[] = [
  {
    name: "Web3 Software",
    logo: `${import.meta.env.BASE_URL}image/clients/web3software.webp`,
    url: "https://web3software.dev/",
  },
  {
    name: "Cookie3",
    logo: `${import.meta.env.BASE_URL}image/clients/cookie3.svg`,
    url: "https://www.cookie3.com/",
  },
  {
    name: "Independent Trader",
    logo: `${import.meta.env.BASE_URL}image/clients/independent-trader.svg`,
    url: "https://independenttrader.pl/",
  },
  {
    name: "Dom na Majorce",
    logo: `${import.meta.env.BASE_URL}image/clients/domnamajorce.svg`,
    url: "https://domnamajorce.pl/",
  },
];

export const TrustedBy: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Zaufali nam</h2>
        <div className={styles.grid}>
          {CLIENTS.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.client}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className={styles.logo}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
