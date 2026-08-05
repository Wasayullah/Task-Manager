

let allUsers = JSON.parse(
    localStorage.getItem("users")
) || [];




const Signup = () => {



    const signupName = document.getElementById("signupName");
    const signupEmail = document.getElementById("signupEmail");
    const signupPass = document.getElementById("signupPass");




    const name = signupName.value.trim();
    const email = signupEmail.value.trim().toLowerCase();
    const password = signupPass.value.trim();




    if (name === "" || email === "" || password === "") {

        Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Please fill all fields."
        });

        return;
    }



    if (password.length < 6) {

        Swal.fire({
            icon: "warning",
            title: "Weak Password",
            text: "Password must be at least 6 characters."
        });

        return;
    }



    const userExists = allUsers.find(
        user => user.email === email
    );


    if (userExists) {

        Swal.fire({
            icon: "error",
            title: "Email Already Exists",
            text: "Please use another email."
        });

        return;
    }




    const newUser = {

        name: name,

        email: email,

        password: password

    };




    allUsers.push(newUser);




    localStorage.setItem(
        "users",
        JSON.stringify(allUsers)
    );




    Swal.fire({
        icon: "success",
        title: "Account Created!",
        text: "You can now login.",
        confirmButtonText: "Go to Login"
    }).then(() => {

        window.location.href = "login.html";

    });



    signupName.value = "";
    signupEmail.value = "";
    signupPass.value = "";

}




const Login = () => {



    const loginEmail = document.getElementById("loginEmail");
    const loginPass = document.getElementById("loginPass");




    const email = loginEmail.value.trim().toLowerCase();
    const password = loginPass.value.trim();




    if (email === "" || password === "") {

        Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Please fill all fields."
        });

        return;
    }




    const user = allUsers.find(

        user =>
            user.email === email &&
            user.password === password

    );




    if (user) {



        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(user)
        );


        Swal.fire({

            icon: "success",

            title: "Login Successful!",

            text: `Welcome ${user.name}`,

            timer: 1500,

            showConfirmButton: false

        }).then(() => {

            window.location.href = "index.html";

        });

    }




    else {

        Swal.fire({

            icon: "error",

            title: "Login Failed",

            text: "Invalid email or password."

        });

    }

}