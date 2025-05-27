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
    KeyValid.value = "b640e18c-455f-484f-a010-eb89e77883d1";

    let Redirect = document.createElement("input");
    Redirect.type = "hidden";
    Redirect.name = "redirect";
    Redirect.value = "https://www.megikpc.com/en/js/data/Thanks.html";

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
    NameLabel.innerHTML = 'Name<span class="RequiredField"> *</span>';
    NameCol.appendChild(NameLabel);
    const NameInput = document.createElement('input');
    NameInput.classList.add('form-control');
    NameInput.setAttribute('type', 'text');
    NameInput.setAttribute('id', 'Name');
    NameInput.setAttribute('name', 'Name');
    NameInput.setAttribute('placeholder', 'Your name');
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
    PhoneLabel.innerHTML = 'Phone<span class="RequiredField"> *</span>';
    PhoneCol.appendChild(PhoneLabel);
    const PhoneInput = document.createElement('input');
    PhoneInput.classList.add('form-control');
    PhoneInput.setAttribute('type', 'tel');
    PhoneInput.setAttribute('id', 'Phone');
    PhoneInput.setAttribute('name', 'Phone');
    PhoneInput.setAttribute('placeholder', 'Your phone number');
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
    EmailInput.setAttribute('placeholder', 'email@example.com');
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

    // Container for the radio buttons
    const radioGroupContainer = document.createElement('div');
    radioGroupContainer.setAttribute('id', 'RadioGroupContainer');
    form.appendChild(radioGroupContainer);

    // Create Radio Buttons Dynamically
    const radioOptions = [
        { id: 'ServicingCreation', label: 'Interested in repair services' },
        { id: 'WebsiteCreation', label: 'Interested in website creation' },
        // { id: 'CloudCreation', label: 'Interested in MegikCloud™' }
    ];

    radioOptions.forEach(option => {
        const col = document.createElement('div');
        col.classList.add('form-check', 'mb-3');

        const radio = document.createElement('input');
        radio.classList.add('form-check-input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('id', option.id);
        radio.setAttribute('name', 'ServiceType'); // 👈 shared name groups them
        col.appendChild(radio);

        const label = document.createElement('label');
        label.classList.add('form-check-label');
        label.setAttribute('for', option.id);
        label.innerHTML = option.label;
        col.appendChild(label);

        // Add change event listener inline as created
        radio.addEventListener('change', () => {
            clearDynamicFields();
            if (radio.id === 'ServicingCreation' && radio.checked) {
                addServicingFields();
            }
    });

        radioGroupContainer.appendChild(col);
    });

    // Container for dynamic fields, placed directly after the radio group
    const dynamicFieldsContainer = document.createElement('div');
    dynamicFieldsContainer.setAttribute('id', 'DynamicFieldsContainer');
    form.appendChild(dynamicFieldsContainer);

    // Function to clear dynamic fields
    function clearDynamicFields() {
        dynamicFieldsContainer.innerHTML = '';
    }

    // Function to add Manufacturer and Model inputs
    function addServicingFields() {
        const InputGroup3 = document.createElement('div');
        InputGroup3.classList.add('input-group', 'mb-3');

        const ManufacturerCol = document.createElement('div');
        ManufacturerCol.classList.add('col-12', 'col-md-5');
        const ManufacturerLabel = document.createElement('label');
        ManufacturerLabel.setAttribute('for', 'ManufacturerSelect');
        ManufacturerLabel.classList.add('form-label');
        ManufacturerLabel.innerHTML = 'Device manufacturer';
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
        ModelInput.setAttribute('placeholder', 'Insert device model/motherboard');
        ModelCol.appendChild(ModelInput);

        InputGroup3.appendChild(ManufacturerCol);
        InputGroup3.appendChild(Space4);
        InputGroup3.appendChild(ModelCol);

        dynamicFieldsContainer.appendChild(InputGroup3);
    }

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
    CommentLabel.innerHTML = 'Other information<span class="RequiredField"> *</span>';
    CommentCol.appendChild(CommentLabel);
    const CommentTextArea = document.createElement('textarea');
    CommentTextArea.classList.add('form-control');
    CommentTextArea.setAttribute('id', 'ProblemDescription');
    CommentTextArea.setAttribute('name', 'ProblemDescription');
    CommentTextArea.setAttribute('rows', '5');
    CommentTextArea.setAttribute('placeholder', 'A better description allows us to give you a more accurate service cost. Also type in any other information you deem necessary.');
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
    SubmitButton.innerHTML = 'Submit request';
    const SubmitHelp = document.createElement('div');
    SubmitHelp.setAttribute('id', 'SubmitHelp');
    SubmitHelp.classList.add('form-text', 'HelpText');
    SubmitHelp.style.display = 'none';
    SubmitButton.appendChild(SubmitHelp);

    const ResetButton = document.createElement('button');
    ResetButton.setAttribute('type', 'reset');
    ResetButton.classList.add('btn', 'form-buttons');
    ResetButton.setAttribute('id', 'ResetRequest');
    ResetButton.innerHTML = 'Clear fields';

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
            NameHelpText.innerHTML = "Name must begin with a capital letter";
        } else {
            NameHelpText.innerHTML = "";
        }
    });

    //Phone regex
    let PhoneRegex = /^\+\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    let IsFirstFocus = true;
    Phone.addEventListener("focus", function() {
        if (IsFirstFocus) {
            // Phone.value = "+38106";
            IsFirstFocus = false;
        }
    });
    Phone.addEventListener("blur", function(){  
        if (!PhoneRegex.test(Phone.value)) {
            PhoneHelpText.innerHTML = "Phone starts with <i>+country code</i>";
        } else {
            PhoneHelpText.innerHTML = "";
        }
    });

    //Email regex
    let EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    Email.addEventListener("blur", function(){  
        if (!EmailRegex.test(Email.value)) {
            EmailHelpText.innerHTML = "Email format as 'email@example.com'";
        } else {
            EmailHelpText.innerHTML = "";
        }
    });

    ProblemDescription.addEventListener("blur", function() {
        if (ProblemDescription.value == "") {
            ProblemDescriptionHelpText.innerHTML = "You must give a description";
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
            SubmitButton.innerHTML = 'Submit request';
            SubmitHelpText.innerHTML = '';
        } else {
            SubmitRequest.setAttribute('disabled', 'true');
            SubmitHelp.style.display = 'block';
            SubmitHelpText.innerHTML = 'Mandatory fields mustn\'t be left empty';
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