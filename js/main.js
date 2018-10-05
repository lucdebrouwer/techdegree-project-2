// Define scope variables
let studentList = document.querySelector('.student-list');
let students = studentList.children.length;
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
    console.log(min, max)
}
function appendPageLinks() { 
    // determine how many pages for this student list
    const page = document.querySelector('.page');
    const pagination = document.createElement('div');
    pagination.addEventListener('click', (event) => {
        
        // Determine which link has been clicked
        if(event.target.tagName == 'A') 
        {                    
            showPage(studentList, event.target.innerHTML);
        }
    });

    
    const paginationUl = document.createElement('ul');
    for(i = 0; i < pages; i += 1) 
    {
        const anchorLi = document.createElement('li');
        const anchors = document.createElement('a');
        
        anchors.innerHTML = i + 1;

        paginationUl.className = 'pagination';
        paginationUl.appendChild(anchorLi);
        anchorLi.appendChild(anchors);
        pagination.appendChild(paginationUl);
    }

    page.appendChild(pagination);

    // create a page link section
    // "for" every page
    // add a page link to the page link section
    // remove the old page link section from the site

    // append our new page link section to the site
    // define what happens when you click a link (event listener)
    // Use showPage to display the page for the link clicked
    // mark that link as "active"
    }

    appendPageLinks();
    showPage(studentList, currPage);