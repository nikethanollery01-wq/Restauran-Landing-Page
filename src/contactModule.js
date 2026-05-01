import { getContainer } from "./index.js"; 

function contactModule(){
    const container = getContainer()
    const div = document.createElement('div')
    const logoTitle = document.createElement('h1')
    const address = document.createElement('address')
    const physicalAddress = `2217 Maplewood Drive
    Springfield, IL 62704
    USA`

    container.className = "contact-container"
    container.textContent = ""
    container.style.backgroundImage = `url(https://i.postimg.cc/VkRjnLbH/asd.png)`
    container.style.backgroundPosition = "bottom";
    container.style.backgroundSize = "cover";
    container.style.backgroundRepeat = "no-repeat";

    logoTitle.textContent = "Iron&Lemon"
    address.textContent = `2217 Maplewood Drive
    Springfield, IL 62704
    +1 134 567 8800
    email: ivelemon@gmail.com`
    div.append(logoTitle, address)
    container.append(div)
}

export {contactModule}