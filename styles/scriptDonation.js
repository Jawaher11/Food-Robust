var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  if (n > slides.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
		  slides[i].style.display = "none";  
	  }
	  slides[slideIndex-1].style.display = "block";  
	}

	function validateForm(e){
	
		let name=document.ourform.name.value;		
		let email=document.ourform.email.value;		
		let num=document.ourform.num.value;		
		let creditcard=document.ourform.creditcard.value;		
		let amount=document.ourform.amount.value;
		
		if(name==""){
			alert("Name is required");
			e.preventDefault();
			return false;
		}
		else if(!isNaN(name)){
			alert("Please enter a valid name");
			e.preventDefault();
			return false;
		}
		
		if(email==""){
			alert("Email is required");
			e.preventDefault();
			return false;
		} 
		else {
			let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			let validEmail = regEx.test(email);
			if(!validEmail) {
				alert("Please enter a valid email address");
				e.preventDefault();
				return false;
				}
		}
		
		if(num==""){
			alert("Contact number is required");
			e.preventDefault();
			return false;
		}
		else if(isNaN(num)){
			alert("Please enter a valid contact number");
			e.preventDefault();
			return false;
		}
		
		if(creditcard==""){
			alert("Credit card number is required");
			e.preventDefault();
			return false;
		}		
		else if(isNaN(creditcard)){
			alert("Please enter a valid credit card number");
			e.preventDefault();
			return false;
		}

		if(amount==""){
			alert("Amount is required");
			e.preventDefault();
			return false;
		} 
		else if(isNaN(amount)){
			alert("Please enter a valid camount");
			e.preventDefault();
			return false;
		}
	}
	