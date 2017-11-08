<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
      <title></title>
      <!-- Bootstrap -->
      <link href="{{url('/')}}/firebase/css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" href="{{url('/')}}/firebase/style.css">
      <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->

      <script src="https://www.gstatic.com/firebasejs/3.7.5/firebase.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.2.0/jquery-confirm.min.css">


   </head>
   <body>



@yield("content")
<script src="{{url('/')}}/firebase/js/jquery-3.2.0.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB45uCs9ukCMUL8Usi2r0i3rVigL73UJ3Q"></script>
<script>

function draw_circle() {
  var marker_circle_radius = Number($("#marker_radius").val());

  if(isNaN(marker_circle_radius)){
    marker_circle_radius = 50;
  }
  marker_circle.setRadius(marker_circle_radius);
}

$(window).ready(function(){
if (document.getElementById('map') != null) {
  var uluru = {lat: 40.202033, lng: 44.518471};



  var map = new google.maps.Map(document.getElementById('map'), {

    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
    center: uluru
  });

  myMarker = new google.maps.Marker({
    position: uluru,
    map: map,
    draggable:true,
  });

  // Get the DOM Element
  var myElement = document.getElementById('map');
  // Create a random property that reference the map object
  myElement.gMap = map;

  marker_circle = new google.maps.Circle({
  map: map,
  radius: 50,    // 10 miles in metres
  fillColor: '#AA0000'
 });
 marker_circle.bindTo('center', myMarker, 'position');

$(document).ready(function() {
   google.maps.event.addListener(map, "idle", function(){
   google.maps.event.trigger(map, 'resize');
});

});
google.maps.event.addListener(map, 'click', function(event) {

   myMarker.setPosition(event.latLng);

});

}
})
</script>


      <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
      <!-- Include all compiled plugins (below), or include individual files as needed -->
      <script src="{{url('/')}}/firebase/js/bootstrap.min.js"></script>




<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBY9EFiVrxbNRbZdNxQB2F4rzPuIuVlH_I",
    authDomain: "store-491ea.firebaseapp.com",
    databaseURL: "https://store-491ea.firebaseio.com",
    projectId: "store-491ea",
    storageBucket: "store-491ea.appspot.com",
    messagingSenderId: "718046674824"
  };

  firebase.initializeApp(config);
</script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.2.0/jquery-confirm.min.js"></script>
      <script src="{{url('/')}}/firebase/script.js"></script>
      <script src="{{url('/')}}/firebase/script2.js"></script>
      <script src="{{url('/')}}/firebase/update.js"></script>

      <script src="{{url('/')}}/firebase/questions.js"></script>
   </body>
</html>
