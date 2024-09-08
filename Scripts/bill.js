/*let companyName = companyDetails[0].companyName
let companyEmail = companyDetails[0].companyName
let companyName = companyDetails[0].companyName
let companyName = companyDetails[0].companyName*/
let total = 0;
let gstValue = 0;
let grandTotal = 0;
let innerHtml = ``
let header = document.querySelector('.bill-header')
companyDetails.forEach((detail)=>{

header.innerHTML = `
<img  src="${detail.companyLogo}"alt="Company Logo" class="logo">
            <div class="company-info">
                <h1 class="company-name">${detail.companyName}</h1>
                <p class="company-address">${detail.companyAddress}</p>
                <p class="phone-email">Phone: ${detail.companyNumber} | Email: ${detail.companyEmail}</p>
            </div>`
})

document.querySelector('.customer-info').innerHTML = `
	<h2>Customer Name: ${customerNameFinal}</h2>
`

items.forEach((item)=>{
	total+=item.productTotal

	innerHtml += `<tr>
                        <td>${item.productName}</td>
                        <td>${item.productQuantity}</td>
                        <td>${item.productUSP}</td>
                        <td>${item.productTotal}</td>
                    </tr>`
})
document.querySelector('.bill-content').innerHTML = innerHtml
document.querySelector('.sub-total').innerHTML = total
document.querySelector('.GST').innerHTML = `GST(${GstFinal}%):`

gstValue += Math.round((GstFinal/100)*total)
grandTotal = total + gstValue

console.log(gstValue,grandTotal)

document.querySelector('.gst-value').innerHTML = gstValue
document.querySelector('.grand-total').innerHTML = grandTotal