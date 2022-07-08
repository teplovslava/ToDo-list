let inp = document.querySelector('.input')
let btn =  document.querySelector('.search-blok button')
let result = document.querySelector('.result')


let arr;
!localStorage.arr?arr=[]:arr=JSON.parse(localStorage.getItem("arr"))
toHtml()

btn.addEventListener('click',function(){
    arr.push(new ToDo(inp.value))
    toHtml()
    updateStorage()
})



function toHtml(){
    if(arr.length>0){ 
    result.innerHTML=""
    arr.forEach((element,index) => {result.innerHTML+=createElem(element,index)});}
    else{
        if(arr.length==0){ 
            result.innerHTML=""
    }
}}



function ToDo(name){
    this.name=name;
    this.complite=false
}

function createElem(element,index){
    return `<div class="toDo-elem ${element.complite?'complite':''}">
    <input id="label${index}" onclick=toCheck(${index}) class="check" type="checkbox" ${element.complite?"checked":""}><label for='label${index}' class='label'></label>
    <p class="item-descr">${element.name}</p>
    <button onclick=deleteItem(${index}) class="deleteItem">Delete</button>
    </div>`
}


function deleteItem(index){
    arr.splice(index,1)
    updateStorage()
    toHtml()
}


function updateStorage(){
    localStorage.setItem('arr',JSON.stringify(arr))
}

function toCheck(index){
    arr[index].complite=!arr[index].complite
    updateStorage()
    toHtml()
}
