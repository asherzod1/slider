let sliderDiv = document.querySelector('.slider');

let sliderItems = [{
    img : "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg",
},
{
    img : "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg"
},
{
    img: "https://www.cnet.com/a/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg"
},
{
    img: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
},
{
    img:"https://s23527.pcdn.co/wp-content/uploads/2019/12/Downside-Up-745x449.jpg.optimal.jpg",
},
{
    img:"https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/are-your-photos-safe-in-cloud-butterfly.jpg?resize=2048%2C1365&ssl=1"
}
]; 

sliderItems.forEach(item => {
    let imgDiv = document.createElement('div');
    imgDiv.classList.add('display-none');
    imgDiv.classList.add('imgDiv');
    let img = document.createElement('img');
    img.src = item.img;

    imgDiv.appendChild(img);
    sliderDiv.appendChild(imgDiv);
})

let count = 0;

let a = document.querySelectorAll('.imgDiv');

function korsatish(){
    a[count].classList.remove('display-none');
}
korsatish();

function yashirish(){
    for(let i=0; i<sliderItems.length; i++){
        if(i !== count){
            a[i].classList.add('display-none');
        }
        
    }
}

let next = document.querySelector('.next');

next.addEventListener('click',() =>{
    count++;
    if(count === sliderItems.length){
        count=0;
    }
    korsatish();
    yashirish();
})

let prev = document.querySelector('.prev');

prev.addEventListener('click', () =>{
    if(count === 0){
        count = sliderItems.length;
    }
    count--;
    korsatish();
    yashirish();
    
})

// let indicators = document.querySelector('.indicators');

// sliderItems.forEach(item =>{
//     let indicator = document.createElement('div');
//     indicator.classList.add('indicator');

//     indicators.appendChild(indicator);
// })

// let allindicator = document.querySelectorAll('.indicator');
// allindicator[count].style.opacity = 1;

// let indicatorr = document.querySelector('.indicator');
// indicatorr.addEventListener('click', ()=>{
//     indicatorr.classList.add('opacity')
//     console.log(indicatorr);
// })

