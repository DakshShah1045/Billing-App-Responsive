
  //let customerName=''
 // let customerEmail=''
  
 console.log(companyDetails)
 localStorage.removeItem('item')

  let TOTAL = 0
  let cartSummaryHTML = ``
  let items = [
    ]
  console.log(items)
  let name = ''
  let quantity;
  let unitPrice = 0

  function run() {
    
    nameInput = document.querySelector('.pro-name').value
    quantityInput = Number(document.querySelector('.pro-quantity').value)
    unitPriceInput = Number(document.querySelector('.pro-unit-price').value)
    
// name Input Starts.........................................................................................................................................................


if(nameInput === ''){
  alert('Please Enter Product Name')
  document.querySelector('.pro-name').value = ''
  return;
}
else if(nameInput.length > 30){
  alert('Maximum length of name is only 30')
  document.querySelector('.pro-name').value = ''
  return;
}
else{
  name = nameInput
  
}

// Name input ends ..............................................................
// quantity starts ........................................................................................................................................................



if(isNaN(quantityInput) === true){
  alert('Please Enter A Valid Quantity Number Value')
  document.querySelector('.pro-quantity').value = ''
  return;
}
else if(quantityInput === 0){
  alert('Please Enter A Valid Quantity Number Value')
  document.querySelector('.pro-quantity').value = ''
  return;
}
else if(quantityInput > 10000){
  alert('Maximum Quantity Is 10000')
  document.querySelector('.pro-quantity').value = ''
  return;
}
else{
  quantity = quantityInput
  
}

// Quantity Ends .........................................................................................................................................................
// Unit Price Starts..............................................................................................................................................................

              if(isNaN(unitPriceInput) === true){
                alert('Please Enter A Valid Money Number Value')
                document.querySelector('.pro-unit-price').value = ''
                return;
              }
              else if(unitPriceInput === 0){
                alert('Please Enter A Valid Money Number Value')
                document.querySelector('.pro-unit-price').value = ''
                return;
              }
             
              else{
                unitPrice = unitPriceInput  
              }

              console.log(quantity , name , unitPrice)
        let totalPrice = (quantity * unitPrice)
        console.log(totalPrice)
        items.push({
          productName : name,
          productQuantity : quantity,
          productUSP : unitPrice,
          productTotal : totalPrice
        })
        console.log(items)

        document.querySelector('.pro-name').value = ''
        document.querySelector('.pro-quantity').value = ''
        document.querySelector('.pro-unit-price').value = ''
            }

     function generate() {
      if(items.length == 0){
        alert('Please Enter Products')
      }
      else{
         localStorage.removeItem('item')
         localStorage.setItem('item' , JSON.stringify(items))
        window.location.href="customer.html"
      }
     }       

