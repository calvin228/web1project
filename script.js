// JavaScript Document
function resetForm(){
	document.getElementById("feedback").reset();
}
function addReview(){
	var custName = document.getElementById("custname");
	var userOpinion = document.getElementById("review");
	var ul = document.querySelector(".comments");
	var d = new Date();
	var li  = document.createElement("li");	
	var img = document.createElement("img");
	img.src = "images/icon1.png";
	var p_name = document.createElement("p");
	p_name.setAttribute("style","font-weight: bold");
	p_name.innerHTML = custName.value;	
	var p_review = document.createElement("p");		
	p_review.innerHTML = userOpinion.value;
	var p_date = document.createElement("p");
	p_date.setAttribute("class","text-right");
	p_date.innerHTML = d.toDateString();
	li.appendChild(img);
	li.appendChild(p_name);
	li.appendChild(p_review);
	li.appendChild(p_date);
	li.setAttribute("class","comment");
	ul.appendChild(li);	
	resetForm();
}

