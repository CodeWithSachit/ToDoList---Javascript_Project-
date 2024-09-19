
function getanUpdate(){
    console.log("Updating List...");
    tit = document.getElementById("title").value;
    des = document.getElementById("discription").value;
    if(localStorage.getItem('itemsJson')== null){
        itemjsonArray = [];
        itemjsonArray.push([tit,des]);
        localStorage.setItem('itemsJson',JSON.stringify(itemjsonArray));
    }
    else{
        itemjsonArraystr = localStorage.getItem('itemsJson')
        itemjsonArray = JSON.parse(itemjsonArraystr);
        itemjsonArray.push([tit,des]);
        localStorage.setItem('itemsJson',JSON.stringify(itemjsonArray));

    }
    update();

}


function update(){
    if(localStorage.getItem('itemsJson')== null){
        itemjsonArray = [];     
        localStorage.setItem('itemsJson',JSON.stringify(itemjsonArray));
    }
    else{
        itemjsonArraystr = localStorage.getItem('itemsJson')
        itemjsonArray = JSON.parse(itemjsonArraystr);
    }

    // populate the table
    tablebody = document.getElementById("tablebody");
    let str = "";
    itemjsonArray.forEach((element ,index) => {
        str += `
        
                    <tr>
                        <th scope="row">${index+1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button>
                        </td>
                    </tr>
        `
    });
    tablebody.innerHTML = str;
};
add = document.getElementById('add');
add.addEventListener("click",getanUpdate);
update();

function deleted (itemIndex){
    console.log('Delete',itemIndex);
    itemjsonArraystr = localStorage.getItem('itemsJson')
    itemjsonArray = JSON.parse(itemjsonArraystr);
// Delete itemIndex element from the array 
    itemjsonArray.splice(itemIndex,1);
    localStorage.setItem('itemsJson',JSON.stringify(itemjsonArray));
    update();


};


function clearStorage(){
    if (confirm("You really want to clear")){
    console.log("clearing the storage!")
    localStorage.clear();
    update();
    }
}