
document.getElementById("searchbutton").addEventListener("click", function(event) {
    console.log(event); //logging mouseEvent of the website in the console
    event.preventDefault(); //preventDefault prevents the website from reloading when u press the button
    $("#resultContainer").empty();
    let searchvalue = document.getElementById("animetitle").value;
    getData(searchvalue);
    
});


function getData(searchvalue) {
    fetch('https://api.jikan.moe/v3/search/anime?q='+searchvalue)
    .then(response => response.json())
    .then(result => {
        console.log(result.results);
    var results = result.results;
    for (i=0; i<results.length; i++){
        var animes = results[i];
        console.log(animes);

        $("#resultContainer").append (`
        <div class="result-card"><!--individual cards-->
            <button id="${animes.mal_id}" class="mButton" onClick="animeD(this.id)">
                <img src="${animes.image_url}" alt="cover_img" class="animeimg">
                <div class="img-txt">${animes.title}</div>
            </button>
            
            
        </div>`
        )

    }
    })
}

function animeD(id) {
    $('.modal').css({'display':'block'})
    fetch('https://api.jikan.moe/v3/anime/'+id)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        var en_title = result.title_english;
        var jp_title = result.title_japanese;
        var poster = result.image_url;
        var status = result.status;
        var eps = result.episodes;
        var date = result.premiered;//
        var show_type = result.type;
        var syn = result.synopsis;
        var studName = result.studios[0].name;//
        var genre_list = [];
        for (i in result.genres) {
            var genres = result.genres[i].name;
            genre_list.push(genres);
        }
        var genre_string = JSON.stringify(genre_list);
        console.log(genre_string);
        if (date==null){
            var date = 'NA';
        }
        if (en_title==null) {
            var en_title='Not found';
        }
        $('.modal-content').append(`
        <div class='split'>
            <img src='${poster}' class='pic'>
        </div>
        <div class'split'>
            <div class='top-part'>
                <ul>
                    <li>${status}</li>
                    <li>•</li>
                    <li>${studName}</li>
                    <li>•</li>
                    <li>${date}</li>
                </ul>
            </div>
            <div class='en_name'>${en_title}</div>
            <div class='jp_name'>${jp_title}</div>
            <div class='gList'>${genre_list}</div>
            <div class='plot'>${syn}</div>
            
        </div>
        
            `)
        document.getElementById('close').onclick=function() {
            $('.modal').css({'display':'none'})
            $(".modal-content").empty();
            $(".modal-content").append(`<button id="close">x</button>`);
        } 
    })
}


