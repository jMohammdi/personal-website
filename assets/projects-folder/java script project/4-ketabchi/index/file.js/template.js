addbook.push(mybook)

function render(bookList) {
    let tmp = ""
    bookList.forEach(book => {
                tmp +=
                    `
            <div class="card main" style="width: 18rem; text-align:center">
            <img class="card-img-top" src="../img/${book.id}.png" alt="Card image cap" style="text-align:center">
            <div class="card-body">
            <h5 class="card-title"> ${book.title} </h5>
            <p class="card-text"> کد کتاب :${book.id}</p>
            <p class="card-text"> نویسنده :${book.author}</p>
            <p class="card-text">تاریخ نشر : سال${book.published_date} </p>
          <a href="#" >  <a class="btn btn-2">مشاهده جزئیات</a> </a>
          <span  title="افزودن به کتابخانه شخصی خود" onclick="myFunction(${book.id})"> 
          ${(!favrite.includes(book))
        ?
        `
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
          </svg>
          `
        :
        `
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/>
          <path fill="red" d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"/>
          </svg>
          
          `
      }
          
           </span>
         
        </div>

        </div>

       

        `

  });
  center.innerHTML = tmp;
}
render(mybook)


function renderlibrary(library) {
  let tmplib = ""
  library.forEach(lib => {
    tmplib +=
      `
           
            <div class="card main " style="width: 20rem; text-align:center;height:570px">
            <img class="card-img-top" src="../img/${lib.id}.png" alt="Card image cap" style="text-align:center">
            <div class="card-body">
            <h5 class="card-title"> ${lib.title} </h5>
            <p class="card-text"> کد کتاب :${lib.id}</p>
            <p class="card-text"> نویسنده :${lib.author}</p>
            <p class="card-text">تاریخ نشر : سال${lib.published_date} </p>
            <span id="removelib" class="btn btn-2 bg-dark text-white hear" onclick="deletBook(${lib.id})">حذف از کتابخانه </span>
          <a href="#" >  <a class="btn btn-2 text-black" onclick="filtersee(${lib.id})">مشاهده جزئیات</a> </a>
  
          <p class="  pt-2 btn btn-2 bg-primary mt-2 "><i class="bascket  fa fa-shopping-basket p-1 "></i>افزودن به سبد خرید</p>
         
         
        </div>

        </div>      

        `
  });
  center.innerHTML = tmplib;
}


function renderdata(bookList) {
  let tmp = ""
  bookList.forEach(book => {
    tmp +=
      `
      <div class="card mb-3" style="max-width: 970px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="../img/${book.id}.png" class="card-img" alt="..." style="height:100%">
        </div>
        <div class="col-md-8 text-right">
          <div class="card-body">
            <h5 class="card-title">نام کتاب : <span class="text-danger"> ${book.title}</span></h5>
            <h5 class="card-title"> نویسنده کتاب : <span class="text-danger"> ${book.author}</span></h5>
            <h5 class="card-title"> ژانر کتاب : <span class="text-danger"> ${book.genre}</span></h5>
            <h5 class="card-title"> تاریخ انتشار : <span class="text-danger"> ${book.published_date}</span></h5>
            <h5 ><span class="text-danger">خلاصه کتاب : </span> <p class="card-text har">${book.about}</p></h5>
            
            <a href="#" >  <a class=" border border-danger text-black p-2" >   زمان افزوده شده به کتابخانه شخصی        <spa></span></a>
           
            </a>
            </br>
          <p class="  pt-2 btn btn-2 bg-primary mt-2 "><i class="bascket  fa fa-shopping-basket p-1 "></i>افزودن به سبد خرید</p>
          </div>
        </div>
      </div>
    
      `

  });
 center.classList.remove("main")
 center.classList.add(".centerdata")
 
  center.innerHTML = tmp;
}

{/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}