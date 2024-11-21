class Budget{
    constructor(){
        this.Budget = document.getElementById("budgetInput");
    }

    handlebudget(){
        event.preventDefault();
        console.log("submit", this.Budget.value);

        if(this.Budget.value === ''){
            document.getElementById('error-bud').innerHTML = 'Please enter budget'
        }else{
            if(isNaN(this.Budget.value)|| parseInt(this.Budget.value)<=0){
                document.getElementById('error-bud').innerHTML = 'Please enter valid budget'
            }else{
                 document.getElementById('error-bud').innerHTML = ''
                 localStorage.setItem("budget",(this.Budget.value))
                 this.handledisplay();
            }
        }
    }

    handledisplay(){

        const handBud = localStorage.getItem('budget');
        const handExp = JSON.parse(localStorage.getItem('Expenses'));

        console.log(handBud,handExp);

       if(handExp){
        const ExpTotal =  handExp.reduce((acc,v) => acc + v.value , 0)
        console.log(ExpTotal);
        document.getElementById('ex-num').innerHTML = ExpTotal
        document.getElementById('ba-num').innerHTML = parseInt(handBud)  - ExpTotal;
       }
        document.getElementById('bud-num').innerHTML = handBud;
        
    }
}

const b = new Budget ()

const budgett = document.getElementById('budget-add');

budgett.addEventListener("submit" , function (){
    b.handlebudget();
})

class Expense extends Budget{
    constructor(){
        super()
        this.Expense = document.getElementById('expenseTitle');
        this.ExpenseName = document.getElementById('expenseAmount');

        this.update = null;
    }

    
    handleExpense(){
        event.preventDefault();
        console.log("submit",this.Expense.value)    ;
        console.log("submit",this.ExpenseName.value);

        let flag=true;
        if(this.Expense.value === ''){
            flag=false;
            document.getElementById('error-expense-title').innerHTML = 'Please enter expense Name';
        }else{
            document.getElementById('error-expense-title').innerHTML = '';
            this.handledisplay();
        }

        if(this.ExpenseName.value === ''){
            flag=false;
            document.getElementById('error-expense-amount').innerHTML = 'Please enter expense amount';
        }else{
            if(isNaN(this.ExpenseName.value)|| parseInt(this.ExpenseName.value)<=0){
                flag=false;
                document.getElementById('error-expense-amount').innerHTML = 'Please enter valid expense amount'
            }else{
                 document.getElementById('error-expense-amount').innerHTML = ''
            }
        }

        let EmpArray = [];

        if(flag){
            let obj = {
                id : Math.floor(Math.random()*1000),
                name : this.Expense.value,
                value : parseInt(this.ExpenseName.value) 
            }

            let localsto = JSON.parse(localStorage.getItem("Expenses"));

            if(this.update){
                console.log("update");

                const FindData =  localsto.findIndex((v) => v.id === this.update)
                localsto[FindData]=obj

                localStorage.setItem("Expenses",JSON.stringify(localsto))

                const parentdiv = document.getElementById("exp-" + this.update)

                parentdiv.childNodes[0].textContent=this.Expense.value
                parentdiv.childNodes[1].textContent=this.ExpenseName.value

                this.update = null;
            }else{
                console.log("add");
                EmpArray.push(obj)
                console.log(EmpArray);
    
                if(localsto){
                    localsto.push(obj);
                    localStorage.setItem("Expenses",JSON.stringify(localsto))
                }else{
                    localStorage.setItem("Expenses",JSON.stringify([obj]));
                }
                
               this.handleExp(obj);
            }

            this.handledisplay();
           
        }
    } 

    handleDelete(id){
        console.log("delete",id);

        const data_del = document.getElementById("exp-" + id)
        data_del.remove()

        const localExp = JSON.parse(localStorage.getItem("Expenses"));

        const fil_Data = localExp.filter((v)=> v.id !== id)
        localStorage.setItem("Expenses",JSON.stringify(fil_Data))

        this.handledisplay()
    }

    handleEdit(id){
        console.log("edit",id);

        const DataExp = JSON.parse(localStorage.getItem("Expenses"))

        const DataFind = DataExp.find((v) => v.id == id)
        this.Expense.value = DataFind.name;
        this.ExpenseName.value = DataFind.value;
        console.log(DataFind);

        this.update = id;
    }

    handleExp(obj){
        const Exp_data = document.getElementById('exp-data')

        // const rnu = Math.floor(Math.random()*1000)

        const divelem = document.createElement("div");
        divelem.setAttribute("id","exp-"+ obj.id);
        Exp_data.appendChild(divelem)

        // const expInp = document.getElementById('expenseTitle').value;
        const spanEle = document.createElement("span")
        spanEle.setAttribute("id","Exp-Title-",obj.id)
        spanEle.textContent = obj.name 
        divelem.appendChild(spanEle)

        // const ExpAmt = document.getElementById('expenseAmount').value;
        const spanEle1 = document.createElement("span")
        spanEle1.setAttribute("id","Exp-Value-",obj.id)
        spanEle1.textContent = obj.value 
        divelem.appendChild(spanEle1)

        Exp_data.appendChild(divelem); 

        const BtnEle = document.createElement("button")
        BtnEle.textContent = 'Edit'
        divelem.addEventListener("click",() => {
            this.handleEdit(obj.id);
        })
        divelem.appendChild(BtnEle);
        // BtnEle.setAttribute("onclick",`handleedit(${rnu})`) 

        const BtnEle2 = document.createElement("button")
        BtnEle2.textContent = 'Delete'
        divelem.appendChild(BtnEle2);
        BtnEle2.addEventListener("click", () => {
            this.handleDelete(obj.id);
        })
        // BtnEle2.setAttribute("onclick",`handledelete(${rnu})`) 

    }
}

const e  = new Expense;

const ExpensesForm = document.getElementById('expense-form');

ExpensesForm.addEventListener("submit",function(){
    e.handleExpense();
})

window.onload = function () {
    b.handledisplay();
    console.log("onloadd");
    
   const disExp = JSON.parse(localStorage.getItem("Expenses"));
   disExp.map((v) => {
    e.handleExp(v);
   })
}







  

