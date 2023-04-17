const form_submit = document.getElementById('submit');
let mode = 1;

const area_btn = document.querySelector(".area");
const capacity_btn = document.querySelector(".production");
const budget_btn = document.querySelector(".budget");

area_btn.addEventListener("click",function(){
    mode = 1;
    choice();
    area_btn.style.border = "1px solid black";
    capacity_btn.style.border = "none";
})
capacity_btn.addEventListener('click',function(){
    mode = 2;
    choice();
    area_btn.style.border = "none";
    capacity_btn.style.border = "1px solid black";
})
let mode_dict = {
    1:'<div class="part1"> Total roof area: <div class="field"> <input type="number" min="0" name="" id="roof_area" required> <select name="" id="roof_area_unit"> <option value="Sq.m."> Sq.m.</option> <option value="Sq.ft."> Sq.ft.</option> </select </div> </div> </div> <div class="part2"> % of rooftop available <div class="field"> <input type="number" min = "0" max="100" name="" id="percent" required> <div class="symbol"> %</div> </div> </div>',

    2: '<div class="capacity_input"> <p>Enter solar capacity you want to install:</p> <div class="field"> <input type="number" name="" id="capacity" min="0"> <div class="symbol"> KW </div> </div> </div>  ',
}

let state_dict = {
        "Andaman and Nicobar Island": [4.6,1156.39],
        "Andhra Pradesh" :[5,1266.52],
        "Arunachal Pradesh" :[4.1,1046.26],
        "Assam" :[4.1,1046.26],
        "Bihar" :[4.6,1156.39],
        "Chandigahr":[4.6,1156.39],
        "Chhattisgarh":[5,1266.52],
        "Dadra & Nagar Haveli and Daman & Diu":[5,1266.52],
        "Goa":[5,1266.52],
        "Gujarat":[5,1266.52],
        "Haryana":[4.6,1156.39],
        "Himachal Pradesh":[4.1,1046.26],
        "Jammu and Kashmir":[4.1,1046.26],
        "Jharkhand":[4.6,1156.39],
        "Karnataka":[5,1266.52],
        "Kerala":[5,1266.52],
        "Ladakh":[5,1266.52],
        "Lakshadwee":[5,1266.52],
        "Madhya Pradesh":[5,1266.52],
        "Maharashtra":[5,1266.52],
        "Manipur":[4.1,1046.26],
        "Meghalaya":[4.1,1046.26],
        "Mizoram":[4.1,1046.26],
        "Nagaland":[4.1,1046.26],
        "Odisha":[4.6,1156.39],
        "Puducherr":[5,1266.52],
        "Punjab":[4.6,1156.39],
        "Rajasthan":[5,1266.52],
        "Sikkim":[4.1,1046.26],
        "Tamil Nadu":[5,1266.52],
        "Telangana":[5,1266.52],
        "Tripura":[4.1,1046.26],
        "Uttar Pradesh":[4.6,1156.39],
        "Uttarakhand":[4.1,1046.26],
        "West Bengal":[4.6,1156.39]
}

