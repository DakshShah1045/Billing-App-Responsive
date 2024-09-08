console.log('Hello World')
    
    localStorage.removeItem('setup')
    let companyDetails = JSON.parse(localStorage.getItem('setup'))||
[
  ]
  console.log(companyDetails)
  let imgSrc=''
  let chooseFile = document.getElementById('logo')
  //let imgPreview = document.querySelector('.icon')
  chooseFile.addEventListener('change' , ()=>{
    getImgData();
  })
  function getImgData() {
       const files = chooseFile.files[0];
       if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
      //imgPreview.style.display = "block";
      //imgPreview.style.backgroundColor = "white";
      //imgPreview.innerHTML = '<img src="' + this.result + '" class="img-result" />';
      imgSrc = this.result
      console.log(imgSrc)
      
      });    
      }
      
      }


  let companyName=''
  let companyEmail=''
  let companyNum = ''
  let companyAdd = ''
  let companyLogo = ''
  
document.querySelector('.submitBtn').addEventListener('click' , ()=>{
   companyName = document.querySelector('.com-name').value
  companyEmail = document.querySelector('.com-email').value
  console.log(companyEmail)
  companyNum = document.querySelector('.com-num').value
   companyAdd = document.querySelector('.com-add').value
   companyLogo = imgSrc
   console.log(companyLogo)

  if(companyName === ``){
    alert('Name Required')
  }
  else{
    if(companyEmail === ''){
      alert('Please Enter an Email ID')
    }
    
    else{
      if(companyNum === ``){
        alert('Enter Company Telephone Number')
      }
      else{
        companyNum = companyNum;
        if(companyAdd === ``){
          alert('Enter Any Address of either Office or Shop')
        }
        else{
          //Final Else .........................................................................................................................................................................
          submitDetail()
  let companyName = document.querySelector('.com-name').value=''
  let companyEmail = document.querySelector('.com-email').value=''
  let companyNum = document.querySelector('.com-num').value=''
  let companyAdd = document.querySelector('.com-add').value=''
        }
      }
    }
  }
  /*console.log(companyName)
  console.log(companyEmail)
  console.log(companyNum)
  console.log(companyEmail)
  */
})
function submitDetail() {
 companyDetails=[]
  companyDetails.push({
    companyName : companyName,
    companyEmail : companyEmail,
    companyNumber : companyNum,
    companyAddress : companyAdd,
    companyLogo : companyLogo
  })
   localStorage.removeItem('setup')
    console.log(companyDetails)

    localStorage.setItem('setup' , JSON.stringify(companyDetails))
  //window.location.href = 'bill2.html';
}