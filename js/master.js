// start contact box
let contactBox = document.querySelector(".contact-box")
let contact = document.querySelector(".contact-box .contact")
let phone = document.querySelector(".contact-box .contact .phone")
let contactSpan = document.querySelector(".contact-box .contact span")

contact.onclick = ()=>{
    contactBox.classList.toggle("open")
    contact.classList.toggle("open")
    contactSpan.classList.toggle("open")

}
// End contact box
// scroll to top
    let up = document.querySelector(".scroll")
    window.onscroll = ()=>{
        this.scrollY >= 200 ? up.classList.add("show"): up.classList.remove("show") 
    }
    up.onclick = ()=>{
        window.scrollTo({
            top:0 ,
            behavior:"smooth"
        })
    }  
// scroll to top
// start landing page
let landingPage = document.querySelector(".landing-page");
let imgsArray = ["01.jpg","02.jpg" ,"03.jpg" ,"04.jpg" ,"05.png"]
setInterval(()=>{
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    landingPage.style.backgroundImage = `url(../imgs/${imgsArray[randomNumber]})`
}, 5000)
// End landing page


// start header-area
let lists = document.querySelectorAll(".landing-page .diff-foods > li");
console.log(lists)
let arabiclist = document.querySelector(".arabic")
let arabicfood = document.querySelector(".arabic .arab-foods")
let arabicmeals = document.querySelectorAll(".arabic .arab-foods li")
console.log(arabicmeals)


lists.forEach((li)=>{
    li.addEventListener("mouseenter",()=>{
        li.classList.add("enter")
    })
    li.addEventListener("mouseleave",()=>{
        if(li.classList.contains("arabic")){
            if(arabicfood.classList.contains("active")){
                false;
            }else{
                li.classList.remove("enter")
            }
        }else{
            li.classList.remove("enter")

        }
    })

    li.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:"smooth"
        })
    })
}) 

arabiclist.onclick = (e)=>{
    e.stopPropagation()
    arabicfood.classList.toggle("active")
}


arabicmeals.forEach((meal)=>{
    meal.addEventListener("mouseenter",()=>{
        meal.classList.add("enter")
    })
    meal.addEventListener("mouseleave",()=>{
        meal.classList.remove("enter")
    })
})

document.addEventListener("click", (e)=>{
    if(e.target !== arabiclist && e.target !== arabicfood){
        if(arabiclist.classList.contains("enter")){
            arabicfood.classList.toggle("active")
            arabiclist.classList.toggle("enter")
        }
    }

})
// End header-area
// start breakfast
let mealsImg = [...document.querySelectorAll(".bf-images img") ,...document.querySelectorAll(".lunch-images img") ,...document.querySelectorAll(".snacks-images img"),...document.querySelectorAll(".dinner-images img"),...document.querySelectorAll(".desert-images img"),...document.querySelectorAll(".arabic-food-images img")]
console.log(mealsImg)
mealsImg.forEach((img)=>{
    img.addEventListener("click",()=>{
        let popupOverlay = document.createElement("div")
        popupOverlay.className="popup-overlay"
        document.body.appendChild(popupOverlay)

        let popupBox = document.createElement("div")
        popupBox.className ="popup"
        let popupImg = document.createElement("img")
        popupImg.src = img.src
        let popupHead = document.createElement("h2")
        let popupheadtext = document.createTextNode(img.alt)
        popupHead.appendChild(popupheadtext)
        popupOverlay.appendChild(popupBox)
        popupBox.appendChild(popupHead)
        popupBox.appendChild(popupImg)
        if(img.getAttribute("data-description")){
            let mealDesc = document.createElement("p")
            let descText = document.createTextNode(img.dataset.description)
            mealDesc.appendChild(descText)
            popupBox.appendChild(mealDesc)
    
        }else{
            false
        }


        let closeBtn = document.createElement("span")
        closeBtn.className = "closePopup"
        let closeBtntext = document.createTextNode("x")
        closeBtn.appendChild(closeBtntext)
        popupBox.appendChild(closeBtn)

    })
})
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("closePopup")){
        e.target.parentNode.remove()
        document.querySelector(".popup-overlay").remove()
    }

})
// End breakfast
