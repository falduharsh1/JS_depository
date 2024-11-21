class Budget {
    constructor(){
        this.Budget = document.getElementById('budgetInput')
    }

    handleBudget(){
        event.preventDefault();
        console.log("submit",this.Budget.value);

        if(this.Budget.value === ''){
            document.getElementById('error-bud').innerHTML = "Please enter Budget"
        }else{
            if(isNaN(this.Budget.value) || parseInt(this.Budget.value)<=0){
            document.getElementById('error-bud').innerHTML = "Please enter a valid Budget"
            }else{
             document.getElementById('error-bud').innerHTML = " "
             localStorage.setItem("Budget",this.Budget.value)
             this.handleDisplay();
            }
        }
    }

    handleDisplay(){
       const localeBud = localStorage.getItem("Budget")
       const localeExp = localStorage.getItem("Expense_Amt")
       document.getElementById('bud-num').innerHTML = localeBud;
       document.getElementById('ex-num') .innerHTML = localeExp;
       document.getElementById('ba-num').innerHTML = localeBud - localeExp;
    }
}


const b = new Budget ()

const budgetAdd = document.getElementById('budget-add');
budgetAdd.addEventListener("submit",function (){
    b.handleBudget()
});

class Expense extends Budget {
    constructor(){
        super();
        this.Expense = document.getElementById('expenseTitle')
        this.Expense_Amt = document.getElementById('expenseAmount')
    }

    handleExpense(){
        event.preventDefault();
        console.log("submit",this.Expense.value);
        console.log("submit",this.Expense_Amt.value);
        
        const flag = true
        if(this.Expense.value === ''){
            flag=false;
            document.getElementById('error-expense-title').innerHTML = "Please enter expense name"
        }else{
            document.getElementById('error-expense-title').innerHTML = " "
        }

        if(this.Expense_Amt.value === ''){
            flag=false;
            document.getElementById('error-expense-amount').innerHTML = "Please enter expense amount"
        }else{
            if(isNaN(this.Expense_Amt.value) || parseInt(this.Expense_Amt.value)<=0){
                flag=false;
                document.getElementById('error-expense-amount').innerHTML = "Please enter a valid expense amount"
            }else{
                document.getElementById('error-expense-amount').innerHTML = " "
                localStorage.setItem("Expense_Amt",JSON.stringify(this.Expense_Amt.value))
            }
        }

        if(flag){
            const Bud_arry = [];

        const obj = {
            id : Math.floor(Math.random ()* 1000),
            name : this.Expense.value ,
            amt : parseInt(this.Expense_Amt.value ) 
        }

        Bud_arry.push(obj)
        console.log(Bud_arry);

        }
    }

    handleData(obj){
        const datas = document.getElementById('exp-data')
        
        const expdata = document.createElement("div")
        expdata.setAttribute("id",obj.id)
        expdata.appendChild(datas)

        const expspan = document.createElement("span")
        expspan.setAttribute("id","Exp-Title-",obj.name)
        expspan.appendChild(datas)

        const expspan2 = document.createElement("span")
        expspan2.setAttribute("id","Exp-Value-",obj.amt)
        expspan2.appendChild(datas)
    }
}

const e = new Expense ()

const ExpenseAdd = document.getElementById('expense-form');
ExpenseAdd.addEventListener("submit",function(){
    e.handleExpense();
})
