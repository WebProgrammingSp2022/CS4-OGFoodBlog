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
                  for(let i=0;i<data.val.length;i++)
                  {
                      p.innerHTML += "<br /> Name:" + data.val[i].name + "<br />"+  "Ingredients:" + data.val[i].ingredients;
                      p.innerHTML += "<br /> Instructions:" + data.val[i].instructions;
                      p.innerHTML += "<br /> Allergies:" + data.val[i].allergies;
                      p.innerHTML += "<br /> Diets:" + data.val[i].diet;
                  }
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
