$(document).ready(function(){

   var x =20;
   var y =20;
   var $pic ="";
   $("a.pic").mouseover(function(e){
      //this.myTitle = this.title;
      //this.title = "";

      $pic = $("<div id='pic'><img src='"+this.href+"' ></div>");
      //var $pic = $("<div id='pic1'>" + this.title + "</div>");
      $pic.appendTo("body");
      $pic.css({
         "top":(e.pageY+y)+"px",
         "left":(e.pageX+x)+"px"
         }).show("fast");
   }).mouseout(function(){ 
      this.title =this.myTitle;
      $pic.remove();
   }).mousemove(function(e){  
      $pic.css({  
         "top": (e.pageY+y) + "px",  
         "left":  (e.pageX+x)  + "px"  
      });  
   });
});


function getAge() {
    var y = new Date().getFullYear();
    return y;
}

function setName(obj) {
	obj.name = "famh";
	obj = new Object();
	obj.name = "Grehj";
	return obj.name;
}


class Student {
	constructor(name) {
		this.name = name;
	}

	hello() {
		alert('hello,' + this.name + '!');
	}
}

class PrimaryStudent extends Student {
	constructor(name, grade) {
		super(name);
		this.grade = grade;
	}

	myGrade() {
		alert('I am at grade ' + this.grade)
	}

}
