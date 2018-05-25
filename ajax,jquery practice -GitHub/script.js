$(function () {
    const search = $("#search");

    $("#search").on("keydown", function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            const data = search.val();

            const xmlHttp = $.ajax({
                url: `https://api.github.com/search/users?q=${data}`,
                method: "GET"
            })

            xmlHttp.done(function (users) {
                const usersList = users.items;
                usersList.forEach(function (user) {
                    const div = $("<div>");
                    const p = $("<p>");
                    p.text(user.login);
                    const avatar = $("<img>");
                    avatar.attr("src", user.avatar_url);
                    div.append(p);
                    div.append(avatar);
                    $("body").append(div);

                }
                );
            })

            xmlHttp.fail(function (jqXHR, textStatus) {
                if(jqXHR.status >=400 && jqXHR.status < 500) {
                const response = JSON.parse(jqXHR.responseText);
                alert(`Wrong input! ${response.message}` );
                }else {
                    if(jqXHR >= 500) {
                        alert(`Ouups, my mistake!`)
                    }
                }


            })
        }
    });

})




