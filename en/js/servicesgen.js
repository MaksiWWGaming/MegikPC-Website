$(document).ready(function () {
    const GetLink = window.location.href;
    console.log("Current page link: " + GetLink);

    // Given Services
    const servicesMap = {
        Laptop: [
            "Diagnostics",
            "Changing parts",
            "Ordering parts",
            "Outside and inside cleaning",
            "Changing thermal paste",
        ],
        Desktop: [
            "Diagnostics",
            "Changing parts",
            "Ordering parts",
            "Outside and inside cleaning",
            "Changing thermal paste",
            "Putting a desktop together (with yours or ours parts)",
        ],
        Online: [
            "Software problem diagnostics",
            "Activating Windows OS i Office",
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
        Online: [
            "Account recovery",
            "Removing passwords from devices (iCloud, BIOS, Firmware lock, etc.)",
        ],
        Other: [
            "Account recovery",
            "Removing passwords from devices (iCloud, BIOS, Firmware lock, etc.)",
        ],
    };

    function loadServices(serviceType, serviceList, targetSelector) {
        const ul = $("<ul>");
        serviceList.forEach(function (item) {
            const li = $("<li>").text(item);
            ul.append(li);
        });
        $(targetSelector).append(ul);
    }

    if (GetLink.includes("Laptop")) {
        console.log("Load laptop services");
        loadServices("Laptop", servicesMap.Laptop, "#GivenServicesList");
        loadServices("Laptop", notGivenServicesMap.Laptop, "#NotGivenServicesList");
    } else if (GetLink.includes("Desktop")) {
        console.log("Load desktop services");
        loadServices("Desktop", servicesMap.Desktop, "#GivenServicesList");
        loadServices("Desktop", notGivenServicesMap.Desktop, "#NotGivenServicesList");
    } else if (GetLink.includes("Online")) {
        console.log("Load online services");
        loadServices("Online", servicesMap.Online, "#GivenServicesList");
        loadServices("Online", notGivenServicesMap.Online, "#NotGivenServicesList");
    } else if (GetLink.includes("Other")) {
        console.log("Load other services");
        loadServices("Other", servicesMap.Other, "#GivenServicesList");
        loadServices("Other", notGivenServicesMap.Other, "#NotGivenServicesList");
    }
});
