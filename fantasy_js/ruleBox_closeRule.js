
        function ruleBox() {
            var rulebox = document.getElementById("rulebox");
            var c = document.getElementById("container");
            //var modal1 = document.getElementsByClassName("modal-container");

            rulebox.style.display = "block";
            c.style.opacity = "0.5";
        }

        function closeRule() {
            var rulebox = document.getElementById("rulebox");
            var c = document.getElementById("container");
            // var modal1 = document.getElementsByClassName("modal-container");

            rulebox.style.display = "none";
            c.style.opacity = "1";
        }
