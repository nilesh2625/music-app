function topTen(){
	function reqListener (){
 			var a = JSON.parse(this.responseText);
			console.log(a);
		}

		var var1=document.getElementById("artist").value;

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", `http://www.theaudiodb.com/api/v1/json/195003/track-top10.php?s=${var1}`);
oReq.send();




}