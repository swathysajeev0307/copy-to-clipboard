/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const button = document.getElementById("copy");
const main_paragraph = document.getElementById("main_paragraph");
const message = document.getElementById("message");

function copyToClipboard(element){

    navigator.clipboard.writeText(element.textContent)
    .then(()=>{
        message.textContent = "Copied to Clipboard";
        message.classList.add("after-clicked");
    })

    .catch((err)=>{
        console.log("Unable to Copy the Data");
    })

    .finally(()=>{
        setTimeout(()=>{
            message.textContent = "";
            message.classList.remove("after-clicked");
        },2000);
    });


}

button.addEventListener("click", ()=>copyToClipboard(main_paragraph));