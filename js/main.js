// Define scope variables
let studentList = document.getElementsByTagName('ul')[0];
let pages = Math.ceil(studentList.children.length / 10);
console.log(pages);


/* arguments for page number and student list */
function showPage(pageNumber, list) {
    // First hide all students on the page
    studentList.style.display = 'none';
    // then loop through all students in our student list argument
          // if student should be on this page number         
            // show the student          
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

    
    showPage(pages, studentList);