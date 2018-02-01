//裁判
function Judge(){
	this.timer = null;
	this.times = 0;
	this.isPlaying = false;
	this.attacker = null;
	this.begin = function(){
		if(this.isPlaying){
			return;
		} else {
			this.isPlaying = true;
		}
		oContent = document.getElementsByClassName("pkcontent")[0];
		oContent.innerHTML = "";
		var that = this;
		this.timer = setInterval(function(){
			var atk = that.attacker.atk(that.attacker.enemy);
			var oP = document.createElement("p");	
			oP.innerHTML = "第"+ that.times++ +"轮：【"+that.attacker.pname+"】"+atk.skname+atk.hurtval+"点血量";
			oContent.appendChild(oP);
			if(that.attacker.enemy.hp <= 0) {
				clearInterval(that.timer);//清理定时器
				var over = document.createElement("p");
				over.style.color = "red";
				over.innerHTML = that.attacker.enemy.pname +"精疲力尽，挂掉了！";
				oContent.appendChild(over);//增加最后一行，输出游戏结束
				that.isPlaying = false;
			}
			that.attacker = that.attacker.enemy;//交换
			document.getElementById("msg_end").scrollIntoView();//滚动条自动滚动至底部
		} , 500);
	};
	
}
