        function signOnBox() {
            document.getElementById("login-dropdown").classList.toggle("show");
        }

        function loginVerify() {
            var user = document.getElementById("user").value;
            var pw = document.getElementById("pw").value;
            var i, nav_admin, nav_user;

            user = user.toLowerCase();

            if (user === "daffy" && pw === "duck") {
                alert("USER: DAFFY");
                nav_admin = document.getElementById("admin");
                nav_user = document.getElementsByClassName("main");
                nav_admin.style.display = "none";
                for (i = 0; i < nav_user.length; i++) {
                    nav_user[i].style.width = "20%";
                }
            } else if (user === "admin" && pw === "admin") {
                alert("USER: ADMIN");
                nav_admin = document.getElementById("admin");
                nav_user = document.getElementsByClassName("main");
                nav_admin.style.display = "block";
                for (i = 0; i < nav_user.length; i++) {
                    nav_user[i].style.width = "15%";
                }
            } else {
                alert("Sign in is blank or invalid");
                nav_admin = document.getElementById("admin");
                nav_user = document.getElementsByClassName("main");
                nav_admin.style.display = "none";
                for (i = 0; i < nav_user.length; i++) {
                    nav_user[i].style.width = "20%";
                }
            }
        }