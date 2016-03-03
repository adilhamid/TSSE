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

function addGridView(items) {
   $.each(items, function(i, value) {
      console.log(value);
      var str = '<div class="col-sm-6 col-md-3"><div class="thumbnail">';
      var company = value[0].name.split(" ")[0];
      var image = value[0].image;
      console.log(image);
      str += '<h4 class="text-center"><span class="label label-info">' + company + '</span></h4>'
      //str += '<div class=caption>'
      str += '<img src='+ image + ' class="img-responsive">'
      
      str += '<div class="caption"><div class="row">'
      str += '<div class="col-md-6 col-xs-6">';
      var name = "";
      var full_name = value[0].name.split(" ");
      
      for(var i = 1; i < full_name.length; ++i){
         name += (full_name[i] + " ");
      }
      str += '<h4>' + name + '</h4>';
      str += '</div>';
      
      str += '<div class="col-md-6 col-xs-6">';
      str += '<h4>' + value[0].price + '</h4>';
      str += '</div></div>';
      
      var internal_storage = value[0].internal_storage;
      var ram = value[0].ram;
      var screen_size = value[0].screen_size;
      var camera =  value[0].camera.match(/\d+/)[0];
      str += '<p class="text-center">';
      str += (ram + ' Ram' + ',  ' + internal_storage + ',  ' + screen_size +  ',  ' + camera + 'MP');
      str += '</p>';
          
      str += '<div class="row">';
      // TO DO add the ratings
      
      var rating = value[0].rating;    
      rating = rating.split(" ")[0];
     
      var reviews = value[0].reviews_location;
      
      str += '<div class="col-md-6 col-xs-6"><a href="' + reviews + '" class="btn btn-success btn-product"><span class="glyphicon glyphicon-book"></span> Reviews</a></div>';
      
      str += '<div class="col-md-6 col-xs-6"><a href="#" class="btn btn-primary btn-product"><span class="glyphicon glyphicon-star"></span> '+ rating + ' / 5.0' +'</a></div>';
      
      str += '</div>';
      
      str += '<br/>';
      str += '<label><input type="checkbox" value=""> Check to compare</label>';
      
      str += '</div>';    
      
      str += '</div></div>';
      
      $('#productlist').append(str);
   });
   //$('#hola').append('<h3>hola</h3>')
   $('#hola').append('<div class="panel panel-primary"><div class="text-center"><a class="btn btn-primary btn-block">Compare</a></div></div>');
}
$(function() {
   
   var ref = new Firebase('https://blinding-heat-6421.firebaseio.com/dummy');
   
   // add the header to each page
   $('#header').load('header.html');

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
      addGridView(snapshot.val());
      
   }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
   });
   
});
