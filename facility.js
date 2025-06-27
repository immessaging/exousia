function showDetails(facility) {
    const facilityDetails = document.getElementById('facility-details');
    const facilityContent = document.getElementById('facility-content');

    // Load content dynamically (you can fetch from a server or use predefined content)
    if (facility === 'facility1') {
        facilityContent.innerHTML = '<h2>Facility 1 Details</h2><p>Details about Facility 1...</p>';
    } else if (facility === 'facility2') {
        facilityContent.innerHTML = '<h2>Facility 2 Details</h2><p>Details about Facility 2...</p>';
    }

    facilityDetails.classList.remove('hidden');
}

function hideDetails() {
    const facilityDetails = document.getElementById('facility-details');
    const facilityContent = document.getElementById('facility-content');
    
    facilityContent.innerHTML = ''; // Clear content when closing
    facilityDetails.classList.add('hidden');
}


