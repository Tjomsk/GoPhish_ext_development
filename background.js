chrome.contextMenus.create({
    id: "gophish_context_menu", //ID of context menu item
    title: "GoPhish", //Title of context menu button
    contexts: ["link"] //Only allows context menu for links
})

chrome.contextMenus.onClicked.addListener((info) =>{
    console.log(info) //Information about the item clicked and the context where the click happened
    
    //Extracts URL link as variable and displays it in the log
    const linkUrl = info.linkUrl; 
    console.log(linkUrl)
})
