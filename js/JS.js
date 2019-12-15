	var box = document.getElementById("box");
	var navList = document.getElementById("nav").children;
	var slider = document.getElementById("slider");
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var bg = document.getElementById("bg");
	var index = 1;
	var timer;
	var i = 0;
	function lun(){
		i = i + 6;
		if(i >= 1190){
			bg.style.left = "900px";
			i = 0;
		}
		animate(bg,{left:900-i});
		
	}
	setInterval(lun,100);
	function next(){
		index++;
		change();
		animate(slider,{left:-1200*index},function(){
			if(index === 6){
				slider.style.left = "-1200px";
				index = 1;
			}
		});
	}
	function pre(){
		index--;
		change();
		animate(slider,{left:-1200*index},function(){
			if(index === 0){
				slider.style.left = "-6000px";
				index = 5;
			}
		});
	}
	var timer = setInterval(next,3000);
	box.onmouseover = function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
		clearInterval(timer);
	}
	box.onmouseout = function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer = setInterval(next,3000);
	}
	right.onclick = next;
	left.onclick = pre;
	for(var i = 0; i < navList.length; i++){
		navList[i].idx = i;
		navList[i].onclick = function(){
			index = this.idx +  1;
			change();
			animate(slider,{left:-1200*index});
		}
	}
	function change(){
		for(var i = 0; i < navList.length; i++){
			navList[i].className = '';
		}
		if(index === 6){
			navList[0].className = "active";
		}
		else if(index === 0){
			navList[4].className = "active"; 
		}
		else{
			navList[index-1].className = "active";
		}
	}