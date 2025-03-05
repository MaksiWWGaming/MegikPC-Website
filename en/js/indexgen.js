const ServicesArray = [
    {
        id: 'Laptop',
        title: 'Laptop Service',
        description: 'No matter what the manufacturer is, the importnt thing is we can solve it all!',
        image: '/img/Pages/Index/Laptop.webp',
        link: '/en/pages/Laptop.html',
        alt: 'Laptop'
    },
    {
        id: 'Desktop',
        title: 'Desktop Service',
        description: 'Is your desktop giving you a headache? We are here for you at all times!',
        image: '/img/Pages/Index/Desktop.webp',
        link: '/en/pages/Desktop.html',
        alt: 'Desktop'
    },
    {
        id: 'AnyDesk',
        title: 'Online Support',
        description: 'Remotely resolvable issue? Contact us so we can help via AnyDesk!',
        image: '/img/Pages/Index/Anydesk.webp',
        link: '/en/pages/Online.html',
        alt: 'AnyDesk'
    },
    {
        id: 'Other',
        title: 'Other Types of Support',
        description: 'MegikPC doesn\' have what you are looking for? We might "know a guy"!',
        image: '/img/Pages/Index/Other.webp',
        link: '/en/pages/Other.html',
        alt: 'Other support'
    }
];

// Function to generate and append service cards
function GenerateServiceCards() {
    const MainContent = $('#MainContent');
    let DivRow = $('<div>').addClass('row');

    ServicesArray.forEach(service => {
        let DivCol = $('<div>').addClass('col-md-6 col-lg-3 mb-3');
        
        let Card = $('<div>').addClass('card text-center px-0').attr('id', service.id);

        let CardBody = $('<div>').addClass('card-body');
        
        let Title = $('<h3>').addClass('card-title').text(service.title);

        let Description = $('<p>').addClass('card-text').text(service.description);

        let Img = $('<img>').addClass('card-img-top index-images').attr({
            'src': service.image,
            'alt': service.alt
        });

        let Link = $('<a>').addClass('btn btn-primary').attr('href', service.link).text('Learn more');

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
        const response = await fetch('/en/js/data/reviews.txt');
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