// Milestone 1
// ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente(verdi) e
// dall’interlocutore(bianco) assegnando due classi CSS diverse
// ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
// nome e immagine di ogni contatto.


// Milestone 2
// ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
// messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ● Click sul contatto mostra la conversazione del contatto cliccato.


// Milestone 3
// ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
// “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
// un “ok” come risposta, che apparirà dopo 2 secondi.


// Milestone 4
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite(es, Marco, Matteo, Martina -> Scrivo
// “mar” rimangono solo Marco e Martina).


// Milestone 5 - opzionale
// ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
// permette di cancellare il messaggio selezionato
// ● Visualizzazione ora e ultimo messaggio inviato / ricevuto nella lista dei contatti
// Consigli utili:
// ● Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella
// lista dei contatti
// ● I pulsanti e le icone possono non funzionare(a parte l’invio del messaggio)
// ● Per gestire le date, può essere utile la libreria Luxon
// ● La struttura dell’array dei contatti potrebbe avere questa forma:

console.log("OK Vue!");

const app = Vue.createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            text: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '16:15',
                            text: 'Tutto fatto!',
                            status: 'received'
                        },
                        {
                            date: '16:17',
                            text: 'Ricordati di chiamare zia Immacolata e zio Ippolito. Fanno l\'anniversario di matrimonio oggi.',
                            status: 'sent'
                        },
                        {
                            date: '16:18',
                            text: 'Ma poi iniziano a parlare e non mi mollano più...',
                            status: 'received'
                        },
                        {
                            date: '16:19',
                            text: 'Fai un piccolo sforzo, probabilmente questa domenica andremo da loro ed è probabile che ti faranno un bel regalino... e per "regalino" intendo... €...',
                            status: 'sent'
                        },
                        {
                            date: '16:21',
                            text: 'Perfetto! Li chiamo subito!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '16:30',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '16:30',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '16:35',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '10:10',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '10:20',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '16:15',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            text: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            text: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            text: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            text: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '15:51',
                            text: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            text: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            text: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            text: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '15:50',
                            text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '15:51',
                            text: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            // CHAT ATTIVA
            activeChat: 0,

            // MESSAGGIO AGGIUNTO
            newMessage: "",

            // RICERCA UTENTE
            searchUser: "",
        }
    },

    methods: {
        openChat(i) {
            this.activeChat = i;
        },

        addMessage(input) {
            const newMessage = {
                date: '17:09',
                text: this.newMessage,
                status: 'sent',

            };
            this.contacts[this.activeChat].messages.push(newMessage);
            this.newMessage = "";
        },

        replyMessage() {
            setTimeout(() => {
                const replyMessage = {
                    date: '17:11',
                    text: 'Ok',
                    status: 'received',
                }
                this.contacts[this.activeChat].messages.push(replyMessage)
            }, 2000);
        },

        searchName() {
            for (const contact of this.contacts) {
                if (
                    !contact.name.toLowerCase().includes(this.searchUser.toLowerCase())
                ) {
                    contact.visible = false;
                } else {
                    contact.visible = true;
                }
            }
        }
    },
})
app.mount("#app");

// Milestone 4
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite(es, Marco, Matteo, Martina -> Scrivo
// “mar” rimangono solo Marco e Martina).