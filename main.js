const inputEl = document.getElementById('input_el')
const inputBtn = document.getElementById('save_butt')
const outputEl = document.getElementById('ul_el')
const deleteBtn = document.getElementById('delete_butt')
const saveTabBtn = document.getElementById("saveTab_Butt")
let myLeads = []
let link = null


const URLsFromLocalStorage = JSON.parse(localStorage.getItem('URLs'))


if(URLsFromLocalStorage){
    myLeads = (URLsFromLocalStorage)
    output(myLeads)
}



function output(leads) {
    let listItems = ''
    for(let i = 0; i < leads.length; i++){
        listItems +=`
<li> 
    <a target='_blank' href= ${leads[i]}>  
        ${leads[i]}
    </a>
</li>
                ` 
        
    }
    outputEl.innerHTML = listItems
}

// let tabs = [{
//     url : 'data kikaleishvili.com'
// }]

saveTabBtn.addEventListener('click',function(){
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        let tab = tabs[0]
        myLeads.push(tab.url)
        localStorage.setItem('URLs',JSON.stringify(myLeads))
        output(myLeads)
        console.log(tab.url)
    })
})


deleteBtn.addEventListener('dblclick',function(){
    localStorage.clear()
    console.log('local storage cleared')
    myLeads = []
    output(myLeads)
})

inputBtn.addEventListener('click',function(){
    if (inputEl.value != ''){
        myLeads.push(inputEl.value)
    }
    localStorage.setItem('URLs',JSON.stringify(myLeads))
    console.log(localStorage.getItem("URLs"))
    output(myLeads)
    inputEl.value = ''
    
})




