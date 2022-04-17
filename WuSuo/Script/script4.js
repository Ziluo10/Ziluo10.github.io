// JavaScript Document// JavaScript Document
var b_left = document.getElementById("b_left");
var b_right = document.getElementById("b_right");
var cardInform = document.getElementsByClassName("cardInform");
var bottom_color = document.getElementById("bottom_color");

var index = 1;
var b_color = ["#f5cf27", "#de105b", "#0bdb62", "#e645e3", "#45c3e6", "#f26b35"];
var is_click = false;
var speed = 5000;
autoShow();

b_left.addEventListener("click", function(){
	showSlide(-1);
})

b_right.addEventListener("click", function(){
	showSlide(1);
})

function showSlide(n)
{
	is_click = true;
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
	bottom_color.style.backgroundColor = b_color[index - 1];
}

function autoShow()
{
	if(is_click == false)
	{
		speed = 5000;
		index = index + 1;

		if(index == 0)
			index = cardInform.length;
		if(index == cardInform.length + 1)
			index = 1;

		for(var i = 0; i < cardInform.length; i++)
		{
			cardInform[i].style.display = "none";
		}

		cardInform[index - 1].style.display = "block";
		bottom_color.style.backgroundColor = b_color[index - 1];
	}
	
	else
	{
		speed = 4000;
		is_click = false;
	}
	
	setTimeout(autoShow, speed);
}// JavaScript Document