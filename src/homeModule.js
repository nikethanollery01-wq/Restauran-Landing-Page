import { getContainer } from "./index.js"

function homeModule(){
    const container = document.querySelector('#content')
    const textContainer = document.createElement('div')
    const headline = document.createElement('h2')
    const tagline = document.createElement('p')
    const contactBtn = document.createElement('button')

    
    container.className = 'home-container'
    container.textContent = ""
    container.style.backgroundImage = "url(https://ca.subzero-wolf.com/en/use-and-care/recipes/-/media/images/united-states/recipes-images/food_roast_chicken_brine_hand_slg_081618.jpg?as=1&h=1750&width=4000&udi=1&cropregion=0,185,5000,2375)"
    container.style.backgroundSize = "cover";


    // add class to html elements
    textContainer.classList.add('text-container')
    headline.classList.add('head-line')
    tagline.classList.add('tag-line')
    contactBtn.classList.add('contact-btn')

    //append textContainer to container
    container.appendChild(textContainer)

    //set content for elements
    headline.textContent = "The Art of the Heart"
    tagline.textContent = `From the crackle of the flame to the 
    bright burst of citrus, we celebrate the raw beauty of honest 
    cooking`
    contactBtn.textContent = "Contact Us"

    // append to text container
    textContainer.append(headline, tagline, contactBtn)
}

export {homeModule}