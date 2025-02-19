document.addEventListener("DOMContentLoaded", function() {
    const ContactFormDiv = document.querySelector('#ContactForm');

    // Form
    const form = document.createElement('form');
    form.setAttribute('action', 'https://api.web3forms.com/submit');
    form.setAttribute('method', 'post');
    form.setAttribute('id', 'form');

    const KeyValid = document.createElement("input");
    KeyValid.type = "hidden";
    KeyValid.name = "access_key";
    KeyValid.value = "a2cd7e59-5eec-4bf9-bce9-72727f94470f";

    const BotCheck = document.createElement("input");
    BotCheck.type = "checkbox";
    BotCheck.name = "botcheck";
    BotCheck.classList.add("hidden");
    BotCheck.style.display = "none";

    $(form).append(KeyValid);
    $(form).append(BotCheck);

    // Name, Phone, Email
    const InputGroup1 = document.createElement('div');
    InputGroup1.classList.add('input-group');
    InputGroup1.classList.add('mb-3'); 

    const NameCol = document.createElement('div');
    NameCol.classList.add('col-12', 'col-md-3');
    const NameLabel = document.createElement('label');
    NameLabel.setAttribute('for', 'Name');
    NameLabel.classList.add('form-label');
    NameLabel.innerHTML = 'Ime<span class="RequiredField"> *</span>';
    NameCol.appendChild(NameLabel);
    const NameInput = document.createElement('input');
    NameInput.classList.add('form-control');
    NameInput.setAttribute('type', 'text');
    NameInput.setAttribute('id', 'Name');
    NameInput.setAttribute('name', 'Name');
    NameInput.setAttribute('placeholder', 'Vaše ime');
    NameCol.appendChild(NameInput);
    const NameHelp = document.createElement('div');
    NameHelp.setAttribute('id', 'NameHelp');
    NameHelp.classList.add('form-text', 'HelpText');
    NameCol.appendChild(NameHelp);

    const Space1 = document.createElement('div');
    Space1.classList.add('col-1', 'col-sm-1');

    const PhoneCol = document.createElement('div');
    PhoneCol.classList.add('col-12', 'col-md-4');
    const PhoneLabel = document.createElement('label');
    PhoneLabel.setAttribute('for', 'Phone');
    PhoneLabel.classList.add('form-label');
    PhoneLabel.innerHTML = 'Telefon<span class="RequiredField"> *</span>';
    PhoneCol.appendChild(PhoneLabel);
    const PhoneInput = document.createElement('input');
    PhoneInput.classList.add('form-control');
    PhoneInput.setAttribute('type', 'tel');
    PhoneInput.setAttribute('id', 'Phone');
    PhoneInput.setAttribute('name', 'Phone');
    PhoneInput.setAttribute('placeholder', 'Vaš broj telefona');
    PhoneCol.appendChild(PhoneInput);
    const PhoneHelp = document.createElement('div');
    PhoneHelp.setAttribute('id', 'PhoneHelp');
    PhoneHelp.classList.add('form-text', 'HelpText');
    PhoneCol.appendChild(PhoneHelp);

    const Space2 = document.createElement('div');
    Space2.classList.add('col-1', 'col-sm-1');

    const EmailCol = document.createElement('div');
    EmailCol.classList.add('col-12', 'col-md-3');
    const EmailLabel = document.createElement('label');
    EmailLabel.setAttribute('for', 'Email');
    EmailLabel.classList.add('form-label');
    EmailLabel.innerHTML = 'Email';
    EmailCol.appendChild(EmailLabel);
    const EmailInput = document.createElement('input');
    EmailInput.classList.add('form-control');
    EmailInput.setAttribute('type', 'email');
    EmailInput.setAttribute('id', 'Email');
    EmailInput.setAttribute('name', 'Email');
    EmailInput.setAttribute('placeholder', 'email@primer.com');
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

    const Margin2 = document.createElement('div');
    Margin2.classList.add('m-3');
    form.appendChild(Margin2);

    // Manufacturer and Model
    const InputGroup3 = document.createElement('div');
    InputGroup3.classList.add('input-group');
    InputGroup3.classList.add('mb-3');

    const ManufacturerCol = document.createElement('div');
    ManufacturerCol.classList.add('col-12', 'col-md-5');
    const ManufacturerLabel = document.createElement('label');
    ManufacturerLabel.setAttribute('for', 'ManufacturerSelect');
    ManufacturerLabel.classList.add('form-label');
    ManufacturerLabel.innerHTML = 'Proizvođač uređaja';
    ManufacturerCol.appendChild(ManufacturerLabel);
    const ManufacturerSelect = document.createElement('select');
    ManufacturerSelect.classList.add('form-select');
    ManufacturerSelect.setAttribute('id', 'ManufacturerSelect');
    ManufacturerSelect.setAttribute('name', 'ManufacturerSelect');
    
    const ManufacturerArray = [
        "Izaberite proizvođača", "HP", "Dell", "Lenovo", "Acer", "Asus", "Apple", "Desktop", "Nema na listi"
    ];
    ManufacturerArray.forEach(manufacturer => {
        const option = document.createElement('option');
        option.textContent = manufacturer;
        ManufacturerSelect.appendChild(option);
    });
    ManufacturerCol.appendChild(ManufacturerSelect);

    const Space4 = document.createElement('div');
    Space4.classList.add('col-sm-2');

    const ModelCol = document.createElement('div');
    ModelCol.classList.add('col-12', 'col-md-5');
    const ModelLabel = document.createElement('label');
    ModelLabel.setAttribute('for', 'Model');
    ModelLabel.classList.add('form-label');
    ModelLabel.innerHTML = 'Model';
    ModelCol.appendChild(ModelLabel);
    const ModelInput = document.createElement('input');
    ModelInput.classList.add('form-control');
    ModelInput.setAttribute('type', 'text');
    ModelInput.setAttribute('id', 'Model');
    ModelInput.setAttribute('name', 'Model');
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
    CommentLabel.setAttribute('for', 'ProblemDescription');
    CommentLabel.classList.add('form-label');
    CommentLabel.innerHTML = 'Opišite problem<span class="RequiredField"> *</span>';
    CommentCol.appendChild(CommentLabel);
    const CommentTextArea = document.createElement('textarea');
    CommentTextArea.classList.add('form-control');
    CommentTextArea.setAttribute('id', 'ProblemDescription');
    CommentTextArea.setAttribute('name', 'ProblemDescription');
    CommentTextArea.setAttribute('rows', '5');
    CommentTextArea.setAttribute('placeholder', 'Bolji opis problema nam pomaže u proceni predračuna. Takođe upišite sve dodatne informacije za koje mislite da su potrebne.');
    CommentCol.appendChild(CommentTextArea);
    const ProblemDescriptionHelp = document.createElement('div');
    ProblemDescriptionHelp.setAttribute('id', 'ProblemDescriptionHelp');
    ProblemDescriptionHelp.classList.add('form-text', 'HelpText');
    CommentCol.appendChild(ProblemDescriptionHelp);

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
    SubmitButton.classList.add('btn', 'form-buttons');
    SubmitButton.setAttribute('id', 'SubmitRequest');
    SubmitButton.innerHTML = 'Podnesite zahtev';
    const SubmitHelp = document.createElement('div');
    SubmitHelp.setAttribute('id', 'SubmitHelp');
    SubmitHelp.classList.add('form-text', 'HelpText');
    SubmitHelp.style.display = 'none';
    SubmitButton.appendChild(SubmitHelp);

    const ResetButton = document.createElement('button');
    ResetButton.setAttribute('type', 'reset');
    ResetButton.classList.add('btn', 'form-buttons');
    ResetButton.setAttribute('id', 'ResetRequest');
    ResetButton.innerHTML = 'Očistite polja';

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
    // const ManufacturerSelected = document.getElementById("ManufacturerSelect");
    // const Model = document.getElementById("Model");
    const ProblemDescription = document.getElementById("ProblemDescription");
    const ProblemDescriptionHelpText = document.getElementById("ProblemDescriptionHelp");
    const SubmitRequest = document.getElementById("SubmitRequest");
    const SubmitHelpText = document.getElementById("SubmitHelp");
    const ResetRequest = document.getElementById("ResetRequest");

    //Color invalid input
    Name.classList.add("InvalidInput");
    Phone.classList.add("InvalidInput");
    ProblemDescription.classList.add("InvalidInput");

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
    let PhoneRegex = /^\+38106\d{7,8}$/;
    let IsFirstFocus = true;
    Phone.addEventListener("focus", function() {
        if (IsFirstFocus) {
            Phone.value = "+38106";
            IsFirstFocus = false;
        }
    });
    Phone.addEventListener("blur", function(){  
        if (!PhoneRegex.test(Phone.value)) {
            PhoneHelpText.innerHTML = "Telefon po +38106 sa nastavkom od 7 do 8 cifara.";
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

    ProblemDescription.addEventListener("blur", function() {
        if (ProblemDescription.value == "") {
            ProblemDescriptionHelpText.innerHTML = "Potrebno je opisati problem";
        } else {
            ProblemDescriptionHelpText.innerHTML = "";
        }
    })

    // Onload disable submit
    window.addEventListener("load", function(){
        SubmitRequest.setAttribute('disabled', 'true');
    });

    // Enable button
    function CheckFormValidity() {
        const NameValid = NameRegex.test(Name.value);
        const PhoneValid = PhoneRegex.test(Phone.value);
        var ProblemDescriptionValid = 0;
        if (ProblemDescription.value == "") {
            ProblemDescriptionValid = 0;
        } else {
            ProblemDescriptionValid = 1;
        }
        console.log("NameValid:", NameValid);
        console.log("PhoneValid:", PhoneValid);
        console.log("ProblemDescriptionValid:", ProblemDescriptionValid);
        
        if (NameValid && PhoneValid && ProblemDescriptionValid == 1) {
            SubmitRequest.removeAttribute('disabled');
            SubmitButton.innerHTML = 'Podnesite zahtev';
            SubmitHelpText.innerHTML = '';
        } else {
            SubmitRequest.setAttribute('disabled', 'true');
            SubmitHelp.style.display = 'block';
            SubmitHelpText.innerHTML = 'Morate popuniti sva obavezna polja';
        }

        //Color valid input
        if (NameValid) {
            Name.classList.add("ValidInput");
            Name.classList.remove("InvalidInput");
        } else {
            Name.classList.remove("ValidInput");
            Name.classList.add("InvalidInput");
        }
        if (PhoneValid) {
            Phone.classList.add("ValidInput");
            Phone.classList.remove("InvalidInput");
        } else {
            Phone.classList.remove("ValidInput");
            Phone.classList.add("InvalidInput");
        }
        if (ProblemDescriptionValid) {
            ProblemDescription.classList.add("ValidInput");
            ProblemDescription.classList.remove("InvalidInput");
        } else {
            ProblemDescription.classList.remove("ValidInput");
            ProblemDescription.classList.add("InvalidInput");
        }
    }

    Name.addEventListener("blur", CheckFormValidity);
    Phone.addEventListener("blur", CheckFormValidity);
    ProblemDescription.addEventListener("blur", CheckFormValidity);
    ResetRequest.addEventListener("blur", CheckFormValidity);
});

