$(function(){
  var cash = $("#cash");
  var res = $("#res");
  var comm = $("#comm");
  var ind = $("#ind");
  $("#buyres").click(function(){
    if(cash.val() == "$100,000" && res.val() == "0"){
      cash.html("$999,900");
      res.html("1");
    } else if(cash.val() == "$999,900" && res.val() == "1"){
      cash.html("$999,800");
      res.html("2");
    } else if(cash.val() == "$999,800" && res.val() == "2"){
      cash.html("$999,700");
      res.html("3");
    } else if(cash.val() == "$999,700" && res.val() == "3"){
      cash.html("$999,600");
      res.html("4");
    } else if(cash.val() == "$999,600" && res.val() == "4"){
      cash.html("$999,500");
      res.html("5");
    } else if(cash.val() == "$999,500" && res.val() == "5"){
      cash.html("$999,400");
      res.html("6");
    }
  });
  $(document).ready(function(){
    $("#save").click(function(){
      $.cookie('cash', cash.val(), { expires : 7 });
      $.cookie('res', res.val(), { expires : 7 });
      $.cookie('comm', comm.val(), { expires : 7 });
      $.cookie('ind', ind.val(), { expires : 7 });
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
