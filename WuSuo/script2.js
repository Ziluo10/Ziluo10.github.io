// JavaScript Document
var b_left = document.getElementById("b_left");
var b_right = document.getElementById("b_right");
var cardInform = document.getElementsByClassName("cardInform");

var index = 1;

b_left.addEventListener("click", function(){
	showSlide(-1);
})

b_right.addEventListener("click", function(){
	showSlide(1);
})

function showSlide(n)
{
	index = index + n;
	
	if(index == 0)
		index = cardInform.length;
	if(index == cardInform.length + 1)
		index = 1;
	
	for(var i = 0; i < cardInform.length; i++)
	{
		cardInform[i].style.display = "none";
	}
	
	cardInform[index - 1].style.display = "block";
}