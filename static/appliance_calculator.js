let table = document.querySelector('#table');
let all_srno = document.querySelectorAll('#srno');
let all_watts = document.querySelectorAll("#watts");
let all_quantity = document.querySelectorAll("#quantity");
let all_total_watts = document.querySelectorAll("#total_watts")
let all_time = document.querySelectorAll("#time");
let all_total_units = document.querySelectorAll('#total_units');
let all_delete = document.querySelectorAll('#delete')
console.log(all_delete);

all_quantity.forEach(function(node,index){
    node.addEventListener('input',function(){
        all_total_watts[index].innerHTML = parseInt(node.value) * all_watts[index].value;
        if(all_time[index].value != 0){
            all_total_units[index].innerHTML = (parseInt(node.value) * all_watts[index].value * all_time[index].value)/1000;
        }
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
    })
})

all_time.forEach(function(node,index){
    node.addEventListener('input',function(){
        if(all_quantity[index].value != 0){
            all_total_units[index].innerHTML = (parseInt(node.value) * all_quantity[index].value * all_watts[index].value)/1000;
        }
    })
})

all_delete.forEach(function(node,index){
    node.addEventListener('click',function(){
        console.log(index);
    })
})
