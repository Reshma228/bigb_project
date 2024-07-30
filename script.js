
      
    let pampers=[{
        id:1,
        "brand":"Littles",
        "image":"./images/pamp1.webp",
        "title":"Baby Wipes - With Aloe Vera, Jojoba Oil & Vitamin E",
        "price":"280.93",
        "category":"dipers"
    },{
        id:2,
        "brand":"Pampers",
        "image":"./images/pamp2.webp",
        "title":"Baby Wipes - With Alone",
        "price":"348.6",
        "category":"dipers"
    },{
        id:3,
        "brand":"Bigbasket",
        "image":"./images/pamp3.webp",
        "title":"Baby Wipes - Sea Breeze , No paraben, Double Moisturizing",
        "price":"420",
        "category":"dipers"
    },{
        id:4,
        "brand":"Littles",
        "image":"./images/pamp4.webp",
        "title":"Baby Diaper Pants -XL, With Wetness Indicator & 12 Hours",
        "price":"569.69",
        "category":"dipers"
    },{
        id:5,
        "brand":"Bigbasket",
        "image":"./images/pamp5.webp",
        "title":"Baby Wipes - Fresh , No paraben, Double Moisturizing",
        "price":"210",
        "category":"dipers"
    },{
        id:6,
        "brand":"Littles",
        "image":"./images/pamp6.webp",
        "title":"Baby Wipes With lid - Added with Aloe Vera, Jojoba Oil  Vitamin E",
        "price":"86",
        "category":"dipers"
    },{
        id:7,
        "brand":"Chicco",
        "image":"./images/pamp7.webp",
        "title":"Baby Moments - Soft Cleansing Wipes With Aloe Vera",
        "price":"75",
        "category":"dipers"
    },{
        id:8,
        "brand":"Bigbasket",
        "image":"./images/pamp8.webp",
        "title":"Baby Wipes - Cherry Blossom, No Paraben, Double Moisturizing",
        "price":"210",
    },

]


let allData=[{

    
}]

 const alldata= async ()=>{
     const ress=await fetch("http://localhost:3000/vegitables")
     const resdata=await ress.json()
     console.log(resdata)
     localStorage.setItem("resdata",JSON.stringify(resdata))

 }
alldata()

const alldata1= async ()=>{
    const ress=await fetch("http://localhost:3000/dipers")
    const resdata1=await ress.json()
    console.log(resdata1)
    localStorage.setItem("resdata1",JSON.stringify(resdata1))

}
alldata1()



var reshdata=JSON.parse(localStorage.getItem("resdata"))
console.log(reshdata)
var reshdata1=JSON.parse(localStorage.getItem("resdata1"))
console.log(reshdata1)
// i have sliced the item to display just 4 items 
let vegslice1=reshdata[0].data.slice(0,4)
let vegslice2=reshdata[0].data.slice(4,9)

let pamperslice1=reshdata1[0].data.slice(0,4)
console.log(pamperslice1)
let pamperslice2=reshdata1[0].data.slice(4,9)
console.log(pamperslice2)




//this is veglist from home.js 
let veg_list=document.querySelector(".veg-list")
console.log(veg_list)
let itembox1=document.createElement("div")
itembox1.classList.add("itembox1")
let itembox2=document.createElement("div")
itembox2.classList.add("itembox2")

