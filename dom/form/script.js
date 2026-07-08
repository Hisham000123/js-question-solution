const form = document.getElementById("frm");
const error = document.querySelectorAll(".error");

form.addEventListener("input", () => {
    error.forEach(err => err.innerText = "");
    document.getElementById("submitted").innerText = "";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const el = document.register;

    const firstname = el.fname.value.trim();
    const lastname = el.lname.value.trim();
    const phoneno = el.phone.value.trim();
    const email = el.mail.value.trim();
    const password = el.pass.value;
    const cpassword = el.cpass.value;

    const freg = /^[a-zA-Z]{4,24}$/;
    const lreg = /^[a-zA-Z]{2,25}$/;
    const preg = /^\d{10}$/;
    const mailreg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    // Validation
    if (!firstname) {
        error[0].innerText = "First name is required";
        return;
    }

    if (!freg.test(firstname)) {
        error[0].innerText = "Invalid first name";
        return;
    }

    if (!lastname) {
        error[1].innerText = "Last name is required";
        return;
    }

    if (!lreg.test(lastname)) {
        error[1].innerText = "Invalid last name";
        return;
    }

    if (!phoneno) {
        error[2].innerText = "Phone number is required";
        return;
    }

    if (!preg.test(phoneno)) {
        error[2].innerText = "Enter a valid 10-digit phone number";
        return;
    }

    if (!email) {
        error[3].innerText = "Email is required";
        return;
    }

    if (!mailreg.test(email)) {
        error[3].innerText = "Invalid email address";
        return;
    }

    if (!password) {
        error[4].innerText = "Password is required";
        return;
    }

    if (!passreg.test(password)) {
        error[4].innerText = "Password is not strong enough";
        return;
    }

    if (!cpassword) {
        error[5].innerText = "Confirm password is required";
        return;
    }

    if (password !== cpassword) {
        error[5].innerText = "Passwords do not match";
        return;
    }

    // Get existing users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate email
    const emailExists = users.some(user => user.email === email);

    if (emailExists) {
        error[3].innerText = "Email already registered";
        return;
    }

    // Create new user
    const newUser = {
        firstname,
        lastname,
        phone: phoneno,
        email,
        password
    };

    // Add user
    users.push(newUser);

    // Save users
    localStorage.setItem("users", JSON.stringify(users));

    // Success message
    const submitted = document.getElementById("submitted");
    submitted.innerText = "Form submitted successfully";
    submitted.style.color = "green";


    form.reset();
});


