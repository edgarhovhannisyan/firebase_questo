
var edit_title_arm = $("#arm_title_edit").val();
$("#arm_title_edit").on("keyup", function(){
	var val = $( this ).val();
	if ( val == 0 ){
		$( this ).css("border-color","red");
	}else{
		$( this ).css("border-color","#1e87f0");
	}
})
$("#arm_title_edit").focusout(function(){
	var val = $( this ).val();
	if(val != ""){
		$( this ).css("border-color","#ccc");
	}else{
		$( this ).attr("placeholder","Fill the blank");
		$( this ).css("border-color","red");
	}
})

filer_2 = [];
numPhotos_edit = 0;

var fileButton_edit = document.getElementById('fileButton_edit');
$("#fileButton_edit").on("click", function(){
		fileButton_edit.addEventListener('change', function(e) {
				$('.point_pics_edit > *').remove();

        filer_2 = e.target.files;

				numPhotos_edit = e.target.files.length;
				uploader=[];

				for(i = 0; i < numPhotos_edit; i++){
					var uploaderID='uploader'+i;

					var myid = "myimg"+(i+numPhotos);
					$(".point_pics_edit").append("<div class='col-xs-6 col-md-3'><a class='thumbnail'><img src='' id="+myid+" alt='uploading'></a></div>")
					document.getElementById(myid).src = URL.createObjectURL(event.target.files[i]);

					uploader[i+numPhotos] = document.getElementById(uploaderID);

				}
			})  // Listener end
})

$(".update_checkpoints").on("click", function(){

	var edit_marker_radius = parseFloat($("#marker_radius").val());
	if(isNaN(edit_marker_radius)){
		$.alert({
		title: 'Alert!',
		content: 'Fill the marker radius !',
		});
		return;
	}

	var edit_title_arm = $("#arm_title_edit").val();
	if(edit_title_arm == ""){
		$.alert({
		title: 'Alert!',
		content: 'Fill the arm title !',
		});
		return;
	}
	var edit_title_rus = $("#rus_title_edit").val();
	if(edit_title_rus == ""){
		$.alert({
		title: 'Alert!',
		content: 'Fill the rus title !',
		});
		return;
	}
	var edit_title_eng = $("#eng_title_edit").val();
	if(edit_title_eng == ""){
		$.alert({
		title: 'Alert!',
		content: 'Fill the eng title !',
		});
		return;
	}
	var edit_desc_arm = $("#arm_desc_edit").val();
	if(edit_desc_arm == ""){
		$.alert({
		title: 'Alert!',
		content: 'Fill the arm desc !',
		});
		return;
	}
	var edit_desc_rus = $("#rus_desc_edit").val();
	if(edit_desc_rus == ""){
		$.alert({
		title: 'Alert!',
		content: 'Fill the rus desc !',
		});
		return;
	}
	var edit_desc_eng = $("#eng_desc_edit").val();
	if(edit_desc_eng == ""){
		$.alert({
		title: 'Alert!',
		content: 'Fill the eng desc !',
		});
		return;
	}
	var edit_score_1 = parseFloat($("#score_edit").val());
	if(isNaN(edit_score_1)){
		$.alert({
		title: 'Alert!',
		content: 'Fill the score !',
		});
		return;
	}

  var edit_marker_url = $("#marker_url_edit").val();
  var edit_difficulty = Number($("#difficulty_edit").val());
  var edit_point_type = [];
    $.each($("input[name='point_type_edit']:checked"), function(){
        edit_point_type.push($(this).val());
    });


  country = $("#country2").val().toLowerCase().slice(0,3);
  region = $("#regions2").val().toLowerCase().slice(0,3);
  city = $("#cities2").val().toLowerCase().slice(0,3);
  id = $("#hidden_input").val();

  firebaseRef.child("checkpoints").child(country).child(region).child(city).child(id).child("scores").child("score_type_1").set(edit_score_1);
  firebaseRef.child("checkpoints").child(country).child(region).child(city).child(id).child('marker_url').set(edit_marker_url);
  firebaseRef.child("checkpoints").child(country).child(region).child(city).child(id).child('marker_radius').set(edit_marker_radius);
  firebaseRef.child("checkpoints").child(country).child(region).child(city).child(id).child('difficulty').set(edit_difficulty);
  firebaseRef.child("checkpoints").child(country).child(region).child(city).child(id).child('checkpoints_type').set(edit_point_type);

  // Add title
  firebaseRef.child("checkpoints").child(country).child(region).child(city).child(id).child("title").child("arm_title").set(edit_title_arm);
  firebaseRef.child("checkpoints").child(country).child(region).child(city).child(id).child("title").child("rus_title").set(edit_title_rus);
  firebaseRef.child("checkpoints").child(country).child(region).child(city).child(id).child("title").child("eng_title").set(edit_title_eng);

  // Add desc

  firebaseRef.child("checkpoints").child(country).child(region).child(city).child(id).child("description").child("arm_desc").set(edit_desc_arm);
  firebaseRef.child("checkpoints").child(country).child(region).child(city).child(id).child("description").child("rus_desc").set(edit_desc_rus);
  firebaseRef.child("checkpoints").child(country).child(region).child(city).child(id).child("description").child("eng_desc").set(edit_desc_eng);


  var storageRef = [];
  // var filer=[];
  // var numPhotos = e.target.files.length;

  for(i = 0; i < numPhotos_edit; i++){
        storageRef[i] = firebase.storage().ref('checkpoints/' + id + "_" + (i+numPhotos));
        storageRef[i].put(filer_2[i]);
  }
  numPhotos += numPhotos_edit;
	var idNameRef = firebaseRef.child("checkpoints_id").child(id);
	idNameRef.once("value", function(snapshot) {
		var id_name_num = snapshot.val();
		if(id_name_num == 0){
			firebaseRef.child("checkpoints_id").child(id).set(1);
		}else{
			firebaseRef.child("checkpoints_id").child(id).set(0);
		}
	})

  firebaseRef.child("checkpoints").child(country).child(region).child(city).child(id).child('numphotos').set(numPhotos);
  $(".point_pics_edit > *").remove();
  document.getElementById("edit_checkpoint_form").reset();
  $.alert({
  title: 'Alert!',
  content: 'Changes Saved!!',
  });
})
// Remove files

