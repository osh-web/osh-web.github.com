$(function(){
  var boxList = $('.unit');
  boxList.height(getMaxHeight(boxList));

});

function getMaxHeight(domList){
  var uMaxHeight = 0;
  domList.each(function(i){
    var uHeight = $(this).height();
    if (uHeight > uMaxHeight){
      uMaxHeight = uHeight;
    }
  });
  return uMaxHeight;
}
