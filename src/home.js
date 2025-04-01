        $(document).ready(function(){
            $("#livingRoomSect").hide();
            $("#basementSect").hide();
            $("#accentWallSect").hide();
            $("#livingRoomIndexDiv").click(function(){
                $("#basementSect").hide(1000);
                $("#accentWallSect").hide(1000);
                document.getElementById("livingRoomSect").style.minHeight = "0px";
                $("#livingRoomSect").show(1000);
                document.getElementById("livingRoomSect").style.minHeight = "400px";
                setTimeout(function() {
                    if (!($("#livingRoomSect").is(':hidden'))) {
                        $('html, body').animate({
                            scrollTop: $("#livingRoomSect").offset().top - 20
                        }, 500);
                    }
                }, 450);
            });
            $("#livingRoomClose").click(function(){
                document.getElementById("livingRoomSect").style.minHeight = "0px";
                $("#livingRoomSect").hide(1000);
                document.getElementById("livingRoomSect").style.minHeight = "400px";
            });
            $("#basementIndexDiv").click(function(){
                $("#livingRoomSect").hide(1000);
                $("#accentWallSect").hide(1000);
                document.getElementById("basementSect").style.minHeight = "0px";
                $("#basementSect").show(1000);
                document.getElementById("basementSect").style.minHeight = "400px";
                setTimeout(function() {
                    if (!($("#basementSect").is(':hidden'))) {
                        $('html, body').animate({
                            scrollTop: $("#basementSect").offset().top - 20
                        }, 500);
                    }
                }, 450);
            });
            $("#basementClose").click(function(){
                document.getElementById("basementSect").style.minHeight = "0px";
                $("#basementSect").hide(1000);
                document.getElementById("basementSect").style.minHeight = "400px";
            });
            $("#accentWallIndexDiv").click(function(){
                $("#livingRoomSect").hide(1000);
                $("#basementSect").hide(1000);
                document.getElementById("accentWallSect").style.minHeight = "0px";
                $("#accentWallSect").show(1000);
                document.getElementById("accentWallSect").style.minHeight = "400px";
                setTimeout(function() {
                    if (!($("#accentWallSect").is(':hidden'))) {
                        $('html, body').animate({
                            scrollTop: $("#accentWallSect").offset().top - 20
                        }, 500);
                    }
                }, 450);
            });
            $("#accentWallClose").click(function(){
            document.getElementById("accentWallSect").style.minHeight = "0px";
                $("#accentWallSect").hide(1000);
                document.getElementById("accentWallSect").style.minHeight = "400px";
            });
        });