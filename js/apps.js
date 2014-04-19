  /*
   * App functions
   */
  var $ = jQuery.noConflict();
  $(document).ready(function getcontent() {
	  
	   $.ajax({
          url: 'http://db.flutx.com/finance_th/settoday/json_getdata.php',
          type: "GET",
          dataType: "jsonp",
          async: false,
          success: function(data) {
			 $.each(data, function(i, item) {
                  $("#"+i).html(item);
              })
			  
			setTimeout(getcontent, 5 * 60 * 1000);
          },
          error: function(error) {
              ErrorFunction();
          }
      });
	  
  });
  $(document).ready(function ads() {
      $.ajax({
          url: 'http://ad.flutx.com/finance_th/json_ads.php',
          type: "GET",
          dataType: "jsonp",
          async: false,
          success: function(data) {
              $("#fullstage").html('<div id="adscontent" style="position:fixed;top:20%;left:5%;width:85%;z-index:10001;background-color:#FFFFFF;padding: 10px 10px 10px 10px;";><ul><li><h3>Please Rate this App</h3></li><li><h4>Give me a 5 stars rating !</h4></li><li><a href="#" onclick="getcontent();" class="button_12 green green_borderbottom radius4">Get it</a><a href="#" onclick="closeAds();" class="button_12 blue blue_borderbottom radius4">No Thanks!</a></li></ul></div>');
              $.each(data, function(i, item) {
                  $("#footer").html(item.ads);
              })
              setTimeout(ads, 60 * (60 * 1000));
          },
          error: function(error) {
              ErrorFunction();
          }
      });
  });

  function closeAds() {
      document.getElementById('fullstage').style.display = "none";
  }
  
  function rate_app_link() {
      window.open("http://www.w3schools.com");
  }
  $(document).ready(function apprecommend() {
      $.ajax({
          url: 'http://ad.flutx.com/finance_th/json_appsuggest.php',
          type: "GET",
          dataType: "jsonp",
          async: false,
          success: function(data) {
              $("#recommend_app").empty();
              $.each(data, function(i, item) {
				
                  $("#recommend_app").append('<a href='+item.iphonelink+'><div class="service_box"><div class="services_icon"><img src="'+item.thumbnail+'" alt="" title="" /></div><div class="service_content"><h4>'+item.name+'</h4>'+item.description+'adsf erw afdew dcvva erwe vzcxs erwew</div><div class="service_right"><i class="fa fa-angle-right fa-3x"></i></div></div></a>');
				  
				  
              })
			  swiperNested2.reInit();
              setTimeout(apprecommend, 60 * (60 * 1000));
          },
          error: function(error) {
              ErrorFunction();
          }
      });
  });
  
  function panel1() {
	swiperParent.swipeTo(1);
  }