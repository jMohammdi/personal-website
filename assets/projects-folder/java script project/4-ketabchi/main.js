/* Selectors */
let slidShow = document.querySelector(".slidshow")
let prevIcone = document.querySelector(".prev");
let nextIcone = document.querySelector(".next");
let lis = [...document.querySelectorAll(".indicator li")];
let btn = document.querySelectorAll("#btn")
let myfavorite = getElement("#myfavorite");
let input = document.querySelector(".right input");
let pictureBook = document.querySelector(".picture")



/* Variable */
let slidNumber = 0;
let tmp = "";
temp = ""
let searchBooks = []


/* Array */
let filterKeys = [];
let favorite = [];
let filterSearch = []
let bookId = []
let finalSearch = [{}]

/* SlideShow Object */
const slids = [{
        id: 1,
        title: "back to office in book read",
        text: "اگرچه هیچ یک از ما نمی‌توانیم همه چیز را بدانیم؛ اما همه‌ی ما می‌توانیم فردا بیشتر از امروز بدانیم.",
        imgSrc: "1.jpg",

    },
    {

        id: 2,

        title: "MANY TYPES BOOK",
        text: "کتاب  زیاد مطالعه کنید تا بفهمید که هیچ نمى‌دانید",
        imgSrc: "2.jpg",

    },
    {
        id: 3,
        title: "MANY TYPES BOOK",
        text: "مطالعه، اندیشیدن با ذهن دیگری است",
        imgSrc: "3.jpg",

    },
    {
        id: 4,
        title: "",
        text: "SPECIAL 50% OFF",
        imgSrc: "4.jpg",
    }
];
/*end slideshow*/



/* Book Object */

let books = [{
        id: 1,
        title: "کمدی الهی",
        author: "دانته",
        published_date: 1472,
        language: "ایتالیایی",
        genre: "شعر",
    },
    {
        id: 2,
        title: "ضیافت",
        author: "افلاطون",
        published_date: 385,
        language: "یونانی",
        genre: "فلسفه",


    },
    {
        id: 3,
        title: "منطق الطیر",
        author: "عطار",
        published_date: 1177,
        language: "فارسی",
        genre: "شعر",
    },
    {
        id: 4,
        title: "مثنوی معنوی",
        author: "مولوی",
        published_date: 1258,
        language: "فارسی",
        genre: "شعر",
    },
    {
        id: 5,
        title: "دیوان حافظ",
        author: "حافظ",
        published_date: 1200,
        language: "فارسی",
        genre: "شعر",
    },
    {
        id: 6,
        title: "رومیو و جولیت",
        author: "ویلیام شکسپیر",
        published_date: 1595,
        language: "انگلیسی",
        genre: "عاشقانه",



    },
    {
        id: 7,
        title: "ویس و رامین",
        author: "فخرالدین اسعد گرگانی",
        published_date: 1054,
        language: "فارسی",
        genre: "عاشقانه",


    },
    {
        id: 8,
        title: "گلستان",
        author: "سعدی",
        published_date: 1258,
        language: "فارسی",
        genre: "شعر",
    },
    {
        id: 9,
        title: "بوستان",
        author: "سعدی",
        published_date: 1257,
        language: "فارسی",
        genre: "شعر",
    },
    {
        id: 10,
        title: "گلشن راز",
        author: "شیخ محمود شبستری",
        published_date: 1311,
        language: "فارسی",
        genre: "شعر",


    },
    {
        id: 11,
        title: "لیلی و مجنون",
        author: "نظامی",
        published_date: 1188,
        language: "فارسی",
        genre: "شعر",
    },
    {
        id: 12,
        title: "شاهنامه",
        author: "فردوسی",
        published_date: 1010,
        language: "فارسی",
        genre: "شعر",


    },
    {
        id: 13,
        title: "ایلیاد",
        author: "هومر",
        published_date: 762,
        language: "یونانی",
        genre: "شعر",
    },
    {
        id: 14,
        title: "ادیسه",
        author: "هومر",
        published_date: 725,
        language: "یونانی",
        genre: "شعر",
    },
    {
        id: 15,
        title: "هملت",
        author: "ویلیام شکسپیر",
        published_date: 1609,
        language: "یونانی",
        genre: "درام",


    },

    {
        id: 16,
        title: "دون کیشوت",
        author: "میگل دسروانتس",
        published_date: 1605,
        language: "اسپانیایی",
        genre: "درام",


    }
]



/* Map Filter Object */
const mapFilterTypes = {

    title: "عنوان کتاب",
    author: "نویسنده",
    published_date: "تاریخ انتشار",
    language: "زبان",
    genre: "ژانر"

}






//slide show


