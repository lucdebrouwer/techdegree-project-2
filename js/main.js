// Define scope variables
let studentList = document.querySelector('.student-list');
let students = studentList.children.length;
console.log(typeof(students));
let pages = Math.ceil(students / 10);
let maxOnPage = 10;


/* arguments for page number and student list */
function showPage(list, page) {
    // First hide all students on the page
    for(i = 0; i < list.children.length; i += 1) 
    {
        list.children[i].style.display = 'none';
    }
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

    
    showPage(studentList, pages);