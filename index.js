function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}

// addNewElementAsLi():
// This function takes the value retrieved from the previous
// retrieveEmployeeInformation function and adds that string to a new list
// element which is appended to the ul with class "employee-list".
function addNewElementAsLi(){
  const ul = document.querySelector('ul.employee-list')
  return ul.append(retrieveEmployeeInformation)
}

// addNewLiOnClick():
// This adds the employee name as an li element on click and clears the input value.

// clearEmployeeListOnLinkClick():
// This empties out the employee list when "Clear employee list" button clicked.
