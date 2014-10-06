Hello! This is a GhostScroll Fork. http://ghostscroll.grmmph.com/

=======

# GhostScroll Purple Version
Visit My Blog for a DEMO: http://twelvepurplepills.com

* OnePage/Multiple Pages hybrid based on {{tags}}.
* Disqus Comments.
* Site search based on RSS feed. (GhostHunter) https://github.com/i11ume/ghostHunter/
* tag page
* single page

## Customization

* Post charachters in Index
  
    file: partials/loop.hbs
    line 25: {{content characters="700"}} // if tags found, show only 700 characters, else all characters are shown.
  
* Disqus Comments
  
file: assets/js/dsq_comments.js and assets/js/dsq_comments_count.js
    line 2: change 'twelvepurplepills' with your Disqus Shortname
line 3: beware of the unique ID
  
* GhostHunter

    You have to git clone GhostHunter project in this dir: assets/js/ghostHunter/
    git clone git@github.com:i11ume/ghostHunter.git
    follow the readme https://github.com/i11ume/ghostHunter/
  
* GhostScroll basic usage and customization

    follow the website how-to http://ghostscroll.grmmph.com/

* Header images:

    upload "post_cover.jpg" / "tag_cover.jpg" / "page_cover.jpg" to "/content/images/" folder in order to display cover images

=======

Feel free to use this theme, just write me and let me know! albi[at]twelvepurplepills.com
