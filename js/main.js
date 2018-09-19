// Define scope variables
let studentList = document.querySelector('.student-list');
let students = studentList.children.length;
console.log(typeof(students));
let pages = Math.ceil(students / 10);
let perPage = 10;
let currPage = 1;
/* arguments for page number and student list */
function showPage(list, page) {
    let max = perPage * currPage; // 10 * 1 = 10
    let min = max - perPage; // 10 - 10 = 0
    // First hide all students on the page
    for(i = 0; i < list.children.length; i += 1) 
    {
        list.children[i].style.display = 'none';
        
        for(i < min; i < max; i += 1) 
        {
            if(list.children[i] >= max && list.children[i] <= min) 
            {
                list.children[i].style.display = 'block';
            }
        }
    }
    // if the index of a list item is >= the index of the first item that should be shown on the page,
    // && the list item indedx is <= of the last item that should be shown on the page, show it.




    // else hide
}
function appendPageLinks(students) { 
    // determine how many pages for this student list
    // create a page link section
    // "for" every page
    // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link (event listener)
    // Use showPage to display the page for the link clicked
    // mark that link as "active"
    }

    
    showPage(studentList, pages);