const hackBtn=document.querySelector("#hackBtn")
hackBtn.addEventListener("click",async ()=>{
    const [tab] = await chrome.tabs.query({active:true, currentWindow:true})

    chrome.scripting.executeScript({
        target:{tabId: tab.id},
        function: hack
    })
})


function hack(){
    document.body.contentEditable=true
}
