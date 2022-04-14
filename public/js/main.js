
function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: {},
            success: function(data){
                if (data.error)
                  alert("bad");
                else {
                  let pa = document.createElement("pa");
                  let p = document.getElementById("parag");
                  pa.innerHTML = "<br /> Name:" + data.val.name + "<br />"+  "Ingredients:" + data.val.ingredients;
                  pa.innerHTML += "<br /> Instructions:" + data.val.instructions;
                  pa.innerHTML += "<br /> Allergies:" + data.val.allergies;
                  pa.innerHTML += "<br /> Diets:" + data.val.diets;

                  p.appendChild(pa);
                }
              } ,
            dataType: "json"
          });
  return false;
}

$(document).ready(function(){
 readClicked();
});