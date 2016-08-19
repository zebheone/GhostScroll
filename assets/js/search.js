        var searchField = $("#search-field").ghostHunter({
                                results         : "#results",
                                info_template   : "<p>{{amount}} found</p>",
                                result_template : "<a href='{{link}}'>{{title}}</a>  ",
                            rss       : "/rss",
                            zeroResultsInfo     : false,
                            onKeyUp   : true 
                          });

        function clearResults() {
          searchField.clear();
        }
