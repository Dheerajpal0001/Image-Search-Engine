const accessKey = "wvnIcS3BT7-641fGuOUMoWEJPVTeaTfHyMj_I8KhzVY";

const form = document.querySelector(".form");
const search = document.getElementById("search");
const searchResult = document.querySelector(".container-2");
const showMoreBtn = document.getElementById("moreImages");

let keyword = "";
let page = 1;
 

async function searchImages(){
    keyword = search.value;
    // keyword = searchBox.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();


    if(page ==1){
        searchResult.innerHTML = "";
    }


    console.log(data);
    const results = data.results;

    results.map((finish) =>{
        const image = document.createElement("img");
        image.src = finish.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = finish.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = "block";
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    page=1;
    searchImages();
})

showMoreBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    page++;
    searchImages();
})


