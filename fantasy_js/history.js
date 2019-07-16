        function history() {

            var i = 9;
            var j = 0;
            var textnode, nodeTR, nodeTD;
            var team1 = 0;
            var team2 = 0;
            var player, playerDetailsArray, getStorage, parseStorage;
            
            if (sessionStorage.getItem('t1Flag') === "1" && sessionStorage.getItem('t2Flag') === "1" && sessionStorage.getItem('historyFlag') === "0") {
                //get history
                for (i = 9; i > -1; i--) {                                          // i from 9-5 is team1, 4-0 is team2
                    player = localStorage.key(i);
                    getStorage = localStorage.getItem(player);
                    parseStorage = JSON.parse(getStorage);

                    if (player === 'qb0' || player === 'rb1' || player === 'rb2' || player === 'wr3' || player === 'wr4') {
                        nodeTR = document.createElement("TR");                          // append <TR> element inside <history>
                        nodeTR.setAttribute("id", "t1-record" + j);
                        document.getElementById("team1-table").appendChild(nodeTR);
                        team1 = team1 + parseStorage.points;
                    } else {
                        nodeTR = document.createElement("TR");                          // append <TR> element inside <history>
                        nodeTR.setAttribute("id", "t2-record" + j);
                        document.getElementById("team2-table").appendChild(nodeTR);
                        team2 = team2 + parseStorage.points;
                    }

                    playerDetailsArray = Object.keys(parseStorage);

                    for (k = 0; k < Object.keys(parseStorage).length; k++) {
                        nodeTD = document.createElement("TD");                                      // append <TD> element inside <td id="record-data"+i>
                        textnode = document.createTextNode(parseStorage[playerDetailsArray[k]]);
                        nodeTD.appendChild(textnode);
                        if (player === 'qb0' || player === 'rb1' || player === 'rb2' || player === 'wr3' || player === 'wr4') {
                            document.getElementById("t1-record" + j).appendChild(nodeTD);
                        } else {
                            document.getElementById("t2-record" + j).appendChild(nodeTD);

                        }
                    }
                    j++;
                }

                localStorage.setItem("team1", team1);
                localStorage.setItem("team2", team2);

                var nodeTR1 = document.createElement("TR");
                nodeTR1.setAttribute("id", "t1-total");
                document.getElementById("team1-table").appendChild(nodeTR1);
                var nodeTR2 = document.createElement("TR");                          // append <TR> element inside <history>
                nodeTR2.setAttribute("id", "t2-total");
                document.getElementById("team2-table").appendChild(nodeTR2);

                for (i = 0; i < 4; i++) {                                           // for some reason consolidating these two FOR loops gives does NOT include blank cells on TEAM1 table
                    nodeTD = document.createElement("TD");                          // adding blanks cells on last row for table1 or table2
                    textnode = document.createTextNode("");
                    nodeTD.appendChild(textnode);
                    document.getElementById("t1-total").appendChild(nodeTD);
                }
                for (i = 0; i < 4; i++) {
                    nodeTD = document.createElement("TD");
                    textnode = document.createTextNode("");
                    nodeTD.appendChild(textnode);
                    document.getElementById("t2-total").appendChild(nodeTD);
                }

                if (team1 > team2) {
                    nodeTD = document.createElement("TD");
                    textnode = document.createTextNode("WIN");
                    nodeTD.appendChild(textnode);
                    nodeTD.style.background = "green";
                    document.getElementById("t1-total").appendChild(nodeTD);
                    nodeTD = document.createElement("TD");
                    textnode = document.createTextNode(localStorage.getItem("team1"));
                    nodeTD.appendChild(textnode);
                    document.getElementById("t1-total").appendChild(nodeTD);

                    nodeTD = document.createElement("TD");
                    textnode = document.createTextNode("LOSE");
                    nodeTD.appendChild(textnode);
                    nodeTD.style.background = "red";
                    document.getElementById("t2-total").appendChild(nodeTD);
                    nodeTD = document.createElement("TD");
                    textnode = document.createTextNode(localStorage.getItem("team2"));
                    nodeTD.appendChild(textnode);
                    document.getElementById("t2-total").appendChild(nodeTD);
                } else {
                    nodeTD = document.createElement("TD");
                    textnode = document.createTextNode("LOSE");
                    nodeTD.appendChild(textnode);
                    nodeTD.style.background = "red";
                    document.getElementById("t1-total").appendChild(nodeTD);
                    nodeTD = document.createElement("TD");
                    textnode = document.createTextNode(localStorage.getItem("team1"));
                    nodeTD.appendChild(textnode);
                    document.getElementById("t1-total").appendChild(nodeTD);

                    nodeTD = document.createElement("TD");
                    textnode = document.createTextNode("WIN");
                    nodeTD.appendChild(textnode);
                    nodeTD.style.background = "green";
                    document.getElementById("t2-total").appendChild(nodeTD);
                    nodeTD = document.createElement("TD");
                    textnode = document.createTextNode(localStorage.getItem("team2"));
                    nodeTD.appendChild(textnode);
                    document.getElementById("t2-total").appendChild(nodeTD);
                }
                
                sessionStorage.setItem("historyFlag", "1");

            } else if (sessionStorage.getItem("t1Flag") === "1" && sessionStorage.getItem("t2Flag") === "1" && sessionStorage.getItem("historyFlag") === "1") {
                // do nothing
            } else {
                alert("Need to play Team 1 and/or Team 2 first");
            }
        }
