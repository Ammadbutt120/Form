// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
import { set, push, ref, getDatabase, onValue, remove } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWt5bjV8G7TLMDJ-4B37rv7nuNkFtVEQ8",
    authDomain: "smit-project-adfdd.firebaseapp.com",
    databaseURL: "https://smit-project-adfdd-default-rtdb.firebaseio.com",
    projectId: "smit-project-adfdd",
    storageBucket: "smit-project-adfdd.appspot.com",
    messagingSenderId: "945870754724",
    appId: "1:945870754724:web:ad6a2f8632127496fa2731",
    measurementId: "G-7SCZTDKEY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()

var inp1 = document.getElementById("inp1")
var inp2 = document.getElementById("inp2")
var inp3 = document.getElementById("inp3")
var inp4 = document.getElementById("inp4")
var parent = document.getElementById("parent")
window.addData = function () {
    var obj = {
        name : inp1.value,
        email : inp2.value,
        Contact : inp3.value,
        CNIC : inp4.value
    }
    console.log(obj)
    obj.id =obj.name + " " + push(ref(db,"user")).key
    var reference = ref(db, `users/${obj.id}`)
    set(reference, obj)
    alert("Registration successful")
}
var allTasks;
function getData() {
    const reference = ref(db,"tasks/")
    onValue(reference, function(taskData){
        allTasks = taskData.val()
        var arr = Object.values(allTasks)
        console.log(arr , "Task Data")
    })
}
getData()


window.delList = function(btn) {
    console.log(btn.parentNode)
    btn.parentNode.remove()
}

window.addElement = function() {
    var pera = document.createElement("P")
    var text = document.createTextNode("Name:-" + " " + inp1.value)
    var pera2 = document.createElement("P")
    var text2 = document.createTextNode("Email:-" + " " + inp2.value)
    var pera3 = document.createElement("P")
    var text3= document.createTextNode("Contact.no:-" + " " + inp3.value)
    var pera4 = document.createElement("P")
    var text4 = document.createTextNode("CNIC:-" + " " + inp4.value)
    pera.appendChild(text)
    pera2.appendChild(text2)
    pera3.appendChild(text3)
    pera4.appendChild(text4)

    var deletebtn = document.createElement("BUTTON")
    var deletetext = document.createTextNode("Delete")
    deletebtn.setAttribute("onclick", "delList(this)")
    deletebtn.appendChild(deletetext)
    deletebtn.className = "del"

    var deletebtn1 = document.createElement("BUTTON")
    var deletetext1 = document.createTextNode("Delete")
    deletebtn1.setAttribute("onclick", "delList(this)")
    deletebtn1.appendChild(deletetext1)
    deletebtn1.className = "del"

    var deletebtn2 = document.createElement("BUTTON")
    var deletetext2 = document.createTextNode("Delete")
    deletebtn2.setAttribute("onclick", "delList(this)")
    deletebtn2.appendChild(deletetext2)
    deletebtn2.className = "del"

    var deletebtn3 = document.createElement("BUTTON")
    var deletetext3 = document.createTextNode("Delete")
    deletebtn3.setAttribute("onclick", "delList(this)")
    deletebtn3.appendChild(deletetext3)
    deletebtn3.className = "del"

    pera.appendChild(deletebtn)
    pera2.appendChild(deletebtn1)
    pera3.appendChild(deletebtn2)
    pera4.appendChild(deletebtn3)
    parent.appendChild(pera)
    parent.appendChild(pera2)
    parent.appendChild(pera3)
    parent.appendChild(pera4)

}


// window.ShowData = function(){
//     var SDbox = document.getElementById("SDbox")
//     var obj = {
//         name : inp1.value,
//         email : inp2.value,
//         Contact : inp3.value,
//         CNIC : inp4.value
//     }
//         SDbox.innerHTML = obj.values
// }
