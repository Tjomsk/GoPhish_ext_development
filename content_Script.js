//Runs in isolation in the context of the webpage

const selectedUrl = document.querySelector('#selectedUrl');

chrome.runtime.sendmessge({type: 'geturl'}, (response) =>{
    if (response.url){
        selectedUrl.value = response.url;
    }
})