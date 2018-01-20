function loaded(){
    console.log("js loaded succesfully");
    fillTable();
    console.log("user object added to db");
}
function add(){
    //var database = firebase.database();
    var school = document.getElementById("school").value;
    document.getElementById("school").value = "";
    var name = document.getElementById("name").value;
    document.getElementById("name").value = "";
    var number = document.getElementById("number").value;
    document.getElementById("number").value = "";
    var biggest_stren = document.getElementById("biggest_stren").value;
    document.getElementById("biggest_stren").value = "";
    var biggest_wonk = document.getElementById("biggest_wonk").value;
    document.getElementById("biggest_wonk").value = "";
    var team_notes = document.getElementById("team_notes").value;
    document.getElementById("team_notes").value = "";
    var general_robot_notes = document.getElementById("general_robot_notes").value;
    document.getElementById("general_robot_notes").value = "";
    var strens = document.getElementById("strens").value;
    document.getElementById("strens").value = "";
    var wonks = document.getElementById("wonks").value;
    document.getElementById("wonks").value = "";
    var other = document.getElementById("other").value;
    document.getElementById("other").value = "";
    demo.showNotification('top','right', 2, "Team has been added to log. Visit <b>Scouted Teams List</b> to see it.");
    writeTeamData(school,name,number,biggest_stren,biggest_wonk,team_notes,general_robot_notes,strens,wonks,other);
    console.log("team log pushed to db");
}

function writeTeamData(school,name,number,biggest_stren,biggest_wonk,team_notes,general_robot_notes,strens,wonks,other) {
  firebase.database().ref('log/'+ number).set({
    school: school,
    name: name,
    number: number,
    biggest_stren: biggest_stren,
    biggest_wonk: biggest_wonk,
    team_notes: team_notes,
    general_robot_notes: general_robot_notes,
    strens: strens,
    wonks: wonks,
    other: other
  });
}

function checkIfExists(checkThis){
    firebase.database().ref("log").orderByChild("number").equalTo(checkThis).once("value",snapshot => {
    const userData = snapshot.val();
    if (userData){
      return true;
    }
    else{
        return false;
    }
});
}