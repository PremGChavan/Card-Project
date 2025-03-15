document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById("userForm");
    const infoCard = document.getElementById("info-card");

    function loadUserInfo(){
        const storedData = JSON.parse(localStorage.getItem("userInfo"));

        if(storedData && Object.values(storedData).some(value => value.trim) !== "" ) {
            //show user info card
            infoCard.style.display = "block";

            // Update User Info Card
            document.getElementById("displayFname").textContent = storedData.Fname || "N/A";
            document.getElementById("displayLname").textContent = storedData.Lname || "N/A";
            document.getElementById("displayCountry").textContent = storedData.country || "N/A";
            document.getElementById("displayPhone").textContent = storedData.phone || "N/A";
            document.getElementById("displayState").textContent = storedData.state || "N/A";
            document.getElementById("displayCity").textContent = storedData.city || "N/A";
            document.getElementById("displayVillage").textContent = storedData.village || "N/A";

        } else {
            //hide user info card
            infoCard.style.display = "none";
        }
    }
    loadUserInfo();
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const userData = {
            Fname: document.getElementById("firstName").value,
            Lname: document.getElementById("lastName").value,
            country: document.getElementById("country").value,
            phone: document.getElementById("phone").value,
            state: document.getElementById("state").value,
            city: document.getElementById("city").value,
            village: document.getElementById("village").value,
        };
        
        localStorage.setItem("userInfo", JSON.stringify(userData));
        
        loadUserInfo();

        // Clear Form
        form.reset();
        alert("Data Saved Successfully");
    });
});