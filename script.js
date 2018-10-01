$(function(){
  $(document).ready(function(){
    $("#save").click(function(){
      var cash = $("#cash").val();
      var res = $("#red").val();
      var comm = $("#comm").val();
      var ind = $("#ind").val();
      $.cookie('cash', cash, { expires : 7 });
      $.cookie('res', res, { expires : 7 });
      $.cookie('comm', comm, { expires : 7 });
      $.cookie('ind', ind, { expires : 7 });
      });
      checkCookieValues();
  });
  function checkCookieValues(){
    if ($.cookie('cash')!=="undefined") {
      $("#cash").html($.cookie('cash'));
      $("#res").html($.cookie('res'));
      $("#comm").html($.cookie('comm'));
      $("#ind").html($.cookie('ind'));
    }
  }
});
