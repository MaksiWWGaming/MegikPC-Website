// Enhanced Contact Form Generator with Modern Features
$(document).ready(function() {
    const GetLink = window.location.href;
    console.log("Current page link: " + GetLink);

    // Container for the checkboxes using jQuery
    const $checkboxGroupContainer = $('#RadioGroupContainer');

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
            description: 'Moderni i responsive sajtovi po želji'
        }
    ];

    serviceOptions.forEach((option, index) => {
        const $serviceCard = $('<div>').addClass('service-option-card').css('animationDelay', `${index * 0.1}s`);

        const cardHTML = `
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

        $serviceCard.html(cardHTML);
        $checkboxGroupContainer.append($serviceCard);

        // Add event listener for dynamic fields with animation using jQuery
        const $checkbox = $(`#${option.id}`);
        $checkbox.on('change', function() {
            if (option.id === 'ServicingCreation') {
                if ($(this).prop('checked')) {
                    addServicingFields($serviceCard[0]);
                } else {
                    removeDynamicFieldById('ServicingFields');
                }
            } else if (option.id === 'WebsiteCreation') {
                if ($(this).prop('checked')) {
                    addWebsiteFields($serviceCard[0]);
                } else {
                    removeDynamicFieldById('WebsiteFields');
                }
            }
            CheckFormValidity();
        });
    });

    // Enhanced function to remove a dynamic field group by its ID using jQuery
    function removeDynamicFieldById(groupId) {
        const $fieldGroup = $(`#${groupId}`);
        if ($fieldGroup.length) {
            $fieldGroup.css('animation', 'slideOut 0.3s ease-out forwards');
            setTimeout(() => {
                $fieldGroup.remove();
            }, 300);
        }
    }

    // Enhanced function to add Manufacturer and Model inputs for Servicing using jQuery
    function addServicingFields(serviceCard) {
        const $servicingGroup = $('<div>')
            .addClass('dynamic-field-group')
            .attr('id', 'ServicingFields')
            .css('animation', 'slideIn 0.3s ease-out');

        const servicingHTML = `
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

        $servicingGroup.html(servicingHTML);

        // Insert the dynamic fields directly after the service card using jQuery
        $(serviceCard).after($servicingGroup);
    }

    // Enhanced function to add Website Type and other inputs for Website Creation using jQuery
    function addWebsiteFields(serviceCard) {
        const $websiteGroup = $('<div>')
            .addClass('dynamic-field-group')
            .attr('id', 'WebsiteFields')
            .css('animation', 'slideIn 0.3s ease-out');

        const websiteHTML = `
            <div class="dynamic-field-header">
                <i class="fas fa-code"></i>
                <h4>Osnovne specifikacije web sajta</h4>
            </div>
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="form-floating">
                        <select class="form-select" id="WebsiteType" name="WebsiteType">
                            <option value="">Izaberite tip sajta</option>
                            <option value="Business">Poslovni sajt</option>
                            <option value="Portfolio">Portfolio</option>
                            <option value="Blog">Blog</option>
                            <option value="E-commerce">E-commerce (online prodavnica)</option>
                            <option value="Other">Drugo</option>
                        </select>
                        <label for="WebsiteType">Tip web sajta</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating">
                        <select class="form-select" id="NumberOfPages" name="NumberOfPages">
                            <option value="">Izaberite broj stranica</option>
                            <option value="1-5">1-5 stranica</option>
                            <option value="6-10">6-10 stranica</option>
                            <option value="11-20">11-20 stranica</option>
                            <option value="20+">20+ stranica</option>
                        </select>
                        <label for="NumberOfPages">Broj stranica</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating">
                        <select class="form-select" id="Budget" name="Budget">
                            <option value="">Izaberite budžet</option>
                            <option value="Ispod 500€">Ispod 500€</option>
                            <option value="500€ - 1.000€">500€ - 1.000€</option>
                            <option value="1.000€ - 2.000€">1.000€ - 2.000€</option>
                            <option value="Više od 2.000€">Više od 2.000€</option>
                        </select>
                        <label for="Budget">Budžet</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating">
                        <select class="form-select" id="Deadline" name="Deadline">
                            <option value="">Izaberite rok</option>
                            <option value="1-2 weeks">1-2 nedelje</option>
                            <option value="3-4 weeks">3-4 nedelje</option>
                            <option value="1-2 months">1-2 meseca</option>
                            <option value="2-3 months">2-3 meseca</option>
                        </select>
                        <label for="Deadline">Željeni rok izrade</label>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-floating">
                        <textarea class="form-control" id="WebsiteFeatures" name="WebsiteFeatures"
                                placeholder="Nabrojte željene funkcionalnosti..." style="height: 100px"></textarea>
                        <label for="WebsiteFeatures">Željene funkcionalnosti (npr. kontakt forma, galerija, blog, online prodavnica)</label>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-floating">
                        <textarea class="form-control" id="AdditionalInfo" name="AdditionalInfo"
                                placeholder="Dodatne informacije..." style="height: 100px"></textarea>
                        <label for="AdditionalInfo">Dodatne informacije (dizajn preference, postojeći sajt, itd.)</label>
                    </div>
                </div>
            </div>
        `;

        $websiteGroup.html(websiteHTML);

        // Insert the dynamic fields directly after the service card using jQuery
        $(serviceCard).after($websiteGroup);
    }

    // Enhanced form elements using jQuery
    const $Name = $("#Name");
    const $NameHelpText = $("#NameHelp");
    const $Phone = $("#Phone");
    const $PhoneHelpText = $("#PhoneHelp");
    const $Email = $("#Email");
    const $EmailHelpText = $("#EmailHelp");
    const $ProblemDescription = $("#ProblemDescription");
    const $ProblemDescriptionHelpText = $("#ProblemDescriptionHelp");
    const $SubmitRequest = $("#SubmitRequest");
    const $ResetRequest = $("#ResetRequest");

    // Enhanced validation styling using jQuery
    function updateFieldStyling(field, helpText, isValid) {
        if (isValid) {
            field.addClass("ValidInput").removeClass("InvalidInput");
            helpText.attr("class", "form-help valid");
        } else {
            field.removeClass("ValidInput").addClass("InvalidInput");
            helpText.attr("class", "form-help invalid");
        }
    }

    // Enhanced regex patterns
    let NameRegex = /^[A-Z][a-z]{1,29}$/;
    $Name.on("blur", function(){  
        if (!NameRegex.test($Name.val())) {
            $NameHelpText.html("Ime počinje sa velikim slovom.");
            updateFieldStyling($Name, $NameHelpText, false);
        } else {
            $NameHelpText.html("");
            updateFieldStyling($Name, $NameHelpText, true);
        }
    });

    let PhoneRegex = /^\+38106\d{7,8}$/;
    let IsFirstFocus = true;
    $Phone.on("focus", function() {
        if (IsFirstFocus) {
            $Phone.val("+38106");
            IsFirstFocus = false;
        }
    });
    
    $Phone.on("blur", function(){  
        if (!PhoneRegex.test($Phone.val())) {
            $PhoneHelpText.html("Telefon u formatu '+38106xxxxxxx'.");
            updateFieldStyling($Phone, $PhoneHelpText, false);
        } else {
            $PhoneHelpText.html("");
            updateFieldStyling($Phone, $PhoneHelpText, true);
        }
    });

    let EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    $Email.on("blur", function(){  
        if ($Email.val() && !EmailRegex.test($Email.val())) {
            $EmailHelpText.html("Email u formatu 'primer@email.com'.");
            updateFieldStyling($Email, $EmailHelpText, false);
        } else {
            $EmailHelpText.html("");
            if ($Email.val()) {
                updateFieldStyling($Email, $EmailHelpText, true);
            }
        }
    });

    $ProblemDescription.on("blur", function() {
        if ($ProblemDescription.val() == "") {
            $ProblemDescriptionHelpText.html("Obavezno opisati problem.");
            updateFieldStyling($ProblemDescription, $ProblemDescriptionHelpText, false);
        } else {
            $ProblemDescriptionHelpText.html("");
            updateFieldStyling($ProblemDescription, $ProblemDescriptionHelpText, true);
        }
    });

    // Enhanced form validation using jQuery
    $(window).on("load", function(){
        $SubmitRequest.attr('disabled', 'true').html('<i class="fas fa-lock"></i> Popunite sva polja');
    });

    function CheckFormValidity() {
        const NameValid = NameRegex.test($Name.val());
        const PhoneValid = PhoneRegex.test($Phone.val());
        const ProblemDescriptionValid = $ProblemDescription.val().trim() !== "";
        const atLeastOneServiceChecked = $('#ServicingCreation').is(':checked') || $('#WebsiteCreation').is(':checked');

        console.log("NameValid:", NameValid);
        console.log("PhoneValid:", PhoneValid);
        console.log("ProblemDescriptionValid:", ProblemDescriptionValid);
        console.log("atLeastOneServiceChecked:", atLeastOneServiceChecked);

        if (NameValid && PhoneValid && ProblemDescriptionValid && atLeastOneServiceChecked) {
            $SubmitRequest.removeAttr('disabled').html('<i class="fas fa-paper-plane"></i> Pošalji poruku').addClass('ready');
        } else {
            $SubmitRequest.attr('disabled', 'true').html('<i class="fas fa-lock"></i> Popunite sva polja').removeClass('ready');
        }
    }

    // Add event listeners for real-time validation using jQuery
    $Name.on("input", CheckFormValidity);
    $Phone.on("input", CheckFormValidity);
    $ProblemDescription.on("input", CheckFormValidity);
    $ResetRequest.on("click", function() {
        setTimeout(CheckFormValidity, 100);
    });

    // Enhanced service option interactions using jQuery
    $(document).on('mouseenter', '.service-option-card', function() {
        $(this).addClass('hovered');
    });
    
    $(document).on('mouseleave', '.service-option-card', function() {
        $(this).removeClass('hovered');
    });

    // Add click event to service-option-card to toggle checkbox using jQuery
    $(document).on('click', '.service-option-card', function(e) {
        if (!$(e.target).is('.modern-checkbox')) {
            const $checkbox = $(this).find('.modern-checkbox');
            const newChecked = !$checkbox.prop('checked');
            $checkbox.prop('checked', newChecked);
            if ($checkbox.attr('id') === 'ServicingCreation') {
                if (newChecked) {
                    addServicingFields(this);
                } else {
                    removeDynamicFieldById('ServicingFields');
                }
            } else if ($checkbox.attr('id') === 'WebsiteCreation') {
                if (newChecked) {
                    addWebsiteFields(this);
                } else {
                    removeDynamicFieldById('WebsiteFields');
                }
            }
        }
    });

    // Animate form sections on scroll using jQuery
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).css('animation', 'fadeInUp 0.6s ease-out forwards');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    $('.form-section').each(function() {
        const $this = $(this);
        $this.css('opacity', '0');
        observer.observe(this);
    });

    // Add click effect to submit button using jQuery
    $SubmitRequest.on('click', function() {
        if (!$SubmitRequest.is(':disabled')) {
            $SubmitRequest.html('<i class="fas fa-spinner fa-spin"></i> Poruka poslata...');
            setTimeout(() => {
                $SubmitRequest.prop('disabled', true).html('<i class="fas fa-lock"></i> Popunite sva polja');
            }, 2000);
        }
    });
});