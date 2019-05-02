let links = [

    [{title: "The Many Types of Traditional Music and Dance in Japan",link:"https://jpninfo.com/14649"},
    {title:"Japanese Folk Dance", link:"https://dance.lovetoknow.com/Japanese_Folk_Dance"}],              // JAPAN
    [{title:"10 Spanish Dances you should know about", link:"https://theculturetrip.com/europe/spain/articles/10-traditional-spanish-dances-you-should-know-about/"},
    {title:"Spanish Dances", link:"https://dance.lovetoknow.com/Spanish_Dances"}],     //Spain
    [{title:"Dances of the Philippines", link:"https://www.tagaloglang.com/filipino-culture/dances/"},
    {title:"Philippine Folk Dance History", link:"https://dance.lovetoknow.com/Philippine_Folk_Dance_History"}],     //Philippines
    [{title:"Traditional Dances of Thailand", link:"http://www.vtaide.com/ASEAN/Thailand/dances.html"},
    {title:"Thai Culture: Basics of Thai Classical Dance", link:"https://thailandtravelbag.com/thai-culture-basics-thai-classical-dance/"}],     //Thailand
    [{title:"African Dance: Moves, Costume & History", link:"https://study.com/academy/lesson/african-dance-moves-costumes-history.html"},
    {title:"African Dance", link:"https://dance.lovetoknow.com/African_Dance"}],        //Africa
                
]
// let phil_links = [{title:"",link:""}]

window.onload = function(){
    document.body.background = "black";
    document.getElementById("main2").style.display = "none";
    document.getElementById("modal").style.display = "none";
}
function next(){
    document.getElementById("main1").style.display = "none";
    document.getElementById("main2").style.display = "block";
}
function prev(){
    document.getElementById("main2").style.display = "none";
    document.getElementById("main1").style.display = "block";
}
function close_modal(id){
    document.getElementById("modal").style.display = "none";
    if(id < 4){
        document.getElementsByClassName("main")[0].style = "filter:none";
    } else {
        document.getElementsByClassName("main")[1].style = "filter:none";
    }
  
}
function display_modal(id){
    document.getElementById("modal").innerHTML = "";
    if(id <= 3){
        document.getElementsByClassName("main")[0].style = "filter:blur(10px);pointer-events:none;" 
        if(id == 1){
            document.getElementById("modal").innerHTML = "<h3 style='text-align:center'>Japan</h3><br>";
        } else if(id == 2){
            document.getElementById("modal").innerHTML = "<h3 style='text-align:center'>Spain</h3><br>";
        } else if(id == 3){
            document.getElementById("modal").innerHTML = "<h3 style='text-align:center'>Philippines</h3><br>";
        }
        
        
    } else {
        document.getElementsByClassName("main")[1].style = "filter:blur(10px);pointer-events:none;" 
        if(id == 4){
            document.getElementById("modal").innerHTML = "<h3 style='text-align:center'>Thailand</h3><br>";
        } else if(id == 5){
            document.getElementById("modal").innerHTML = "<h3 style='text-align:center'>Africa</h3><br>";
        } 
    }
    
    for(let i = 0; i < links[id - 1].length; i++){
        document.getElementById("modal").innerHTML += links[id - 1][i].title + ":<br>" + "<a href= " + links[id - 1][i].link + ">"+ "click here" + "<br><br>"; 
    }
    document.getElementById("modal").innerHTML += '<div class="close" onclick=' + 'close_modal('+ id + ')' + '>Close</div>'
    document.getElementById("modal").style.display = "block";
}