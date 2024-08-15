import { auth, storage , db } from "./config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";



const userHere = document.querySelector("#userHere");




onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;
    
  } else {
    userHere.innerHTML = `
            <div tabindex="0" class="dropdown dropdown-end">
              <div class="btn btn-ghost btn-circle avatar">
                <button id="login_btn" class="btn rounded-full bg-blue">LOGIN</button>
              </div>
            </div>`

    const login_btn = document.querySelector("#login_btn")
    login_btn.addEventListener("click" , ()=>{
      window.location = "login.html"
    })

          

    
  }
});
