
function findMyLocation(choosedLocation,type) {
	if(type==1) {
		choosedLocation+=" country";
	}	else if (type==2) {
		choosedLocation+=" province";
	}	else if (type==3) {
		var country = $("#country").val();
		choosedLocation+=" city, ";
		choosedLocation+=country;
	}
	//Get google maps from maps div by accessing the divs gMap custom property created by me
	gmap = document.getElementById('map').gMap;

	//Start geocoder to focus the map by country name
	var geocoder = new google.maps.Geocoder();

	//Find coordinates of the country using google geocoder service and center map around it
	geocoder.geocode( { 'address': choosedLocation}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
					gmap.setCenter(results[0].geometry.location);
					gmap.fitBounds(results[0].geometry.bounds);
					myMarker.setPosition(results[0].geometry.location);
			} else {
			console.log("Geocode was not successful for the following reason: " + status);
			}
			return; // The function returns nothing
		});
	};

// Choose a country in <<add new checkpoint>> section
$('#country').on('change', function () {
	$( "#regions option" ).remove();

	var country = $("#country").val();

   switch(country){
		case 'Armenia':

		//Create an array containing regions of Armenia
		regions = ['Lori','Tavush','Shirak','Gegharkunik','Kotayk','Armavir','Ararat','Aragatsotn','Vayots_Dzor','Syunik','Arcax','Yerevan'];

		// Find country location using predefined function
		findMyLocation(country,1);

		break;
		case 'defval':
		break;
		default:
		$.alert({
		title: 'Alert!',
		content: 'Specify the country !',
		});
	}

	$("#regions").append("<option value='defval' selected='selected'>Region</option>");
	for (var i = 0; i < regions.length; i++){
    	$("#regions").append("<option value="+regions[i]+">"+regions[i]+"</option>");

	}
})

$("#country").change(function(){
	var countrydef = $( this ).val();
	if (countrydef == "defval") {
		$( "#regions option" ).remove();
		$( "#cities option" ).remove();
		$("#regions").append("<option value='defval' selected='selected'>Region</option>");
		$("#cities").append("<option value='defval' selected='selected'>City</option>");
	}
})





// Choose a region in <<add new checkpoint>> section
$('#regions').on('change', function() {
	$( "#cities option" ).remove();
	var region = $("#regions").val();

	//Get google maps from maps div by accessing the divs gMap custom property created by me
	gmap = document.getElementById('map').gMap;

	//Start geocoder to focus the map by country name
	var geocoder = new google.maps.Geocoder();

   switch(region){
		case 'Lori':
		//Create an array containing cities of Lori
		city = ['Vanadzor','Alaverdi','Stepanavan','Spitak','Axtala','Shamlux','Tashir'];

		// Find region location using predefined function
		findMyLocation(region,2);
		break;
		case 'Tavush':
		//Create an array containing cities of Lori
		city = ['Ijevan','Dilijan','Berd','Noyemberyan','Ayrum'];

		// Find region location using predefined function
		findMyLocation(region,2);
		break;
		case 'Shirak':
		//Create an array containing cities of Shirak
		city = ['Gyumri','Artik','Maralik'];

		// Find region location using predefined function
		findMyLocation(region,2);
		break;
		case 'Gegharkunik':
		//Create an array containing cities of Gegharkunik
		city = ['Sevan','Chambarak','Vardenis','Martuni','Gavar'];

		// Find region location using predefined function
		findMyLocation(region,2);
		break;
		case 'Kotayk':
		//Create an array containing cities of Kotayk
		city = ['Hrazdan','Abovyan','Tsaxkadzor','Charencavan','Nor_Hachin','Byureghavan'];

		// Find region location using predefined function
		findMyLocation(region,2);
    break;
    case 'Armavir':
		//Create an array containing cities of Armavir
		city = ['Armavir','Vagharshapat'];

		// Find region location using predefined function
		findMyLocation(region,2);
    break;
    case 'Ararat':
		//Create an array containing cities of Ararat
		city = ['Artashat','Ararat','Vedi','Masis'];

		// Find region location using predefined function
		findMyLocation(region,2);
    break;
    case 'Aragatsotn':
		//Create an array containing cities of Aragatsotn
		city = ['Ashtarak','Aparan','Talin'];

		// Find region location using predefined function
		findMyLocation(region,2);
    break;
    case 'Vayots_Dzor':
		//Create an array containing cities of Vayots_Dzor
		city = ['Yeghegnadzor','Vayq','Jermuk'];

		// Find region location using predefined function
		findMyLocation(region,2);
    break;
    case 'Syunik':
		//Create an array containing cities of Syunik
		city = ['Kapan','Goris','Qajaran','Sisian','Megri','Dastakert'];

		// Find region location using predefined function
		findMyLocation(region,2);

		//Create an array containing cities of Syunik

		break;
		case 'defval':
		break;
		default:
		$.alert({
		title: 'Alert!',
		content: 'Error 404 NOT FOUND !',
		});
	}
	$("#cities").append("<option value='defval' selected='selected'>City</option>");
	var regdef = $("#regions").val();
	if (regdef === "defval") {
		$( "#cities option" ).remove();
		$("#cities").append("<option value='defval' selected='selected'>City</option>");
	}
	for(var i = 0; i < city.length; i++){
    	$("#cities").append("<option value="+city[i]+">"+city[i]+"</option>");
	}
})