function backgroundRandom(index) {
    let rnd = Math.floor(Math.random() * slids.length);

    slidShow.style.backgroundImage = `url(./images/${slids[index].imgSrc})`;
    slidShow.style.backgroundSize = "cover";
    let h1 = document.querySelector("h3");
    let h2 = document.querySelector("h4");
    h1.innerHTML = slids[index].title;
    h2.innerHTML = slids[index].text;
}

function nextSlide() {
    slidNumber++;
    if (slidNumber == 5)
        slidNumber = 0;
    backgroundRandom(slidNumber);
    changeIndecatorByInterval(slidNumber)
}

function prevSlide() {
    slidNumber--;
    if (slidNumber == 0)
        slidNumber = 3;
    backgroundRandom(slidNumber);
    changeIndecatorByInterval(slidNumber)
}

backgroundRandom(0)
nextIcone.addEventListener("click", nextSlide);
prevIcone.addEventListener("click", prevSlide);
for (const li of lis) {
    li.addEventListener("click", changeIndicatorByClick)
}



setInterval(function() {
    slidNumber++;
    if (slidNumber == slids.length) {
        slidNumber = 0
    }
    backgroundRandom(slidNumber)
    changeIndicatorByInterval(slidNumber)

}, 4000)




function changeIndicatorByClick() {
    let i = lis.indexOf(this)
    slideNumber = i
    backgroundRandom(i)
    for (const li of lis) {
        li.classList.remove("active")
    }
    this.classList.toggle("active")
}

function changeIndicatorByInterval(h) {
    for (const li of lis) {
        li.classList.remove("active")
    }
    lis[h].classList.add("active")
}




function render(renderList) {

    tmp = ""
    renderList.forEach(book => {
        tmp +=
            `<div class="card" style="width:15rem;text-align:center;padding-top:1%;margin:1%;padding:2%;">
        <img class="card-img-top" src="./nnnn/${book.id}.jpg" alt="Card image cap" style="text-align:center;width:11rem;height:12rem">
        <div class="card-body"><br>
        <h5 class="card-;text-align:center;">${book.title}</h5>
        <p class="card-text"> نویسنده :${book.author}</p>
        <p class="card-text"> زبان : ${book.language} </p>
        <p class="card-text">تاریخ نشر : سال${book.published_date} </p><br>
        <div class="button"> <a href="#" onclick="addBook(${book.id})"  id="btn"> <i class="fa fa-shopping-cart fa-sm"></i></a>
        <a class="btn btn-primary" onclick="filtersee(${lib.id})">مشاهده جزئیات</a></div>
        </div>
    
            
    </div>

    <br/>
    <br/>`

    });
    pictureBook.innerHTML = tmp;

    searchBooks.splice("")
}


render(books)


function getElement(cssSelector) {
    return document.querySelector(cssSelector);
}

books.forEach(book => {
    let keys = Object.keys(book)
    filterKeys.push(...keys);
})
filterKeys = Array.from(new Set(filterKeys));
filterKeys.forEach(filter => {
    if (filter != "id") {
        temp +=
            `<div class="filter-categore">
        <h4>${mapFilterTypes[filter]}</h4>
        <ul>
        ${books.map(book => {
                return book[filter]
            }).filter((el, i, self) => self.indexOf(el) === i).map(book => {
                return ` < li >
            <
            span class = "title" > $ { book } < /span> <
            input type = "checkbox" / >
            <
            li > `

            }).join("")}
</ul>
</div> 
`
    }
})
getElement(".sidebar").innerHTML = temp;



function addBook(id) {

    this.addEventListener("click", function(event) {
        event.preventDefault()
    })

    let book = books.find(el => {
        return el.id === id;
    })
    if (favorite.includes(book)) {
        let index = favorite.indexOf(book)
        favorite.splice(index, 1)
    } else {
        favorite.push(book)
    }
    myfavorite.textContent = favorite.length;
    render(books)



}



const filterData = (e) => {

    if (input.value !== "") {
        filterKeys.forEach(item => {

            if (item !== "id" && item !== "published_date") {
                books.forEach(book => {

                    filterSearch.push(book[item])

                })

            }
        })

        let findInput = filterSearch.filter(name => name.search(input.value) !== -1)

        console.log(findInput)
        findInput = Array.from(new Set(findInput))


        filterObj(findInput)


    } else {
        render(books)
    }



}

input.addEventListener("keyup", filterData);


function filterObj(list) {

    filterKeys.forEach(item => {




        list.forEach(filterList => {

            books.forEach(book => {

                if (book[item] === filterList) {
                    // searchBooks = [{

                    //     id: book.id,
                    //     title: book.title,
                    //     author: book.author,
                    //     published_date: book.published_date,
                    //     language: book.language,
                    //     genre: book.genre

                    // }]
                    searchBooks.push(book)
                    searchBooks = Array.from(new Set(searchBooks))

                }



            })

        })


    })

    render(searchBooks)
        // render(searchBooks)


}