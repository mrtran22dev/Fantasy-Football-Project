        function playerDisplay1() {
            
            var i, p, t;

            t = document.getElementsByClassName("team1");
            p = document.getElementById("team1");
            p = p.getElementsByTagName("p");

            if (document.getElementById("all-1").checked === true) {
                document.getElementById("qb1").checked = true;
                document.getElementById("rb1").checked = true;
                document.getElementById("wr1").checked = true;
            }

            for (i = 0; i < t.length; i++) {
                t[i].style.display = "none";
                p[i].style.display = "none";
            }
            
            if (document.getElementById("qb1").checked === true) {
                t = document.getElementsByClassName("qb1");
                for (i = 0; i < t.length; i++) {
                    t[i].style.display = "table";
                }
                p[0].style.display = "block";
            }

            if (document.getElementById("rb1").checked === true) {
                t = document.getElementsByClassName("rb1");
                for (i = 0; i < t.length; i++) {
                    t[i].style.display = "table";
                }
                p[1].style.display = "block";
            }

            if (document.getElementById("wr1").checked === true) {
                t = document.getElementsByClassName("wr1");
                for (i = 0; i < t.length; i++) {
                    t[i].style.display = "table";
                }
                p[2].style.display = "block";
            }
        }