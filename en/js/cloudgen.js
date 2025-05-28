const packages = [
  { name: "MegikCloud™ Lite", storage: "Storage: 100GB", price: "200RSD /monthly", devices: "2 devices", description: "Perfect for important documents", image: "/img/Pages/Cloud/cloud lite.webp" },
  { name: "MegikCloud™ Plus", storage: "Storage: 200GB", price: "350RSD /monthly", devices: "5 devices",description: "Perfect for important projects", image: "/img/Pages/Cloud/cloud plus.webp" },
  { name: "MegikCloud™ Max", storage: "Storage: 1TB", price: "1000RSD /monthly", devices: "10 devices",description: "Made for all of your needs", image: "/img/Pages/Cloud/cloud max.webp" },
  { name: "MegikCloud™ Custom", storage: "Storage: By deal", price: "By deal /monthly", devices: "Device number based on deal",description: "Need more space?", image: "/img/Pages/Cloud/cloud custom.webp" }
];

const container = document.getElementById("packages-container");

packages.forEach(pkg => {
  const col = document.createElement("div");
  col.className = "col-md-3 mb-4";

  col.innerHTML = `
    <div class="card h-100 shadow-sm cloud-package">
        <img src="${pkg.image}" class="card-img-top mt-3" alt="${pkg.name}">
        <div class="card-body d-flex flex-column">
          <h4 class="card-title text-center mb-3">${pkg.name}</h4>
          <h5 class="text-center card-text mb-3">${pkg.storage}</h6>
          <h6 class="text-center mb-3">${pkg.price}<br>${pkg.devices}</h6>
          <p class="card-text text-center flex-grow-1">${pkg.description}</p>
          <div class="text-center mt-3">
              <button class="btn btn-primary select-package-btn" data-package="${pkg.name}">Choose ${pkg.name}</button>
          </div>
        </div>
    </div>
  `;
  container.appendChild(col);
});

// Event listener for button clicks
document.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('select-package-btn')) {
    const selectedPackage = e.target.getAttribute('data-package');
    showCloudContactForm(selectedPackage);
  }
});

function showCloudContactForm(selectedPackage) {
  // Remove old form if exists
  removeCloudContactForm();

  const formContainer = document.createElement('div');
  formContainer.setAttribute('id', 'CloudContactForm');
  formContainer.classList.add('mt-4', 'p-3', 'border', 'rounded');

  const formTitle = document.createElement('h5');
  formTitle.innerText = `Zatražite ${selectedPackage}`;
  formContainer.appendChild(formTitle);

  const form = document.createElement('form');
  form.setAttribute('action', 'https://api.web3forms.com/submit');
  form.setAttribute('method', 'POST');

  // Hidden access key
  const accessKey = document.createElement('input');
  accessKey.type = 'hidden';
  accessKey.name = 'access_key';
  accessKey.value = 'b640e18c-455f-484f-a010-eb89e77883d1';
  form.appendChild(accessKey);

  // Hidden subject
  const subjectInput = document.createElement('input');
  subjectInput.type = 'hidden';
  subjectInput.name = 'subject';
  subjectInput.value = `Request for ${selectedPackage}`;
  form.appendChild(subjectInput);

  // Hidden package field
  const packageInput = document.createElement('input');
  packageInput.type = 'hidden';
  packageInput.name = 'Package';
  packageInput.value = selectedPackage;
  form.appendChild(packageInput);

  // Helper function to create labeled inputs
  function createField(labelText, inputType, inputName, placeholder) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('mb-3');

    const label = document.createElement('label');
    label.innerHTML = `${labelText} <span style="color:red">*</span>`;
    wrapper.appendChild(label);

    const input = document.createElement('input');
    input.type = inputType;
    input.name = inputName;
    input.placeholder = placeholder;
    input.classList.add('form-control');
    input.required = true;
    wrapper.appendChild(input);

    const helpText = document.createElement('small');
    helpText.classList.add('form-text', 'text-danger');
    helpText.innerHTML = '';
    wrapper.appendChild(helpText);

    form.appendChild(wrapper);

    return { input, helpText };
  }

  // Name field
  const { input: nameInput, helpText: nameHelp } = createField('Name', 'text', 'Name', 'Your name');

  // Phone field
  const { input: phoneInput, helpText: phoneHelp } = createField('Phone Number', 'tel', 'Phone Number', '+38106XXXXXXX');

  // Email field
  const { input: emailInput, helpText: emailHelp } = createField('Email', 'email', 'Email', 'email@example.com');

  // Extra info
  const { input: DescriptionInput, helpText: DescriptionHelp } = createField('Extra information', 'textarea', 'Extra information', 'Write here any information you deem necessary');

  // Submit button
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.classList.add('btn', 'btn-primary', 'w-100');
  submitBtn.innerText = 'Send request';
  submitBtn.disabled = true;
  form.appendChild(submitBtn);

  // Regex validations
  const nameRegex = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{1,29}$/;
  const phoneRegex = /^\+\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Add initial phone prefix on focus
  let isFirstFocusPhone = true;
  phoneInput.addEventListener('focus', () => {
    if (isFirstFocusPhone) {
      phoneInput.value = "+38106";
      isFirstFocusPhone = false;
    }
  });

  // Validation function
  function checkFormValidity() {
    const nameValid = nameRegex.test(nameInput.value);
    const phoneValid = phoneRegex.test(phoneInput.value);
    const emailValid = emailRegex.test(emailInput.value);

    // Update Name field styling + help
    if (nameValid) {
      nameInput.classList.remove("InvalidInput");
      nameInput.classList.add("ValidInput");
      nameHelp.innerHTML = '';
    } else {
      nameInput.classList.remove("ValidInput");
      nameInput.classList.add("InvalidInput");
      nameHelp.innerHTML = "Name must begin with a capital letter.";
    }

    // Update Phone field styling + help
    if (phoneValid) {
      phoneInput.classList.remove("InvalidInput");
      phoneInput.classList.add("ValidInput");
      phoneHelp.innerHTML = '';
    } else {
      phoneInput.classList.remove("ValidInput");
      phoneInput.classList.add("InvalidInput");
      phoneHelp.innerHTML = "Phone starts with <i>+country code</i>";
    }

    // Update Email field styling + help
    if (emailValid) {
      emailInput.classList.remove("InvalidInput");
      emailInput.classList.add("ValidInput");
      emailHelp.innerHTML = '';
    } else {
      emailInput.classList.remove("ValidInput");
      emailInput.classList.add("InvalidInput");
      emailHelp.innerHTML = "Email format as 'email@example.com'";
    }

    // Enable or disable button
    if (nameValid && phoneValid && emailValid) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  // Event listeners for validation
  [nameInput, phoneInput, emailInput].forEach(input => {
    input.addEventListener('blur', checkFormValidity);
    input.addEventListener('input', checkFormValidity);
  });

  formContainer.appendChild(form);
  container.parentNode.insertBefore(formContainer, container.nextSibling);
}

// Function to remove the form
function removeCloudContactForm() {
  const form = document.getElementById('CloudContactForm');
  if (form) form.remove();
}
