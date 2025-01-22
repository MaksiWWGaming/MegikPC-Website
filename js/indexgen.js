const ServicesArray = [
    {
        id: 'Laptop',
        title: 'Servisiranje laptopova',
        description: 'Nije bitan proizvođač laptopa, bitno je da mi možemo da rešimo problem!',
        image: 'img/Pages/Index/Laptop.png',
        link: 'pages/LaptopServis.html',
        alt: 'Laptop'
    },
    {
        id: 'Desktop',
        title: 'Servisiranje desktopova',
        description: 'Vaš desktop računar ima problem? Tu smo da razrešimo u što kraćem roku!',
        image: 'img/Pages/Index/Desktop.png',
        link: 'pages/DesktopServis.html',
        alt: 'Desktop'
    },
    {
        id: 'AnyDesk',
        title: 'Online podrška',
        description: 'Imate problem koji može da se reši na daljinu? Uvek smo tu preko AnyDesk!',
        image: 'img/Pages/Index/Anydesk.png',
        link: 'pages/OnlineSupport.html',
        alt: 'AnyDesk'
    },
    {
        id: 'Other',
        title: 'Ostali vidovi podrške',
        description: 'Megik PC nema ono što tražite? Javite nam se, verovatno "znamo čoveka"!',
        image: 'img/Pages/Index/Other.png',
        link: 'pages/Other.html',
        alt: 'Ostala podrška'
    }
];

// Function to generate and append service cards
function GenerateServiceCards() {
    const MainContent = document.getElementById('MainContent');
    let DivRow = document.createElement('div');
    DivRow.classList.add('row');

    ServicesArray.forEach(service => {
        let DivCol = document.createElement('div');
        DivCol.classList.add('col-md-6', 'col-lg-3', 'mb-3');
        
        let Card = document.createElement('div');
        Card.classList.add('card', 'text-center', 'px-0');
        Card.id = service.id;

        let CardBody = document.createElement('div');
        CardBody.classList.add('card-body');
        
        let Title = document.createElement('h5');
        Title.classList.add('card-title');
        Title.innerText = service.title;

        let Description = document.createElement('p');
        Description.classList.add('card-text');
        Description.innerText = service.description;

        let Img = document.createElement('img');
        Img.classList.add('card-img-top', 'index-images');
        Img.src = service.image;
        Img.alt = service.alt;

        let Link = document.createElement('a');
        Link.classList.add('btn', 'btn-primary');
        Link.href = service.link;
        Link.innerText = 'Saznajte više';

        CardBody.appendChild(Title);
        CardBody.appendChild(Description);

        CardBody.appendChild(Img);
        CardBody.appendChild(document.createElement('br'));  
        CardBody.appendChild(document.createElement('br')); 
        CardBody.appendChild(Link);

        Card.appendChild(CardBody);

        DivCol.appendChild(Card);

        DivRow.appendChild(DivCol);
    });

    MainContent.appendChild(DivRow);
}

GenerateServiceCards();

let ReviewIndex = 0; 

function Reviews() {
    const ReviewText = [
        "<p>Jovan Vučetić</p><span style='color:$whitetxt'>Dečko je ljubazan, efikasan, pouzdan, sve preporuke !</span>",
        "<p>Andrej</p><span style='color:$whitetxt'>Odličan servis. Odnet laptop na zamenu termalne paste i čišćenje. Završen za manje od jednog dana. Moje preporuke</span>",
        "<p>Marina Bogic</p><span style='color:$whitetxt'>Saradnja sa Megikom je odlicna. Odnela sam stari desktop racunar na kom nije mogao sistem da se podigne i u najkracem roku je bilo reseno. Za vrlo krtako vreme i po veoma povoljnoj ceni je racunar popravljen. Pritom veliki dzentlmeni koji mi nisu mi dozvolili da ponesem racunar do kola sama. :) Sve preporuke za Servis racunara Megik</span>"
    ];

    const el = document.querySelector('#MovingText');
    el.innerHTML = ReviewText[ReviewIndex];

    ReviewIndex++;
    if (ReviewIndex >= ReviewText.length) {
        ReviewIndex = 0;
    }
}

setInterval(Reviews, 5000);

setTimeout(function() {
    document.querySelector('#ReviewSpinner').classList.remove("spinner-border");
}, 5000);