vegslice1.forEach((item,key)=>{
    let div3=document.createElement("div")
    div3.setAttribute("class","items2")
    let imag=document.createElement("img")
    imag.setAttribute("class","ime")
    imag.setAttribute("src",item.image)
    imag.addEventListener("click",()=>{
        localStorage.setItem("singleitem",JSON.stringify(item))
        location.assign("./itemdetailspage.html")
        console.log(key,"clicked")
    })
let namebox=document.createElement('div')
namebox.setAttribute("class","nam")
namebox.innerHTML=`${item.title}`

let select=document.createElement("div")
select.setAttribute("class","sel")
select.innerHTML=`<select><option>500 g</option>
<option>1 kg</option>
<option>1pc (450 to 500 g)</option>
</select>
`
// let vPrice=document.createElement("div")
// vPrice.setAttribute("class","vprice")
// select.appendChild(vPrice)


let spanprice=document.createElement("span")
spanprice.setAttribute("class","spanpric")
spanprice.innerHTML=`₹ ${item.price}`
select.appendChild(spanprice)
let buttt=document.createElement("div")
buttt.setAttribute("class","buttt")
let button1=document.createElement("button")
button1.innerHTML=`<span class="material-symbols-outlined">
bookmark
</span>`
let button2=document.createElement("button")
button2.addEventListener("click",()=>{
    addtocart(item,key)
    console.log(item,"clicked")
})
button2.setAttribute("class","cartclick")
button2.innerHTML=`Add`
buttt.appendChild(button1)
buttt.appendChild(button2)



div3.appendChild(imag)
div3.appendChild(namebox)
div3.appendChild(select)
div3.appendChild(buttt)
itembox1.appendChild(div3)
})
vegslice2.forEach((item,key)=>{
    let div3=document.createElement("div")
    div3.setAttribute("class","items2")
    let imag=document.createElement("img")
   
    imag.setAttribute("class","ime")
    imag.setAttribute("src",item.image)
    imag.addEventListener("click",()=>{
        // localStorage.setItem("singleitem",JSON.stringify(item))
        // location.assign("./itemdetailspage.html")
        console.log(key,"clicked")
    })
let namebox=document.createElement('div')
namebox.setAttribute("class","nam")
namebox.innerHTML=`${item.name}`

let select=document.createElement("div")
select.setAttribute("class","sel")
select.innerHTML=`<select><option>500 g</option>
<option>1 kg</option>
<option>1pc (450 to 500 g)</option>
</select>
`
// let vPrice=document.createElement("div")
// vPrice.setAttribute("class","vprice")
// select.appendChild(vPrice)


let spanprice=document.createElement("span")
spanprice.setAttribute("class","spanpric")
spanprice.innerHTML=`₹ ${item.price}`
select.appendChild(spanprice)
let buttt=document.createElement("div")
buttt.setAttribute("class","buttt")
let button1=document.createElement("button")
button1.innerHTML=`<span class="material-symbols-outlined">
bookmark
</span>`
let button2=document.createElement("button")
button2.addEventListener("click",()=>{
    console.log(item,"clicked")
    addtocart(item,key)
})
button2.setAttribute("class","cartclick")
button2.innerHTML=`Add`
buttt.appendChild(button1)
buttt.appendChild(button2)



div3.appendChild(imag)
div3.appendChild(namebox)
div3.appendChild(select)
div3.appendChild(buttt)
itembox2.appendChild(div3)
})


veg_list.appendChild(itembox1)
veg_list.appendChild(itembox2)
 

let pamp_list=document.querySelector(".pamp-list")

let resh_div=document.createElement("div")
resh_div.setAttribute("class","itembox1")
let resh_divv=document.createElement("div")
resh_divv.setAttribute("class","itembox2")

pamperslice1.forEach((item,key)=>{
    let resh_div1=document.createElement("div")
     resh_div1.setAttribute("class","items2 items2sizze")
     
     let imag2=document.createElement("img")
    imag2.setAttribute("class","ime")
    imag2.setAttribute("src",item.image)
    let titl=document.createElement("div")
     titl.setAttribute("class","nam")
     titl.innerHTML=`<span class="brad">${item.brand}</span>${item.title}`
     let rating=document.createElement("div")
     rating.setAttribute("class","rating")

     let sel2=document.createElement("div")
     sel2.setAttribute("class","sel")
     sel2.innerHTML=`<select><option>2x80pcs- Multipack</option></select> <span>₹${item.price}</span>`
     let addto=document.createElement("div")
     addto.setAttribute("class","buttt")

    //  let buttt=document.createElement("div")
    //  buttt.setAttribute("class","buttt")
     let addto1=document.createElement("button")
     addto1.innerHTML=`<span class="material-symbols-outlined">
     bookmark
     </span>`
     let addto2=document.createElement("button")
     addto2.addEventListener("click",()=>{
         console.log(item,key,"clicked")
         addtocart(item,key)
     })
     addto2.setAttribute("class","cartclick")
     addto2.innerHTML=`Add`
     addto.appendChild(addto1)
     addto.appendChild(addto2)



resh_div1.appendChild(imag2)
resh_div1.appendChild(titl)
// resh_div1.appendChild(rating)
resh_div1.appendChild(sel2)
resh_div1.appendChild(addto)
    resh_div.appendChild(resh_div1)
})
pamperslice2.forEach((item,key)=>{
    let resh_div1=document.createElement("div")
     resh_div1.setAttribute("class","items2")
     let imag2=document.createElement("img")
    imag2.setAttribute("class","ime")
    imag2.setAttribute("src",item.image)
    let titl=document.createElement("div")
     titl.setAttribute("class","nam")
     titl.innerHTML=`<span class="brad">${item.brand}</span>${item.title}`
     let rating=document.createElement("div")
     rating.setAttribute("class","rating")

     let sel2=document.createElement("div")
     sel2.setAttribute("class","sel")
     sel2.innerHTML=`<select><option>2x80pcs- Multipack</option></select> <span>₹${item.price}</span>`
     let addto=document.createElement("div")
     addto.setAttribute("class","buttt")

    //  let buttt=document.createElement("div")
    //  buttt.setAttribute("class","buttt")
     let addto1=document.createElement("button")
     addto1.innerHTML=`<span class="material-symbols-outlined">
     bookmark
     </span>`
     let addto2=document.createElement("button")
     addto2.addEventListener("click",()=>{
         console.log(item,"clicked")
         addtocart(item,key)
     })
     addto2.setAttribute("class","cartclick")
     addto2.innerHTML=`Add`
     addto.appendChild(addto1)
     addto.appendChild(addto2)


resh_div1.appendChild(imag2)
resh_div1.appendChild(titl)
// resh_div1.appendChild(rating)
resh_div1.appendChild(sel2)
resh_div1.appendChild(addto)
    resh_divv.appendChild(resh_div1)
})


