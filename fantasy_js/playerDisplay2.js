        function playerDisplay2() {

            var i, p, t;

            t = document.getElementsByClassName("team2");
            p = document.getElementById("team2");
            p = p.getElementsByTagName("p");

            if (document.getElementById("all-2").checked === true) {
                document.getElementById("qb2").checked = true;
                document.getElementById("rb2").checked = true;
                document.getElementById("wr2").checked = true;
            }

            for (i = 0; i < t.length; i++) {
                t[i].style.display = "none";
                p[i].style.display = "none";
            }

            if (document.getElementById("qb2").checked === true) {
                t = document.getElementsByClassName("qb2");
                for (i = 0; i < t.length; i++) {
                    t[i].style.display = "table";
                }
                p[0].style.display = "block";
            }

            if (document.getElementById("rb2").checked === true) {
                t = document.getElementsByClassName("rb2");
                for (i = 0; i < t.length; i++) {
                    t[i].style.display = "table";
                }
                p[1].style.display = "block";
            }

            if (document.getElementById("wr2").checked === true) {
                t = document.getElementsByClassName("wr2");
                for (i = 0; i < t.length; i++) {
                    t[i].style.display = "table";
                }
                p[2].style.display = "block";
            }
        }