$("#regions").change(function(){
	var regdef = $( this ).val();
	if (regdef == "defval") {
		$( "#cities option" ).remove();
		$("#cities").append("<option value='defval' selected='selected'>City</option>");
	}
})

// End choose a region

// Choose a city in <<add new checkpoint>> section
$('#cities').on('change', function () {
	//Get the name of chosen city
	var city = $("#cities").val();
	// Find country location using predefined function
	findMyLocation(city,3);
});

$('#country2').on('change', function() {
    $( "#regions2 option" ).remove();
    var country2 = $("#country2").val();
   switch(country2){
        case 'Armenia':
        regions = ['Lori','Tavush','Shirak','Gegharkunik','Kotayk','Armavir','Ararat','Aragatsotn','Vayots_Dzor','Syunik','Arcax','Yerevan'];
        break;

				case 'defval':
				break;

        default:
        alert('Insert Country');
    }
		$("#regions2").append("<option value='defval'>Region</option>");
    for(var i = 0; i < regions.length; i++){
        $("#regions2").append("<option value="+regions[i]+">"+regions[i]+"</option>");

    }
})

$("#country2").change(function(){
	var countrydef = $( this ).val();
	if (countrydef == "defval") {
		$( "#regions2 option" ).remove();
		$( "#cities2 option" ).remove();
		$("#regions2").append("<option value='defval' selected='selected'>Region</option>");
		$("#cities2").append("<option value='defval' selected='selected'>City</option>");
	}
})

 // End Deside Regions

$('#regions2').on('change', function() {
    $( "#cities2 option" ).remove();
   var region2 = $("#regions2").val();
   switch(region2){
        case 'Lori':
        city = ['Vanadzor','Alaverdi','Stepanavan','Spitak','Axtala','Shamlux','Tashir'];
        break;
        case 'Tavush':
        city = ['Ijevan','Dilijan','Berd','Noyemberyan','Ayrum'];
        break;
        case 'Shirak':
        city = ['Gyumri','Artik','Maralik']
        break;
        case 'Gegharkunik':
        city = ['Sevan','Chambarak','Vardenis','Martuni','Gavar']
        break;
        case 'Kotayk':
        city = ['Hrazdan','Abovyan','Tsaxkadzor','Charencavan','Nor_Hachin','Byureghavan']
        break;
        case 'Armavir':

        city = ['Armavir','Vagharshapat']
        break;
        case 'Ararat':

        city = ['Artashat','Ararat','Vedi','Masis']
        break;
        case 'Aragatsotn':

        city = ['Ashtarak','Aparan','Talin']
        break;
        case 'Vayots_Dzor':

        city = ['Yeghegnadzor','Vayq','Jermuk',]
        break;
        case 'Syunik':

        city = ['Kapan','Goris','Qajaran','Sisian','Megri','Dastakert']
        break;

				case 'defval':
				break;

        default:
        alert('no');
    }
    $("cities2 option[selected='selected']").attr("selected", "selected");
		$("#cities2").append("<option value='defval'>City</option>");
    for(var i = 0; i < city.length; i++){
        $("#cities2").append("<option value="+city[i]+">"+city[i]+"</option>");
    }
})

$("#country2").change(function(){
	var countrydef = $( this ).val();
	if (countrydef == "defval") {
		$( "#cities2 option" ).remove();
		$("#cities2").append("<option value='defval' selected='selected'>City</option>");
	}
})

