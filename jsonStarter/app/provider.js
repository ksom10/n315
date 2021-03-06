var PROVIDER = (function(){
    var _allData = {};
    
    var _getData = function(callback){
        
            $.getJSON("../data/data.json", function(data){
                //this is when it is complete
                //console.log('success', data);
            }).fail(function(error){
                //console.log('err', error.status + ' ', error.statusText);
            }).done(function(data){
                console.log('done', data.MainNav);
                _allData = data;
                callback();
                //populateNav(data.MainNav);
            });
    };

    var _getMainNav = function(){
        return _allData.MainNav;
    }

    var _getPageContent = function(nameOfPage){
        
        $.each(_allData.Pages, function(idx, page){
            if(nameOfPage === page.pageName){
                console.log("gPC match " + page.pageName);
                console.log("gPC match " + page.content);
                content = page.content;
            }

        });
        return content;
    };
    return {
        getData: _getData,
        getMainNav: _getMainNav,
        getPageContent: _getPageContent
    }

})();