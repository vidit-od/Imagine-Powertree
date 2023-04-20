let table = document.querySelector('#table');
let all_srno = document.querySelectorAll('#srno');
let all_watts = document.querySelectorAll("#watts");
let all_quantity = document.querySelectorAll("#quantity");
let all_total_watts = document.querySelectorAll("#total_watts")
let all_time = document.querySelectorAll("#time");
let all_total_units = document.querySelectorAll('#total_units');
let all_delete = document.querySelectorAll('#delete')
let state = document.querySelector('#state');
console.log(all_delete);
let max_rows = 13;
let curr_total_units = 0;
let state_dict = {
    "Andaman and Nicobar Island":2.1,
    "Andhra Pradesh" :1.9,
    "Arunachal Pradesh" :2.4,
    "Assam" :2.1,
    "Bihar" :1.9,
    "Chandigahr":1.9,
    "Chhattisgarh":2,
    "Dadra & Nagar Haveli and Daman & Diu":1.7,
    "Goa":1.7,
    "Gujarat":1.7,
    "Haryana":1.8,
    "Himachal Pradesh":1.9,
    "Jammu and Kashmir":2.2,
    "Jharkhand":2.1,
    "Karnataka":1.9,
    "Kerala":1.7,
    "Ladakh":1.9,
    "Lakshadwee":2.0,
    "Madhya Pradesh":1.8,
    "Maharashtra":1.7,
    "Manipur":2.1,
    "Meghalaya":3.2,
    "Mizoram":2.1,
    "Nagaland":2.2,
    "Odisha":2.0,
    "Puducherr":1.9,
    "Punjab":1.8,
    "Rajasthan":1.7,
    "Sikkim":2.6,
    "Tamil Nadu":1.8,
    "Telangana":1.9,
    "Tripura":2.2,
    "Uttar Pradesh":1.8,
    "Uttarakhand":1.9,
    "West Bengal":12
}

all_quantity.forEach(function(node,index){
    node.addEventListener('input',function(){
        all_total_watts[index].innerHTML = parseInt(node.value) * all_watts[index].value;
        if(all_time[index].value != 0){
            all_total_units[index].innerHTML = (parseInt(node.value) * all_watts[index].value * all_time[index].value)/1000;
        }
        total_demand();
        total_units();
        state_values();
    })
})

all_watts.forEach(function(node,index){
    node.addEventListener('input',function(){
        if(all_quantity[index].value != 0){
            all_total_watts[index].innerHTML = parseInt(node.value) * all_quantity[index].value;
        }
        if(all_time[index].value != 0){
            all_total_units[index].innerHTML = (parseInt(node.value) * all_quantity[index].value * all_time[index].value)/1000;
        }
        total_demand();
        total_units();
        state_values();
    })
})

all_time.forEach(function(node,index){
    node.addEventListener('input',function(){
        if(all_quantity[index].value != 0){
            all_total_units[index].innerHTML = (parseInt(node.value) * all_quantity[index].value * all_watts[index].value)/1000;
        }
        total_demand();
        total_units();
        max_time();
        state_values();
    })
})
state.addEventListener('input',function(){
    state_values();
})
let already = 1;
all_delete.forEach(function(node,index){
    node.addEventListener('click',function(){
        let srno = node.parentNode.children[0].innerHTML
        delete_helper(srno);
        max_rows--;
    })
})

function delete_helper(srno){
    console.log('hi');
    let all_rows = document.querySelectorAll('.row');
    for( i=0; i<all_rows.length; i++){
        let curr = all_rows[i].children[0].innerHTML;
        if(srno == curr){
            table.deleteRow(curr);
            srno_change(srno);
        }
    } 
}
function srno_change(srno){
    let all_rows = document.querySelectorAll('.row');
    let pos =0;
    for (i=srno-1; i<all_rows.length; i++){
        let index = parseInt(srno)+parseInt(pos);
        all_rows[i].children[0].innerHTML=index;
        pos++;
    }
}
function total_demand(){
    var total = 0;
    for(var i=0; i<all_total_watts.length; i++){
            total = total + parseInt(all_total_watts[i].innerHTML)
    }
    document.querySelector('.first_ans').innerHTML = total/1000;
}
function total_units(){
    var total = 0;
    for(var i=0; i<all_total_units.length; i++){
            total = total + parseFloat(all_total_units[i].innerHTML)
    }
    document.querySelector('.second_ans').innerHTML = total;
    curr_total_units = total;
}
function max_time(){
    var max = 0;
    for(var i=0; i<all_time.length;i++){
        if( parseInt(all_time[i].value) > max){
            max = parseInt(all_time[i].value);
        }
        document.querySelector('.third_ans').innerHTML = max;
    }
}
function state_values(){
    var ans = (state_dict[state.value] * curr_total_units)/10;
    document.querySelector('.four_ans').innerHTML = Math.round(ans*100)/100;
    document.querySelector('.five_ans').innerHTML = Math.round(curr_total_units * 32500)/100;
}