choice();
function choice(){
    let content = mode_dict[mode];
    document.querySelector(".question2").innerHTML = content;
}
form_submit.addEventListener('click',function(){
    let allow = true;
    if( mode == 1){
        let roof_area = document.getElementById('roof_area').value;
        let roof_area_unit = document.getElementById('roof_area_unit').value;
        let percent = document.getElementById('percent').value;
        let state = document.getElementById('state').value;
        let cost = document.getElementById('cost').value;
        if( roof_area <= 0){
            allow = false;
            document.querySelector(".messages").innerHTML = "Area invalid";
            document.querySelector(".messages").style.width = "200px";
        }
        if( percent <= 0){
            allow = false;
            document.querySelector(".messages").innerHTML = "Percent invalid";
            document.querySelector(".messages").style.width = "200px";
        }
        if( state == " " ){
            allow = false;
            document.querySelector(".messages").innerHTML = "Empty State field"
            document.querySelector(".messages").style.width = "200px";
        }
        if( roof_area_unit == 'Sq.ft.'){
            roof_area = roof_area * 0.092903;
        }
        roof_area = roof_area * (percent/100);
        let plant_size = roof_area/10;
        plant_size = Math.round(plant_size*10)/10
        if( allow == true){
            document.querySelector(".messages").innerHTML = "Your Report is generated, scroll down"
            document.querySelector(".messages").style.width = "200px";
            document.querySelector(".messages").style.height = "170px";

            document.getElementById('state_name').innerHTML = state;
            document.getElementById('state_radiation').innerHTML = state_dict[state][1] + ' W / sq.m';
            document.getElementById('state_avg').innerHTML = state_dict[state][0] + ' KWH';

            document.getElementById('size').innerHTML = plant_size;

            let annual_generation = state_dict[state][0] * 300 * plant_size;
            document.getElementById('annual_elec').innerHTML = annual_generation;
            
            document.getElementById('life_elec').innerHTML = annual_generation * 25;

            document.getElementById('rates').innerHTML = cost;

            let month_savings = cost * plant_size * 125;

            document.getElementById('month_savings').innerHTML = month_savings;

            document.getElementById('annual_savings').innerHTML = month_savings * 12;

            document.getElementById('lifetime_savings').innerHTML = month_savings * 12 * 25;

            document.getElementById('co2_reduce').innerHTML = Math.round(plant_size * 30.8) + "tonnes";

            document.getElementById('tree').innerHTML = plant_size * 49;
        }
    }

    else if( mode == 2){
        let plant_size = document.getElementById('capacity').value
        let state = document.getElementById('state').value
        let cost = document.getElementById('cost').value
    
        if( plant_size <= 0){
            allow = false;
            document.querySelector(".messages").innerHTML = "Invalid Capacity"
            document.querySelector(".messages").style.width = "200px";
            document.querySelector(".messages").addEventListener('transitionend',function(){
                var delayInMilliseconds = 5000; //5 seconds
                setTimeout(function() {
                    document.querySelector(".messages").style.width = "0px";
                }, delayInMilliseconds);
                
            })
        }
        if( state == " " ){
            allow = false;
            document.querySelector(".messages").innerHTML = "Empty State field"
            document.querySelector(".messages").style.width = "200px";
            document.querySelector(".messages").addEventListener('transitionend',function(){
                var delayInMilliseconds = 5000; //5 seconds
                setTimeout(function() {
                    document.querySelector(".messages").style.width = "0px";
                }, delayInMilliseconds);
                
            })
        }
        if(cost <= 0){
            allow = false;
            document.querySelector(".messages").innerHTML = "Invalid Electricity cost"
            document.querySelector(".messages").style.width = "200px";
            document.querySelector(".messages").addEventListener('transitionend',function(){
                var delayInMilliseconds = 5000; //5 seconds
                setTimeout(function() {
                    document.querySelector(".messages").style.width = "0px";
                }, delayInMilliseconds);
                
            })
        }

        if(allow == true){
            document.querySelector(".messages").innerHTML = "Your Report is generated, scroll down"
            document.querySelector(".messages").style.width = "200px";

            document.getElementById('state_name').innerHTML = state;
            document.getElementById('state_radiation').innerHTML = state_dict[state][1] + ' W / sq.m';
            document.getElementById('state_avg').innerHTML = state_dict[state][0] + ' KWH';
            
            document.getElementById('size').innerHTML = plant_size;

            let annual_generation = state_dict[state][0] * 300;
            document.getElementById('annual_elec').innerHTML = annual_generation;
            
            document.getElementById('life_elec').innerHTML = annual_generation * 25;

            document.getElementById('rates').innerHTML = cost;

            let month_savings = cost * plant_size * 125;

            document.getElementById('month_savings').innerHTML = month_savings;

            document.getElementById('annual_savings').innerHTML = month_savings * 12;

            document.getElementById('lifetime_savings').innerHTML = month_savings * 12 * 25;

            document.getElementById('co2_reduce').innerHTML = Math.round(plant_size * 30.8) + "tonnes";

            document.getElementById('tree').innerHTML = plant_size * 49; 
        }
    }

    if( allow == true){
        document.querySelector('.report').style.height = 'auto';
        document.querySelector('.report').style.padding = '20px';
    }
})