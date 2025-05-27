const ServicesArray = [
    {
        id: 'Serviserske Usluge',
        title: 'Serviserske Usluge',
        // description: 'Kvar nije bitan, bitno je da mi imamo rešenje!',
        image: '/img/Pages/Index/Repair.webp',
        link: '/pages/Services.html',
        alt: 'Computer Repair'
    },
    {
        id: 'Izrada web sajtova',
        title: 'Izrada Web Sajtova',
        // description: 'Potreban vam je sajt? Čuvamo vam leđa!',
        image: '/img/Pages/Index/WebDev.webp',
        link: '/pages/WebDev.html',
        alt: 'WebDev'
    },
    // {
    //     id: 'Čuvanje podataka',
    //     title: 'Skladištenje podataka',
    //     // description: 'Ko još voli da gubi podatke?',
    //     image: '/img/Pages/Index/megikcloud.png',
    //     link: '/pages/MegikCloud.html',
    //     alt: 'WebDev'
    // },
];

// Function to generate and append service cards
function GenerateServiceCards() {
    const MainContent = $('#MainContent');
    let DivRow = $('<div>').addClass('row');

    ServicesArray.forEach(service => {
        let DivCol = $('<div>').addClass('col-sm-12 col-md-6 mb-3');
        
        let Card = $('<div>').addClass('card text-center px-0').attr('id', service.id);

        let CardBody = $('<div>').addClass('card-body');
        
        let Title = $('<h3>').addClass('card-title').text(service.title);

        let Description = $('<p>').addClass('card-text').text(service.description);

        let Img = $('<img>').addClass('card-img-top index-images').attr({
            'src': service.image,
            'alt': service.alt
        });

        let Link = $('<a>').addClass('btn btn-primary').attr('href', service.link).text('Saznajte više');

        CardBody.append(Title, Description, Img, $('<br>'), $('<br>'), Link);

        Card.append(CardBody);
        DivCol.append(Card);
        DivRow.append(DivCol);
    });

    MainContent.append(DivRow);
}

GenerateServiceCards();

let ReviewIndex = 0;
let ReviewText = [];

async function LoadReviews() {
    try {
        const response = await fetch('/js/data/reviews.txt');
        const text = await response.text();
        ReviewText = text.split('\n').map(line => {
            let parts = line.split('|');
            return `<p>${parts[0]}</p><span>${parts[1]}</span>`;
        });

        Reviews(); // Start cycling reviews once loaded
        setInterval(Reviews, 5000);
    } catch (error) {
        console.error('Error loading reviews:', error);
    }
}

function Reviews() {
    if (ReviewText.length === 0) return;

    const el = document.querySelector('#MovingText');
    el.innerHTML = ReviewText[ReviewIndex];

    ReviewIndex = (ReviewIndex + 1) % ReviewText.length;
}

setTimeout(() => {
    document.querySelector('#ReviewSpinner').classList.remove("spinner-border");
    LoadReviews();
}, 5000);