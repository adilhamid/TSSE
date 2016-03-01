// globals
//filters 
var price_obj = {0:' Below $100',1:' $100 - $200',2:' $200 - $300',3:' Above $300'};
var ram_obj = {0:' 1GB',1:' 2GB',2:' 4GB'};
var screen_size_obj = {0:' 4.3 - 4.7 inch', 1:' 4.7 - 5.7 inch', 2:' Above 5.7 inch'};
var camera_obj = {0:' Upto 2MP', 1:' 2.0 - 5.0 MP', 2:' 5.0 - 8.0 MP',3:' Above 8.0 MP'};
var internal_storage = {0:' 16 GB', 1:' 32 GB', 2:' 64 GB'};
var filter_obj = {'Price':price_obj,
                  'RAM':ram_obj,
                  'Screen Size':screen_size_obj,
                  'Camera':camera_obj,
                  'Internal Storage':internal_storage
                 };

$(function() {
   
   // add the header to each page
   $('#header').load('header.html');
   
   // inject the filters  
   $.each(filter_obj, function(i,val) {
      $('#filters').append('<li class="sidebar-brand"><p class="text-primary" id ="heading"><label><b>'+i+'</b></label><p></li>');
      $.each(val, function(inner_i, inner_val) {
         $('#filters').append('<li class="sidebar-brand"><label><input type="checkbox" value="">'+ inner_val + '</label></li>');
      });
      $('#filters').append('<br/>');
   });
});