// Create a reference to the file to delete

function set_head_photo(d){
	country = $("#country2").val().toLowerCase().slice(0,3);
  region = $("#regions2").val().toLowerCase().slice(0,3);
  city = $("#cities2").val().toLowerCase().slice(0,3);
  id = $("#hidden_input").val();
	const cityRef = firebaseRef.child("checkpoints/" + country +"/"+ region +"/"+ city +"/");
	idRef = cityRef.orderByKey().limitToFirst(1000);

	var photoName = $( d ).data("photoname");
	firebaseRef.child("checkpoints").child(country).child(region).child(city).child(id).child('head_pic_name').set(photoName);
	console.log(photoName);
	console.log("yeeeeeeeeeeeeah");
}
function remove_file(d){

    var pic_name = $(d).data("name");
    var storageRef = firebase.storage().ref('checkpoints/' + pic_name);

    // Delete the file
    storageRef.delete().then(function() {
      $("#block_"+pic_name).remove();

    }).catch(function(error) {
      alert("Uh-oh, an error occurred");
    });

}


function remove_checkpoint(d){
  $.confirm({
      title: 'Confirm!',
      content: 'Are you sure for delete!',
      buttons: {
          confirm: function () {
              $.alert('Delete succesfully!');
              var checkpoint_id = $( d ).data("id");
              country = $("#country2").val().toLowerCase().slice(0,3);
              region = $("#regions2").val().toLowerCase().slice(0,3);
              city = $("#cities2").val().toLowerCase().slice(0,3);

							var numref = firebaseRef.child("checkpoints").child(country).child(region).child(city).child(checkpoint_id).child("numphotos").orderByKey();
							numref.once("value", function(snapshot) {
								var numPhostos_for_delete = snapshot.val();
								console.log("qanak@");
								console.log(numPhostos_for_delete);
								console.log("id-n");
								console.log(checkpoint_id);
								for(i = 0; i < numPhostos_for_delete; i++){

									var del_pics = firebase.storage().ref('checkpoints/' + checkpoint_id + '_' + i);

									del_pics.delete().then(function() {
									}).catch(function(error) {
										alert("Uh-oh, an error occurred");
									});
								}// Delete all checkpoint's files
          		});
							firebaseRef.child("checkpoints").child(country).child(region).child(city).child(checkpoint_id).remove();

          },
          cancel: function () {
              $.alert('Canceled!');
          },
      }
  });
}
