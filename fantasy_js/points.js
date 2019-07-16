        function points(p, checkBoxes) {

            var name, getStorage, parseStorage;
            var i = 0;
            var j = 0;
            var k = 0;
            var pos;

            function Players() {                                                        // "constructor functions" method for class declaration
                this.position = "";
                this.name = "";
                this.yards = 0;
                this.td = 0;
                this.etc = 0;
                this.points = 0;

                this.setName = function (p,i,j, checkBoxes) {
                    this.name = p[i].getElementsByClassName("name");
                    this.name = this.name[checkBoxes[j]].innerHTML;
                }
                
                this.setPosition = function (p,i,j, checkBoxes) {
                    this.position = p[i].getElementsByClassName("position");                  //loop p array until end of length to cover all positions/players
                    this.position = this.position[checkBoxes[j]].innerHTML;
                }

                this.setPoints = function () {
                    var tdRange = [0, 6, 12, 18, 24, 30];                                               // qb touchdowns
                    var etcRange = [0, 0, -2, 0, -4, 0, -6, 0, -8, 0];                                  // interception, blocks, fumble
                    var r = Math.floor(Math.random() * tdRange.length);
                    this.yards = Math.floor(Math.random() * (400 - 100)) + 100;                         // qb yards 100-400
                    this.td = tdRange[r];
                    this.etc = etcRange[r];
                    this.points = this.yards + tdRange[r] + etcRange[r];
                }
            }

            if (p[i].classList.contains("team1")) {
                k = 0;                                                              // array 0-4 is for team1 players
            } else {
                k = 5;                                                              // array 5-0 is for team2 players
            }
            
            var play = new Players();

                for (i = 0; i < p.length; i++) {
                    pos = p[i].getElementsByClassName("position");                  //loop p array until end of length to cover all positions/players
                    pos = pos[checkBoxes[j]].innerHTML;
                    if (pos === "QB") {
                        play.setPoints();
                        play.setPosition(p, i, j, checkBoxes);
                        play.setName(p, i, j, checkBoxes);
                        localStorage.setItem('qb' + k, JSON.stringify(play));
                        getStorage = localStorage.getItem('qb' + k);
                        //parseStorage = JSON.parse(getStorage);
                        //document.getElementById("record").innerHTML = getStorage;
                        j++;
                        k++;
                    } else if (pos === "RB" || pos === "WR") {
                        for (var m = 0; m < 2; m++) {
                            play.setPoints();
                            play.setPosition(p, i, j, checkBoxes);
                            play.setName(p, i, j, checkBoxes);
                            if (pos === "RB") {
                                localStorage.setItem('rb' + k, JSON.stringify(play));
                                getStorage = localStorage.getItem('rb' + k);
                                //parseStorage = JSON.parse(getStorage);
                                //document.getElementById("record").innerHTML = getStorage;
                            } else if (pos === "WR") {
                                localStorage.setItem('wr' + k, JSON.stringify(play));
                                getStorage = localStorage.getItem('wr' + k);
                                //parseStorage = JSON.parse(getStorage);
                                //document.getElementById("record").innerHTML += getStorage;
                            }
                            j++;
                            k++;
                        }
                    }
                }
        }