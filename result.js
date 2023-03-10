window.addEventListener('load', () => {


    const params = (new URL(document.location)).searchParams;
    const firstname = params.get('firstname');
    const lastname = params.get('lastname'); 
    const gender = params.get('gender');
    const houseno = params.get('houseno');
    const city = params.get('city');
    const state = params.get('state');
    const country = params.get('country');
    const pincode = params.get('pincode');
    const email = params.get('email');
    const mobile = params.get('mobile');
    
    document.getElementById("result-firstname").innerHTML = firstname;
    document.getElementById("result-lastname").innerHTML = lastname;
    document.getElementById("result-gender").innerHTML = gender;
    document.getElementById("result-houseno").innerHTML = houseno;
    document.getElementById("result-city").innerHTML = city;
    document.getElementById("result-state").innerHTML = state;
    document.getElementById("result-country").innerHTML = country;
    document.getElementById("result-pincode").innerHTML = pincode;
    document.getElementById("result-email").innerHTML = email;
    document.getElementById("result-mobile").innerHTML = mobile;
})
