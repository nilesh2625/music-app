function run(){
			function reqListener ()
			{
 				
				var myObj = JSON.parse(this.responseText);
		        var a=myObj["track"];
		        var o=a[0];
		      document.getElementById("demo").innerHTML = "Artist : "+ o.strArtist +"<br/><br/>"+ "Genre : "+ o.strGenre + "<br/><br/>" + "Album : " + o.strAlbum + "<br/><br/>" + "Youtube Video Link : "+ o.strMusicVid+ "</br><br/>" + "Something about the song : " + "<br/><br/>" + o.strDescriptionEN;
			}

			var var1=document.getElementById("artist").value;
			var var2=document.getElementById("song").value;
			
			var var4 = `http://www.theaudiodb.com/api/v1/json/195003/searchtrack.php?s=${var1}&t=${var2}`;

			var oReq = new XMLHttpRequest();
			oReq.addEventListener("load", reqListener);    
			oReq.open("GET",var4);
			oReq.send();

}

 		function run1(){        
		function lyrics ()
			{
 				var a = JSON.parse(this.responseText);
 				console.log(a);
 				var t=a.lyrics;
 				var f="";
 				for(let i=0;i<t.length;i++){
 					/*if(s[i]==" ")
 					{
 						t+=" ";
 						t+=" ";
 					}*/
 					if(t[i]==","){
 						f+=",";
 						f+="<br/>";
 					}
 					f+=t[i];


 				}
				document.getElementById("demo").innerHTML="Lyrics: "+"<br/><br/>"+f;
			}

			var var1=document.getElementById("artist").value;
			var var2=document.getElementById("song").value;



			   var yReq = new XMLHttpRequest();
			yReq.addEventListener("load", lyrics);
			var5 = `https://api.lyrics.ovh/v1/${var1}/${var2}`;
			yReq.open("GET", var5);
			yReq.send();
		}


			


