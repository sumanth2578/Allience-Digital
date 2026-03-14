import styles from "./Clients.module.css";

const clients = [
    { name: "Client 1", logo: "/client1.jpg" },
    { name: "Client 2", logo: "/client2.jpg" },
    { name: "Client 3", logo: "/client3.jpg" },
    { name: "Client 4", logo: "/client4.jpg" },
    { name: "Client 5", logo: "/client5.jpg" },
];

const Clients = () => {
    return (
        <section id="clients" className={`section ${styles.clients}`}>
            <div className="container">
                <div className={`${styles.header} reveal-up`}>
                    <h2 className="section-title">OUR CLIENTS</h2>
                </div>
            </div>

            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeTrack}>
                    {[...clients, ...clients, ...clients].map((client, index) => (
                        <div key={index} className={styles.logoCard}>
                            <img src={client.logo} alt={client.name} className={styles.clientLogo} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
