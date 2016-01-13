Hello! This is a GhostScroll Fork. http://ghostscroll.grmmph.com/
Please READ "Customization" BEFORE USING! Write me if you like it! albi[at]twelvepurplepills.com

=======

# Purple Slimer
<img src="http://twelvepurplepills.com/content/images/pill.png" alt="Purple Pill" />Visit My Blog for a DEMO: http://twelvepurplepills.com

* Ready for Ghost 0.7.4
* OnePage/Multiple Pages hybrid based on {{tags}}.
* Navigation
* Pagination.
* Disqus Comments.
* Site search based on RSS feed. GhostHunter https://github.com/i11ume/ghostHunter/ (clone it to .../assets/js/).
* Tag page with tag header background (Ghost 0.5.8).
* Posts and pages with header background.
* FontAwesome. (with no code, just type @fa-example-icon-text@).
* Microdata out of the box.

## Customization

* Post characters in Index
  
    * file: partials/loop.hbs
    * line 25: {{content characters="700"}} // if tags found, show only 700 characters, else all characters are shown.
    
* Links in navigation left menu
  
    * file: partials/pagination.hbs
  
* Disqus Comments
  
    * file: assets/js/dsq_comments.js and assets/js/dsq_comments_count.js
    * FIRST THING TO DO! line 2: change 'twelvepurplepills' with your Disqus Shortname
    * BEWARE of the unique ID, I don't use it.
  
* GhostHunter

    * You have to git clone GhostHunter project in this dir: .../assets/js/
    * git clone git@github.com:i11ume/ghostHunter.git
    * follow the readme https://github.com/i11ume/ghostHunter/
    
* FontAwesome. Some icons included and ready to use in Ghost editor (just type @fa-example-icon-text@, if you want more edit /assets/js/icons.js and add some from FontAwesome)

* Header images:

    * add a page/post/tag image in order to display it as post header background (from ghost 0.5.2)
    * change your user cover in order to display author cover on your author page
    
* Google webmaster site verification code:

    * Change or remove line 7 in "default.hsb"
    
* Favicon

    * Add your image in the "assets/images" folder and change line 11 in file "default.hbs" if needed


=======

Feel free to use this theme, just write me and let me know! albi[at]twelvepurplepills.com
