const expenseList = []
const generateList = () => {
    var list = document.getElementById('demo')


    expenseList.map((value, index ) =>{
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(value.expenseTitle));
        list.appendChild(entry);
    })
}
const addExpense = () => {

    const expenseTitle = document.getElementById("expenseTitle").value
    const expenseCost = document.getElementById("expenseCost").value

    expenseObj = {
        expenseTitle: expenseTitle,
        expenseCost: expenseCost
    }


    expenseList.push(expenseObj)

    console.log("expenseTitle", expenseTitle)
    console.log("expenseCost", expenseCost)
    console.log("expenseList", expenseList)

    generateList()
}


const addbudget = () => {

    const expenseTitle = document.getElementById("budgetCost").value

    console.log("expenseCost", expenseTitle)
}



// a array banana hai like this cont list = []
// expenex ki dono value push karni hai array mai  like this = {
// expensetiel : '',
// epxensecost  : ''
// }

