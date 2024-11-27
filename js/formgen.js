document.addEventListener("DOMContentLoaded", function() {
    const ContactFormDiv = document.querySelector('#ContactForm');

    // Form
    const form = document.createElement('form');
    form.setAttribute('action', '');
    form.setAttribute('method', 'get');

    // Name, Phone, Email
    const InputGroup1 = document.createElement('div');
    InputGroup1.classList.add('input-group');
    InputGroup1.classList.add('mb-3'); 

    const NameCol = document.createElement('div');
    NameCol.classList.add('col-3');
    const NameLabel = document.createElement('label');
    NameLabel.setAttribute('for', 'Name');
    NameLabel.classList.add('form-label');
    NameLabel.innerHTML = 'Ime<span class="RequiredField"> *</span>';
    NameCol.appendChild(NameLabel);
    const NameInput = document.createElement('input');
    NameInput.classList.add('form-control');
    NameInput.setAttribute('type', 'text');
    NameInput.setAttribute('id', 'Name');
    NameInput.setAttribute('placeholder', 'Vaše ime');
    NameCol.appendChild(NameInput);
    const NameHelp = document.createElement('div');
    NameHelp.setAttribute('id', 'NameHelp');
    NameHelp.classList.add('form-text', 'HelpText');
    NameCol.appendChild(NameHelp);

    const Space1 = document.createElement('div');
    Space1.classList.add('col-1');

    const PhoneCol = document.createElement('div');
    PhoneCol.classList.add('col-4');
    const PhoneLabel = document.createElement('label');
    PhoneLabel.setAttribute('for', 'Phone');
    PhoneLabel.classList.add('form-label');
    PhoneLabel.innerHTML = 'Telefon<span class="RequiredField"> *</span>';
    PhoneCol.appendChild(PhoneLabel);
    const PhoneInput = document.createElement('input');
    PhoneInput.classList.add('form-control');
    PhoneInput.setAttribute('type', 'tel');
    PhoneInput.setAttribute('id', 'Phone');
    PhoneInput.setAttribute('placeholder', 'Vaš broj telefona');
    PhoneCol.appendChild(PhoneInput);
    const PhoneHelp = document.createElement('div');
    PhoneHelp.setAttribute('id', 'PhoneHelp');
    PhoneHelp.classList.add('form-text', 'HelpText');
    PhoneCol.appendChild(PhoneHelp);

    const Space2 = document.createElement('div');
    Space2.classList.add('col-1');

    const EmailCol = document.createElement('div');
    EmailCol.classList.add('col-3');
    const EmailLabel = document.createElement('label');
    EmailLabel.setAttribute('for', 'Email');
    EmailLabel.classList.add('form-label');
    EmailLabel.innerHTML = 'Email';
    EmailCol.appendChild(EmailLabel);
    const EmailInput = document.createElement('input');
    EmailInput.classList.add('form-control');
    EmailInput.setAttribute('type', 'email');
    EmailInput.setAttribute('id', 'Email');
    EmailInput.setAttribute('placeholder', 'email@primer.com (opciono)');
    EmailCol.appendChild(EmailInput);
    const EmailHelp = document.createElement('div');
    EmailHelp.setAttribute('id', 'EmailHelp');
    EmailHelp.classList.add('form-text', 'HelpText');
    EmailCol.appendChild(EmailHelp);

    InputGroup1.appendChild(NameCol);
    InputGroup1.appendChild(Space1);
    InputGroup1.appendChild(PhoneCol);
    InputGroup1.appendChild(Space2);
    InputGroup1.appendChild(EmailCol);
    form.appendChild(InputGroup1);

    const Margin1 = document.createElement('div');
    Margin1.classList.add('m-3');
    form.appendChild(Margin1);

    // Date
    const InputGroup2 = document.createElement('div');
    InputGroup2.classList.add('input-group');
    InputGroup2.classList.add('mb-3'); 

    const TimeOfArrivalCol = document.createElement('div');
    TimeOfArrivalCol.classList.add('col-3');
    const TimeOfArrivalLabel = document.createElement('label');
    TimeOfArrivalLabel.setAttribute('for', 'TimeOfArrival');
    TimeOfArrivalLabel.classList.add('form-label');
    TimeOfArrivalLabel.innerHTML = 'Vreme dolaska<span class="RequiredField"> *</span>';
    TimeOfArrivalCol.appendChild(TimeOfArrivalLabel);
    const TimeOfArrivalSelect = document.createElement('select');
    TimeOfArrivalSelect.classList.add('form-select');
    TimeOfArrivalSelect.setAttribute('id', 'TimeOfArrival');

    const TimeOptionsArray = [
        "Izaberite vreme dolaska", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00",
        "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00",
        "17:00 - 18:00", "18:00 - 19:00", "19:00 - 20:00"
    ];
    TimeOptionsArray.forEach(time => {
        const option = document.createElement('option');
        option.textContent = time;
        TimeOfArrivalSelect.appendChild(option);
    });
    TimeOfArrivalCol.appendChild(TimeOfArrivalSelect);
    const timeHelp = document.createElement('div');
    timeHelp.setAttribute('id', 'TimeOfArrivalHelp');
    timeHelp.classList.add('form-text', 'HelpText');
    timeHelp.textContent = 'Vreme dolaska je bitno radi planiranja aktivnosti servisa za taj dan.';
    TimeOfArrivalCol.appendChild(timeHelp);

    const Space3 = document.createElement('div');
    Space3.classList.add('col-1');

    const dayCol = document.createElement('div');
    dayCol.classList.add('col-1');
    const dayLabel = document.createElement('label');
    dayLabel.classList.add('form-label');
    dayLabel.innerHTML = 'Datum<span class="RequiredField"> *</span>';
    dayCol.appendChild(dayLabel);
    const dayInput = document.createElement('input');
    dayInput.classList.add('form-control');
    dayInput.setAttribute('type', 'text');
    dayInput.setAttribute('id', 'Day');
    dayInput.setAttribute('placeholder', 'dd');
    dayCol.appendChild(dayInput);
    const dayHelp = document.createElement('div');
    dayHelp.setAttribute('id', 'DayHelp');
    dayHelp.classList.add('form-text', 'HelpText');
    dayCol.appendChild(dayHelp);

    const monthCol = document.createElement('div');
    monthCol.classList.add('col-1','ms-1');
    const monthLabel = document.createElement('label');
    monthLabel.classList.add('form-label');
    monthLabel.innerHTML = 'Mesec<span class="RequiredField"> *</span>';
    monthCol.appendChild(monthLabel);
    const monthInput = document.createElement('input');
    monthInput.classList.add('form-control');
    monthInput.setAttribute('type', 'text');
    monthInput.setAttribute('id', 'Month');
    monthInput.setAttribute('placeholder', 'mm');
    monthCol.appendChild(monthInput);
    const monthHelp = document.createElement('div');
    monthHelp.setAttribute('id', 'MonthHelp');
    monthHelp.classList.add('form-text', 'HelpText');
    monthCol.appendChild(monthHelp);

    const yearCol = document.createElement('div');
    yearCol.classList.add('col-1', 'ms-1');
    const yearLabel = document.createElement('label');
    yearLabel.classList.add('form-label');
    yearLabel.innerHTML = 'Godina<span class="RequiredField"> *</span>';
    yearCol.appendChild(yearLabel);
    const yearInput = document.createElement('input');
    yearInput.classList.add('form-control');
    yearInput.setAttribute('type', 'text');
    yearInput.setAttribute('id', 'Year');
    yearInput.setAttribute('placeholder', 'yyyy');
    yearCol.appendChild(yearInput);
    const yearHelp = document.createElement('div');
    yearHelp.setAttribute('id', 'YearHelp');
    yearHelp.classList.add('form-text', 'HelpText');
    yearCol.appendChild(yearHelp);

    InputGroup2.appendChild(TimeOfArrivalCol);
    InputGroup2.appendChild(Space3);
    InputGroup2.appendChild(dayCol);
    InputGroup2.appendChild(monthCol);
    InputGroup2.appendChild(yearCol);
    form.appendChild(InputGroup2);

    const Margin2 = document.createElement('div');
    Margin2.classList.add('m-3');
    form.appendChild(Margin2);

    // Manufacturer and Model
    const InputGroup3 = document.createElement('div');
    InputGroup3.classList.add('input-group');
    InputGroup3.classList.add('mb-3');

    const ManufacturerCol = document.createElement('div');
    ManufacturerCol.classList.add('col-5');
    const ManufacturerLabel = document.createElement('label');
    ManufacturerLabel.setAttribute('for', 'ManufacturerSelect');
    ManufacturerLabel.classList.add('form-label');
    ManufacturerLabel.innerHTML = 'Proizvođač uređaja';
    ManufacturerCol.appendChild(ManufacturerLabel);
    const ManufacturerSelect = document.createElement('select');
    ManufacturerSelect.classList.add('form-select');
    ManufacturerSelect.setAttribute('id', 'ManufacturerSelect');
    
    const ManufacturerArray = [
        "Izaberite proizvođača (opciono)", "HP", "Dell", "Lenovo", "Acer", "Asus", "Desktop", "Nema na listi"
    ];
    ManufacturerArray.forEach(manufacturer => {
        const option = document.createElement('option');
        option.textContent = manufacturer;
        ManufacturerSelect.appendChild(option);
    });
    ManufacturerCol.appendChild(ManufacturerSelect);

    const Space4 = document.createElement('div');
    Space4.classList.add('col-2');

    const ModelCol = document.createElement('div');
    ModelCol.classList.add('col-5');
    const ModelLabel = document.createElement('label');
    ModelLabel.setAttribute('for', 'Model');
    ModelLabel.classList.add('form-label');
    ModelLabel.innerHTML = 'Model';
    ModelCol.appendChild(ModelLabel);
    const ModelInput = document.createElement('input');
    ModelInput.classList.add('form-control');
    ModelInput.setAttribute('type', 'text');
    ModelInput.setAttribute('id', 'Model');
    ModelInput.setAttribute('placeholder', 'Unesite model/matičnu ploču uređaja');
    ModelCol.appendChild(ModelInput);

    InputGroup3.appendChild(ManufacturerCol);
    InputGroup3.appendChild(Space4);
    InputGroup3.appendChild(ModelCol);
    form.appendChild(InputGroup3);

    const Margin3 = document.createElement('div');
    Margin3.classList.add('m-3');
    form.appendChild(Margin3);

    // Extra Comment
    const InputGroup4 = document.createElement('div');
    InputGroup4.classList.add('input-group');
    InputGroup4.classList.add('mb-3');

    const CommentCol = document.createElement('div');
    CommentCol.classList.add('col-12');
    const CommentLabel = document.createElement('label');
    CommentLabel.setAttribute('for', 'ExtraComment');
    CommentLabel.classList.add('form-label');
    CommentLabel.innerHTML = 'Dodatni komentar';
    CommentCol.appendChild(CommentLabel);
    const CommentTextArea = document.createElement('textarea');
    CommentTextArea.classList.add('form-control');
    CommentTextArea.setAttribute('id', 'ExtraComment');
    CommentTextArea.setAttribute('rows', '5');
    CommentTextArea.setAttribute('placeholder', 'Opišite problem koji imate sa uređajem. To nam pomaže da vam damo adekvatan predračun.');
    CommentCol.appendChild(CommentTextArea);

    InputGroup4.appendChild(CommentCol);
    form.appendChild(InputGroup4);

    const Margin4 = document.createElement('div');
    Margin4.classList.add('m-3');
    form.appendChild(Margin4);

    // Submit and Reset buttons
    const ButtonGroup = document.createElement('div');
    ButtonGroup.classList.add('d-flex', 'justify-content-between');

    const SubmitButton = document.createElement('button');
    SubmitButton.setAttribute('type', 'submit');
    SubmitButton.classList.add('btn', 'bg-black', 'text-white', 'form-buttons');
    SubmitButton.setAttribute('id', 'SubmitRequest');
    SubmitButton.innerHTML = 'Podnesite zahtev';

    const ResetButton = document.createElement('button');
    ResetButton.setAttribute('type', 'reset');
    ResetButton.classList.add('btn', 'bg-black', 'text-white', 'form-buttons');
    ResetButton.setAttribute('id', 'ResetRequest');
    ResetButton.innerHTML = 'Obrišite zahtev';

    ButtonGroup.appendChild(ResetButton);
    ButtonGroup.appendChild(SubmitButton);

    form.appendChild(ButtonGroup);

    ContactFormDiv.appendChild(form);

    //Grab the elements
    const Name = document.getElementById("Name");
    const NameHelpText = document.getElementById("NameHelp");
    const Phone = document.getElementById("Phone");
    const PhoneHelpText = document.getElementById("PhoneHelp");
    const Email = document.getElementById("Email");
    const EmailHelpText = document.getElementById("EmailHelp");
    const TimeOfArrival = document.getElementById("TimeOfArrival");
    const TimeOfArrivalHelpText = document.getElementById("TimeOfArrivalHelp");
    const Day = document.getElementById("Day");
    const DayHelpText = document.getElementById("DayHelp");
    const Month = document.getElementById("Month");
    const MonthHelpText = document.getElementById("MonthHelp");
    const Year = document.getElementById("Year");
    const YearHelpText = document.getElementById("YearHelp");
    const ManufacturerSelected = document.getElementById("ManufacturerSelect");
    const Model = document.getElementById("Model");
    const ExtraComment = document.getElementById("ExtraComment");
    const SubmitRequest = document.getElementById("SubmitRequest");
    const ResetRequest = document.getElementById("ResetRequest");

    //Regex

    //Name regex
    let NameRegex = /^[A-Z][a-z]{1,29}$/;
    Name.addEventListener("blur", function(){  
        if (!NameRegex.test(Name.value)) {
            NameHelpText.innerHTML = "Ime mora da počne sa velikim slovom.";
        } else {
            NameHelpText.innerHTML = "";
        }
    });

    //Phone regex
    let PhoneRegex = /^06\d{8}$/;
    Phone.addEventListener("click", function(){
        Phone.value = "06";
    });
    Phone.addEventListener("blur", function(){  
        if (!PhoneRegex.test(Phone.value)) {
            PhoneHelpText.innerHTML = "Telefon počinje sa 06x i ima još 8 cifara.";
        } else {
            PhoneHelpText.innerHTML = "";
        }
    });

    //Email regex
    let EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    Email.addEventListener("blur", function(){  
        if (!EmailRegex.test(Email.value)) {
            EmailHelpText.innerHTML = "Email se kuca kao 'email@primer.com'";
        } else {
            EmailHelpText.innerHTML = "";
        }
    });

    //Time of arrival check
    TimeOfArrival.addEventListener("blur", function(){  
        if (TimeOfArrival.selectedIndex == 0) {
            TimeOfArrivalHelpText.innerHTML = " Morate izabrati neko od ponuđenog vremena.";
        } else {
            TimeOfArrivalHelpText.innerHTML = "Vreme dolaska je bitno radi planiranja aktivnosti servisa za taj dan.";
        }
    });

    //Day regex
    let DayRegex = /^([0-2][0-9]|(3)[0-1])$/;
    Day.addEventListener("blur", function(){  
        if (!DayRegex.test(Day.value)) {
            DayHelpText.innerHTML = "Dan može biti između 01 i 31";
        } else {
            DayHelpText.innerHTML = "";
        }
    });

    //Month regex
    let MonthRegex = /^(0[1-9]|1[0-2])$/;
    Month.addEventListener("blur", function(){  
        if (!MonthRegex.test(Month.value)) {
            MonthHelpText.innerHTML = "Mesec može biti između 01 i 12";
        } else {
            MonthHelpText.innerHTML = "";
        }
    });
    
    //Year regex
    let YearRegex = /^(0[1-9]|1[0-2])$/;
    Year.addEventListener("blur", function(){  
        if (!YearRegex.test(Year.value)) {
            YearHelpText.innerHTML = "Godina mora biti tekuća";
        } else {
            YearHelpText.innerHTML = "";
        }
    });
});

//Onload disable submit
// window.addEventListener("load", function(){
//     SubmitButton.setAttribute('disabled', 'true');
// })

