        var searchField = $("#search-field").ghostHunter({
                                results         : "#results",
                                info_template   : "<p>{{amount}} Post/s found</p>",
                                result_template : "<a href='{{link}}'>{{title}}</a>  ",
                            rss       : "/rss",
                            //Enable the "search as you type" by uncommenting the following line
                            zeroResultsInfo     : true,
                            onKeyUp   : true 
                          });

        function clearResults() {
          searchField.clear();
        }
