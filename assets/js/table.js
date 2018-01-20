
function fillTable(){
    firebase.database().ref().child("log").once("value").then(function(questionsSnapshot) {
      return questionsSnapshot.forEach(function(questionSnapshot) {
        return console.log(questionSnapshot.number);
      });
    });
    
    
    var tbl = document.getElementById("fillMe");
    //create <thead>
    var thead = document.createElement("thead");
    console.log(thead);
    thead.className = "text-primary";
    //create all <th>
    var headOne = document.createElement("th");
    var headTwo = document.createElement("th");
    var headThree = document.createElement("th");
    var headFour = document.createElement("th");
    //create fills for all <th>
    var headOneText = document.createTextNode("Team Name");
    var headTwoText = document.createTextNode("Team #");
    var headThreeText = document.createTextNode("Location");
    var headFourText = document.createTextNode("# Entries on Team");
    //append texts to <th>
    headOne.appendChild(headOneText);
    headTwo.appendChild(headTwoText);
    headThree.appendChild(headThreeText);
    headFour.appendChild(headFourText);
    //append all <th> to <thead>
    thead.appendChild(headOne);
    thead.appendChild(headTwo);
    thead.appendChild(headThree);
    thead.appendChild(headFour);
    //append <thead> to <table>
    tbl.appendChild(thead);
    
    ///////////////////////////////
    
    //create <tbody>
    var tbody = document.createElement("tbody");
    console.log(tbody);
    //create all <td>
    var bodyOne = document.createElement("td");
    var bodyTwo = document.createElement("td");
    var bodyThree = document.createElement("td");
    var bodyFour = document.createElement("td");
    //create fills for all <td>
    var bodyOneText = document.createTextNode("Team Name");
    var bodyTwoText = document.createTextNode("Team #");
    var bodyThreeText = document.createTextNode("Location");
    var bodyFourText = document.createTextNode("# Entries on Team");
    //append texts to <td>
    bodyOne.appendChild(bodyOneText);
    bodyTwo.appendChild(bodyTwoText);
    bodyThree.appendChild(bodyThreeText);
    bodyFour.appendChild(bodyFourText);
    //append all <th> to <thead>
    tbody.appendChild(bodyOne);
    tbody.appendChild(bodyTwo);
    tbody.appendChild(bodyThree);
    tbody.appendChild(bodyFour);
    //append <thead> to <table>
    tbl.appendChild(tbody);

}

