import "./styles.css"
import { homeModule } from "./homeModule.js";
import { menuModule } from "./menuModule.js";
import { contactModule } from "./contactModule.js";


(function () {
    const navBar = document.querySelector('.nav-bar')
    homeModule()
    navBar.addEventListener('click',(event) => {
        const target = event.target
        if(target.matches('.home-btn')){
            homeModule()
        }
        if(target.matches('.menu-btn')){
            menuModule()
        }
        if(target.matches('.us-btn')){
            contactModule()
        }
    })
})();