pamp_list.appendChild(resh_div)
pamp_list.appendChild(resh_divv)
console.log(pamp_list)

let bo = document.querySelector("body");
let cart = document.querySelector(".cart");
let closee = document.querySelector(".clos");
let quantity = document.querySelector(".qu");
let total = document.querySelector(".total");
let producLists = document.querySelector(".producList");

cart.addEventListener("click", () => {
    bo.classList.add("active");
});

closee.addEventListener("click", () => {
    bo.classList.remove("active");
});

// Initialize checkOutList with localStorage data or empty array
let checkOutList = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    
    let storedCart = localStorage.getItem('cart');
    if (storedCart) {
        checkOutList = JSON.parse(storedCart);
        reloadCart(); // Update cart UI
    }
});

function addtocart(item) {
    // Find if item already exists in checkOutList
    let existingItem = Object.values(checkOutList).find(cartItem => cartItem.id === item.id);

    if (existingItem) {
       
        existingItem.quantity += 1;
    } else {
       
        item.quantity = 1; 
        checkOutList.push(item); 
    }
    
    saveCartToStorage();
    reloadCart();
}


function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(checkOutList));
}

function reloadCart() {
    producLists.innerHTML = "";

    let counts = 0;
    let totalPrice = 0;
    
    Object.values(checkOutList).forEach((item, key) => {
        counts += item.quantity;
        totalPrice += parseInt(item.price) * item.quantity;

        let li = document.createElement("li");
        li.classList.add("cartli");
        li.innerHTML = `
            <img src="${item.image}">
            <div>${item.title}</div>
            <div>₹${item.price}</div>
            <div class="cartbuttons">
                <button onclick="changeQuantity(${key},${item.quantity - 1})">-</button>
                <div class="counts">${item.quantity}</div>
                <button onclick="changeQuantity(${key},${item.quantity + 1})">+</button>
            </div>
        `;
        producLists.appendChild(li);
    });

    total.innerHTML = `<small>subtotal (${counts} items) </small> ₹${totalPrice}`;
    quantity.innerHTML = counts;
}

function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete checkOutList[key];
    } else {
        checkOutList[key].quantity = quantity;
    }
    saveCartToStorage();
    reloadCart();
}


//upto here sliced data


// this logsin function will take u to loginpage

    // function logsin(){
    //     window.location.assign("./logsinpage.html")
    // }

// upto here logsin ufnction
    


let url = "http://localhost:3000/";
let sear = document.querySelector(".search");


const search = async (val) => {
    try {
        localStorage.setItem("searvalue",val)
        const response = await fetch(url + `${val}`);
        const result3 = await response.json();
        console.log(result3);
        
      
        
       
        let str = JSON.stringify(result3);
        window.localStorage.setItem("mydata", str);
        
     
        window.location.assign("./itemspage.html");
        console.log(val);
    } catch (error) {
        console.error('Error during search:', error);
    }
};


let st = document.querySelector(".st");
st.addEventListener("click", () => {
    search(sear.value);
});


sear.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
       
        search(sear.value);
    }
});


 
    // this function is for category box in navbar
    let catelist=document.querySelector(".category-list")
    let arr=document.querySelector(".arr")

    var opn=1
    const catclick=()=>{
       if(opn==1){
       catelist.style.display="block"
       arr.style.transform="rotate(180deg)"
       opn=0
       }else{
           catelist.style.display="none"
           arr.style.transform="rotate(0deg)"
           opn=1
       }
    }

    //upto here category function


   
//this function is for profile button


var profboxnone=document.querySelector(".profboxnone")
var profile=document.querySelector(".profile")
let click=1 
profile.addEventListener("click",()=>{
    if(click==1){
     profboxnone.style.display="block"
        console.log("opened");
click=0
    }else{
         profboxnone.style.display="none"
        console.log("closed");
        click=1
    }
})
   



//upto here profile

//this function is for logout and take us to home page
function logout(){
    // localStorage.removeItem("latlong")
    window.location.assign("./index.html")
}
  
//upto here logout function

//this function is used to buynowbutton in cart to redirect cartitems page

const cartitems=()=>{
    window.location.assign("./cartitemsshowing.html")
}











