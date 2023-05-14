function getElement(cssSelector) {
    return document.querySelector(cssSelector);
}

const mapFilterTypes = {
    title: "عنوان کتاب",
    author: "نویسنده",
    genre: "ژانر",
    language: "زبان",
    published_date: "تاریخ انتشار",
}


let filterCategories = [];
let filterKeys = []
mybook.forEach(book => {

    let keys = Object.keys(book)
    filterKeys.push(...keys);
})

let temp = "";
filterKeys = Array.from(new Set(filterKeys));
filterKeys.forEach(filter => {
    if (filter !== "id") {
        temp +=
            `
    <div class="filter-category">
        <h4>${mapFilterTypes[filter]}</h4>
        <ul>

            ${mybook.map(book => {
                return book[filter]
            }).filter((el, i, self) => self.indexOf(el) === i).map(book => {
              return ` <
            li > $ { book } < /li> 



        `
            }).join("")









            }
        </ul>
</div>
        `
    }
})



getElement("div.rightFilter").innerHTML = temp;