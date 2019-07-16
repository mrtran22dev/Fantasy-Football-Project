        function storePlayers2() {
            var p = document.getElementsByClassName("team2");
            var pLength;
            var qbCount = 0;
            var rbCount = 0;
            var rxCount = 0;
            var totalCount;
            var checkBoxes = [];
            sessionStorage.setItem("t2Flag", "0");

            function removeTeam2() {
                localStorage.removeItem('qb5');
                localStorage.removeItem('rb6');
                localStorage.removeItem('rb7');
                localStorage.removeItem('wr8');
                localStorage.removeItem('wr9');
            }

            for (j = 0; j < p.length; j++) {                                // outer for loop with j counter was put in later
                pLength = p[j].getElementsByClassName("action");            // p[0] = QB
                for (i = 0; i < pLength.length; i++) {                      // if qbCount < 2, store counter #

                    if (j === 0) {
                        if (pLength[i].checked == true) {
                            qbCount++;
                            checkBoxes.push(i);
                        }
                    } else if (j === 1) {
                        if (pLength[i].checked == true) {
                            rbCount++;
                            checkBoxes.push(i);
                        }
                    } else if (j === 2) {
                        if (pLength[i].checked == true) {
                            rxCount++;
                            checkBoxes.push(i);
                        }
                    }
                }
            }

            totalCount = qbCount + rbCount + rxCount;

            if (qbCount > 1 || rbCount > 2 || rxCount > 2) {
                if (totalCount > 5) {
                    alert("QB = " + qbCount + "\n" + "RB = " + rbCount + "\n" + "RX = " + rxCount + "\n" + "Total selections needs to be <5");
                    checkBoxes = [];
                    removeTeam2();
                } else if (totalCount < 5) {
                    alert("QB = " + qbCount + "\n" + "RB = " + rbCount + "\n" + "RX = " + rxCount + "\n" + "Total selections needs to equal 5");
                    checkBoxes = [];
                    removeTeam2();
                } else {
                    alert("QB = " + qbCount + "\n" + "RB = " + rbCount + "\n" + "RX = " + rxCount + "\n");
                    checkBoxes = [];
                    removeTeam2();
                }
            } else if (totalCount < 5) {
                alert("QB = " + qbCount + "\n" + "RB = " + rbCount + "\n" + "RX = " + rxCount + "\n" + "Total selections needs to equal 5");
                checkBoxes = [];
                removeTeam2();
            } else if (qbCount < 2 && rbCount < 3 && rxCount < 3 && totalCount === 5) {
                alert("All OK");
                points(p, checkBoxes);
                sessionStorage.setItem("t2Flag", "1");
            }
        }