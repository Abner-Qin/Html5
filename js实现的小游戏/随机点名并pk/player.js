//选手
function Player(pname, ele, hp){
	this.pname = pname;
	this.ele = ele;
	this.hp = hp;
	this.enemy = null;
	
	this.atk = function(){
		var skill = this.skilling();
		this.enemy.hurt(skill._val);
		return {
			skname: skill._name,
			hurtval: skill._val
		};
	}
	this.hurt = function(damage){
		this.hp -= damage;
	}
	this.recover = function(num){
		this.hp += num;
	}
	this.skilling = function(){
		return {
			_val: parseInt(Math.random()*30),
			_name: Player.prototype.skList[parseInt(Math.random()*7)]
		};
	}
}

Player.prototype.skList = ["发起了猛烈的进攻，打的他满地找牙, 对方损失了",
					"使用了大招，对方的假发被打掉了！损失了",
					"使用了魅惑技能，对方被迷的神魂颠倒，瞬间掉了2W的粉丝，损失了",
					"查看了葵花宝典，逼格提升了51%，对方被吓破了胆，损失了",
					"炫耀了他的大块肌肉，对方损失了",
					"狠狠的鄙视了对方一下，造成了巨大伤害，对方损失",
					"使用了情侣花式虐狗秀恩爱，一下子打中了对方的小心脏，对方损失"
					];
