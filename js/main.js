console.log('app is alive');

//Switch Channels
function switchChannel (channelName) {
    console.log('Turning into channel ' + channelName);
    $('#app-bar-name').html(channelName);
    $('#app-bar-location').html(' by <strong><a href="https://map.what3words.com/upgrading.never.helps">upgrading.never.helps</a></strong>');
    $('#app-bar-star img').attr('src','http://ip.lfe.mw.tum.de/sections/star-o.png');
}

function changeappbarstar () {
    $('#app-bar-star img').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');
}

function selectTab (selectedTab){
    $('#tab-bar button').removeClass('selected');
    $('#'+selectedTab).addClass('selected');
    console.log('new selected Tab is ' + selectedTab);
}

function toggleEmojibox(){
    $('#emojis').toggle();
}