	function topTen(){
		function reqListener (){
			document.getElementById("demo").innerHTML=" ";
 			var xyz = JSON.parse(this.responseText);
 			
 			console.log(xyz);
			for(var i=0;i<10;i++)
			{
				var a=xyz["track"];
				var o=a[i];
				if( o.strMusicVid!=null && o.strDescriptionEN!=null )
				document.getElementById("demo").innerHTML  = document.getElementById("demo").innerHTML + "Track : "+ o.strTrack+"<br/>"+ "Album : "+ o.strAlbum + "<br/>" + "Genre : "+ o.strGenre + "<br/>" +"Youtube Video Link : " + o.strMusicVid + "<br/><br/>"+" Description :" +"<br/>"+ o.strDescriptionEN + "<br/><br/><br/>";
			}
		}

		var var1=document.getElementById("artist").value;

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", `http://www.theaudiodb.com/api/v1/json/195003/track-top10.php?s=${var1}`);
oReq.send();

}

