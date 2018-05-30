
const divPage = document.querySelector('.page');
const list = document.querySelectorAll('.student-item');
//functions to show students depending the nº of page.
function showPage(onePage) {
  for (let k = 0; k < list.length; k += 1 ){
  list[k].style.display = 'none';
  }

  for (let i = 0; i < list.length; i += 1 ){
    if( onePage -1.01 < i/10 && i/10 < onePage -0.01 ){
      list[i].style.display = 'block';
    }
  }
}
showPage(1);

//the append pageLinks functions

function appendPageLinks(list){
  const numberOfPages = Math.ceil(list.length / 10);

  let pageLinkSection = document.createElement('div');
  divPage.appendChild(pageLinkSection);

  let ulLinkSection = document.createElement('ul');
  pageLinkSection.appendChild(ulLinkSection);

  // loop For - depending numberOfPages.length to get the <li>

for(let j = 1; j < numberOfPages; j += 1){
  let liLinkSection = document.createElement('li');
  ulLinkSection.appendChild(liLinkSection)[j];

  let aLink = document.createElement('a');
  liLinkSection.appendChild(aLink)[j];

  aLink.href = "#";
  aLink.textContent = [j];
  }
}

appendPageLinks(list);
