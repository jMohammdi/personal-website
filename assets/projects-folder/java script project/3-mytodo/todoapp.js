// =============clock digitall===================
let seconds = document.querySelector("#seconds")
setInterval(() => {
    let hour = document.querySelector("#hour")
    let minuts = document.querySelector("#minuts")
    let ampm = document.querySelector("#ampm")
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = "AM"

    if (h > 12) {

        h = h - 12
        am = "PM"
    }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s
    hour.innerHTML = h + ""
    minuts.innerHTML = m + ":"
    seconds.innerHTML = s + "&nbsp" + ":"
    ampm.innerHTML = am

})
let color = ["#33d9b2", "#ff5252", "#ffb142", "#18dcff", "#fff200", "#32ff7e", "#cd84f1", "#ff3838"]
setInterval(function() {
        let r = color[Math.floor(Math.random() * color.length)]
        seconds.style.color = r
    }, 950)
    // ===========code todo app=========================================

// input enter todo item 
let input = document.getElementById('input');
// btn plus add todo
let addTodo = document.querySelector('span.plus');
// container todo
let unerlist = document.getElementById('ul');
// btn show all item todo
let shownum = document.querySelector('.shownum');
// btn show is complate == true
let showcomplete = document.querySelector('.showcomplete');
// btn show is complate ==false
let showuncomplete = document.querySelector('.showuncomplete');
// btn clear all item todo
let clear = document.getElementById('clear');
// parent container ul todo
let listener = document.querySelector('.listener')
    // div .center 
let center = document.querySelector('.center')
    // object push in arry
const todoItem = [];
// id for count todo
let id = 1;
// object todo add items coditional rendering
function addtodo() {
    if (input.value == "") {
        input.focus()
    } else {
        let item = {
            id: id++,
            title: input.value,
            isComplate: false
        }
        input.value = ""
        todoItem.push(item)
        todoRender(todoItem)

    }

}
// render todo forEach create element inside container
function todoRender(showItem) {
    let tamplate = ""
    if (showItem.length >= 1) {
        showItem.forEach(str => {
                    tamplate += `
                    <div class="listTodo d-flex align-items-center">
                    <div class="mainer text-right w-75">
                    <li class=" ${str.isComplate ? 'done' : ''}" >             
                    ${str.isComplate ? "" : `<input type="checkbox" class="ml-2" id="box" onclick="done(${str.id})">`}
                    <span class="changeVal">${str.title}</span>
                     </li>
                    </div>
                    <div class="icon d-flex justify-content-around align-items-center w-25">
                      <span class="m-2"><i class=" fa fa-edit edit" title="edite" onclick=changeTodoItem(${str.id})></i></span> 
                    <span class="m-2"><i class="fa fa-trash  delbtn" title="remove" onclick="deltodo(${str.id})"></i></span>          
                    </div>
                    </div>
                     `
                     console.log(str.id)
            clear.classList.remove('nonactive')
        });

    } else {
        tamplate = `<h2 class="nothing" onclick="fox()"><i class="fa fa-plus"></i>افزودن  به لیست  . .  .</h2>`
        clear.classList.remove('clear')
        clear.classList.add('nonactive')
    }
    unerlist.innerHTML = tamplate

}

// show todo item complate filter
let pushAll = []

function showallitem(list) {
    let showAllItem = list.filter(fi => {
        return fi.id
    })
    pushAll.push(showAllItem)
    shownum.textContent = pushAll.length
}
input.addEventListener('keydown', (e) => {
    if (input.value == "") {
        input.focus()
    } else if (e.which == 13) {
        showallitem(todoItem)
    }
})



function com() {
    let completedTodos = todoItem.filter(str => {
        return str.isComplate === true
    })
    todoRender(completedTodos)
}

// show todo uncomplate filter

function filtreun() {
    let uncom = todoItem.filter(str => {
        return str.isComplate == false
    })

    todoRender(uncom)
}
let finderun = todoItem.filter(function(el) {
    el.isComplate = false
})

