// render the book for desktop

// random text h1
let randomText = ['من محتاج باران رحمت توام خدایا هرچه مهر داری بر ما ببار', ',وقتی از اینکه آنچه را می خواستی بدست نیاوردی افسرده مباش فقط محکم بنشین و شاد باش خداوند در فکر دادن چیز بهتری به تو می باشد', ' خود را ارزان نفروشیم درفروشگاه بزرگ هستی روی قلب انسان نوشته اند قیمت=خدا', 'خدا هوای تو را دارد وقتی به خدا توکل کنی معجزه رخ می دهد',
        'یک مرد دانا باید پول را در سر خود داشته باشید، نه در قلب خود – جاناتان سوئیفت (Jonathan Swift) هجونویس، شاعر و نویسنده رساله‌های سیاسی', 'اینکه چطور با شکست برخورد می‌کنید مشخص می‌کند چگونه به موفقیت دست می‌یابید – (David Feherty)'


    ]
    // dom h1 for random text

// function random text for dom h1.text
function rndomText() {
    let textaR = randomText[Math.floor(Math.random() * randomText.length)];
    text.textContent = textaR
}
// name function for render random text for h1
rndomText()



// event preventDefault for form 
function defaultform(event) {
    event.preventDefault()
}
formsearch.addEventListener("click", defaultform)



function filterBook() {
    if (menu.value == "titlBook") {
        additem = mybook.filter(function(book) {
            return book.title.match(boxs.value)

        })

        render(additem)
    } else if (menu.value == "namePerson") {

        additem = mybook.filter(function(book) {
            return book.author.match(boxs.value)
        })

        render(additem)
    } else if (menu.value == "genreBook") {
        additem = mybook.filter(function(book) {
            return book.genre.match(boxs.value)
        })
        render(additem)
    } else if (menu.value == "languageBook") {

        additem = mybook.filter(function(book) {
            return book.language.match(boxs.value)
        })

        render(additem)

    } else if (boxs.value == " ") {
        swal("موردی یافت نشد")
        render(mybook)

    }
}
boxs.addEventListener('keyup', filterBook)
btnSubmit.addEventListener("click", filterBook)






















// const filterDeta = () => {
//     if (boxs.value !== "") {
//         search1.forEach(item => {
//             if (item !== "id" && item !== "published_date") {
//                 mybook.forEach(book => {
//                     search2.push(book[item])
//                 })
//             }
//         })



//         filterObj(findInput)
//     } else {
//         render(mybook)
//     }



// }

// function filterObj(list) {
//     search1.forEach(item => {



//         list.forEach(filterLIist => {
//             mybook.forEach(book => {
//                 if (book[item] === filterLIist) {

//                     search3.push(book)
//                     search3 = Array.from(new Set(search3))

//                 }
//             })
//         })
//     })
//     render(search3)
// }
// boxs.addEventListener("keyup", filterDeta)






// btn show your length favarite book in library
function myFunction(id) {

    let itemPush = mybook.find(function(findId) {
        return findId.id === id

    })

    if (favrite.includes(itemPush)) {
        let index = favrite.indexOf(itemPush)
        favrite.splice(index, 1)
        x.className = "show";
        setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        x.textContent = `${favrite.title}`

        x.textContent = `کتاب ${itemPush.title} از کتابخانه شخصی شما حذف  شد  `

    } else {
        favrite.push(itemPush)
        x.className = "show";
        setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
        x.textContent = `${favrite.title}`

        x.textContent = `کتاب ${itemPush.title} به کتابخانه شخصی شما افزوده شد  `

    }
    render(mybook)
    show.textContent = favrite.length

}

function showLibrary() {
    if (favrite.length > 0) {
        pageMain.textContent = "صفحه اصلی"
        pageMain.classList.add('showbtn')

        renderlibrary(favrite)


    } else if (favrite.length == 0) {

        swal("کتابخانه  شما خالی می باشد لطفعا یک کتاب اضافه کنید");
    }

}
plibrary.addEventListener('click', showLibrary)

function deletBook(id) {
    let finderdel = favrite.find(function(str) {
        return str.id === id
    })
    let index = favrite.indexOf((finderdel))
    favrite.splice(index, 1)
    show.textContent = favrite.length
    renderlibrary(favrite)
    if (favrite.length == 0) {
        render(mybook);
        pageMain.classList.remove("showbtn")
        pageMain.textContent = "کتابچی"


    }


}

function backpage() {
    render(mybook)
    pageMain.classList.remove('showbtn')
    pageMain.textContent = "کتابچی"

    center.classList.add("center")
}
pageMain.addEventListener('click', backpage)
var preTop = $(window).scrollTop();
var $header = $('.head');
$(window).scroll(function($e) {

    var curTop = $(window).scrollTop();
    if (curTop > preTop) {
        $header.css('top', -90).css('background-color', 'transparent');
    } else {
        $header.css('top', 0).css('background-color', 'black');;
    }
    preTop = curTop;
});

function filtersee(id) {
    let seedate = favrite.filter(function(item) {
        return item.id === id
    })
    renderdata(seedate)
}

let time = ""


function showTime() {

    let sec = new Date()
    let min = new Date()
    let hour = new Date()
        // let day = new Date()
        // let month = new Date()
        // let year = new Date()


    time = `
${sec.getSeconds()+ " :"+ min.getMinutes() + " :" +" :"+hour.getHours() }



`

}
let h = setInterval(showTime, 1000)
    // let jak = 0