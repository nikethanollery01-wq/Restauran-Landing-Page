class Item {
    constructor(name,price,description){
        this.name = name
        this.price = price
        this.description = description
    }
}

function menuModule(){
     const container = document.querySelector('#content')
    const arrayItems = []
    //initial empty content
    //clear container class and add a class
    container.className = "menu-container"
    container.textContent = ""
    container.style.backgroundImage = "url(https://images.squarespace-cdn.com/content/v1/61f3bafbf57f387f331319d6/57abb682-ee13-447f-9545-3fbc7f14d759/C60A8379.jpg)"
    container.style.backgroundPosition = "bottom";
    container.style.backgroundSize = "cover";
    container.style.backgroundRepeat = "no-repeat";
    
    
    //menu title
    const menuTitle = document.createElement('h2')
    menuTitle.textContent = "Our Provisions"
    menuTitle.classList.add('menu-title')
    container.append(menuTitle)

    //generating menu items
    arrayItems.push(
        new Item("Hearth-Roasted Saffron Chicken", "---$28",
            "Heritage chicken marinated in hand-pressed saffron and yogurt, roasted over charcoal."),
        new Item("Smoked Cardamom Lamb Shank", "---$34", 
            "Slow-braised for 12 hours with green cardamom, cloves, and a rich bone-marrow reduction."),
        new Item("Blackened Peppercorn Sea Bass", "---$31", 
            "Wild-caught bass crusted with Tellicherry peppercorns and seared on a cast-iron skillet."),
        new Item("Clove-Scented Beef Ribs", "---$36", 
            "Prime ribs smoked with applewood and glazed with a spicy tamarind and clove reduction."),
        new Item("Turmeric Ghee Prawns", "---$29", 
            "Jumbo prawns flash-seared in aged ghee with fresh turmeric and curry leaves."        )
        )
    
    //iterating array to display on screen
    arrayItems.forEach((item,index) => {
        console.log(item)
        //create div = item 1
        //name  - item-name-1
        //price - item-price-1
        //description - item-description-1
        const div = document.createElement('div')
        const itemName = document.createElement('h3')
        const itemPrice = document.createElement('span')
        const itemDescription = document.createElement('p')
        //adding class names to items
        div.classList.add(`item-${index}`)
        itemName.classList.add(`name`)
        itemPrice.classList.add(`price`)
        itemDescription.classList.add(`description`)
        //set content for each elements
        itemName.textContent = item.name
        itemPrice.textContent = item.price
        itemDescription.textContent = item.description
        //add element to div container
        div.append(itemName, itemPrice, itemDescription)
        // append div to container
        container.appendChild(div)
    })

        
}

export {menuModule}