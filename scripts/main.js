var s = skrollr.init();

//The options (second parameter) are all optional. The values shown are the default values.
skrollr.menu.init(s, {

    //skrollr will smoothly animate to the new position using `animateTo`.
    animate: true,

    //This event is triggered right before we jump/animate to a new hash.
    change: function(newHash, newTopPosition) {
        console.log(newHash);
        console.log(newTopPosition);
    }
});
