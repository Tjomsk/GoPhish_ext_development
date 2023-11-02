chrome.contextMenus.create({
    id: "gophish_context_menu", //ID of context menu item
    title: "GoPhish", //Title of context menu button
    contexts: ["link"] //Only allows context menu for links
})

chrome.contextMenus.onClicked.addListener((info, tab, linkUrl) =>{
    console.log(info) //Information about the item clicked and the context where the click happened
})
