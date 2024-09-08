let startBtn = document.querySelector('.js-button')
startBtn.addEventListener('click' , ()=>{
	if(companyDetails.length == 0){
		alert('Please Finish Setup First')
	}
	else{
		window.location.href='bill-make.html'
	}
})