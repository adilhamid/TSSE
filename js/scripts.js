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

function addFilters() {
    // inject the filters  
   $.each(filter_obj, function(i,val) {
      $('#filters').append('<li class="sidebar-brand"><p class="text-primary" id ="heading"><label><b>'+i+'</b></label><p></li>');
      $.each(val, function(inner_i, inner_val) {
         $('#filters').append('<li class="sidebar-brand"><label><input type="checkbox" value="">'+ inner_val + '</label></li>');
      });
      $('#filters').append('<br />');
   });
   
   // add the button for submittind filter
   $('#filters').append('<li class="sidebar-brand"><button type="submit" class="btn btn-primary" id="button">Submit</button></li>');
}
$(function() {
   
   var ref = new Firebase('https://blinding-heat-6421.firebaseio.com/dummy');
   
   // add the header to each page
   $('#header').load('header.html');

  
   
   /* function applyFilters() {         
     var allVals = [];
     $('#filters input:checked').each(function() {
       allVals.push($(this).val());
     });
     console.log (allVals);   
   }
   
   // when the filters are 
   $('#button').click( function(){
      applyFilters();
   }); */
   
   ref.on("value", function(snapshot) {
      console.log(snapshot.val()[0][0].price);
      addFilters();
      addGridView(snapshot.val(), false,"productlist",true);
      
   }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
   });
  
});
