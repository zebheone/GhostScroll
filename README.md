Hello! This is a GhostScroll Fork. http://ghostscroll.grmmph.com/
Great performance and overall improvement thanks to @hbaughman
Please READ "Customization" BEFORE USING! Write me if you like it, problems, features! albi[at]twelvepurplepills.com

=======

# Purple Slimer
<img src="http://twelvepurplepills.com/content/images/pill.png" alt="Purple Pill" />Visit My Blog for a DEMO: http://twelvepurplepills.com

* Ready for Ghost 0.9.0
* OnePage/Multiple Pages hybrid based on {{tags}}.
* Navigation.
* Pagination.
* Featured Post.
* Disqus Comments.
* Site search based on RSS feed. GhostHunter https://github.com/i11ume/ghostHunter/ (clone it to .../assets/js/). ghostHunter search engine now uses Ghost Public Api. enable Public Api from Settings/Labs
* Tag page with tag header background.
* Posts and pages with header background.
* FontAwesome.
* Microdata out of the box.

## Customization

* Post characters in Index
  
    * file: partials/loop.hbs
    * line 25: {{content characters="700"}} // if tags found, show only 700 characters, else all characters are shown.
    
* Links in left navigation menu
  
    * file: partials/pagination.hbs
  
* Disqus Comments
  
    * create a Disqus account and get your Disqus Shortname
    * file: assets/js/dsq_comments.js AND assets/js/dsq_comments_count.js
    * FIRST THING TO DO! line 2: change 'twelvepurplepills' with your Disqus Shortname
    * BEWARE of the unique ID, I don't use it.
  
* GhostHunter

    * ghostHunter search engine now uses Ghost Public Api. enable Public Api from Settings/Labs
    * You have to git clone GhostHunter project in this dir: .../assets/js/
    * git clone git@github.com:i11ume/ghostHunter.git
    * follow the readme https://github.com/i11ume/ghostHunter/
    
* FontAwesome. now From CDN, just type any @fa-example-icon-text@ in ghost editor http://fontawesome.io/icons/

* Header images:

    * add a page/post/tag image in order to display it as post header background
    * change your user cover in order to display author cover on your author page
    
* Google webmaster site verification code:

    * Change or remove line 7 in "default.hsb"
    
* Favicon

    * Add your "favicon.ico" in the "assets/images" folder and change line 11 in file "default.hbs" if needed


=======

Feel free to use this theme, just write me and let me know! albi[at]twelvepurplepills.com
