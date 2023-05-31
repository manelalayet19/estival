// buy a ticket
const btn = document.querySelector('#buy');
const ticketctn = document.querySelector('.ticket');
const body = document.querySelector('body');
    let ticketNumber = 20030220;
const number = document.querySelector('.ticket-number');

    btn.addEventListener('click', () => {
        const cloneTicket = ticketctn.cloneNode(true);
        ticketNumber++;
        number.innerHTML = "#" + ticketNumber;
        body.appendChild(cloneTicket);
    });