// show all todo item 
function showall() {
    let showAllTitle = todoItem.filter(str => {
        return str.title
    })

    todoRender(showAllTitle)
}


//  function iscomplate==true todo
let pushcomplateTrue = []

function done(id) {
    let don = todoItem.find(el => {
        return el.id === id
    })
    unpusher.length--
        pushcomplateTrue.push(don)
    showcomplete.textContent = pushcomplateTrue.length
    don.isComplate = true;
    showuncomplete.textContent = unpusher.length
    todoRender(todoItem)


}
let unpusher = []

function finderuncom(listt) {
    let uncomm = listt.filter(str2 => {
        return str2.isComplate == false
    })
    unpusher.push(uncomm)
    uncomm.isComplate = false
    showuncomplete.textContent = unpusher.length


}
input.addEventListener('keydown', (e) => {
    // if (e.which == 13) {
    //     finderuncom()
    // }
    if (input.value == "") {
        input.focus()
    } else if (e.which == 13) {
        finderuncom(todoItem)
    }

})




// fun remove all todo item 
function removeAll() {

    let Assuranse = confirm("آیا از حذف تمامی موارد اطمینان دارید ؟")
    if (Assuranse) {
        unerlist.innerHTML = `<h2 class="nothing" onclick="fox()"><i class="fa fa-plus"></i>افزودن  به لیست  . .  .</h2>`
        showcomplete.textContent = 0
        shownum.textContent = 0
        showuncomplete.textContent = 0
        input.focus()
        input.value = ""
        todoItem.length = 0
        pushcomplateTrue.length = 0
        unpusher.length = 0
        pushAll.length = 0
        swal({
            title: "تمامی آیتم ها حذف شدند",
            text: "",
            icon: "success",
        });
    } else {
        swal({
            title: "آیتم های شما حذف نشدند",
            text: "",
            icon: "error",
        });
    }


}
// let span=document.querySelector(".changeVal")
function changeTodoItem(id) {

    let editpusher = todoItem.find(function(finderCahnge) {
        return finderCahnge.id === id

    })
    let valuedit = prompt("لطفعا آیتم مورد نظر خود را وارد کنید")
    if (valuedit) {
        editpusher.title = valuedit
        swal(" ویرایش آیتم ", 
        `آیتم جدید شما  = ${valuedit}`, "success");
        todoRender(todoItem)
    } else {
        swal("آیتم مورد نظر ویرایش  نشد"
        , `آیتم شما برابر است با = ${editpusher.title}`, "error");
    }

    todoRender(todoItem)
}

addTodo.addEventListener('click', addtodo);
todoRender(todoItem)
input.addEventListener('keydown', (e) => {
    if (e.which == 13) {

        addtodo()


    }
})
clear.addEventListener('click', removeAll)

// trash deleted todo
function deltodo(id) {
    let delb = todoItem.find(el => {
        return el.id === id
    })
    if (delb.isComplate === false) {
        let index = todoItem.indexOf(delb)
        todoItem.splice(index, 1)
        unpusher.length--
        shownum.length--   
        showuncomplete.textContent = unpusher.length
        shownum.textContent = shownum.length
        pushAll.length--
        todoRender(todoItem)
       
    } else if (delb.isComplate === true) {
        let index = todoItem.indexOf(delb)
        todoItem.splice(index, 1)
        pushcomplateTrue.length--
            showcomplete.textContent = pushcomplateTrue.length
       
        todoRender(todoItem)
        shownum.length--
      pushAll.length--
    }
    if (todoItem.length === 0 ) {
        shownum.textContent == 0
        
        todoRender(todoItem)

    }
    shownum.textContent = todoItem.length

    todoRender(todoItem)
}
addTodo.addEventListener("click", function() {
    finderuncom(todoItem)
})
addTodo.addEventListener("click", function() {
    showallitem(todoItem)
})