// End Deside Cities



    // File Transfer
		filer = [];
		var numPhotos;
    var fileButton = document.getElementById('fileButton');


    // Listen for file selection
		$("#fileButton").on("click", function(){
	  	fileButton.addEventListener('change', function(e) {
					$('#progress > *').remove();
					$('#upload_pics > *').remove();

					// Get files
					filer=e.target.files;

					numPhotos = e.target.files.length;
					var uploader=[];

					for(i = 0; i < numPhotos; i++){
						var uploaderID='uploader'+i;

						var myid = "myimg"+i;
						$("#upload_file #upload_pics").append("<div class='col-xs-6 col-md-3'><a class='thumbnail'><img src='' id="+myid+" alt='uploading'></a></div>")
						document.getElementById(myid).src = URL.createObjectURL(event.target.files[i]);

						uploader[i] = document.getElementById(uploaderID);
					}
				})


  		})  // End FIle Selection



var task = [];
/* Send data to DataBase */
var firebaseRef = firebase.database().ref();
$("#send_data").click(function(){

	// Get Inputs Values



    var country = $("#country").val();
		if(country == null || country === "defval"){

			$.alert({
	    title: 'Alert!',
	    content: 'Choose the country !',
			});
			return;
		}else{
			country = country.slice(0,3);
			country = country.toLowerCase();
		}
    var reg = $("#regions").val();
		if(reg == null || reg === "defval"){

			$.alert({
	    title: 'Alert!',
	    content: 'Choose the region !',
			});
			return;
		}else{
			reg = reg.slice(0,3);
			reg = reg.toLowerCase();
		}
    var city = $("#cities").val();

		if(city == null || city === "defval"){
			$.alert({
	    title: 'Alert!',
	    content: 'Choose the city !',
			});
			return;
		}else{
			city = city.slice(0,3);
			city = city.toLowerCase();
		}
		var marker_radius = parseFloat($("#marker_radius").val());
		if(isNaN(marker_radius)){
			$.alert({
	    title: 'Alert!',
	    content: 'Fill the marker radius !',
			});
			return;
		}
    var arm_title = $("#arm_title").val();
		if(arm_title == ""){
			$.alert({
	    title: 'Alert!',
	    content: 'Fill the arm title !',
			});
			return;
		}
    var rus_title = $("#rus_title").val();
		if(rus_title == ""){
			$.alert({
	    title: 'Alert!',
	    content: 'Fill the rus title !',
			});
			return;
		}
    var eng_title = $("#eng_title").val();
		if(eng_title == ""){
			$.alert({
	    title: 'Alert!',
	    content: 'Fill the eng title !',
			});
			return;
		}
		var arm_desc = $("#arm_desc").val();
		if(arm_desc == ""){
			$.alert({
	    title: 'Alert!',
	    content: 'Fill the arm desc !',
			});
			return;
		}
		var rus_desc = $("#rus_desc").val();
		if(rus_desc == ""){
			$.alert({
	    title: 'Alert!',
	    content: 'Fill the rus desc !',
			});
			return;
		}

		var eng_desc = $("#eng_desc").val();
		if(eng_desc == ""){
			$.alert({
	    title: 'Alert!',
	    content: 'Fill the eng desc !',
			});
			return;
		}

    var score = parseFloat($("#score").val());
		if(isNaN(score)){
			$.alert({
	    title: 'Alert!',
	    content: 'Fill the score !',
			});
			return;
		}

		if( numPhotos == undefined ){
			$.alert({
			title: 'Alert!',
			content: 'Insert pictures !',
			});
			return;
		}

    var marker_url = $("#marker_url").val();

    var difficulty = Number($("#difficulty").val());

    // id

  var test_pos = myMarker.getPosition();
	var test_lat = test_pos.lat();
	var test_lng = test_pos.lng();
    var location_array = [test_lat, test_lng];
    var test_lat_str = test_lat.toString().replace(".",",");
    var test_lng_str = test_lng.toString().replace(".",",");
	var id_name = test_lat_str + "_" + test_lng_str;
    id_name = country.slice(0,3) + "_" + reg.slice(0,3) + "_" + city.slice(0,3) + "_" +  id_name;


    // Get Checkpoint Type

    var point_type = [];
    $.each($("input[name='point_type']:checked"), function(){
        point_type.push($(this).val());
    });
		if( point_type.length  == 0){
			$.alert({
	    title: 'Alert!',
	    content: 'Choose the type !',
			});
			return;
		}
		if( point_type.length  == 0){
			$.alert({
	    title: 'Alert!',
	    content: 'Choose the type !',
			});
			return;
		}

// Put Images To Storage
		var storageRef = [];
		for(i = 0; i < numPhotos; i++){
					storageRef[i] = firebase.storage().ref('checkpoints/' + country + "/" + reg + "/" +city+ "/" + id_name + "_" + i);
					task[i] = storageRef[i].put(filer[i]);
					firebaseRef.child("checkpoints").child(country + "/"+reg + "/" + city + "/" + id_name + "/photos/" + i).set(i);
		}


    // Insert Into DB

    firebaseRef.child("checkpoints/" + country + "/" +reg + "/" + city + "/" + id_name + "/location").set(location_array);
    firebaseRef.child("checkpoints/" + country + "/" +reg + "/" + city + "/" + id_name + "/checkpoints_type").set(point_type);

    firebaseRef.child("checkpoints/" + country + "/" +reg + "/" + city + "/" + id_name + "/scores").child("score_type_1").set(score);
    firebaseRef.child("checkpoints/" + country + "/" +reg + "/" + city + "/" + id_name + '/marker_url').set(marker_url);
    firebaseRef.child("checkpoints/" + country + "/" +reg + "/" + city + "/" + id_name + '/marker_radius').set(marker_radius);
    firebaseRef.child("checkpoints/" + country + "/" +reg + "/" + city + "/" + id_name + '/difficulty').set(difficulty);
		firebaseRef.child("checkpoints/" + country + "/" +reg + "/" + city + "/" + id_name + '/numphotos').set(numPhotos);
    // Add title
    firebaseRef.child("checkpoints/" + country + "/" +reg + "/" + city + "/" + id_name + "/title").child("arm_title").set(arm_title);
    firebaseRef.child("checkpoints/" + country + "/" +reg + "/" + city + "/" + id_name + "/title").child("rus_title").set(rus_title);
    firebaseRef.child("checkpoints/" + country + "/" +reg + "/" + city + "/" + id_name + "/title").child("eng_title").set(eng_title);

    // Add desc

    firebaseRef.child("checkpoints").child(country).child(reg).child(city).child(id_name).child("description").child("arm_desc").set(arm_desc);
    firebaseRef.child("checkpoints").child(country).child(reg).child(city).child(id_name).child("description").child("rus_desc").set(rus_desc);

    firebaseRef.child("checkpoints").child(country).child(reg).child(city).child(id_name).child("description").child("eng_desc").set(eng_desc);
		$("#upload_pics > *").remove();
		firebaseRef.child("checkpoints_id").child(id_name).set(0);
		document.getElementById("add_checkpoint").reset();
		$.alert({
    title: 'Alert!',
    content: 'Checkpoint added succesfully!',
		});

}) // End send data
function remove_add_checkpoint_photos(){
	$("#upload_pics > *").remove();
}


