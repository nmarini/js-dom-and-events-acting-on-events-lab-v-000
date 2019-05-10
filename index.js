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

function addNewElementAsLi(){
  const ul = document.querySelector('.employee-list')
  ul.append('<li>`${retrieveEmployeeInformation()}`</li>')
}

// addNewLiOnClick():
// This adds the employee name as an li element on click and clears the input value.
function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')

}

// clearEmployeeListOnLinkClick():
// This empties out the employee list when "Clear employee list" button clicked.
