//localStorage.removeItem('name')
let customerName;

let customerInput = document.querySelector('.cus-input')
let taxinput = document.querySelector('.tax-input')


function finalGen() {
	let CustomerName = customerInput.value;
	console.log(CustomerName)
	let tax = taxinput.value;

	if(CustomerName === '' ){
		alert('Please Enter Customer Name ')
	}
	
	else{
		console.log('hi')
		customerName=CustomerName;
		taxPercent = tax;
		
		console.log(customerName)
		localStorage.removeItem('name')
 
         localStorage.removeItem('taxes')
         localStorage.setItem('name' , customerName)
         localStorage.setItem('taxes' , taxPercent)
       
 		window.location.href=`bill.html`
         
	}

}