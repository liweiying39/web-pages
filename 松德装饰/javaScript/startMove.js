// JavaScript Document
  function getByClass(oParent,sClass)  //获取元素子节点
	{
		var aEle = oParent.getElementsByTagName("*");
		var aResult =[ ];
		for(var i = 0 ; i <aEle.length ; i++)
		{
			if(aEle[i].className == sClass)
			{
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}

	function getStyle(obj,name)    //获取元素的属性
	{
		if(obj.currentStyle)
		{
			return obj.currentStyle[name];
		}
		else
		{
			return getComputedStyle(obj,false)[name];
		}
	}
	
	
	function startMove(obj, json,fend)   //运动
{
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var aStop = true;  //假设所有值都已经到了
		for(var attr in json)
		{
		var cur = 0;
		if(attr =='opacity')
		{
			cur = Math.round(parseFloat(getStyle(obj,attr))*100);
		}
		else
		{
		 cur =parseInt(getStyle(obj,attr));
		}
		var speed =(json[attr] -cur)/6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(json[attr]!=cur)
		{
			aStop = false;
		}
		
		if(attr =='opacity')
		{
			obj.style.filter='alpha(opacity:'+(cur+speed)+')';
			obj.style.opacity = (cur+speed)/100;
		}
		else
		{
			obj.style[attr] = cur + speed +"px";
		}
		
		}
		if(aStop)
		{
			clearInterval(obj.timer);
			if(fend) fend();
		}
				},30)
}