/* Get data from DB */
$('#cities2').on('change', function() {
     $( ".point_row_in" ).remove();

    var country2 = $("#country2").val().toLowerCase().slice(0,3);
    var region2 = $("#regions2").val().toLowerCase().slice(0,3);
    city2 = $("#cities2").val().toLowerCase().slice(0,3);
    const cityRef = firebaseRef.child("checkpoints/" + country2 +"/"+ region2 +"/"+ city2 +"/");
    idRef = cityRef.orderByKey().limitToFirst(1000);
})
$(".questions_table").on("change", function(){

	idRef.on("value", function(snapshot){
			$( ".point_row_in" ).remove();
			var allCheckpointsInCity = snapshot.val();
			var checkpointIds = Object.getOwnPropertyNames(allCheckpointsInCity);

			var num_checkpoints = checkpointIds.length;
			for(i = 0; i <= num_checkpoints-1; i++) {      //object-i mej mi hat avel detal ka, vor@ id chi===>-1

					var checkpointIdss = Object.getOwnPropertyNames(allCheckpointsInCity);
					var checkpointName=checkpointIds[i];
					temporary_checkpoint_object = allCheckpointsInCity[checkpointName];
					var temporary_title = temporary_checkpoint_object.title.eng_title;
					var temporary_desc = temporary_checkpoint_object.description.eng_desc;
					temporary_desc = temporary_desc.substring(0, 185) + " ...";
					var head_pic_name = temporary_checkpoint_object.head_pic_name;
					$("#quest").append("<div class='col-md-3 col-sm-6 col-sm-offset-0 point_row_in' style='padding:10px;'><div class='point_row'><p class='image_block'><img src='"+head_pic_name+"' alt='image.jpg' onerror='this.remove(this);' /></p><h3>"+temporary_title+"</h3><p class='description_block'>" + temporary_desc + "</p><p class='tool_block'><input class='btn btn-default table_button' value='Add Question' type='button' data-toggle='modal' data-target='#myModal4' data-id='"+checkpointIdss[i]+"''></p></div></div>");
			}

	})
})
$(".checkpoints_table").on("change", function(){

	idRef.on("value", function(snapshot){
		$( ".point_row_in" ).remove();
			var allCheckpointsInCity = snapshot.val();
			var checkpointIds = Object.getOwnPropertyNames(allCheckpointsInCity);
			console.log("esa");
			console.log(checkpointIds);
			var num_checkpoints = checkpointIds.length;
			var clearfix = 0;
			for(i = 0; i <= num_checkpoints-1; i++) {      //object-i mej mi hat avel detal ka, vor@ id chi===>-1

					var checkpointIdss = Object.getOwnPropertyNames(allCheckpointsInCity);
					var checkpointName=checkpointIds[i];
					temporary_checkpoint_object = allCheckpointsInCity[checkpointName];
					var temporary_title = temporary_checkpoint_object.title.eng_title;
					var temporary_desc = temporary_checkpoint_object.description.eng_desc;
					temporary_desc = temporary_desc.substring(0, 185) + " ...";
					var head_pic_name = temporary_checkpoint_object.head_pic_name;

					if (clearfix == 4) {
						$("#check").append("<div class='clearfix'></div>")
						clearfix = 0;
					}

						$("#check").append("<div class='col-md-3 col-sm-6 col-sm-offset-0 point_row_in' style='padding:10px;'><div class='point_row'><p class='image_block'><img src='"+head_pic_name+"' alt='image.jpg' onerror='this.remove(this);' /><h3>"+temporary_title+"</h3><p class='description_block'>" + temporary_desc + "</p><p class='tool_block'><input class='aass btn btn-default table_button' value='Edit' onclick='get_point_fields(this);' type='button' data-toggle='modal' data-target='#myModal3' data-id='"+checkpointIdss[i]+"''><input class='btn btn-default table_button' type='button' data-id='"+checkpointIdss[i]+"'' onclick='remove_checkpoint(this)' value='Remove' /></p></div></div>");
						clearfix ++;


			}

	})

})

