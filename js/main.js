// Select required DOM element
const studentList = document.querySelector('.student-list');
const students = studentList.children.length;
// Dynamically create the elements needed
const page = document.querySelector('.page');
const paginationUl = document.createElement('ul');
const pagination = document.createElement('div');

// Define page logic
let pages = Math.ceil(students / 10);
let perPage = 10;
let currPage = 1;

/* arguments for page number and student list */
function showPage(list, page) {
    let max = page * perPage - 1 ; // 10 * 1 = 10
    let min = page * perPage - perPage // 10 - 10 = 0
    // First hide all students on the page
    for(let i = 0; i < list.children.length; i += 1) 
    {
        list.children[i].style.display = 'none';  
         // if the index of a list item is >= the index of the first item that should be shown on the page,
        // && the list item index is <= of the last item that should be shown on the page, show it.
        if(i >= min && i <= max) 
        {
            list.children[i].style.display = 'block';
        }     
    }
    //console.log(min, max)
}
function appendPageLinks(links) { 
    /* Uses links as argument to determine the amount of pageLinks to create */
    for(i = 0; i < links; i += 1) 
    {
        const anchorLi = document.createElement('li');
        const anchors = document.createElement('a');
        anchors.innerHTML = i + 1;

        paginationUl.className = 'pagination';

        // Append each individual element to its parent
        paginationUl.appendChild(anchorLi);
        anchorLi.appendChild(anchors);
        pagination.appendChild(paginationUl);
    }

    
     // add an event listener to the pagination div
     // use event delegation to target the a tags

    pagination.addEventListener('click', (event) => {

        // Select all the anchor tags in the nodeList
        const aTags = document.querySelectorAll('a');

        // Remove all existing active classes
        // Set active when clicked
        for (let i = 0; i < aTags.length; i += 1) {
            aTags[i].classList.remove("active");
            event.target.classList.add("active");
      }
        // Determine which link has been clicked
        if(event.target.tagName == 'A') 
        {                    
            showPage(studentList, event.target.innerHTML);
        }
    });

    page.appendChild(pagination);
    }

    appendPageLinks(pages);
    showPage(studentList, currPage);