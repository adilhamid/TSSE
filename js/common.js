function addGridView(items,wide_column, selector, info) {
      
   $.each(items, function(i, value) {
      console.log(value);
      var str = "";
      if(wide_column) {
         str += '<div class="col-sm-6 col-md-5"><div class="thumbnail">';
      } else {
         str += '<div class="col-sm-6 col-md-3"><div class="thumbnail">';
      }   
      var company = value[0].name.split(" ")[0];
      var image = value[0].image;
      
      var rating = value[0].rating;    
      rating = rating.split(" ")[0];
     
      var reviews = value[0].reviews_location;
      console.log(image);
      str += '<h4 class="text-center"><span class="label label-info">' + company + '</span></h4>'
      //str += '<div class=caption>'
      str += '<a href =' + reviews + ' ><img src='+ image + ' class="img-responsive"></a>'
      str += '<p class="text-center"><b> Click image to buy!</b></p>';
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
     
      if(info){
         str += '<p class="text-center">';
         str += (ram + ' Ram' + ',  ' + internal_storage + ',  ' + screen_size +  ',  ' + camera + 'MP');
         str += '</p>';
      }
                
      str += '<div class="row">';
      // TO DO add the ratings
      
      
      str += '<div class="col-md-6 col-xs-6"><a href="' + reviews + '" class="btn btn-success btn-product"><span class="glyphicon glyphicon-book"></span> Reviews</a></div>';
      
      str += '<div class="col-md-6 col-xs-6"><a href="#" class="btn btn-primary btn-product"><span class="glyphicon glyphicon-star"></span> '+ rating + ' / 5.0' +'</a></div>';
      
      str += '</div>';
      
      str += '<br/>';
      
      if(info){
         str += '<label><input type="checkbox" class = "compareCheckbox" value="' + name + '" > Check to compare</label>';   
      }
      
      str += '</div>';    
      
      str += '</div></div>';
      
      $('#'+selector).append(str);
   });
   
   //$('#hola').append('<h3>hola</h3>')
   $('#hola').append('<div class="panel panel-primary"><div class="text-center"><button class="btn btn-primary btn-block" id ="compareButton">Compare</button></div></div>');
   
   // when the comparison button is clicked get the checked values and save it and redirect.
   $('#compareButton').click(function() {
      
      var checkedValues = []; 
      var inputElements = document.getElementsByClassName('compareCheckbox');
      for(var i=0; inputElements[i]; ++i){
         if(inputElements[i].checked){
            checkedValues.push(inputElements[i].value);
            //console.log(inputElements[i].value);
         }
      }
      localStorage.setItem('phones',checkedValues.toString());
      document.location.href = 'compare.html';
   });
}

function addTableView(items) {
    var str = "";
   
    str += '<tr class=info><th></th><th>';
    str += items[0][0].name;
    str += '</th><th>';
    str += items[1][0].name;
    str += '</th><tr>';
    
    str += '<tr><th>RAM</th><th>';
    str += items[0][0].ram;
    str += '</th><th>';
    str += items[1][0].ram;
    str += '</th><tr>';
   
    str += '<tr><th>Internal Storage</th><th>';
    str += items[0][0].internal_storage;
    str += '</th><th>';
    str += items[1][0].internal_storage;
    str += '</th><tr>';
   
    str += '<tr><th>Screen Size</th><th>';
    str += items[0][0].screen_size;
    str += '</th><th>';
    str += items[1][0].screen_size;
    str += '</th><tr>';
   
    str += '<tr><th>Camera</th><th>'
    var camera =  items[0][0].camera.match(/\d+/)[0] + 'MP';
    str += camera;  
    str += '</th><th>';
    camera = items[1][0].camera.match(/\d+/)[0] + 'MP';
    str += camera;
    str += '</th><tr>';
   
   $('#table').append(str);
}