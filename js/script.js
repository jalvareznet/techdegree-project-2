
const divPage = document.querySelector('.page');
const list = document.querySelectorAll('.student-item');

//The showPage Functions --to show students depending the nº of page.
function showPage(pageNumber, list) {
  // hide all students
  for (let k = 0; k < list.length; k += 1 ){
  list[k].style.display = 'none';
  }
  // show the student (10 per page) depending pageNumber.
  for ( let i = 0; i < list.length; i += 1 ){
    if( pageNumber -1.01 < i/10 && i/10 < pageNumber -0.01 ){
      list[i].style.display = 'block';
    }
  }
}
//initial page -- show page 1. (10 first students). Call the function.
showPage(1, list);

//the appendPageLinks Functions
function appendPageLinks(list){
  //determine how many pages for this student list.
  const numberOfPages = Math.ceil(list.length / 10);
  // page link section
  let pageLinkSection = document.createElement('div');
  divPage.appendChild(pageLinkSection);
  pageLinkSection.className = 'pagination';

  let ulLinkSection = document.createElement('ul');
  pageLinkSection.appendChild(ulLinkSection);

// loop For - depending numberOfPages.length to create the <li><a></li>

for( let j = 0; j < numberOfPages; j += 1 ){
  let liLinkSection = document.createElement('li');
  ulLinkSection.appendChild(liLinkSection)[j];

  let aLink = document.createElement('a');
  liLinkSection.appendChild(aLink)[j];

  aLink.href = "#";
  aLink.textContent = ( 1 + j );
  }
  // active the first page link
  let firstLi = document.querySelector('a');
  firstLi.className = 'active';

// event listener defining what happend when I click a number(link).

ulLinkSection.addEventListener('click', (event)=> {
  if( event.target.tagName == 'A'){
    let counterNumber = parseInt(event.target.textContent);
    let aClicked = event.target;
    let aAll = document.querySelectorAll('a');

//mark the link as active
    for( r = 0; r < aAll.length; r += 1){
      aAll[r].classList.remove('active');
    }
    aClicked.className = 'active';
// call the showPage Function with the counterNumber link clicked.
    showPage(counterNumber, list);
  }
});
}

appendPageLinks(list);
