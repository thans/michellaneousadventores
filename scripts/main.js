(function () {
    window.s = skrollr.init();

    //The options (second parameter) are all optional. The values shown are the default values.
    skrollr.menu.init(s, {

        //skrollr will smoothly animate to the new position using `animateTo`.
        animate: true
    });

    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'MITCHELLaneousAdventores',
        clientId: '1e26032ba6184cc1bce6c4bda3bbf513',
        after: function() {
            var images = document.querySelectorAll("#instafeed > a");
            var instafeed = document.getElementById("instafeed");
            instafeed.innerHTML = "";

            var locations = ["New York", "Philadelphia", "Washington DC", "Toronto"];

            for (var i = images.length - 1; i >= 0; i--) {
                var div = document.createElement("div");
                div.classList.add("photo");
                var deg = Math.floor((Math.random() * 10) + 1);
                deg -= 5;
                var rotate = "rotate(" + deg +  "deg)";
                div.style.webkitTransform = rotate;
                div.style.mozTransform    = rotate;
                div.style.msTransform     = rotate;
                div.style.oTransform      = rotate;
                div.style.transform       = rotate;

                var caption = document.createElement("div");
                caption.classList.add("caption");
                if (locations[i]) {
                    caption.innerHTML = locations[i];
                }


                div.appendChild(images[i]);
                div.appendChild(caption);


                document.getElementById("instafeed").appendChild(div);
            }
            fadeIn(instafeed, 1);
        }
    });
    feed.run();

    function fadeIn(elem, speed){
        if(elem.style){
            elem.style.opacity= '0';
        }
        window.fadetimer= setInterval(function(){
            elem.style.opacity =+ (elem.style.opacity) + .01;
            if(elem.style.opacity > 1){
                clearInterval(fadetimer);
            }
        }, speed);
    }

    $('body').waitForImages(function() {
        s.setScrollTop(0);
        $('.loadingBar .fill').width('100%');
        $('.hiddenLoading').removeClass('hiddenLoading');
        $('.loadingWindow').addClass('hiddenLoading');
    }, function(loaded, count, success) {
        $('.loadingBar .fill').width(100*loaded/count + '%');
        console.log(success);
    });


    function labnolThumb(id) {
        return '<img class="youtubeThumb" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="playButton"></div>';
    }

    function labnolIframe(event) {
        $(this).html($('<iframe src="http://www.youtube.com/embed/' + event.data.id + '?autoplay=1&rel=0&showinfo=0" width="853" height="480" frameborder="0" class="youtubeIframe" allowfullscreen></iframe>'));
    }

    $('.video').each(function() {
        var thiz = $(this);
        var id = thiz.find('.youtubePlayer').data('id');
        thiz.append(labnolThumb(id));
        thiz.click({ id : id }, labnolIframe);
    });
}());
