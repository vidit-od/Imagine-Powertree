let table = document.querySelector('#table');
let all_srno = document.querySelectorAll('#srno');
let all_watts = document.querySelectorAll("#watts");
let all_quantity = document.querySelectorAll("#quantity");
let all_total_watts = document.querySelectorAll("#total_watts")
let all_time = document.querySelectorAll("#time");
let all_total_units = document.querySelectorAll('#total_units');
let all_delete = document.querySelectorAll('#delete')
console.log(all_delete);
let submit = document.getElementById('submit');
let max_rows = 13;

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

function update(){
    table = document.querySelector('#table');
    all_srno = document.querySelectorAll('#srno');
    all_watts = document.querySelectorAll("#watts");
    all_quantity = document.querySelectorAll("#quantity");
    all_total_watts = document.querySelectorAll("#total_watts")
    all_time = document.querySelectorAll("#time");
    all_total_units = document.querySelectorAll('#total_units');
    all_delete = document.querySelectorAll('#delete');
    submit = document.getElementById('submit');

}
submit.addEventListener('click',function(){
    let input = document.getElementById('new_appliance').value;
    document.getElementById('new_appliance').value = "";
    
    var row = table.insertRow(max_rows+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = max_rows + 1;
    cell2.innerHTML = input;
    cell3.innerHTML = '<input type="number" min="0" name="" id="watts"  value="60">';
    cell4.innerHTML = '<input type="number" min="0" name="" id="quantity" value="0">';
    cell5.innerHTML = '';
    cell6.innerHTML = '<input type="number" min="0" name="" id="time" value="0">'
    cell7.innerHTML = '';
    cell8.innerHTML = '<button>x</button>';
    max_rows++;

    update();
    console.log(table);
})