$('#country2').on('change',function() {
    $( ".point_row_in" ).remove();
})
$('#regions2').on('change', function() {
    $( ".point_row_in" ).remove();
})
function auto_fill(){
	var fake_text =  "Maecenas maximus libero id diam ultricies, ut tristique felis  Integer nulla elit, egestas id risus hendrerit, posuere eleifend est. Vivamus imperdiet neque quis dictum molestie. Aenean sem leo, pretium ac volutpat maximus, rhoncus placerat diam. Etiam bibendum, elit ut ornare semper, est urna laoreet lectus, sit amet tincidunt augue ex id est. Sed est quam, facilisis pulvinar aliquet in, congue vel augue. Donec suscipit nunc dui, vel gravida nulla ornare ac. Aliquam euismod ullamcorper nunc, ac vestibulum velit condimen aliqua In ac mollis quam  elementum erat Fusce at lorem vitae mi sollicitudin "
	var fake_title = "Maximus";
	$("#arm_title").val(fake_title);
	$("#arm_desc").val(fake_text);
	$("#rus_title").val(fake_title);
	$("#rus_desc").val(fake_text);
	$("#eng_title").val(fake_title);
	$("#eng_desc").val(fake_text);
	$("#score").val("300");
	$("#types_ input[value='Mountain']").attr("checked","checked");
	$("#types_ input[value='Cinema']").attr("checked","checked");
}
function auto_fill_reset(){
document.getElementById('add_checkpoint').reset();
$("#types_ input[value='Mountain']").removeAttr( "checked" );
$("#types_ input[value='Cinema']").removeAttr( "checked" );

$('#upload_pics > *').remove();
}
