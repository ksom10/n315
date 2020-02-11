

function initNav (){
    $('a').click(function(e){
        var btnID = e.currentTarget.id;
        loadContent(btnID);
    })
}

function loadContent(pageName){
    console.log('loadContent ' + pageName);

    var pageContent = PROVIDER.getPageContent(pageName);
    console.log('loadContent ' + pageContent);

    $(".content").html(pageContent);

    initNav();

}


function populateNav() {
    var nav = PROVIDER.getMainNav();

    $.each(nav, function(idx, link){
        //$("nav").append(`<a href=" ${link.path} "> ${link.linkName}</a>`);
        $('nav').append(`<a id="${link.path}">${link.linkName}</
        a>`);
    });

    loadContent("home");
}



function dataIsLoaded(){
    populateNav();
}



$(document).ready(function() {
    PROVIDER.getData(dataIsLoaded);
});

