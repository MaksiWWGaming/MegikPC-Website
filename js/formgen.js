// Enhanced Contact Form Generator with Modern Features
$(document).ready(function() {
    const GetLink = window.location.href;
    console.log("Current page link: " + GetLink);

    // Container for the checkboxes
    const checkboxGroupContainer = document.getElementById('RadioGroupContainer');

    // Enhanced service options with icons
    const serviceOptions = [
        { 
            id: 'ServicingCreation', 
            label: 'Zainteresovan sam za servis računara',
            icon: 'fas fa-laptop-medical',
            description: 'Popravka, dijagnostika, čišćenje i održavanje'
        },
        { 
            id: 'WebsiteCreation', 
            label: 'Zainteresovan sam za izradu web sajta',
            icon: 'fas fa-code',
            description: 'Moderni, responsivni sajtovi po meri'
        }
    ];

    serviceOptions.forEach((option, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-option-card';
        serviceCard.style.animationDelay = `${index * 0.1}s`;

        serviceCard.innerHTML = `
            <div class="service-option-content">
                <div class="service-option-icon">
                    <i class="${option.icon}"></i>
                </div>
                <div class="service-option-info">
                    <div class="service-option-label">${option.label}</div>
                    <div class="service-option-description">${option.description}</div>
                </div>
                <div class="service-option-checkbox">
                    <input class="form-check-input modern-checkbox" type="checkbox" 
                           id="${option.id}" name="${option.id}" value="${option.label}">
                </div>
            </div>
        `;

        checkboxGroupContainer.appendChild(serviceCard);

        // Add event listener for dynamic fields with animation
        const checkbox = document.getElementById(option.id);
        checkbox.addEventListener('change', () => {
            if (checkbox.id === 'ServicingCreation') {
                if (checkbox.checked) {
                    addServicingFields(serviceCard);
                } else {
                    removeDynamicFieldById('ServicingFields');
                }
            }
        });
    });

    // Container for dynamic fields
    const dynamicFieldsContainer = document.getElementById('DynamicFieldsContainer');

    // Enhanced function to remove a dynamic field group by its ID
    function removeDynamicFieldById(groupId) {
        const fieldGroup = document.getElementById(groupId);
        if (fieldGroup) {
            fieldGroup.style.animation = 'slideOut 0.3s ease-out forwards';
            setTimeout(() => {
                if (fieldGroup.parentNode) {
                    fieldGroup.remove();
                }
            }, 300);
        }
    }

    // Enhanced function to add Manufacturer and Model inputs for Servicing
    function addServicingFields(serviceCard) {
        const servicingGroup = document.createElement('div');
        servicingGroup.className = 'dynamic-field-group';
        servicingGroup.id = 'ServicingFields';
        servicingGroup.style.animation = 'slideIn 0.3s ease-out';

        servicingGroup.innerHTML = `
            <div class="dynamic-field-header">
                <i class="fas fa-laptop"></i>
                <h4>Podaci o uređaju</h4>
            </div>
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="form-floating">
                        <select class="form-select" id="ManufacturerSelect" name="ManufacturerSelect">
                            <option value="">Izaberite proizvođača uređaja</option>
                            <option value="HP">HP</option>
                            <option value="Dell">Dell</option>
                            <option value="Lenovo">Lenovo</option>
                            <option value="Acer">Acer</option>
                            <option value="Asus">Asus</option>
                            <option value="Apple">Apple</option>
                            <option value="Desktop">Desktop</option>
                            <option value="Nema na listi">Nema na listi</option>
                        </select>
                        <label for="ManufacturerSelect">Proizvođač uređaja</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="Model" name="Model"
                               placeholder="Molimo vas unesite model uređaja">
                        <label for="Model">Model</label>
                    </div>
                </div>
            </div>
        `;

        // Insert the dynamic fields directly after the service card
        serviceCard.parentNode.insertBefore(servicingGroup, serviceCard.nextSibling);
    }

    // Enhanced form elements
    const Name = document.getElementById("Name");
    const NameHelpText = document.getElementById("NameHelp");
    const Phone = document.getElementById("Phone");
    const PhoneHelpText = document.getElementById("PhoneHelp");
    const Email = document.getElementById("Email");
    const EmailHelpText = document.getElementById("EmailHelp");
    const ProblemDescription = document.getElementById("ProblemDescription");
    const ProblemDescriptionHelpText = document.getElementById("ProblemDescriptionHelp");
    const SubmitRequest = document.getElementById("SubmitRequest");
    const ResetRequest = document.getElementById("ResetRequest");

    // Enhanced validation styling
    function updateFieldStyling(field, helpText, isValid) {
        if (isValid) {
            field.classList.add("ValidInput");
            field.classList.remove("InvalidInput");
            helpText.className = "form-help valid";
        } else {
            field.classList.remove("ValidInput");
            field.classList.add("InvalidInput");
            helpText.className = "form-help invalid";
        }
    }

    // Enhanced regex patterns
    let NameRegex = /^[A-Z][a-z]{1,29}$/;
    Name.addEventListener("blur", function(){  
        if (!NameRegex.test(Name.value)) {
            NameHelpText.innerHTML = "Ime počinje sa velikim slovom.";
            updateFieldStyling(Name, NameHelpText, false);
        } else {
            NameHelpText.innerHTML = "";
            updateFieldStyling(Name, NameHelpText, true);
        }
    });

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
            PhoneHelpText.innerHTML = "Telefon u formatu '+38106xxxxxxx'.";
            updateFieldStyling(Phone, PhoneHelpText, false);
        } else {
            PhoneHelpText.innerHTML = "";
            updateFieldStyling(Phone, PhoneHelpText, true);
        }
    });

    let EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    Email.addEventListener("blur", function(){  
        if (Email.value && !EmailRegex.test(Email.value)) {
            EmailHelpText.innerHTML = "Email u formatu 'primer@email.com'.";
            updateFieldStyling(Email, EmailHelpText, false);
        } else {
            EmailHelpText.innerHTML = "";
            if (Email.value) {
                updateFieldStyling(Email, EmailHelpText, true);
            }
        }
    });

    ProblemDescription.addEventListener("blur", function() {
        if (ProblemDescription.value == "") {
            ProblemDescriptionHelpText.innerHTML = "Obavezno opisati problem.";
            updateFieldStyling(ProblemDescription, ProblemDescriptionHelpText, false);
        } else {
            ProblemDescriptionHelpText.innerHTML = "";
            updateFieldStyling(ProblemDescription, ProblemDescriptionHelpText, true);
        }
    });

    // Enhanced form validation
    window.addEventListener("load", function(){
        SubmitRequest.setAttribute('disabled', 'true');
        SubmitRequest.innerHTML = '<i class="fas fa-lock"></i> Popunite sva polja';
    });

    function CheckFormValidity() {
        const NameValid = NameRegex.test(Name.value);
        const PhoneValid = PhoneRegex.test(Phone.value);
        const ProblemDescriptionValid = ProblemDescription.value.trim() !== "";

        console.log("NameValid:", NameValid);
        console.log("PhoneValid:", PhoneValid);
        console.log("ProblemDescriptionValid:", ProblemDescriptionValid);

        if (NameValid && PhoneValid && ProblemDescriptionValid) {
            SubmitRequest.removeAttribute('disabled');
            SubmitRequest.innerHTML = '<i class="fas fa-paper-plane"></i> Pošalji poruku';
            SubmitRequest.classList.add('ready');
        } else {
            SubmitRequest.setAttribute('disabled', 'true');
            SubmitRequest.innerHTML = '<i class="fas fa-lock"></i> Popunite sva polja';
            SubmitRequest.classList.remove('ready');
        }
    }

    // Add event listeners for real-time validation
    Name.addEventListener("input", CheckFormValidity);
    Phone.addEventListener("input", CheckFormValidity);
    ProblemDescription.addEventListener("input", CheckFormValidity);
    ResetRequest.addEventListener("click", function() {
        setTimeout(CheckFormValidity, 100);
    });

    // Enhanced service option interactions
    $(document).on('mouseenter', '.service-option-card', function() {
        $(this).addClass('hovered');
    });
    
    $(document).on('mouseleave', '.service-option-card', function() {
        $(this).removeClass('hovered');
    });

    // Add click event to service-option-card to toggle checkbox
    $(document).on('click', '.service-option-card', function(e) {
        if (!$(e.target).is('.modern-checkbox')) {
            const checkbox = $(this).find('.modern-checkbox');
            const newChecked = !checkbox.prop('checked');
            checkbox.prop('checked', newChecked);
            if (checkbox.attr('id') === 'ServicingCreation') {
                if (newChecked) {
                    addServicingFields($(this)[0]);
                } else {
                    removeDynamicFieldById('ServicingFields');
                }
            }
        }
    });

    // Animate form sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    $('.form-section').each(function() {
        $(this).css('opacity', '0');
        observer.observe(this);
    });

    // Add click effect to submit button
    $('#SubmitRequest').on('click', function() {
        if (!$(this).is(':disabled')) {
            $(this).html('<i class="fas fa-spinner fa-spin"></i> Šalje se...');
        }
    });
});