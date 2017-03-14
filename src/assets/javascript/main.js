(function() {

  var feed = new Instafeed({
    get: 'user',
    userId: 353224793,
    accessToken: '353224793.1677ed0.2b9078e2ba574b35bc312d7d95d304ca',
    sortBy: 'most-recent',
    limit: 10,
    resolution: 'low_resolution',
    template: '<div class="fl relative insta" style="width: 20%; padding-left: 4px; padding-right: 4px" ><span class="absolute pa2 raleway fw5 ttu" style="font-size: 12px; left: 15px; bottom: 15px; background-color: rgba(255,255,255,.7);"><i class="fa fa-heart brand" aria-hidden="true"></i> {{likes}}</span><a class="link dim" href="{{link}}" target="_blank"><img src="{{image}}"/></a></div>'
  });
  feed.run();


})();