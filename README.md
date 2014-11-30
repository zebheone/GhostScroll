Hello! This is a GhostScroll Fork. http://ghostscroll.grmmph.com/
Please read "Customization" first! Write me if you like it! albi[at]twelvepurplepills.com

=======

# Purple Slimer
Visit My Blog for a DEMO: http://twelvepurplepills.com

* Ready for Ghost 0.5.2
* OnePage/Multiple Pages hybrid based on {{tags}}.
* Disqus Comments.
* Site search based on RSS feed. GhostHunter https://github.com/i11ume/ghostHunter/ (clone it to .../assets/js/)
* tag page
* author page
* Microdata out of the box
* post page with post image as header background

## Customization

* Post characters in Index
  
    * file: partials/loop.hbs
    * line 25: {{content characters="700"}} // if tags found, show only 700 characters, else all characters are shown.
  
* Disqus Comments
  
    * file: assets/js/dsq_comments.js and assets/js/dsq_comments_count.js
    * FIRST THING TO DO! line 2: change 'twelvepurplepills' with your Disqus Shortname
    * BEWARE of the unique ID, I don't use it.
  
* GhostHunter

    * You have to git clone GhostHunter project in this dir: .../assets/js/
    * git clone git@github.com:i11ume/ghostHunter.git
    * follow the readme https://github.com/i11ume/ghostHunter/
  
* GhostScroll basic usage and customization

    * follow the website how-to http://ghostscroll.grmmph.com/

* Header images:

    * add a post image in order to display it as post header background (ghost 0.5.2)
    * upload "post_cover.jpg" (ghost 0.5.1)  / "tag_cover.jpg" / "page_cover.jpg" to "/content/images/" folder in order to display different cover images
    * Change your user cover in order to display Author cover on your Author page
    
* Google webmaster site verification code:

    * Change or remove line 7 in "default.hsb"
    
* Footer logo

     * Change or remove line 41 in "default.hsb" <img src="/content/images/pill.png" alt="Purple Pill" />

=======

Feel free to use this theme, just write me and let me know! albi[at]twelvepurplepills.com
