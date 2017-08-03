// JavaScript Document


function addReview(){
	var custName = document.getElementById("custname");
	var userOpinion = document.getElementById("review");
	var blockquote = document.createElement("blockquote");
	document.querySelector(".userreview").appendChild(blockquote);
	var p_review = document.createElement("p");		
	p_review.innerHTML = userOpinion.value;
	blockquote.appendChild(p_review);
	var footer = document.createElement("footer");
	blockquote.appendChild(footer);
	var em = document.createElement("em");
	em.innerHTML= custName.value;
	footer.appendChild(em);
	
//	var p_name = document.createElement("p");
//	p_name.innerHTML = custName.value;	
//	document.querySelector(".userreview").appendChild(p_name);
	
	
}