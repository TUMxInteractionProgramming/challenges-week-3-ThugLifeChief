console.log('app is alive');

//Switch Channels
function switchChannel (channelName) {
    console.log('Turning into channel ' + channelName)
    $('#app-bar-name').html(channelName);
    $('#app-bar-location').html(' by <strong><a href="https://map.what3words.com/upgrading.never.helps">upgrading.never.helps</a></strong>');
}