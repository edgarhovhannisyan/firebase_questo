
function get_point_fields(d){
    $(".point_pics > *").remove();
    var country2 = $("#country2").val().toLowerCase().slice(0,3);
    var region2 = $("#regions2").val().toLowerCase().slice(0,3);
    city2 = $("#cities2").val().toLowerCase().slice(0,3);
    var id = $(d).data("id");
    var get_for_edit = firebaseRef.child("checkpoints/" + country2 +"/"+ region2 +"/"+ city2 +"/" + id+"/");
    get_for_edit = get_for_edit.orderByKey().limitToFirst(1000);

    get_for_edit.on("value", function(snapshot){ //snapshot
        var current_point = snapshot.val();

        var edit_types = current_point.checkpoints_type;
        var edit_difficulty = current_point.difficulty_edit;
        var edit_marker_radius = current_point.marker_radius;
        var edit_difficulty = current_point.difficulty;
        var edit_score_1 = current_point.scores.score_type_1;
        var edit_marker_url = current_point.marker_url;
        var edit_title_eng = current_point.title.eng_title;
        var edit_title_rus = current_point.title.rus_title;
        var edit_title_arm = current_point.title.arm_title;
        var edit_desc_eng = current_point.description.eng_desc;
        var edit_desc_rus = current_point.description.rus_desc;
        var edit_desc_arm = current_point.description.arm_desc;
        numPhotos = current_point.numphotos;
        head_pic = current_point.head_pic_name;
        $("#arm_title_edit").val(edit_title_arm);
        $("#rus_title_edit").val(edit_title_rus);
        $("#eng_title_edit").val(edit_title_eng);
        $("#arm_desc_edit").val(edit_desc_arm);
        $("#rus_desc_edit").val(edit_desc_rus);
        $("#eng_desc_edit").val(edit_desc_eng);
        $("#marker_radius_edit").val(edit_marker_radius);
        $("#score_edit").val(edit_score_1);
        $("#marker_url_edit").val(edit_marker_url);
    		$("#hidden_input").val(id);

        if(edit_difficulty == "1"){
            $("#difficulty_edit option[value='1']").attr("selected","selected");
        }
        if(edit_difficulty == "2"){
            $("#difficulty_edit option[value='2']").attr("selected","selected");
        }
        if(edit_difficulty == "3"){
            $("#difficulty_edit option[value='3']").attr("selected","selected");
        }
        if(edit_difficulty == "4"){
            $("#difficulty_edit option[value='4']").attr("selected","selected");
        }

        for(var i = 0; i < edit_types.length; i++){
            var my_tag = document.getElementById(edit_types[i]);
            my_tag.checked = true;
        }

    }) // end snapshot

		for(i = 0; i < numPhotos; i++){
      (function(num) {
			  var adaRef = firebase.storage().ref("checkpoints/" + country2 + "/" + region2 + "/" + city2 + "/" + id+"_"+i);

          adaRef.getDownloadURL().then(function(url) {

            if(url){
              if(url == head_pic){
                $(".point_pics").append("<div class='col-xs-6 col-md-3' id='block_"+id+'_'+num+"'><a href='#' class='thumbnail del_effect'><p class='set_head_photo' data-uniqe='eff_"+id+'_'+num+"' onclick='remove_headPhoto_icon(this);set_head_photo(this);' style='display:none;' data-photoname='"+url+"'><span class='glyphicon glyphicon-picture' ></span></p><img src='"+url+"' alt='...'><i class='remove_pic' type='button' data-name='"+id+"_"+num+"' onclick='remove_file(this)'><span class='glyphicon glyphicon-remove'></span></i></a></div>");
              }else{
                $(".point_pics").append("<div class='col-xs-6 col-md-3' id='block_"+id+'_'+num+"'><a href='#' class='thumbnail del_effect'><p class='set_head_photo' data-uniqe='eff_"+id+'_'+num+"' onclick='remove_headPhoto_icon(this);set_head_photo(this);' data-photoname='"+url+"'><span class='glyphicon glyphicon-picture'></span></p><img src='"+url+"' alt='...'><i class='remove_pic' type='button' data-name='"+id+"_"+num+"' onclick='remove_file(this)'><span class='glyphicon glyphicon-remove'></span></i></a></div>");
              }
            }
          }).catch(function(error) {
            alert("Uh-oh, an error occurred");
            return;
          });
        //
        //   .catch(function(err) {
        //         // Handle Errors here.
        //       var errorCode = err.code;
        //       var errorMessage = err.message;
        //
        //       console.log('errorMessage: ' + errorMessage);
        //       return;
        // });

		  })(i);
    }
}


// orderByChild("").startAt("D")
function remove_headPhoto_icon(d){
  var id = $( d ).data("uniqe");
  $(".point_pics > div > a > p").css('display', 'block');
  $(".point_pics p[data-uniqe='"+id+"']").css('display', 'none');

}

function reset_1(){
  document.getElementById("edit_checkpoint_form").reset();
  $(".point_pics_edit > *").remove();
}

$("#question_type").on("change", function(){

  var quest_type = $(this).val();
  $(".question-type-field div").removeClass("display_block");
  switch(quest_type){

       case '1': $(".quest-type-1").addClass("display_block"); break;
       case '2': $(".quest-type-2").addClass("display_block"); break;
       case '3': $(".quest-type-3").addClass("display_block"); break;
       case '4': $(".quest-type-4").addClass("display_block"); break;
       case '5': $(".quest-type-5").addClass("display_block"); break;
       case '6': $(".quest-type-6").addClass("display_block"); break;
       case '7': $(".quest-type-7").addClass("display_block"); break;
       case '8': $(".quest-type-8").addClass("display_block"); break;
       case '9': $(".quest-type-9").addClass("display_block"); break;
       case '10': $(".quest-type-10").addClass("display_block"); break;

       default: alert("no");

   }

})
