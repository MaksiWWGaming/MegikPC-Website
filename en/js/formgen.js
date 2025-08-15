const ContactFormDiv = document.querySelector('#ContactForm');

// Container for the checkboxes
const checkboxGroupContainer = document.getElementById('RadioGroupContainer'); // You can rename the ID if you like

// Create Checkboxes Dynamically
const serviceOptions = [
    { id: 'ServicingCreation', label: 'I am interested in repair services' },
    { id: 'WebsiteCreation', label: 'I am interested in website creation' },
    // { id: 'CloudCreation', label: 'I am interested in MegikCloud™' }
];

serviceOptions.forEach(option => {
    const col = document.createElement('div');
    col.classList.add('form-check', 'mb-3');

    const checkbox = document.createElement('input');
    checkbox.classList.add('form-check-input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', option.id);
    checkbox.setAttribute('name', option.id);
    checkbox.setAttribute('value', option.label);
    col.appendChild(checkbox);

    const label = document.createElement('label');
    label.classList.add('form-check-label');
    label.setAttribute('for', option.id);
    label.innerHTML = option.label;
    col.appendChild(label);

    // Add event listener for dynamic fields
    checkbox.addEventListener('change', () => {
        if (checkbox.id === 'ServicingCreation') {
            if (checkbox.checked) {
                addServicingFields();
            } else {
                removeDynamicFieldById('ServicingFields');
            }
        } else if (checkbox.id === 'CloudCreation') {
            if (checkbox.checked) {
                addCloudFields();
            } else {
                removeDynamicFieldById('CloudFields');
            }
        }
        // You can add more here if WebsiteCreation needs fields later
    });

    checkboxGroupContainer.appendChild(col);
});

// Container for dynamic fields
const dynamicFieldsContainer = document.getElementById('DynamicFieldsContainer');

// Function to remove a dynamic field group by its ID
function removeDynamicFieldById(groupId) {
    const fieldGroup = document.getElementById(groupId);
    if (fieldGroup) {
        fieldGroup.remove();
    }
}

// Function to add Manufacturer and Model inputs for Servicing
function addServicingFields() {
    const servicingGroup = document.createElement('div');
    servicingGroup.classList.add('row', 'mb-3');
    servicingGroup.setAttribute('id', 'ServicingFields');

    const ManufacturerCol = document.createElement('div');
    ManufacturerCol.classList.add('col-12', 'col-md-4');
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
        "Please select your device manufacturer", "HP", "Dell", "Lenovo", "Acer", "Asus", "Apple", "Desktop", "Nema na listi"
    ];
    ManufacturerArray.forEach(manufacturer => {
        const option = document.createElement('option');
        option.textContent = manufacturer;
        ManufacturerSelect.appendChild(option);
    });
    ManufacturerCol.appendChild(ManufacturerSelect);

    const ModelCol = document.createElement('div');
    ModelCol.classList.add('col-12', 'col-md-4');
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
    ModelInput.setAttribute('placeholder', 'Please type in your device model');
    ModelCol.appendChild(ModelInput);

    servicingGroup.appendChild(ManufacturerCol);
    servicingGroup.appendChild(ModelCol);

    dynamicFieldsContainer.appendChild(servicingGroup);
}

// Function to add Cloud Package selection
function addCloudFields() {
    const cloudGroup = document.createElement('div');
    cloudGroup.classList.add('mb-3', 'col-4');
    cloudGroup.setAttribute('id', 'CloudFields');

    const CloudLabel = document.createElement('label');
    CloudLabel.setAttribute('for', 'CloudPackageSelect');
    CloudLabel.classList.add('form-label');
    CloudLabel.innerHTML = 'Please select one MegikCloud™ package';
    cloudGroup.appendChild(CloudLabel);

    const CloudSelect = document.createElement('select');
    CloudSelect.classList.add('form-select');
    CloudSelect.setAttribute('id', 'CloudPackageSelect');
    CloudSelect.setAttribute('name', 'CloudPackageSelect');

    const CloudPackages = [
        "Choose a package",
        "MegikCloud™ Lite (100GB)",
        "MegikCloud™ Plus (200GB)",
        "MegikCloud™ Max (1TB)",
        "MegikCloud™ Custom (Storage for your needs)"
    ];
    CloudPackages.forEach(packageName => {
        const option = document.createElement('option');
        option.textContent = packageName;
        CloudSelect.appendChild(option);
    });

    const CloudHelp = document.createElement('div');
    CloudHelp.setAttribute('id', 'CloudHelp');
    CloudHelp.classList.add('form-text', 'HelpText');

    cloudGroup.appendChild(CloudSelect);
    cloudGroup.appendChild(CloudHelp);

    dynamicFieldsContainer.appendChild(cloudGroup);
}


//Grab the elements
const Name = document.getElementById("Name");
const NameHelpText = document.getElementById("NameHelp");
const Phone = document.getElementById("Phone");
const PhoneHelpText = document.getElementById("PhoneHelp");
const Email = document.getElementById("Email");
const EmailHelpText = document.getElementById("EmailHelp");
// const ManufacturerSelected = document.getElementById("ManufacturerSelect");
// const Model = document.getElementById("Model");
// const Cloud = document.getElementById("CloudPackageSelect");
// const CloudHelpText = document.getElementById("CloudHelp");
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

    // Enable the submit button if the form is valid
    if (NameValid && PhoneValid && ProblemDescriptionValid == 1) {
        SubmitRequest.removeAttribute('disabled');
        SubmitButton.innerHTML = 'Podnesite zahtev';
        // SubmitHelpText.innerHTML = ''; // Clear help text when valid
        // SubmitHelp.style.display = 'none'; // Hide the help text
    } else {
        SubmitRequest.setAttribute('disabled', 'true');
        SubmitHelp.style.display = 'block';
        // SubmitHelpText.innerHTML = 'Morate popuniti sva obavezna polja';
    }

// Color valid input
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