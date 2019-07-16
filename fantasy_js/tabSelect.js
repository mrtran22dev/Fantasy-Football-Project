        document.getElementById("defaultOpen").click();                 // default open so both straight & parlay

        function tabSelect(event, tab) {

            var i, tablink, tabcontent;
            sessionStorage.setItem("historyFlag", "0");

            tabcontent = document.getElementsByClassName("tab-content");                        // hide All tab-contents
            for (i = 0;i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            tablink = document.getElementsByClassName("tablink");                               // change ALL tablink colors gray
            for (i = 0; i < tablink.length; i++) {
                tablink[i].style.background = "gray";
            }

            document.getElementById(tab).style.display = "block";                               // show selected tab and change tab and tab-content to color black
            event.currentTarget.style.background = "black";
            event.currentTarget.style.color = "white";
        }