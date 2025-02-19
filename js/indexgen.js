const ServicesArray = [
    {
        id: 'Laptop',
        title: 'Servisiranje laptopova',
        description: 'Nije bitan proizvođač, bitno je da mi sve možemo da rešimo!',
        image: 'img/Pages/Index/Laptop.png',
        link: 'pages/Laptop.html',
        alt: 'Laptop'
    },
    {
        id: 'Desktop',
        title: 'Servisiranje desktopova',
        description: 'Muči vas desktop računar? Stojimo Vam na raspologanju!',
        image: 'img/Pages/Index/Desktop.png',
        link: 'pages/Desktop.html',
        alt: 'Desktop'
    },
    {
        id: 'AnyDesk',
        title: 'Online podrška',
        description: 'Daljinski rešivi problemi? Uvek smo tu preko AnyDesk!',
        image: 'img/Pages/Index/Anydesk.png',
        link: 'pages/Online.html',
        alt: 'AnyDesk'
    },
    {
        id: 'Other',
        title: 'Ostali vidovi podrške',
        description: 'MegikPC nema ono što tražite? Verovatno "znamo čoveka"!',
        image: 'img/Pages/Index/Other.png',
        link: 'pages/Other.html',
        alt: 'Ostala podrška'
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

        let Link = $('<a>').addClass('btn btn-primary').attr('href', service.link).text('Saznajte više');

        CardBody.append(Title, Description, Img, $('<br>'), $('<br>'), Link);

        Card.append(CardBody);
        DivCol.append(Card);
        DivRow.append(DivCol);
    });

    MainContent.append(DivRow);
}

GenerateServiceCards();

// let ReviewIndex = 0; 

// function Reviews() {
//     const ReviewText = [
//         "<p>Jovan Vučetić</p><span style='color:$whitetxt'>Dečko je ljubazan, efikasan, pouzdan, sve preporuke !</span>",
//         "<p>Andrej</p><span style='color:$whitetxt'>Odličan servis. Odnet laptop na zamenu termalne paste i čišćenje. Završen za manje od jednog dana. Moje preporuke</span>",
//         "<p>Marina Bogic</p><span style='color:$whitetxt'>Saradnja sa Megikom je odlicna. Odnela sam stari desktop racunar na kom nije mogao sistem da se podigne i u najkracem roku je bilo reseno. Za vrlo krtako vreme i po veoma povoljnoj ceni je racunar popravljen. Pritom veliki dzentlmeni koji mi nisu mi dozvolili da ponesem racunar do kola sama. :) Sve preporuke za Servis racunara Megik</span>",
//         "<p>Nikola Radivojević</p><span style='color:$whitetxt'>Laptop popravljen u rekordnom roku ( jedan dan), sada radi kao na dan kada sam ga kupio. Sve pohvale za momka, stručan, učtiv i maksimalno profesionalan. Bio je čak i voljan da meni, laiku, objasni šta je tačno bio razlog kvara i dao pismenu garanciju za svoj rad.</span>",
//     ];

//     const el = document.querySelector('#MovingText');
//     el.innerHTML = ReviewText[ReviewIndex];

//     ReviewIndex++;
//     if (ReviewIndex >= ReviewText.length) {
//         ReviewIndex = 0;
//     }
// }

// setInterval(Reviews, 5000);

// setTimeout(function() {
//     document.querySelector('#ReviewSpinner').classList.remove("spinner-border");
// }, 5000);

