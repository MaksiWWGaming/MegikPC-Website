$(document).ready(function () {
    const GetLink = window.location.href;
    console.log("Current page link: " + GetLink);

    // Given Services
    const servicesMap = {
        Laptop: [
            "Diagnostics",
            "Replacing parts",
            "Selling parts",
            "Selling chargers", 
            "Outside and inside cleaning",
            "Changing thermal paste",
        ],
        Desktop: [
            "Diagnostics",
            "Changing components",
            "Selling components",
            "Outside and inside cleaning",
            "Changing thermal paste",
            "Putting a desktop together (with yours or ours parts)",
        ],
        Software: [
            "Software problem diagnostics",
            "Activating Windows OS and Office",
            "Office installations",
            "Adobe installations",
            "Updating or installing drivers",
            "Removal of viruses and other malicious programs",
        ],
        Other: [
            "Software problem diagnostics",
            "Removal of viruses and other malicious programs",
            "Disk cloning (transfer OS with all files to another disk)",
            "Data recovery",
            "File type conversion and compression",
            "File transfer from one storage format to another",
        ],
    };

    const notGivenServicesMap = {
        Laptop: [
            "Micro soldering (changing parts on the motherboard)",
            "Removing passwords from devices (iCloud, BIOS, Firmware lock, etc.)",
            "Data recovery from dead disks (using specialized equipment)",
        ],
        Desktop: [
            "Micro soldering (changing parts on the motherboard)",
            "Removing passwords from devices (iCloud, BIOS, Firmware lock, etc.)",
            "Data recovery from dead disks (using specialized equipment)",
        ],
        Software: [
            "Account recovery",
            "Removing passwords from devices (iCloud, BIOS, Firmware lock, etc.)",
        ],
        Other: [
            "Account recovery",
            "Removing passwords from devices (iCloud, BIOS, Firmware lock, etc.)",
        ],
    };

    function loadServices(serviceType, serviceList, targetSelector, listClass) {
        const ul = $("<ul>").addClass(listClass);
        serviceList.forEach(function (item) {
            const li = $("<li>").text(item);
            ul.append(li);
        });
        $(targetSelector).append(ul);
    }
    

    if (document.querySelector(".Laptop")) {
        console.log("Load laptop services");
        loadServices("Laptop", servicesMap.Laptop, ".YesLaptop", "checkmarks");
        loadServices("Laptop", notGivenServicesMap.Laptop, ".NoLaptop", "crossmarks");
    } 
    if (document.querySelector(".Desktop")) {
        console.log("Load desktop services");
        loadServices("Desktop", servicesMap.Desktop, ".YesDesktop", "checkmarks");
        loadServices("Desktop", notGivenServicesMap.Desktop, ".NoDesktop", "crossmarks");
    }
    if (document.querySelector(".Software")) {
        console.log("Load Software services");
        loadServices("Software", servicesMap.Software, ".YesSoftware", "checkmarks");
        loadServices("Software", notGivenServicesMap.Software, ".NoSoftware", "crossmarks");
    }
    if (document.querySelector(".Other")) {
        console.log("Load other services");
        loadServices("Other", servicesMap.Other, ".YesOther", "checkmarks");
        loadServices("Other", notGivenServicesMap.Other, ".NoOther", "crossmarks");
    }
});
