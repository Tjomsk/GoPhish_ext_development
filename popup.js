//Local js file for the extensions DOM

// const urlList = document.getElementById('url-list');

// chrome.aciton.onClicked.addListener(()=>{
//     chrome.runtime.sendMessage({aciton: 'collectUrls' }, (response) => {
//         if(response.urls){
//             response.urls.array.forEach(url => {
//                 const li = document.createElement('li');
//                 li.textContent = url;
//                 urlList.appendChild(li);
//             });
//         }
//     })
// })


// //2//
// const showSelectedUrlButton = document.querySelector('button');

// showSelectedUrlButton.addEventListener('click', () => {
//     const selectedUrlValue = document.querySelector('#selectedUrl').value;
//     chrome.runtime.sendMessage({type: 'selectedUrl', url: selectedUrlValue});
// })