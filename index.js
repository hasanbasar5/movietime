let loader=document.querySelector(".loader");
 
    setTimeout(()=>{
   console.log("dfgvdfsg");
      loader.style.display="none";
    },3000);
  
  let filter=document.querySelector("#filter")
    let catcard1=document.querySelector("#cat-1");
    let tcmov=document.querySelector(".t-c-movie");
    let mainpage=document.querySelector(".main");
    let apped=document.querySelector(".appen");
    catcard1.addEventListener("click",card1);
    function card1(){
      filter.style.display="none"
      mainpage.style.display="none";
        let c1div=document.createElement("div");
        apped.appendChild(c1div);
        c1div.style.zIndex="1";
        c1div.style.backgroundColor="black";
        c1div.style.color="white";
        c1div.style.position="relative";
        let c1img=document.createElement("img");  
        c1div.appendChild(c1img);
        c1img.src="https://igimages.gumlet.io/tamil/home/vikram-movie-cast-salary31052022m.jpg?w=700&dpr=1.4";
        c1img.style.width="100%";
        c1img.style.height="400px";
         let c1title=document.createElement("h4");
         c1div.appendChild(c1title);
         c1title.innerHTML="Vikram";  
         c1title.style.padding="10px";
         c1title.style.fontSize="2.4em";
       let c1mname=document.createElement("h6");
        c1div.appendChild(c1mname);
        c1mname.innerHTML="Tamil";
        c1mname.style.paddingLeft="10px";
        c1mname.style.paddingTop="-10px";
        c1mname.style.fontSize="1.2em"
        let c1star=document.createElement("h5");
        c1div.appendChild(c1star);
        c1star.innerHTML="⭐ 4.6/5";
        c1star.style.paddingLeft="10px";
        c1star.style.position="absolute";
        c1star.style.bottom="50.5%";
        c1star.style.right="10%";
        let c1cnt=document.createElement("p");
        c1div.appendChild(c1cnt);
        c1cnt.innerHTML="Vikram is a 2022 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International.The film stars Kamal Haasan, Fahadh Faasil and Vijay Sethupathi. Kalidas Jayaram, Narain and Chemban Vinod Jose play supporting roles while Suriya makes a cameo appearance. The film's soundtrack and score are composed by Anirudh Ravichander, with cinematography handled by Girish Gangadharan and editing done by Philomin Raj. The film serves as the second installment in the Lokesh Cinematic Universe (LCU)"; 
        c1cnt.style.padding="20px"
        c1cnt.style.textAlign="justify"
        let c1watch=document.createElement("button");
        c1watch.innerHTML="Watch";
        c1div.appendChild(c1watch);
        c1watch.style.width="45%";
        c1watch.style.height="40px";
        c1watch.style.border="none";
        c1watch.style.borderRadius="10px";
        c1watch.style.backgroundColor="yellow";
        c1watch.style.color="Black";
        c1watch.style.marginLeft="5%";
        c1watch.addEventListener("click" , seen);
        function seen(){
        c1img.style.display="none";
       
            let c1vid=document.createElement("video");
            c1div.appendChild(c1vid);
            c1star.style.display="none";
        c1cnt.style.marginTop="170px"
            c1vid.src="./vikram.mp4";
            c1star.style.display="none";
            c1cnt.style.marginTop="100px"
            c1vid.autoplay="true";
            c1vid.muted="false";
            c1vid.setAttribute("width","100%");
            c1vid.setAttribute("controls","controls");
            c1vid.style.position="absolute";
            c1vid.style.top="0px"
            c1vid.style.left="0"
           
            
        }
        let c1down=document.createElement("button");
        c1down.innerHTML="Download";
        c1div.appendChild(c1down);
        c1down.style.width="45%";
        c1down.style.height="40px";
        c1down.style.border="none";
        c1down.style.borderRadius="10px";
        c1down.style.backgroundColor="black";
        c1down.style.color="yellow";
        c1down.style.border="1px solid"
        c1down.style.marginLeft="2%";
        let back=document.createElement("img");
        c1div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
      back.addEventListener("click",backk);
        function backk(){
           console.log("gfvd");
     mainpage.style.display="block";
     c1div.style.display="none";
     filter.style.display="flex"
           
        }
    }
    let catcard2=document.querySelector("#cat-2");
    catcard2.addEventListener("click",card2);
    function card2(){
      filter.style.display="none"
      mainpage.style.display="none";
        let c2div=document.createElement("div");
        apped.appendChild(c2div);
        c2div.style.zIndex="1";
        c2div.style.backgroundColor="black";
        c2div.style.color="white";
        c2div.style.position="relative";
        let c2img=document.createElement("img");  
        c2div.appendChild(c2img);
        c2img.src="https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg";
        c2img.style.width="100%";
        c2img.style.height="400px";
         let c2title=document.createElement("h4");
         c2div.appendChild(c2title);
         c2title.innerHTML="Black Adam";  
         c2title.style.padding="10px";
         c2title.style.fontSize="2.4em";
       let c2mname=document.createElement("h6");
        c2div.appendChild(c2mname);
        c2mname.innerHTML="English";
        c2mname.style.paddingLeft="10px";
        c2mname.style.paddingTop="-10px";
        c2mname.style.fontSize="1.2em"
        let c2star=document.createElement("h5");
        c2div.appendChild(c2star);
        c2star.innerHTML="⭐ 3.6/5";
        c2star.style.paddingLeft="10px";
        c2star.style.position="absolute";
        c2star.style.bottom="50.5%";
        c2star.style.right="10%";
        let c2cnt=document.createElement("p");
        c2div.appendChild(c2cnt);
        c2cnt.innerHTML="Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). The film is directed by Jaume Collet-Serra and written by Adam Sztykiel, Rory Haines, and Sohrab Noshirvani. In addition to Johnson, the film stars Aldis Hodge, Noah Centineo, Sarah Shahi, Marwan Kenzari, Quintessa Swindell and Pierce Brosnan. It is produced by New Line Cinema, DC Films, Seven Bucks Productions and FlynnPictureCo., and distributed by Warner Bros. Pictures."; 
        c2cnt.style.padding="20px"
        c2cnt.style.textAlign="justify"
        let c2watch=document.createElement("button");
        c2watch.innerHTML="Watch";
        c2div.appendChild(c2watch);
        c2watch.style.width="45%";
        c2watch.style.height="40px";
        c2watch.style.border="none";
        c2watch.style.borderRadius="10px";
        c2watch.style.backgroundColor="yellow";
        c2watch.style.color="black";
        c2watch.style.marginLeft="5%";
        c2watch.addEventListener("click" , seen1);
        function seen1(){
            c2img.style.display="none";
            c2star.style.display="none"
            c2cnt.style.marginTop="100px"
            let c2vid=document.createElement("video");
            c2div.appendChild(c2vid);
          
            c2vid.src="./black adam.mp4";
            c2vid.autoplay="true";
            c2vid.muted="false";
            c2vid.setAttribute("width","100%");
            c2vid.setAttribute("controls","controls");
            c2vid.style.position="absolute";
            c2vid.style.top="0px"
            c2vid.style.left="0"
            
        }
        let c2down=document.createElement("button");
        c2down.innerHTML="Download";
        c2div.appendChild(c2down);
        c2down.style.width="45%";
        c2down.style.height="40px";
        c2down.style.border="none";
        c2down.style.borderRadius="10px";
        c2down.style.backgroundColor="black";
        c2down.style.color="yellow";
        c2down.style.border="1px solid yellow";
        c2down.style.marginLeft="2%";
        let back=document.createElement("img");
        c2div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
            mainpage.style.display="block";
            c2div.style.display="none";
            filter.style.display="flex"
           
        }
    }
    let catcard3=document.querySelector("#cat-3");
    catcard3.addEventListener("click",card3);
    function card3(){
      filter.style.display="none"
      mainpage.style.display="none";
        let c3div=document.createElement("div");
        apped.appendChild(c3div);
        c3div.style.zIndex="1";
        c3div.style.backgroundColor="black";
        c3div.style.color="white";
        c3div.style.position="relative";
        let c3img=document.createElement("img");  
        c3div.appendChild(c3img);
        c3img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCksNXo7h0kCAY0apdNX1xtq7yptFDRnwPMRBGbSgbEj_XXYmzhOfcSJ_Nggf8UhJr_dM&usqp=CAU";
        c3img.style.width="100%";
        c3img.style.height="400px";
         let c3title=document.createElement("h4");
         c3div.appendChild(c3title);
         c3title.innerHTML="Major";  
         c3title.style.padding="10px";
         c3title.style.fontSize="2.4em";
       let c3mname=document.createElement("h6");
        c3div.appendChild(c3mname);
        c3mname.innerHTML="Hindi";
        c3mname.style.paddingLeft="10px";
        c3mname.style.paddingTop="-10px";
        c3mname.style.fontSize="1.2em"
        let c3star=document.createElement("h5");
        c3div.appendChild(c3star);
        c3star.innerHTML="⭐ 4.7/5";
        c3star.style.paddingLeft="10px";
        c3star.style.position="absolute";
        c3star.style.bottom="50.5%";
        c3star.style.right="10%";
        let c3cnt=document.createElement("p");
        c3div.appendChild(c3cnt);
        c3cnt.innerHTML="Major is a 2022 Indian biographical action film directed by Sashi Kiran Tikka with story and screenplay by Adivi Sesh. Based on the life of Major Sandeep Unnikrishnan who was martyred in the 2008 Mumbai attacks, it stars Sesh as Unnikrishnan and co-stars Prakash Raj, Sobhita Dhulipala, Saiee Manjrekar, Revathi, Murali Sharma, and Anish Kuruvilla. Major is produced by G. Mahesh Babu Entertainment, Sony Pictures International Productions, and A+S Movie"; 
        c3cnt.style.padding="20px"
        c3cnt.style.textAlign="justify"
        let c3watch=document.createElement("button");
        c3watch.innerHTML="Watch";
        c3div.appendChild(c3watch);
        c3watch.style.width="45%";
        c3watch.style.height="40px";
        c3watch.style.border="none";
        c3watch.style.borderRadius="10px";
        c3watch.style.backgroundColor="yellow";
        c3watch.style.color="black";
        c3watch.style.marginLeft="5%";
        c3watch.addEventListener("click" , seen);
        function seen(){
            c3img.style.display="none";
            let c3vid=document.createElement("video");
            c3div.appendChild(c3vid);
          c3star.style.display="none";
          c3cnt.style.marginTop="100px"
            c3vid.src="./major.mp4";
            c3vid.autoplay="true";
            c3vid.muted="false";
            c3vid.setAttribute("width","100%");
            c3vid.setAttribute("controls","controls");
            c3vid.style.position="absolute";
            c3vid.style.top="0px"
            c3vid.style.left="0"
            
        }
        let c3down=document.createElement("button");
        c3down.innerHTML="Download";
        c3div.appendChild(c3down);
        c3down.style.width="45%";
        c3down.style.height="40px";
        c3down.style.border="none";
        c3down.style.borderRadius="10px";
        c3down.style.backgroundColor="black";
        c3down.style.color="yellow";
        c3down.style.border="1px solid yellow";
        c3down.style.marginLeft="2%";
        let back=document.createElement("img");
        c3div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+3";
        back.addEventListener("click",backk);
        function backk(){
            mainpage.style.display="block";
            c3div.style.display="none";
            filter.style.display="flex"
           
        }
    }
    let catcard4=document.querySelector("#cat-4");
    catcard4.addEventListener("click",card4);
    function card4(){
      filter.style.display="none"
      mainpage.style.display="none";
        let c4div=document.createElement("div");
        apped.appendChild(c4div);
        c4div.style.zIndex="1";
        c4div.style.backgroundColor="black";
        c4div.style.color="white";
        c4div.style.position="relative";
        let c4img=document.createElement("img");  
        c4div.appendChild(c4img);
        c4img.src="https://moviesmarkus.files.wordpress.com/2022/06/top-gun.jpg";
        c4img.style.width="100%";
        c4img.style.height="400px";
         let c4title=document.createElement("h4");
         c4div.appendChild(c4title);
         c4title.innerHTML="Top Gun";  
         c4title.style.padding="10px";
         c4title.style.fontSize="2.4em";
       let c4mname=document.createElement("h6");
        c4div.appendChild(c4mname);
        c4mname.innerHTML="English";
        c4mname.style.paddingLeft="10px";
        c4mname.style.paddingTop="-10px";
        c4mname.style.fontSize="1.2em"
        let c4star=document.createElement("h5");
        c4div.appendChild(c4star);
        c4star.innerHTML="⭐ 4.2/5";
        c4star.style.paddingLeft="10px";
        c4star.style.position="absolute";
        c4star.style.bottom="47.5%";
        c4star.style.right="10%";
        let c4cnt=document.createElement("p");
        c4div.appendChild(c4cnt);
        c4cnt.innerHTML="Top Gun is a 1986 American action drama film[2] directed by Tony Scott, produced by Don Simpson and Jerry Bruckheimer, with distribution by Paramount Pictures. The screenplay was written by Jim Cash and Jack Epps Jr., and was inspired by an article titled Top Guns, written by Ehud Yonay and published in California magazine three years earlier. It stars Tom Cruise as Lieutenant Pete  Mitchell, a young naval aviator aboard the aircraft carrier USS Enterprise."; 
        c4cnt.style.padding="20px"
        c4cnt.style.textAlign="justify"
        let c4watch=document.createElement("button");
        c4watch.innerHTML="Watch";
        c4div.appendChild(c4watch);
        c4watch.style.width="45%";
        c4watch.style.height="40px";
        c4watch.style.border="none";
        c4watch.style.borderRadius="10px";
        c4watch.style.backgroundColor="yellow";
        c4watch.style.color="black";
       
        c4watch.style.marginLeft="5%";
        c4watch.addEventListener("click" , seen);
        function seen(){
            c4img.style.display="none";
            let c4vid=document.createElement("video");
            c4div.appendChild(c4vid);
          c4star.style.display="none";
          c4cnt.style.marginTop="100px"
            c4vid.src="./topgun.mp4";
            c4vid.autoplay="true";
            c4vid.muted="false";
            c4vid.setAttribute("width","100%");
            c4vid.setAttribute("controls","controls");
            c4vid.style.position="absolute";
            c4vid.style.top="0px"
            c4vid.style.left="0"
            
        }
        let c6down=document.createElement("button");
        c6down.innerHTML="Download";
        c4div.appendChild(c6down);
        c6down.style.width="45%";
        c6down.style.height="40px";
        c6down.style.border="none";
        c6down.style.borderRadius="10px";
        c6down.style.backgroundColor="black";
        c6down.style.color="yellow";
        c6down.style.border="1px solid yellow";
        c6down.style.marginLeft="2%";
        let back=document.createElement("img");
        c4div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+3";
      back.addEventListener("click",backk);
        function backk(){
            mainpage.style.display="block";
            c4div.style.display="none";
            filter.style.display="flex"
           
        }
    }
    let catcard5=document.querySelector("#cat-5");
    catcard5.addEventListener("click",card5);
    function card5(){
      filter.style.display="none"
      mainpage.style.display="none";
        let c5div=document.createElement("div");
        apped.appendChild(c5div);
        c5div.style.zIndex="1";
        c5div.style.backgroundColor="black";
        c5div.style.color="white";
        c5div.style.position="relative";
        let c5img=document.createElement("img");  
        c5div.appendChild(c5img);
        c5img.src="http://timesofindia.indiatimes.com/photo/61270701.cms";
        c5img.style.width="100%";
        c5img.style.height="400px";
         let c5title=document.createElement("h4");
         c5div.appendChild(c5title);
         c5title.innerHTML="Dangal";  
         c5title.style.padding="10px";
         c5title.style.fontSize="2.4em";
       let c5mname=document.createElement("h6");
        c5div.appendChild(c5mname);
        c5mname.innerHTML="Hindi";
        c5mname.style.paddingLeft="10px";
        c5mname.style.paddingTop="-10px";
        c5mname.style.fontSize="1.2em"
        let c5star=document.createElement("h5");
        c5div.appendChild(c5star);
        c5star.innerHTML="⭐ 4.4/5";
        c5star.style.paddingLeft="10px";
        c5star.style.position="absolute";
        c5star.style.bottom="47.5%";
        c5star.style.right="10%";
        let c5cnt=document.createElement("p");
        c5div.appendChild(c5cnt);
        c5cnt.innerHTML="Dangal (transl. Wrestling Competition) is a 2016 Indian Hindi-language biographical sports drama film directed by Nitesh Tiwari and produced by Aamir Khan and Kiran Rao under Aamir Khan Productions with Siddharth Roy Kapur under The Walt Disney Company India. The film stars Khan as Mahavir Singh Phogat, a pehlwani amateur wrestler who trains his daughters Geeta Phogat and Babita Kumari to become India's first world-class female wrestlers.[9] "; 
        c5cnt.style.padding="20px"
        c5cnt.style.textAlign="justify"
        let c5watch=document.createElement("button");
        c5watch.innerHTML="Watch";
        c5div.appendChild(c5watch);
        c5watch.style.width="45%";
        c5watch.style.height="40px";
        c5watch.style.border="none";
        c5watch.style.borderRadius="10px";
        c5watch.style.backgroundColor="yellow";
        c5watch.style.color="black";
        c5watch.style.marginLeft="5%";
        c5watch.addEventListener("click" , seen);
        function seen(){
            c5img.style.display="none";
            let c5vid=document.createElement("video");
            c5div.appendChild(c5vid);
          c5star.style.display="none";
          c5cnt.style.marginTop="100px"
            c5vid.src="./dangal.mp4";
            c5vid.autoplay="true";
            c5vid.muted="false";
            c5vid.setAttribute("width","100%");
            c5vid.setAttribute("controls","controls");
            c5vid.style.position="absolute";
            c5vid.style.top="0px"
            c5vid.style.left="0"
            
        }
        let c5down=document.createElement("button");
        c5down.innerHTML="Download";
        c5div.appendChild(c5down);
        c5down.style.width="45%";
        c5down.style.height="40px";
        c5down.style.border="none";
        c5down.style.borderRadius="10px";
        c5down.style.backgroundColor="black";
        c5down.style.color="yellow";
        c5down.style.border="1px solid yellow";
        c5down.style.marginLeft="2%";
        let back=document.createElement("img");
        c5div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+3";
       back.addEventListener("click",backk);
        function backk(){
            mainpage.style.display="block";
            c5div.style.display="none";
            filter.style.display="flex"
           
        }
    }
    let catcard6=document.querySelector("#cat-6");
    catcard6.addEventListener("click",card6);
    function card6(){
      filter.style.display="none"
      mainpage.style.display="none";
        let c6div=document.createElement("div");
        apped.appendChild(c6div);
        c6div.style.zIndex="1";
        c6div.style.backgroundColor="black";
        c6div.style.color="white";
        c6div.style.position="relative";
        let c6img=document.createElement("img");  
        c6div.appendChild(c6img);
        c6img.src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3b405c21139749.562fc25b6d7e7.jpg";
        c6img.style.width="100%";
        c6img.style.height="400px";
         let c6title=document.createElement("h4");
         c6div.appendChild(c6title);
         c6title.innerHTML="Ayan";  
         c6title.style.padding="10px";
         c6title.style.fontSize="2.4em";
       let c6mname=document.createElement("h6");
        c6div.appendChild(c6mname);
        c6mname.innerHTML="Tamil";
        c6mname.style.paddingLeft="10px";
        c6mname.style.paddingTop="-10px";
        c6mname.style.fontSize="1.2em"
        let c6star=document.createElement("h5");
        c6div.appendChild(c6star);
        c6star.innerHTML="⭐ 4.8/5";
        c6star.style.paddingLeft="10px";
        c6star.style.position="absolute";
        c6star.style.bottom="46.5%";
        c6star.style.right="10%";
        let c6cnt=document.createElement("p");
        c6div.appendChild(c6cnt);
        c6cnt.innerHTML="Ayan (transl. Creator) is a 2009 Indian Tamil-language action film co-written and directed by K. V. Anand. The film, starring Suriya, Prabhu, Tamannaah, Akashdeep Saighal, Jagan, and Karunas, was produced by M. Saravanan, M. S. Guhan, Aruna Guhan and Aparna Guhan and distributed by Sun Pictures. The film score and soundtrack was composed by Harris Jayaraj, edited by Anthony Gonsalvez, the film was filmed by M. S. Prabhu. "; 
        c6cnt.style.padding="20px"
        c6cnt.style.textAlign="justify"
        let c6watch=document.createElement("button");
        c6watch.innerHTML="Watch";
        c6div.appendChild(c6watch);
        c6watch.style.width="45%";
        c6watch.style.height="40px";
        c6watch.style.border="none";
        c6watch.style.borderRadius="10px";
        c6watch.style.backgroundColor="yellow";
        c6watch.style.color="black";
       
        c6watch.style.marginLeft="5%";
        c6watch.addEventListener("click" , seen);
        function seen(){
            c6img.style.display="none";
            let c6vid=document.createElement("video");
            c6div.appendChild(c6vid);
          c6star.style.display="none";
          c6cnt.style.marginTop="100px"
            c6vid.src="./ayan.mp4";
            c6vid.autoplay="true";
            c6vid.muted="false";
            c6vid.setAttribute("width","100%");
            c6vid.setAttribute("controls","controls");
            c6vid.style.position="absolute";
            c6vid.style.top="0px"
            c6vid.style.left="0"
            
        }
        let c6down=document.createElement("button");
        c6down.innerHTML="Download";
        c6div.appendChild(c6down);
        c6down.style.width="45%";
        c6down.style.height="40px";
        c6down.style.border="none";
        c6down.style.borderRadius="10px";
        c6down.style.backgroundColor="black";
        c6down.style.color="yellow";
        c6down.style.border=" 1px solid yellow";
        c6down.style.marginLeft="2%";
        let back=document.createElement("img");
        c6div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+3";
      back.addEventListener("click",backk);
        function backk(){
            mainpage.style.display="block";
            c6div.style.display="none";
            filter.style.display="flex"
           
        }
    }
    let catcard7=document.querySelector("#cat-7");
    catcard7.addEventListener("click",card7);
    function card7(){
      filter.style.display="flex"
      mainpage.style.display="none";
        let c7div=document.createElement("div");
        apped.appendChild(c7div);
        c7div.style.zIndex="1";
        c7div.style.backgroundColor="black";
        c7div.style.color="white";
        c7div.style.position="relative";
        let c7img=document.createElement("img");  
        c7div.appendChild(c7img);
        c7img.src="https://w0.peakpx.com/wallpaper/711/236/HD-wallpaper-cia-dulquer-salman-malayalam-movie.jpg";
        c7img.style.width="100%";
        c7img.style.height="400px";
         let c7title=document.createElement("h4");
         c7div.appendChild(c7title);
         c7title.innerHTML="CIA";  
         c7title.style.padding="10px";
         c7title.style.fontSize="2.4em";
       let c7mname=document.createElement("h6");
        c7div.appendChild(c7mname);
        c7mname.innerHTML="Malayalam";
        c7mname.style.paddingLeft="10px";
        c7mname.style.paddingTop="-10px";
        c7mname.style.fontSize="1.2em"
        let c7star=document.createElement("h5");
        c7div.appendChild(c7star);
        c7star.innerHTML="⭐ 4.6/5";
        c7star.style.paddingLeft="10px";
        c7star.style.position="absolute";
        c7star.style.bottom="44%";
        c7star.style.right="10%";
        let c7cnt=document.createElement("p");
        c7div.appendChild(c7cnt);
        c7cnt.innerHTML="Comrade in America (abbreviated as CIA) is a 2017 Indian Malayalam-language adventure film directed by Amal Neerad, starring Dulquer Salmaan and Karthika Muralidharan in the lead roles.[2] The music is composed by Gopi Sundar, and Renadive handles the cinematography.[3] The film released on 5 May, also the birth date of Karl Marx."; 
        c7cnt.style.padding="20px"
        c7cnt.style.textAlign="justify"
        let c7watch=document.createElement("button");
        c7watch.innerHTML="Watch";
        c7div.appendChild(c7watch);
        c7watch.style.width="45%";
        c7watch.style.height="40px";
        c7watch.style.border="none";
        c7watch.style.borderRadius="10px";
        c7watch.style.backgroundColor="yellow";
        c7watch.style.color="black";
        c7watch.style.marginLeft="5%";
        c7watch.addEventListener("click" , seen);
        function seen(){
            c7img.style.display="none";
            let c7vid=document.createElement("video");
            c7div.appendChild(c7vid);
          c7star.style.display="none";
          c7cnt.style.marginTop="100px"
            c7vid.src="./cia.mp4";
            c7vid.autoplay="true";
            c7vid.muted="false";
            c7vid.setAttribute("width","100%");
            c7vid.setAttribute("controls","controls");
            c7vid.style.position="absolute";
            c7vid.style.top="0px"
            c7vid.style.left="0"
            
        }
        let c7down=document.createElement("button");
        c7down.innerHTML="Download";
        c7div.appendChild(c7down);
        c7down.style.width="45%";
        c7down.style.height="40px";
        c7down.style.border="none";
        c7down.style.borderRadius="10px";
        c7down.style.backgroundColor="black";
        c7down.style.color="yellow";
        c7down.style.border="1px solid yellow";
        c7down.style.marginLeft="2%";
        let back=document.createElement("img");
        c7div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+3";
       back.addEventListener("click",backk);
        function backk(){
            mainpage.style.display="block";
            c7div.style.display="none";
            filter.style.display="flex"
           
        }
    }
    let trendcard1=document.querySelector("#trend-1");
    let trendmov=document.querySelector("#trendingmovie");
    trendcard1.addEventListener("click",tcard1);
    function tcard1(){
      filter.style.display="none"
      mainpage.style.display="none";
        let t1div=document.createElement("div");
        apped.appendChild(t1div);
    t1div.style.zIndex="1";
    t1div.style.backgroundColor="black";
    t1div.style.color="white";
    t1div.style.position="relative";
        let t1img=document.createElement("img");  
        t1div.appendChild(t1img);
        t1img.src="https://mb.com.ph/wp-content/uploads/2021/11/46885.jpeg";
        t1img.style.width="100%";
        t1img.style.height="400px";
         let t1title=document.createElement("h4");
         t1div.appendChild(t1title);
         t1title.innerHTML="Shang-Chi";  
         t1title.style.padding="10px";
         t1title.style.fontSize="2.4em";
       let t1mname=document.createElement("h6");
        t1div.appendChild(t1mname);
        t1mname.innerHTML="English";
        t1mname.style.paddingLeft="10px";
        t1mname.style.paddingTop="-10px";
        t1mname.style.fontSize="1.2em"
        let t1star=document.createElement("h5");
        t1div.appendChild(t1star);
        t1star.innerHTML="⭐ 4.3/5";
        t1star.style.paddingLeft="10px";
        t1star.style.position="absolute";
        t1star.style.bottom="50.5%";
        t1star.style.right="10%";
        let t1cnt=document.createElement("p");
        t1div.appendChild(t1cnt);
        t1cnt.innerHTML="Shang-Chi and the Legend of the Ten Rings is a 2021 American superhero film based on Marvel Comics featuring the character Shang-Chi. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 25th film in the Marvel Cinematic Universe (MCU). The film was directed by Destin Daniel Cretton, from a screenplay he wrote with Dave Callaham and Andrew Lanham, and stars Simu Liu as Shang-Chi alongside Awkwafina, Meng'er Zhang"; 
        t1cnt.style.padding="20px"
        t1cnt.style.textAlign="justify"
        let t1watch=document.createElement("button");
        t1watch.innerHTML="Watch";
        t1div.appendChild(t1watch);
        t1watch.style.width="45%";
        t1watch.style.height="40px";
        t1watch.style.border="none";
        t1watch.style.borderRadius="10px";
        t1watch.style.backgroundColor="yellow";
        t1watch.style.color="black";
        t1watch.style.marginLeft="5%";
        t1watch.addEventListener("click" , seen);
        function seen(){
            t1img.style.display="none";
            let t1vid=document.createElement("video");
            t1div.appendChild(t1vid);
          t1star.style.display="none";
          t1star.style.marginTop="100px"
            t1vid.src="./shangchi.mp4";
            t1vid.autoplay="true";
            t1vid.muted="false";
            t1vid.setAttribute("width","100%");
            t1vid.setAttribute("controls","controls");
            t1vid.style.position="absolute";
            t1vid.style.top="0px"
            t1vid.style.left="0"
        }
        let t1down=document.createElement("button");
        t1down.innerHTML="Download";
        t1div.appendChild(t1down);
        t1down.style.width="45%";
        t1down.style.height="40px";
        t1down.style.border="none";
        t1down.style.borderRadius="10px";
        t1down.style.backgroundColor="black";
        t1down.style.color="yellow";
        t1down.style.border="1px solid yellow";
        t1down.style.marginLeft="2%";
        let back=document.createElement("img");
        t1div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
        back.addEventListener("click",backk);
        function backk(){
            mainpage.style.display="block";
            t1div.style.display="none"
            filter.style.display="flex"
        }
    }
    let trendcard2=document.querySelector("#trend-2");
    trendcard2.addEventListener("click",tcard2);
    function tcard2(){
      filter.style.display="none"
      mainpage.style.display="none";
        let t2div=document.createElement("div");
        apped.appendChild(t2div);
    t2div.style.zIndex="1";
    t2div.style.backgroundColor="black";
    t2div.style.color="white";
    t2div.style.position="relative";
        let t2img=document.createElement("img");  
        t2div.appendChild(t2img);
        t2img.src="https://www.themoviedb.org/t/p/original/ps2oKfhY6DL3alynlSqY97gHSsg.jpg";
        t2img.style.width="100%";
        t2img.style.height="400px";
         let t2title=document.createElement("h4");
         t2div.appendChild(t2title);
         t2title.innerHTML="Black Panther";  
         t2title.style.padding="10px";
         t2title.style.fontSize="2.4em";
       let t2mname=document.createElement("h6");
        t2div.appendChild(t2mname);
        t2mname.innerHTML="English";
        t2mname.style.paddingLeft="10px";
        t2mname.style.paddingTop="-10px";
        t2mname.style.fontSize="1.2em"
        let t2star=document.createElement("h5");
        t2div.appendChild(t2star);
        t2star.innerHTML="⭐ 4.8/5";
        t2star.style.paddingLeft="10px";
        t2star.style.position="absolute";
        t2star.style.bottom="50.5%";
        t2star.style.right="10%";
        let t2cnt=document.createElement("p");
        t2div.appendChild(t2cnt);
        t2cnt.innerHTML="Black Panther: Wakanda Forever is a 2022 American superhero film based on the Marvel Comics character Black Panther. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Black Panther (2018) and the 30th film in the Marvel Cinematic Universe (MCU). Directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, the film stars Letitia Wright as Shuri / Black Panther, alongside Lupita Nyong'o, Danai Gurira, Winston Duke, Florence Kasumba, Dominique Thorne, Michaela Coel, Tenoch Huerta Mejía, Martin Freeman, Julia Louis-Dreyfus,"; 
        t2cnt.style.padding="20px"
        t2cnt.style.textAlign="justify"
        let t2watch=document.createElement("button");
        t2watch.innerHTML="Watch";
        t2div.appendChild(t2watch);
        t2watch.style.width="45%";
        t2watch.style.height="40px";
        t2watch.style.border="none";
        t2watch.style.borderRadius="10px";
        t2watch.style.backgroundColor="yellow";
        t2watch.style.color="black";
        t2watch.style.marginLeft="5%";
        t2watch.addEventListener("click" , seen);
        function seen(){
          t2img.style.display="none";
          t2star.style.display="none";
          t2cnt.style.marginTop="100px"
            let t2vid=document.createElement("video");
            t2div.appendChild(t2vid);
            t2vid.src="./bpanther.mp4";
            t2vid.autoplay="true";
            t2vid.muted="false";
            t2vid.setAttribute("width","100%");
            t2vid.setAttribute("controls","controls");
            t2vid.style.position="absolute";
            t2vid.style.top="0px"
            t2vid.style.left="0"
            
        }
        let t2down=document.createElement("button");
        t2down.innerHTML="Download";
        t2div.appendChild(t2down);
        t2down.style.width="45%";
        t2down.style.height="40px";
        t2down.style.border="none";
        t2down.style.borderRadius="10px";
        t2down.style.backgroundColor="black";
        t2down.style.color="yellow";
        t2down.style.border="1px solid yellow";
        t2down.style.marginLeft="2%";
        let back=document.createElement("img");
        t2div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
        back.addEventListener("click",backk);
        function backk(){
            mainpage.style.display="block";
            t2div.style.display="none";
            filter.style.display="flex"
           
        }
    }
    let trendcard3=document.querySelector("#trend-3");
    trendcard3.addEventListener("click",tcard3);
    function tcard3(){
      filter.style.display="none"
      mainpage.style.display="none";
        let t3div=document.createElement("div");
        apped.appendChild(t3div);
    t3div.style.zIndex="1";
    t3div.style.backgroundColor="black";
    t3div.style.color="white";
    t3div.style.position="relative";
        let t3img=document.createElement("img");  
        t3div.appendChild(t3img);
        t3img.src="https://static.moviecrow.com/gallery/20220907/204607-ps2.jpg";
        t3img.style.width="100%";
        t3img.style.height="400px";
         let t3title=document.createElement("h4");
         t3div.appendChild(t3title);
         t3title.innerHTML="Ponniyan Selven-I";  
         t3title.style.padding="10px";
         t3title.style.fontSize="2.4em";
       let t3mname=document.createElement("h6");
        t3div.appendChild(t3mname);
        t3mname.innerHTML="Tamil";
        t3mname.style.paddingLeft="10px";
        t3mname.style.paddingTop="-10px";
        t3mname.style.fontSize="1.2em"
        let t3star=document.createElement("h5");
        t3div.appendChild(t3star);
        t3star.innerHTML="⭐ 4.3/5";
        t3star.style.paddingLeft="10px";
        t3star.style.position="absolute";
        t3star.style.bottom="58.5%";
        t3star.style.right="10%";
        let t3cnt=document.createElement("p");
        t3div.appendChild(t3cnt);
        t3cnt.innerHTML="Ponniyin Selvan: I (transl.The Son of Ponni) is a 2022 Indian Tamil-language epic historical action drama film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan. Produced by Ratnam and Subaskaran Allirajah under Madras Talkies and Lyca Productions, it is the first of two cinematic parts based on Kalki Krishnamurthy's 1955 novel, Ponniyin Selvan. The film stars an ensemble cast including Vikram, Aishwarya Rai Bachchan, Jayam Ravi, Karthi, Trisha, Jayaram, Aishwarya Lekshmi, Sobhita Dhulipala, Prabhu, R. Sarathkumar, Vikram Prabhu, Prakash Raj, Rahman, R. Parthiban and Lal.[4] The music was composed by A. R. Rahman, with cinematography by Ravi Varman, editing by A. Sreekar Prasad, and production design by Thota Tharani. "; 
        t3cnt.style.padding="20px"
        t3cnt.style.textAlign="justify"
        let t3watch=document.createElement("button");
        t3watch.innerHTML="Watch";
        t3div.appendChild(t3watch);
        t3watch.style.width="45%";
        t3watch.style.height="40px";
        t3watch.style.border="none";
        t3watch.style.borderRadius="10px";
        t3watch.style.backgroundColor="yellow";
        t3watch.style.color="black";
        t3watch.style.marginLeft="5%";
        t3watch.addEventListener("click" , seen);
        function seen(){
          t3img.style.display="none";
            let t3vid=document.createElement("video");
            t3div.appendChild(t3vid);
          t3star.style.display="none";
          t3cnt.style.marginTop="100px"
            t3vid.src="./ps-1.mp4";
            t3vid.autoplay="true";
            t3vid.muted="false";
            t3vid.setAttribute("width","100%");
            t3vid.setAttribute("controls","controls");
            t3vid.style.position="absolute";
            t3vid.style.top="0px"
            t3vid.style.left="0"
                    }
        let t3down=document.createElement("button");
        t3down.innerHTML="Download";
        t3div.appendChild(t3down);
        t3down.style.width="45%";
        t3down.style.height="40px";
        t3down.style.border="none";
        t3down.style.borderRadius="10px";
        t3down.style.backgroundColor="black";
        t3down.style.color="yellow";
        t3down.style.border="1px solid yellow";
        t3down.style.marginLeft="2%";
        let back=document.createElement("img");
        t3div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
        back.addEventListener("click",backk);
        function backk(){
            mainpage.style.display="block";
            t3div.style.display="none";
            filter.style.display="flex"
           
        }
    }
    let trendcard4=document.querySelector("#trend-4");
    trendcard4.addEventListener("click",tcard4);
    function tcard4(){
      filter.style.display="none"
      mainpage.style.display="none";
        let t4div=document.createElement("div");
        apped.appendChild(t4div);
    t4div.style.zIndex="1";
    t4div.style.backgroundColor="black";
    t4div.style.color="white";
    t4div.style.position="relative";
        let t4img=document.createElement("img");  
        t4div.appendChild(t4img);
        t4img.src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/de4f1f9bfb6e740459e7bd8da955aa0b70191e780c1f1347ce73248d3ceda8f4._RI_V_TTW_.jpg";
        t4img.style.width="100%";
        t4img.style.height="400px";
         let t4title=document.createElement("h4");
         t4div.appendChild(t4title);
         t4title.innerHTML="KGF-2";  
         t4title.style.padding="10px";
         t4title.style.fontSize="2.4em";
       let t4mname=document.createElement("h6");
        t4div.appendChild(t4mname);
        t4mname.innerHTML="Tamil";
        t4mname.style.paddingLeft="10px";
        t4mname.style.paddingTop="-10px";
        t4mname.style.fontSize="1.2em"
        let t4star=document.createElement("h5");
        t4div.appendChild(t4star);
        t4star.innerHTML="⭐ 4.9/5";
        t4star.style.paddingLeft="10px";
        t4star.style.position="absolute";
        t4star.style.bottom="50.5%";
        t4star.style.right="10%";
        let t4cnt=document.createElement("p");
        t4div.appendChild(t4cnt);
        t4cnt.innerHTML="K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film[19] written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films. The second installment in a two-part series, it serves as a sequel to the 2018 film K.G.F: Chapter 1. The film stars Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty, Prakash Raj, Archana Jois, Achyuth Kumar, Rao Ramesh, Easwari Rao, Malavika Avinash and Vasishta N. Simha. It follows the assassin Rocky who after establishing himself as the kingpin of the Kolar Gold Fields, must retain his supremacy over adversaries and government officials, while also coming to terms with his past. "; 
        t4cnt.style.padding="20px"
        t4cnt.style.textAlign="justify"
        let t4watch=document.createElement("button");
        t4watch.innerHTML="Watch";
        t4div.appendChild(t4watch);
        t4watch.style.width="45%";
        t4watch.style.height="40px";
        t4watch.style.border="none";
        t4watch.style.borderRadius="10px";
        t4watch.style.backgroundColor="yellow";
        t4watch.style.color="black";
        t4watch.style.marginLeft="5%";
        t4watch.addEventListener("click" , seen);
        function seen(){
          t4img.style.display="none";
            let t4vid=document.createElement("video");
            t4div.appendChild(t4vid);
          t4star.style.display="none";
          t4cnt.style.marginTop="100px"
            t4vid.src="./kgf2.mp4";
            t4vid.autoplay="true";
            t4vid.muted="false";
            t4vid.setAttribute("width","100%");
            t4vid.setAttribute("controls","controls");
            t4vid.style.position="absolute";
            t4vid.style.top="0px"
            t4vid.style.left="0"
            
        }
        let t4down=document.createElement("button");
        t4down.innerHTML="Download";
        t4div.appendChild(t4down);
        t4down.style.width="45%";
        t4down.style.height="40px";
        t4down.style.border="none";
        t4down.style.borderRadius="10px";
        t4down.style.backgroundColor="black";
        t4down.style.color="yellow";
        t4down.style.border="1px solid yellow";
        t4down.style.marginLeft="2%";
        let back=document.createElement("img");
        t4div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            mainpage.style.display="block";
            t4div.style.display="none";
            filter.style.display="flex"
           
        }
    }
    let trendcard5=document.querySelector("#trend-5");
    trendcard5.addEventListener("click",tcard5);
    function tcard5(){
      filter.style.display="none"
      mainpage.style.display="none";
        let t5div=document.createElement("div");
        apped.appendChild(t5div);
    t5div.style.zIndex="1";
    t5div.style.backgroundColor="black";
    t5div.style.color="white";
    t5div.style.position="relative";
        let t5img=document.createElement("img");  
        t5div.appendChild(t5img);
        t5img.src="https://popcornusa.s3.amazonaws.com/movies/650/11708-8545-LoveToda";
        t5img.style.width="100%";
        t5img.style.height="400px";
         let t5title=document.createElement("h4");
         t5div.appendChild(t5title);
         t5title.innerHTML="Love Today";  
         t5title.style.padding="10px";
         t5title.style.fontSize="2.4em";
       let t5mname=document.createElement("h6");
        t5div.appendChild(t5mname);
        t5mname.innerHTML="Tamil";
        t5mname.style.paddingLeft="10px";
        t5mname.style.paddingTop="-10px";
        t5mname.style.fontSize="1.2em"
        let t5star=document.createElement("h5");
        t5div.appendChild(t5star);
        t5star.innerHTML="⭐ 4.2/5";
        t5star.style.paddingLeft="10px";
        t5star.style.position="absolute";
        t5star.style.bottom="52.5%";
        t5star.style.right="10%";
        let t5cnt=document.createElement("p");
        t5div.appendChild(t5cnt);
        t5cnt.innerHTML="Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan in his second dirctorial venture after Comali, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment.[3] The film stars Pradeep Ranganathan himself (in his acting debut), Ivana, Raveena Ravi, Yogi Babu, Sathyaraj and Raadhika Sarathkumar in lead roles.[4] The film's music and score is composed by Yuvan Shankar Raja, with cinematography handled by Dinesh Purushothaman and editing done by Pradeep E. Ragav.  "; 
        t5cnt.style.padding="20px"
        t5cnt.style.textAlign="justify"
        let t5watch=document.createElement("button");
        t5watch.innerHTML="Watch";
        t5div.appendChild(t5watch);
        t5watch.style.width="45%";
        t5watch.style.height="40px";
        t5watch.style.border="none";
        t5watch.style.borderRadius="10px";
        t5watch.style.backgroundColor="yellow";
        t5watch.style.color="white";
        t5watch.style.marginLeft="5%";
        t5watch.addEventListener("click" , seen);
        function seen(){
          t5img.style.display="none";
            let t5vid=document.createElement("video");
            t5div.appendChild(t5vid);
          t5star.style.display="none";
          t5cnt.style.marginTop="100px"
            t5vid.src="./lovetoday.mp4";
            t5vid.autoplay="true";
            t5vid.muted="false";
            t5vid.setAttribute("width","100%");
            t5vid.setAttribute("controls","controls");
            t5vid.style.position="absolute";
            t5vid.style.top="0px"
            t5vid.style.left="0"
            
        }
        let t5down=document.createElement("button");
        t5down.innerHTML="Download";
        t5div.appendChild(t5down);
        t5down.style.width="45%";
        t5down.style.height="40px";
        t5down.style.border="none";
        t5down.style.borderRadius="10px";
        t5down.style.backgroundColor="red";
        t5down.style.color="white";
        t5down.style.marginLeft="2%";
        let back=document.createElement("img");
        t5div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
      back.addEventListener("click",backk);
        function backk(){
            mainpage.style.display="block";
            t5div.style.display="none"
           
        }
    }
    let trendcard6=document.querySelector("#trend-6");
    trendcard6.addEventListener("click",tcard6);
    function tcard6(){
      mainpage.style.display="none";
        let t6div=document.createElement("div");
        apped.appendChild(t6div);
    t6div.style.zIndex="1";
    t6div.style.backgroundColor="black";
    t6div.style.color="white";
    t6div.style.position="relative";
        let t6img=document.createElement("img");  
        t6div.appendChild(t6img);
        t6img.src="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2022/06/28/Prithviraj-Sukumaran-s-Kaduva-Movie-HD-Posters-5.jpg?quality=80&zoom=1&ssl=1";
        t6img.style.width="100%";
        t6img.style.height="400px";
         let t6title=document.createElement("h4");
         t6div.appendChild(t6title);
         t6title.innerHTML="Kaduva";  
         t6title.style.padding="10px";
         t6title.style.fontSize="2.4em";
       let t6mname=document.createElement("h6");
        t6div.appendChild(t6mname);
        t6mname.innerHTML="Malayalam";
        t6mname.style.paddingLeft="10px";
        t6mname.style.paddingTop="-10px";
        t6mname.style.fontSize="1.2em"
        let t6star=document.createElement("h5");
        t6div.appendChild(t6star);
        t6star.innerHTML="⭐ 4.6/5";
        t6star.style.paddingLeft="10px";
        t6star.style.position="absolute";
        t6star.style.bottom="42.5%";
        t6star.style.right="10%";
        let t6cnt=document.createElement("p");
        t6div.appendChild(t6cnt);
        t6cnt.innerHTML="Kaduva (transl.Tiger) is a 2022 Indian Malayalam-language action drama film directed by Shaji Kailas, written by Jinu V. Abraham and produced by Prithviraj Productions and Magic Frames. It stars Prithviraj Sukumaran in the title role with Vivek Oberoi and Samyuktha Menon.  "; 
        t6cnt.style.padding="20px"
        t6cnt.style.textAlign="justify"
        let t6watch=document.createElement("button");
        t6watch.innerHTML="Watch";
        t6div.appendChild(t6watch);
        t6watch.style.width="45%";
        t6watch.style.height="40px";
        t6watch.style.border="none";
        t6watch.style.borderRadius="10px";
        t6watch.style.backgroundColor="yellow";
        t6watch.style.color="black";
        t6watch.style.marginLeft="5%";
        t6watch.addEventListener("click" , seen);
        function seen(){
          t6img.style.display="none";
            let t6vid=document.createElement("video");
            t6div.appendChild(t6vid);
          t6star.style.display="none";
          t6cnt.style.marginTop="100px";
            t6vid.src="./kaduva.mp4";
            t6vid.autoplay="true";
            t6vid.muted="false";
            t6vid.setAttribute("width","100%");
            t6vid.setAttribute("controls","controls");
            t6vid.style.position="absolute";
            t6vid.style.top="0px"
            t6vid.style.left="0"
            
        }
        let t6down=document.createElement("button");
        t6down.innerHTML="Download";
        t6div.appendChild(t6down);
        t6down.style.width="45%";
        t6down.style.height="40px";
        t6down.style.border="none";
        t6down.style.borderRadius="10px";
        t6down.style.backgroundColor="black";
        t6down.style.color="yellow";
        t6down.style.border="1px solid yellow";
        t6down.style.marginLeft="2%";
        let back=document.createElement("img");
        t6div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            mainpage.style.display="block";
            t6div.style.display="none";
            filter.style.display="flex"
           
        }
    }
    let trendcard7=document.querySelector("#trend-7");
    trendcard7.addEventListener("click",tcard7);
    function tcard7(){
      filter.style.display="none"
      mainpage.style.display="none";
        let t7div=document.createElement("div");
        apped.appendChild(t7div);
    t7div.style.zIndex="1";
    t7div.style.backgroundColor="black";
    t7div.style.color="white";
    t7div.style.position="relative";
        let t7img=document.createElement("img");  
        t7div.appendChild(t7img);
        t7img.src="https://i.pinimg.com/736x/66/9c/93/669c93a42f553686a7698cebc5658055.jpg";
        t7img.style.width="100%";
        t7img.style.height="400px";
         let t7title=document.createElement("h4");
         t7div.appendChild(t7title);
         t7title.innerHTML="RRR";  
         t7title.style.padding="10px";
         t7title.style.fontSize="2.4em";
       let t7mname=document.createElement("h6");
        t7div.appendChild(t7mname);
        t7mname.innerHTML="Telugu";
        t7mname.style.paddingLeft="10px";
        t7mname.style.paddingTop="-10px";
        t7mname.style.fontSize="1.2em"
        let t7star=document.createElement("h5");
        t7div.appendChild(t7star);
        t7star.innerHTML="⭐ 4.7/5";
        t7star.style.paddingLeft="10px";
        t7star.style.position="absolute";
        t7star.style.bottom="54.5%";
        t7star.style.right="10%";
        let t7cnt=document.createElement("p");
        t7div.appendChild(t7cnt);
        t7cnt.innerHTML="RRR[a] is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It centers around two real-life Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship and their fight against the British Raj. Set in the 1920s, the plot explores the undocumented "; 
        t7cnt.style.padding="20px"
        t7cnt.style.textAlign="justify"
        let t7watch=document.createElement("button");
        t7watch.innerHTML="Watch";
        t7div.appendChild(t7watch);
        t7watch.style.width="45%";
        t7watch.style.height="40px";
        t7watch.style.border="none";
        t7watch.style.borderRadius="10px";
        t7watch.style.backgroundColor="yellow";
        t7watch.style.color="black";
        t7watch.style.marginLeft="5%";
        t7watch.addEventListener("click" , seen);
        function seen(){
          t7img.style.display="none";
            let t7vid=document.createElement("video");
            t7div.appendChild(t7vid);
          t7star.style.display="none";
          t7cnt.style.marginTop="100px"
            t7vid.src="./rrr.mp4";
            t7vid.autoplay="true";
            t7vid.muted="false";
            t7vid.setAttribute("width","100%");
            t7vid.setAttribute("controls","controls");
            t7vid.style.position="absolute";
            t7vid.style.top="0px"
            t7vid.style.left="0"
            
        }
        let t7down=document.createElement("button");
        t7down.innerHTML="Download";
        t7div.appendChild(t7down);
        t7down.style.width="45%";
        t7down.style.height="40px";
        t7down.style.border="none";
        t7down.style.borderRadius="10px";
        t7down.style.backgroundColor="black";
        t7down.style.color="yellow"
        t7down.style.border="1px solid yellow"
        t7down.style.marginLeft="2%";
        let back=document.createElement("img");
        t7div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
        back.addEventListener("click",backk);
        function backk(){
            mainpage.style.display="block";
            t7div.style.display="none";
            filter.style.display="flex"
           
        }
    }

    let reccard1=document.querySelector("#rec-1");
    let recmov=document.querySelector("#recommended");
    
   reccard1.addEventListener("click",rcard1);
    function rcard1(){
      filter.style.display="flex"
      mainpage.style.display="none";
        let r1div=document.createElement("div");
        apped.appendChild(r1div);
        r1div.style.zIndex="1";
        r1div.style.backgroundColor="black";
        r1div.style.color="white";
        r1div.style.position="relative";
        let r1img=document.createElement("img");  
        r1div.appendChild(r1img);
        r1img.src="https://m.media-amazon.com/images/M/MV5BNTlmNDMzOWQtYzg4Ny00OWQ0LWFhN2MtNmQ2MDczZGZhNTU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg";
        r1img.style.width="100%";
        r1img.style.height="400px";
         let r1title=document.createElement("h4");
         r1div.appendChild(r1title);
         r1title.innerHTML="War";  
         r1title.style.padding="10px";
         r1title.style.fontSize="2.4em";
       let r1mname=document.createElement("h6");
        r1div.appendChild(r1mname);
        r1mname.innerHTML="Hindi";
        r1mname.style.paddingLeft="10px";
        r1mname.style.paddingTop="-10px";
        r1mname.style.fontSize="1.2em"
        let r1star=document.createElement("h5");
        r1div.appendChild(r1star);
        r1star.innerHTML="⭐ 4.4/5";
        r1star.style.paddingLeft="10px";
        r1star.style.position="absolute";
        r1star.style.bottom="50.5%";
        r1star.style.right="10%";
        let r1cnt=document.createElement("p");
        r1div.appendChild(r1cnt);
        r1cnt.innerHTML="War is a 2019 Indian Hindi-language vigilante spy action thriller film directed by Siddharth Anand, who co-wrote the film's script with Aditya Chopra, Shridhar Raghavan and Abbas Tyrewala.The film was produced by Aditya Chopra for Yash Raj Films. It is the third installment in the YRF Spy Universe and stars Hrithik Roshan, Tiger Shroff, and Vaani Kapoor.[5] In the film, Khalid Rahmani (Shroff), an Indian soldier, is assigned to eliminate his former mentor Kabir Dhaliwal (Roshan), who has inexplicably gone rogue."; 
        r1cnt.style.padding="20px"
        r1cnt.style.textAlign="justify"
        let r1watch=document.createElement("button");
        r1watch.innerHTML="Watch";
        r1div.appendChild(r1watch);
        r1watch.style.width="45%";
        r1watch.style.height="40px";
        r1watch.style.border="none";
        r1watch.style.borderRadius="10px";
        r1watch.style.backgroundColor="yellow";
        r1watch.style.color="black";
        r1watch.style.marginLeft="5%";
        r1watch.addEventListener("click" , seen);
        function seen(){
            r1img.style.display="none";
           
            let r1vid=document.createElement("video");
            r1div.appendChild(r1vid);
          r1star.style.display="none";
          r1cnt.style.marginTop="100px"
            r1vid.src="./war.mp4";
            r1vid.autoplay="true";
            r1vid.muted="false";
            r1vid.setAttribute("width","100%");
            r1vid.setAttribute("controls","controls");
            r1vid.style.position="absolute";
            r1vid.style.top="0px"
            r1vid.style.left="0"
           
            
        }
        let r1down=document.createElement("button");
        r1down.innerHTML="Download";
        r1div.appendChild(r1down);
        r1down.style.width="45%";
        r1down.style.height="40px";
        r1down.style.border="none";
        r1down.style.borderRadius="10px";
        r1down.style.backgroundColor="black";
        r1down.style.color="yellow";
        r1down.style.border="1px solid yellow";
        r1down.style.marginLeft="2%";
        let back=document.createElement("img");
        r1div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+5";
      back.addEventListener("click",backk);
        function backk(){
            
     mainpage.style.display="block";
     r1div.style.display="none";
     filter.style.display="flex"
           
        }
    }
    let reccard2=document.querySelector("#rec-2");
   reccard2.addEventListener("click",rcard2);
    function rcard2(){
      filter.style.display="none"
      mainpage.style.display="none";
        let r2div=document.createElement("div");
        apped.appendChild(r2div);
        r2div.style.zIndex="1";
        r2div.style.backgroundColor="black";
        r2div.style.color="white";
        r2div.style.position="relative";
        let r2img=document.createElement("img");  
        r2div.appendChild(r2img);
        r2img.src="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2018/11/24/jayamravi-new-Still-from-Adanga-Maru-.png?quality=80&zoom=1&ssl=1";
        r2img.style.width="100%";
        r2img.style.height="400px";
         let r2title=document.createElement("h4");
         r2div.appendChild(r2title);
         r2title.innerHTML="Adangamaru";  
         r2title.style.padding="10px";
         r2title.style.fontSize="2.4em";
       let r2mname=document.createElement("h6");
        r2div.appendChild(r2mname);
        r2mname.innerHTML="Tamil";
        r2mname.style.paddingLeft="10px";
        r2mname.style.paddingTop="-10px";
        r2mname.style.fontSize="1.2em"
        let r2star=document.createElement("h5");
        r2div.appendChild(r2star);
        r2star.innerHTML="⭐ 4.7/5";
        r2star.style.paddingLeft="10px";
        r2star.style.position="absolute";
        r2star.style.bottom="50.5%";
        r2star.style.right="10%";
        let r2cnt=document.createElement("p");
        r2div.appendChild(r2cnt);
        r2cnt.innerHTML="Adanga Maru (transl. Refuse to concede) is a 2018 Indian Tamil-language action thriller film written and directed by Karthik Thangavel. The film stars Jayam Ravi and Raashii Khanna, with Ponvannan, Babu Antony, Sampath Raj and Azhagam Perumal in supporting roles. The music was composed by Sam C. S., with cinematography by Sathyan Sooryan and rditing by RubenThe film began production in December 2017 and was released on 21 December 2018. The film received mixed to positive response from critics and audience in spite of being a commercial success at the box office."; 
        r2cnt.style.padding="20px"
        r2cnt.style.textAlign="justify"
        let r2watch=document.createElement("button");
        r2watch.innerHTML="Watch";
        r2div.appendChild(r2watch);
        r2watch.style.width="45%";
        r2watch.style.height="40px";
        r2watch.style.border="none";
        r2watch.style.borderRadius="10px";
        r2watch.style.backgroundColor="yellow";
        r2watch.style.color="black";
        r2watch.style.marginLeft="5%";
        r2watch.addEventListener("click" , seen);
        function seen(){
            r2img.style.display="none";
           
            let r2vid=document.createElement("video");
            r2div.appendChild(r2vid);
          r2star.style.display="none";
          r2cnt.style.marginTop="100px"
            r2vid.src="./adangamaru.mp4";
            r2vid.autoplay="true";
            r2vid.muted="false";
            r2vid.setAttribute("width","100%");
            r2vid.setAttribute("controls","controls");
            r2vid.style.position="absolute";
            r2vid.style.top="0px"
            r2vid.style.left="0"
           
            
        }
        let r2down=document.createElement("button");
        r2down.innerHTML="Download";
        r2div.appendChild(r2down);
        r2down.style.width="45%";
        r2down.style.height="40px";
        r2down.style.border="none";
        r2down.style.borderRadius="10px";
        r2down.style.backgroundColor="black";
        r2down.style.color="yellow";
        r2down.style.border="1px solid yellow";
        r2down.style.marginLeft="2%";
        let back=document.createElement("img");
        r2div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+5";
      back.addEventListener("click",backk);
        function backk(){
            
     mainpage.style.display="block";
     r2div.style.display="none";
     filter.style.display="flex"
           
        }
    }
    let reccard3=document.querySelector("#rec-3");
   reccard3.addEventListener("click",rcard3);
    function rcard3(){
      filter.style.display="none"
      mainpage.style.display="none";
        let r3div=document.createElement("div");
        apped.appendChild(r3div);
        r3div.style.zIndex="1";
        r3div.style.backgroundColor="black";
        r3div.style.color="white";
        r3div.style.position="relative";
        let r3img=document.createElement("img");  
        r3div.appendChild(r3img);
        r3img.src="https://cdn.citymapia.com/kottayam/anupama-theatre/15907/portfolio.jpg?biz=202";
        r3img.style.width="100%";
        r3img.style.height="400px";
         let r3title=document.createElement("h4");
         r3div.appendChild(r3title);
         r3title.innerHTML="Kappan";  
         r3title.style.padding="10px";
         r3title.style.fontSize="2.4em";
       let r3mname=document.createElement("h6");
        r3div.appendChild(r3mname);
        r3mname.innerHTML="Tamil";
        r3mname.style.paddingLeft="10px";
        r3mname.style.paddingTop="-10px";
        r3mname.style.fontSize="1.2em"
        let r3star=document.createElement("h5");
        r3div.appendChild(r3star);
        r3star.innerHTML="⭐ 4.6/5";
        r3star.style.paddingLeft="10px";
        r3star.style.position="absolute";
        r3star.style.bottom="50.5%";
        r3star.style.right="10%";
        let r3cnt=document.createElement("p");
        r3div.appendChild(r3cnt);
        r3cnt.innerHTML="Kaappaan (transl. Protector) is a 2019 Indian Tamil-language action thriller film directed by K. V. Anand and written by Pattukkottai Prabakar.[6] It was produced by Lyca Productions and stars Suriya, Mohanlal and Arya with Sayyeshaa, Samuthirakani, Poorna, Boman Irani and Chirag Jani in supporting roles.[7][8][9]The narrative revolves around Kathiravan, a Special Protection Group (SPG) officer who struggles to protect the Prime Minister from a mysterious man who threatens to assassinate him"; 
        r3cnt.style.padding="20px"
        r3cnt.style.textAlign="justify"
        let r3watch=document.createElement("button");
        r3watch.innerHTML="Watch";
        r3div.appendChild(r3watch);
        r3watch.style.width="45%";
        r3watch.style.height="40px";
        r3watch.style.border="none";
        r3watch.style.borderRadius="10px";
        r3watch.style.backgroundColor="yellow";
        r3watch.style.color="black";
        r3watch.style.marginLeft="5%";
        r3watch.addEventListener("click" , seen);
        function seen(){
          r3star.style.display="none";
          r3cnt.style.marginTop="100px"
            r3img.style.display="none";
            let r3vid=document.createElement("video");
            r3div.appendChild(r3vid);
            r3vid.src="./kappan.mp4";
            r3vid.autoplay="true";
            r3vid.muted="false";
            r3vid.setAttribute("width","100%");
            r3vid.setAttribute("controls","controls");
            r3vid.style.position="absolute";
            r3vid.style.top="0px"
            r3vid.style.left="0"        
        }
        let r3down=document.createElement("button");
        r3down.innerHTML="Download";
        r3div.appendChild(r3down);
        r3down.style.width="45%";
        r3down.style.height="40px";
        r3down.style.border="none";
        r3down.style.borderRadius="10px";
        r3down.style.backgroundColor="black";
        r3down.style.color="yellow";
        r3down.style.border="1px solid yellow";
        r3down.style.marginLeft="2%";
        let back=document.createElement("img");
        r3div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+5";
      back.addEventListener("click",backk);
        function backk(){     
     mainpage.style.display="block";
     r3div.style.display="none";     
     filter.style.display="flex" 
        }
    }
    let reccard4=document.querySelector("#rec-4");
   reccard4.addEventListener("click",rcard4);
    function rcard4(){
      filter.style.display="none"
      mainpage.style.display="none";
        let r4div=document.createElement("div");
        apped.appendChild(r4div);
        r4div.style.zIndex="1";
        r4div.style.backgroundColor="black";
        r4div.style.color="white";
        r4div.style.position="relative";
        let r4img=document.createElement("img");  
        r4div.appendChild(r4img);
        r4img.src="https://staticimg.spicyonion.com/images/profile/title/thuramukham-malayalam-movie/thuramukham-malayalam-movie.jpg";
        r4img.style.width="100%";
        r4img.style.height="400px";
         let r4title=document.createElement("h4");
         r4div.appendChild(r4title);
         r4title.innerHTML="Thuramugam";  
         r4title.style.padding="10px";
         r4title.style.fontSize="2.4em";
       let r4mname=document.createElement("h6");
        r4div.appendChild(r4mname);
        r4mname.innerHTML="Malayalam";
        r4mname.style.paddingLeft="10px";
        r4mname.style.paddingTop="-10px";
        r4mname.style.fontSize="1.2em"
        let r4star=document.createElement("h5");
        r4div.appendChild(r4star);
        r4star.innerHTML="⭐ 4.5/5";
        r4star.style.paddingLeft="10px";
        r4star.style.position="absolute";
        r4star.style.bottom="50%";
        r4star.style.right="1%";
        let r4cnt=document.createElement("p");
        r4div.appendChild(r4cnt);
        r4cnt.innerHTML="Thuramukham (transl. Harbour) is a 2022 Indian Malayalam-language period action-drama film directed and filmed by Rajeev Ravi. The screenplay, written by Gopan Chidambaran, is based on the play of the same name by his father K. M. Chidambaran.[1][2][3] The film stars Nivin Pauly, Indrajith Sukumaran, Joju George, Arjun Ashokan, Sudev Nair, Manikandan R. Achari, Senthil Krishna, Nimisha Sajayan, Poornima Indrajith and Darshana Rajendran in prominent roles. "; 
        r4cnt.style.padding="20px"
        r4cnt.style.textAlign="justify"
        let r4watch=document.createElement("button");
        r4watch.innerHTML="Watch";
        r4div.appendChild(r4watch);
        r4watch.style.width="45%";
        r4watch.style.height="40px";
        r4watch.style.border="none";
        r4watch.style.borderRadius="10px";
        r4watch.style.backgroundColor="yellow";
        r4watch.style.color="black";
        r4watch.style.marginLeft="5%";
        r4watch.addEventListener("click" , seen);
        function seen(){
            r4img.style.display="none";
            let r4vid=document.createElement("video");
            r4div.appendChild(r4vid);
            r4star.style.display="none";
            r4cnt.style.marginTop="100px";
            r4vid.src="./thuramugam.mp4";
            r4vid.autoplay="true";
            r4vid.muted="false";
            r4vid.setAttribute("width","100%");
            r4vid.setAttribute("controls","controls");
            r4vid.style.position="absolute";
            r4vid.style.top="0px"
            r4vid.style.left="0"        
        }
        let r4down=document.createElement("button");
        r4down.innerHTML="Download";
        r4div.appendChild(r4down);
        r4down.style.width="45%";
        r4down.style.height="40px";
        r4down.style.border="none";
        r4down.style.borderRadius="10px";
        r4down.style.backgroundColor="black";
        r4down.style.color="yellow";
        r4down.style.border="1px solid yellow";
        r4down.style.marginLeft="2%";
        let back=document.createElement("img");
        r4div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+5";
      back.addEventListener("click",backk);
        function backk(){     
     mainpage.style.display="block";
     r4div.style.display="none";
     filter.style.display="flex"      
        }
    }
    let reccard5=document.querySelector("#rec-5");
   reccard5.addEventListener("click",rcard5);
    function rcard5(){
      filter.style.display="none"
      mainpage.style.display="none";
        let r5div=document.createElement("div");
        apped.appendChild(r5div);
        r5div.style.zIndex="1";
        r5div.style.backgroundColor="black";
        r5div.style.color="white";
        r5div.style.position="relative";
        let r5img=document.createElement("img");  
        r5div.appendChild(r5img);
        r5img.src="https://i.pinimg.com/originals/b9/fd/05/b9fd054b5d3ccf0d20ef1526d633c1f9.jpg";
        r5img.style.width="100%";
        r5img.style.height="400px";
         let r5title=document.createElement("h4");
         r5div.appendChild(r5title);
         r5title.innerHTML="The Avengers";  
         r5title.style.padding="10px";
         r5title.style.fontSize="2.4em";
       let r5mname=document.createElement("h6");
        r5div.appendChild(r5mname);
        r5mname.innerHTML="English";
        r5mname.style.paddingLeft="10px";
        r5mname.style.paddingTop="-10px";
        r5mname.style.fontSize="1.2em"
        let r5star=document.createElement("h5");
        r5div.appendChild(r5star);
        r5star.innerHTML="⭐ 4.9/5";
        r5star.style.paddingLeft="10px";
        r5star.style.position="absolute";
        r5star.style.bottom="57.5%";
        r5star.style.right="10%";
        let r5cnt=document.createElement("p");
        r5div.appendChild(r5cnt);
        r5cnt.innerHTML="Marvel's The Avengers[4] (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland),[1][5] or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,[N 1] it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.   "; 
        r5cnt.style.padding="20px"
        r5cnt.style.textAlign="justify"
        let r5watch=document.createElement("button");
        r5watch.innerHTML="Watch";
        r5div.appendChild(r5watch);
        r5watch.style.width="45%";
        r5watch.style.height="40px";
        r5watch.style.border="none";
        r5watch.style.borderRadius="10px";
        r5watch.style.backgroundColor="yellow";
        r5watch.style.color="black";
        r5watch.style.marginLeft="5%";
        r5watch.addEventListener("click" , seen);
        function seen(){
            r5img.style.display="none";
            let r5vid=document.createElement("video");
            r5div.appendChild(r5vid);
            r5star.style.display="none";
            r5cnt.style.marginTop="100px"
            r5vid.src="./avengers.mp4";
            r5vid.autoplay="true";
            r5vid.muted="false";
            r5vid.setAttribute("width","100%");
            r5vid.setAttribute("controls","controls");
            r5vid.style.position="absolute";
            r5vid.style.top="0px"
            r5vid.style.left="0"        
        }
        let r5down=document.createElement("button");
        r5down.innerHTML="Download";
        r5div.appendChild(r5down);
        r5down.style.width="45%";
        r5down.style.height="40px";
        r5down.style.border="none";
        r5down.style.borderRadius="10px";
        r5down.style.backgroundColor="black";
        r5down.style.color="yellow";
        r5down.style.border="1px solid yellow";
        r5down.style.marginLeft="2%";
        let back=document.createElement("img");
        r5div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+5";
      back.addEventListener("click",backk);
        function backk(){     
     mainpage.style.display="block";
     r5div.style.display="none";     
     filter.style.display="flex" 
        }
    }
    let reccard6=document.querySelector("#rec-6");
   reccard6.addEventListener("click",rcard6);
    function rcard6(){
      filter.style.display="none"
      mainpage.style.display="none";
        let r6div=document.createElement("div");
        apped.appendChild(r6div);
        r6div.style.zIndex="1";
        r6div.style.backgroundColor="black";
        r6div.style.color="white";
        r6div.style.position="relative";
        let r6img=document.createElement("img");  
        r6div.appendChild(r6img);
        r6img.src="https://zamunda-net.com/wp-content/uploads/2019/08/avatar-2-2022-2.jpg";
        r6img.style.width="100%";
        r6img.style.height="400px";
         let r6title=document.createElement("h4");
         r6div.appendChild(r6title);
         r6title.innerHTML="Avatar-2";  
         r6title.style.padding="10px";
         r6title.style.fontSize="2.4em";
       let r6mname=document.createElement("h6");
        r6div.appendChild(r6mname);
        r6mname.innerHTML="Tamil";
        r6mname.style.paddingLeft="10px";
        r6mname.style.paddingTop="-10px";
        r6mname.style.fontSize="1.2em"
        let r6star=document.createElement("h5");
        r6div.appendChild(r6star);
        r6star.innerHTML="⭐ 4.8/5";
        r6star.style.paddingLeft="10px";
        r6star.style.position="absolute";
        r6star.style.bottom="58.5%";
        r6star.style.right="10%";
        let r6cnt=document.createElement("p");
        r6div.appendChild(r6cnt);
        r6cnt.innerHTML="Avatar: The Way of Water is a 2022 American epic science fiction film and the sequel to the 2009 film Avatar, both directed by James Cameron. The film is distributed by 20th Century Studios, as the second installment in the Avatar film series. Cameron produced the film with Jon Landau and wrote the screenplay with Rick Jaffa and Amanda Silver, which is based on a story the three wrote with Josh Friedman and Shane Salerno. Cast members Sam Worthington, Zoe Saldaña, Stephen Lang, Joel David Moore, CCH Pounder, Giovanni Ribisi, Dileep Rao, and Matt Gerald reprise their roles from the original film, while Sigourney Weaver returned in a different role.[3] New cast members include Kate Winslet, Cliff Curtis, Edie Falco, Jemaine Clement, and Brendan Cowell. "; 
        r6cnt.style.padding="20px"
        r6cnt.style.textAlign="justify"
        let r6watch=document.createElement("button");
        r6watch.innerHTML="Watch";
        r6div.appendChild(r6watch);
        r6watch.style.width="45%";
        r6watch.style.height="40px";
        r6watch.style.border="none";
        r6watch.style.borderRadius="10px";
        r6watch.style.backgroundColor="yellow";
        r6watch.style.color="black";
        r6watch.style.marginLeft="5%";
        r6watch.addEventListener("click" , seen);
        function seen(){
            r6img.style.display="none";
            let r6vid=document.createElement("video");
            r6div.appendChild(r6vid);
            r6star.style.display="none";
            r6cnt.style.marginTop="100px";
            r6vid.src="./avatar.mp4";
            r6vid.autoplay="true";
            r6vid.muted="false";
            r6vid.setAttribute("width","100%");
            r6vid.setAttribute("controls","controls");
            r6vid.style.position="absolute";
            r6vid.style.top="0px"
            r6vid.style.left="0"        
        }
        let r6down=document.createElement("button");
        r6down.innerHTML="Download";
        r6div.appendChild(r6down);
        r6down.style.width="45%";
        r6down.style.height="40px";
        r6down.style.border="none";
        r6down.style.borderRadius="10px";
        r6down.style.backgroundColor="black";
        r6down.style.color="yellow";
        r6down.style.border="1px solid yellow";
        r6down.style.marginLeft="2%";
        let back=document.createElement("img");
        r6div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+5";
      back.addEventListener("click",backk);
        function backk(){     
     mainpage.style.display="block";
     r6div.style.display="none";    
     filter.style.display="flex"  
        }
    }
    let reccard7=document.querySelector("#rec-7");
   reccard7.addEventListener("click",rcard7);
    function rcard7(){
      filter.style.display="none"
      mainpage.style.display="none";
        let r7div=document.createElement("div");
        apped.appendChild(r7div);
        r7div.style.zIndex="1";
        r7div.style.backgroundColor="black";
        r7div.style.color="white";
        r7div.style.position="relative";
        let r7img=document.createElement("img");  
        r7div.appendChild(r7img);
        r7img.src="https://m.media-amazon.com/images/M/MV5BNGU1ZTg0MmQtYTQyYS00ZTk0LWEwNzMtMmI1NDE4ZmExOTZkXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg";
        r7img.style.width="100%";
        r7img.style.height="400px";
         let r7title=document.createElement("h4");
         r7div.appendChild(r7title);
         r7title.innerHTML="Katta Kusthi";  
         r7title.style.padding="10px";
         r7title.style.fontSize="2.4em";
       let r7mname=document.createElement("h6");
        r7div.appendChild(r7mname);
        r7mname.innerHTML="Tamil";
        r7mname.style.paddingLeft="10px";
        r7mname.style.paddingTop="-10px";
        r7mname.style.fontSize="1.2em"
        let r7star=document.createElement("h5");
        r7div.appendChild(r7star);
        r7star.innerHTML="⭐ 4.6/5";
        r7star.style.paddingLeft="10px";
        r7star.style.position="absolute";
        r7star.style.bottom="51.5%";
        r7star.style.right="7%";
        let r7cnt=document.createElement("p");
        r7div.appendChild(r7cnt);
        r7cnt.innerHTML="Gatta Kusthi (transl. Tied wrestling) is a 2022 Indian Tamil-language sports drama film written and directed by Chella Ayyavu. It was jointly produced by Ravi Teja, Vishnu Vishal, Shubhra and Aryan Ramesh through the companies RT Team Works and VV Studioz.[2] The film stars Vishnu Vishal and Aishwarya Lekshmi in the lead roles. The film's songs and background score were composed by Justin Prabhakaran.[3] The story is set against the backdrop of submission wrestling form Gatta gusthi. "; 
        r7cnt.style.padding="20px"
        r7cnt.style.textAlign="justify"
        let r7watch=document.createElement("button");
        r7watch.innerHTML="Watch";
        r7div.appendChild(r7watch);
        r7watch.style.width="45%";
        r7watch.style.height="40px";
        r7watch.style.border="none";
        r7watch.style.borderRadius="10px";
        r7watch.style.backgroundColor="yellow";
        r7watch.style.color="black";
        r7watch.style.marginLeft="5%";
        r7watch.addEventListener("click" , seen);
        function seen(){
            r7img.style.display="none";
            let r7vid=document.createElement("video");
            r7div.appendChild(r7vid);
            r7star.style.display="none";
            r7cnt.style.marginTop="100px"
            r7vid.src="./gattakusthi.mp4";
            r7vid.autoplay="true";
            r7vid.muted="false";
            r7vid.setAttribute("width","100%");
            r7vid.setAttribute("controls","controls");
            r7vid.style.position="absolute";
            r7vid.style.top="0px"
            r7vid.style.left="0"        
        }
        let r7down=document.createElement("button");
        r7down.innerHTML="Download";
        r7div.appendChild(r7down);
        r7down.style.width="45%";
        r7down.style.height="40px";
        r7down.style.border="none";
        r7down.style.borderRadius="10px";
        r7down.style.backgroundColor="black";
        r7down.style.color="yellow";
        r7down.style.border="1px solid yellow";
        r7down.style.marginLeft="2%";
        let back=document.createElement("img");
        r7div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+5";
      back.addEventListener("click",backk);
        function backk(){     
     mainpage.style.display="block";
     r7div.style.display="none";  
     filter.style.display="flex"    
        }
    }


    let topmarvelc1=document.querySelector("#tmar-1");
   topmarvelc1.addEventListener("click",mcard1);
    function mcard1(){
      filter.style.display="none"
      mainpage.style.display="none";
      moviecollection.style.display="none"
        let mc1div=document.createElement("div");
        apped.appendChild(mc1div);
        mc1div.style.zIndex="1";
        mc1div.style.backgroundColor="black";
        mc1div.style.color="white";
        mc1div.style.position="relative";
        let mc1img=document.createElement("img");  
        mc1div.appendChild(mc1img);
        mc1img.src="https://lumiere-a.akamaihd.net/v1/images/p_avengersinfinitywar_19871_cb171514.jpeg?region=0%2C0%2C540%2C810";
        mc1img.style.width="100%";
        mc1img.style.height="400px";
         let mc1title=document.createElement("h4");
         mc1div.appendChild(mc1title);
         mc1title.innerHTML="Avengers Infinity War";  
         mc1title.style.padding="10px";
         mc1title.style.fontSize="2.4em";
       let mc1mname=document.createElement("h6");
        mc1div.appendChild(mc1mname);
        mc1mname.innerHTML="English";
        mc1mname.style.paddingLeft="10px";
        mc1mname.style.paddingTop="-10px";
        mc1mname.style.fontSize="1.2em"
        let mc1star=document.createElement("h5");
        mc1div.appendChild(mc1star);
        mc1star.innerHTML="⭐ 4.8/5";
        mc1star.style.paddingLeft="10px";
        mc1star.style.position="absolute";
        mc1star.style.bottom="56.5%";
        mc1star.style.right="10%";
        let mc1cnt=document.createElement("p");
        mc1div.appendChild(mc1cnt);
        mc1cnt.innerHTML="Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and Avengers: Age of Ultron (2015), and the 19th film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldaña, Josh Brolin, and Chris Pratt. In the film, the Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones as part of his quest to kill half of all life in the universe. "; 
        mc1cnt.style.padding="20px"
        mc1cnt.style.textAlign="justify"
        let mc1watch=document.createElement("button");
        mc1watch.innerHTML="Watch";
        mc1div.appendChild(mc1watch);
        mc1watch.style.width="45%";
        mc1watch.style.height="40px";
        mc1watch.style.border="none";
        mc1watch.style.borderRadius="10px";
        mc1watch.style.backgroundColor="yellow";
        mc1watch.style.color="black";
        mc1watch.style.marginLeft="5%";
        mc1watch.addEventListener("click" , seen1);
        function seen1(){
            mc1img.style.display="none";
            mc1star.style.display="none"
            mc1cnt.style.marginTop="70px"
            let mc1vid=document.createElement("video");
            mc1div.appendChild(mc1vid);
          
            mc1vid.src="./infinitywar.mp4";
            mc1vid.autoplay="true";
            mc1vid.muted="false";
            mc1vid.setAttribute("width","100%");
            mc1vid.setAttribute("controls","controls");
            mc1vid.style.position="absolute";
            mc1vid.style.top="0px"
            mc1vid.style.left="0"
            
        }
        let mc1down=document.createElement("button");
        mc1down.innerHTML="Download";
        mc1div.appendChild(mc1down);
        mc1down.style.width="45%";
        mc1down.style.height="40px";
        mc1down.style.border="none";
        mc1down.style.borderRadius="10px";
        mc1down.style.backgroundColor="black";
        mc1down.style.color="yellow";
        mc1down.style.border="1px solid yellow";
        mc1down.style.marginLeft="2%";
        let back=document.createElement("img");
        mc1div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
        moviecollection.style.display="block";
            mc1div.style.display="none";
            filter.style.display="flex"
           
        }
    }
    let topmarvelc2=document.querySelector("#tmar-2");
   topmarvelc2.addEventListener("click",mcard2);
    function mcard2(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let mc2div=document.createElement("div");
        apped.appendChild(mc2div);
        mc2div.style.zIndex="1";
        mc2div.style.backgroundColor="black";
        mc2div.style.color="white";
        mc2div.style.position="relative";
        let mc2img=document.createElement("img");  
        mc2div.appendChild(mc2img);
        mc2img.src="https://xl.movieposterdb.com/22_04/2016/3498820/xl_3498820_a8475c73.jpg";
        mc2img.style.width="100%";
        mc2img.style.height="400px";
         let mc2title=document.createElement("h4");
         mc2div.appendChild(mc2title);
         mc2title.innerHTML="Ironman Civil War";  
         mc2title.style.padding="10px";
         mc2title.style.fontSize="2.4em";
       let mc2mname=document.createElement("h6");
        mc2div.appendChild(mc2mname);
        mc2mname.innerHTML="English";
        mc2mname.style.paddingLeft="10px";
        mc2mname.style.paddingTop="-10px";
        mc2mname.style.fontSize="1.2em"
        let mc2star=document.createElement("h5");
        mc2div.appendChild(mc2star);
        mc2star.innerHTML="⭐ 4.8/5";
        mc2star.style.paddingLeft="10px";
        mc2star.style.position="absolute";
        mc2star.style.bottom="56.5%";
        mc2star.style.right="10%";
        let mc2cnt=document.createElement("p");
        mc2div.appendChild(mc2cnt);
        mc2cnt.innerHTML="Captain America: Civil War is a 2016 American superhero film based on the Marvel Comics character Captain America, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Captain America: The First Avenger (2011) and Captain America: The Winter Soldier (2014), and the 13th film in the Marvel Cinematic Universe (MCU). The film was directed by Anthony and Joe Russo from a screenplay by the writing team of Christopher Markus and Stephen McFeely, and stars Chris Evans as Steve Rogers / Captain America alongside an ensemble cast including Robert Downey Jr., Scarlett Johansson, Sebastian Stan, Anthony Mackie, Don Cheadle, Jeremy Renner, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Paul Rudd, Emily VanCamp, Marisa Tomei, Tom Holland, Frank Grillo, Martin Freeman, William Hurt, and Daniel Brühl. In Captain America: Civil War, disagreement over international oversight of the Avengers fractures the team into two opposing factions—one led by Steve Rogers and the other by Tony Stark (Downey). "; 
        mc2cnt.style.padding="20px"
        mc2cnt.style.textAlign="justify"
        let mc2watch=document.createElement("button");
        mc2watch.innerHTML="Watch";
        mc2div.appendChild(mc2watch);
        mc2watch.style.width="45%";
        mc2watch.style.height="40px";
        mc2watch.style.border="none";
        mc2watch.style.borderRadius="10px";
        mc2watch.style.backgroundColor="yellow";
        mc2watch.style.color="black";
        mc2watch.style.marginLeft="5%";
        mc2watch.addEventListener("click" , seen1);
        function seen1(){
            mc2img.style.display="none";
            mc2star.style.display="none"
            mc2cnt.style.marginTop="70px"
            let mc2vid=document.createElement("video");
            mc2div.appendChild(mc2vid);
          
            mc2vid.src="./civilwar.mp4";
            mc2vid.autoplay="true";
            mc2vid.muted="false";
            mc2vid.setAttribute("width","100%");
            mc2vid.setAttribute("controls","controls");
            mc2vid.style.position="absolute";
            mc2vid.style.top="0px"
            mc2vid.style.left="0"
            
        }
        let mc2down=document.createElement("button");
        mc2down.innerHTML="Download";
        mc2div.appendChild(mc2down);
        mc2down.style.width="45%";
        mc2down.style.height="40px";
        mc2down.style.border="none";
        mc2down.style.borderRadius="10px";
        mc2down.style.backgroundColor="black";
        mc2down.style.color="yellow";
        mc2down.style.border="1px solid yellow";
        mc2down.style.marginLeft="2%";
        let back=document.createElement("img");
        mc2div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
           moviecollection.style.display="block";
            mc2div.style.display="none"
            filter.style.display="flex"
        }
    }
    let topmarvelc3=document.querySelector("#tmar-3");
   topmarvelc3.addEventListener("click",mcard3);
    function mcard3(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let mc3div=document.createElement("div");
        apped.appendChild(mc3div);
        mc3div.style.zIndex="1";
        mc3div.style.backgroundColor="black";
        mc3div.style.color="white";
        mc3div.style.position="relative";
        let mc3img=document.createElement("img");  
        mc3div.appendChild(mc3img);
        mc3img.src="https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_.jpg";
        mc3img.style.width="100%";
        mc3img.style.height="400px";
         let mc3title=document.createElement("h4");
         mc3div.appendChild(mc3title);
         mc3title.innerHTML="Spiderman Home Coming";  
         mc3title.style.padding="10px";
         mc3title.style.fontSize="2.4em";
       let mc3mname=document.createElement("h6");
        mc3div.appendChild(mc3mname);
        mc3mname.innerHTML="English";
        mc3mname.style.paddingLeft="10px";
        mc3mname.style.paddingTop="-10px";
        mc3mname.style.fontSize="1.2em"
        let mc3star=document.createElement("h5");
        mc3div.appendChild(mc3star);
        mc3star.innerHTML="⭐ 4.4/5";
        mc3star.style.paddingLeft="10px";
        mc3star.style.position="absolute";
        mc3star.style.bottom="56.5%";
        mc3star.style.right="10%";
        let mc3cnt=document.createElement("p");
        mc3div.appendChild(mc3cnt);
        mc3cnt.innerHTML="Spider-Man: Homecoming is a 2017 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the second Spider-Man film reboot and the 16th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts, from a screenplay by the writing teams of Jonathan Goldstein and John Francis Daley, Watts and Christopher Ford, and Chris McKenna and Erik Sommers. Tom Holland stars as Peter Parker / Spider-Man, alongside Michael Keaton, Jon Favreau, Gwyneth Paltrow, Zendaya, Donald Glover, Jacob Batalon, Laura Harrier, Tony Revolori, Bokeem Woodbine, Tyne Daly, Marisa Tomei, and Robert Downey Jr. In Spider-Man: Homecoming, Peter Parker tries to balance high school life with being Spider-Man while facing the Vulture (Keaton). "; 
        mc3cnt.style.padding="20px"
        mc3cnt.style.textAlign="justify"
        let mc3watch=document.createElement("button");
        mc3watch.innerHTML="Watch";
        mc3div.appendChild(mc3watch);
        mc3watch.style.width="45%";
        mc3watch.style.height="40px";
        mc3watch.style.border="none";
        mc3watch.style.borderRadius="10px";
        mc3watch.style.backgroundColor="yellow";
        mc3watch.style.color="black";
        mc3watch.style.marginLeft="5%";
        mc3watch.addEventListener("click" , seen1);
        function seen1(){
            mc3img.style.display="none";
            mc3star.style.display="none"
            mc3cnt.style.marginTop="70px"
            let mc3vid=document.createElement("video");
            mc3div.appendChild(mc3vid);
          
            mc3vid.src="./spiderman.mp4";
            mc3vid.autoplay="true";
            mc3vid.muted="false";
            mc3vid.setAttribute("width","100%");
            mc3vid.setAttribute("controls","controls");
            mc3vid.style.position="absolute";
            mc3vid.style.top="0px"
            mc3vid.style.left="0"
            
        }
        let mc3down=document.createElement("button");
        mc3down.innerHTML="Download";
        mc3div.appendChild(mc3down);
        mc3down.style.width="45%";
        mc3down.style.height="40px";
        mc3down.style.border="none";
        mc3down.style.borderRadius="10px";
        mc3down.style.backgroundColor="black";
        mc3down.style.color="yellow";
        mc3down.style.border="1px solid yellow";
        mc3down.style.marginLeft="2%";
        let back=document.createElement("img");
        mc3div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
            moviecollection.style.display="block";
            mc3div.style.display="none"
            filter.style.display="flex"
        }
    }
    let topmarvelc4=document.querySelector("#tmar-4");
   topmarvelc4.addEventListener("click",mcard4);
    function mcard4(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let mc4div=document.createElement("div");
        apped.appendChild(mc4div);
        mc4div.style.zIndex="1";
        mc4div.style.backgroundColor="black";
        mc4div.style.color="white";
        mc4div.style.position="relative";
        let mc4img=document.createElement("img");  
        mc4div.appendChild(mc4img);
        mc4img.src="https://cdnb.artstation.com/p/assets/images/images/017/091/329/large/diana-greenhalgh-deadpoolfinal.jpg?1554611618";
        mc4img.style.width="100%";
        mc4img.style.height="400px";
         let mc4title=document.createElement("h4");
         mc4div.appendChild(mc4title);
         mc4title.innerHTML="Deadpool";  
         mc4title.style.padding="10px";
         mc4title.style.fontSize="2.4em";
       let mc4mname=document.createElement("h6");
        mc4div.appendChild(mc4mname);
        mc4mname.innerHTML="English";
        mc4mname.style.paddingLeft="10px";
        mc4mname.style.paddingTop="-10px";
        mc4mname.style.fontSize="1.2em"
        let mc4star=document.createElement("h5");
        mc4div.appendChild(mc4star);
        mc4star.innerHTML="⭐ 4.4/5";
        mc4star.style.paddingLeft="10px";
        mc4star.style.position="absolute";
        mc4star.style.bottom="52.5%";
        mc4star.style.right="10%";
        let mc4cnt=document.createElement("p");
        mc4div.appendChild(mc4cnt);
        mc4cnt.innerHTML="Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name. Distributed by 20th Century Fox, it is a spin-off in the X-Men film series and the eighth installment overall. Directed by Tim Miller (in his feature directorial debut) and written by Rhett Reese and Paul Wernick, it stars Ryan Reynolds in the title role alongside Morena Baccarin, Ed Skrein, T. J. Miller, Gina Carano, and Brianna Hildebrand. In the film, Wade Wilson hunts the man who gave him mutant abilities and a scarred physical appearance, becoming the antihero Deadpool. "; 
        mc4cnt.style.padding="20px"
        mc4cnt.style.textAlign="justify"
        let mc4watch=document.createElement("button");
        mc4watch.innerHTML="Watch";
        mc4div.appendChild(mc4watch);
        mc4watch.style.width="45%";
        mc4watch.style.height="40px";
        mc4watch.style.border="none";
        mc4watch.style.borderRadius="10px";
        mc4watch.style.backgroundColor="yellow";
        mc4watch.style.color="black";
        mc4watch.style.marginLeft="5%";
        mc4watch.addEventListener("click" , seen1);
        function seen1(){
            mc4img.style.display="none";
            mc4star.style.display="none"
            mc4cnt.style.marginTop="100px"
            let mc4vid=document.createElement("video");
            mc4div.appendChild(mc4vid);
          
            mc4vid.src="./deadpool.mp4";
            mc4vid.autoplay="true";
            mc4vid.muted="false";
            mc4vid.setAttribute("width","100%");
            mc4vid.setAttribute("controls","controls");
            mc4vid.style.position="absolute";
            mc4vid.style.top="0px"
            mc4vid.style.left="0"
            
        }
        let mc4down=document.createElement("button");
        mc4down.innerHTML="Download";
        mc4div.appendChild(mc4down);
        mc4down.style.width="45%";
        mc4down.style.height="40px";
        mc4down.style.border="none";
        mc4down.style.borderRadius="10px";
        mc4down.style.backgroundColor="black";
        mc4down.style.color="yellow";
        mc4down.style.border="1px solid yellow";
        mc4down.style.marginLeft="2%";
        let back=document.createElement("img");
        mc4div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
           moviecollection.style.display="block";
            mc4div.style.display="none"
            filter.style.display="flex"
        }
    }
    let topmarvelc5=document.querySelector("#tmar-5");
   topmarvelc5.addEventListener("click",mcard5);
    function mcard5(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let mc5div=document.createElement("div");
        apped.appendChild(mc5div);
        mc5div.style.zIndex="1";
        mc5div.style.backgroundColor="black";
        mc5div.style.color="white";
        mc5div.style.position="relative";
        let mc5img=document.createElement("img");  
        mc5div.appendChild(mc5img);
        mc5img.src="https://www.themoviedb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg";
        mc5img.style.width="100%";
        mc5img.style.height="400px";
         let mc5title=document.createElement("h4");
         mc5div.appendChild(mc5title);
         mc5title.innerHTML="Logan";  
         mc5title.style.padding="10px";
         mc5title.style.fontSize="2.4em";
       let mc5mname=document.createElement("h6");
        mc5div.appendChild(mc5mname);
        mc5mname.innerHTML="English";
        mc5mname.style.paddingLeft="10px";
        mc5mname.style.paddingTop="-10px";
        mc5mname.style.fontSize="1.2em"
        let mc5star=document.createElement("h5");
        mc5div.appendChild(mc5star);
        mc5star.innerHTML="⭐ 4.7/5";
        mc5star.style.paddingLeft="10px";
        mc5star.style.position="absolute";
        mc5star.style.bottom="60.5%";
        mc5star.style.right="10%";
        let mc5cnt=document.createElement("p");
        mc5div.appendChild(mc5cnt);
        mc5cnt.innerHTML="Logan is a 2017 American superhero film starring Hugh Jackman as the titular character. It is the tenth film in the X-Men film series and the third and final installment in the Wolverine trilogy following X-Men Origins: Wolverine (2009) and The Wolverine (2013). The film, which takes inspiration from the Old Man Logan comics storyline by Mark Millar and Steve McNiven, follows an aged Wolverine and an extremely ill Charles Xavier who defends a young mutant named Laura from the villainous Reavers led by Donald Pierce and Zander Rice.[4][5][6] The film is produced by 20th Century Fox, Marvel Entertainment, TSG Entertainment and The Donners' Company, and distributed by 20th Century Fox.[7][8] It is directed by James Mangold, who co-wrote the screenplay with Michael Green and Scott Frank, from a story by Mangold.[9] In addition to Jackman, the film also stars Patrick Stewart, Richard E. Grant, Boyd Holbrook, Stephen Merchant, and Dafne Keen"; 
        mc5cnt.style.padding="20px"
        mc5cnt.style.textAlign="justify"
        let mc5watch=document.createElement("button");
        mc5watch.innerHTML="Watch";
        mc5div.appendChild(mc5watch);
        mc5watch.style.width="45%";
        mc5watch.style.height="40px";
        mc5watch.style.border="none";
        mc5watch.style.borderRadius="10px";
        mc5watch.style.backgroundColor="yellow";
        mc5watch.style.color="black";
        mc5watch.style.marginLeft="5%";
        mc5watch.addEventListener("click" , seen1);
        function seen1(){
            mc5img.style.display="none";
            mc5star.style.display="none"
            mc5cnt.style.marginTop="100px"
            let mc5vid=document.createElement("video");
            mc5div.appendChild(mc5vid);
            mc5vid.src="./logan.mp4";
            mc5vid.autoplay="true";
            mc5vid.muted="false";
            mc5vid.setAttribute("width","100%");
            mc5vid.setAttribute("controls","controls");
            mc5vid.style.position="absolute";
            mc5vid.style.top="0px"
            mc5vid.style.left="0"
            
        }
        let mc5down=document.createElement("button");
        mc5down.innerHTML="Download";
        mc5div.appendChild(mc5down);
        mc5down.style.width="45%";
        mc5down.style.height="40px";
        mc5down.style.border="none";
        mc5down.style.borderRadius="10px";
        mc5down.style.backgroundColor="black";
        mc5down.style.color="yellow";
        mc5down.style.border="1px solid yellow";
        mc5down.style.marginLeft="2%";
        let back=document.createElement("img");
        mc5div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
            moviecollection.style.display="block";
            mc5div.style.display="none"
            filter.style.display="flex"
        }
    }
    let topmarvelc6=document.querySelector("#tmar-6");
   topmarvelc6.addEventListener("click",mcard6);
    function mcard6(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let mc6div=document.createElement("div");
        apped.appendChild(mc6div);
        mc6div.style.zIndex="1";
        mc6div.style.backgroundColor="black";
        mc6div.style.color="white";
        mc6div.style.position="relative";
        let mc6img=document.createElement("img");  
        mc6div.appendChild(mc6img);
        mc6img.src="https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg";
        mc6img.style.width="100%";
        mc6img.style.height="400px";
         let mc6title=document.createElement("h4");
         mc6div.appendChild(mc6title);
         mc6title.innerHTML="The Incredible Hulk";  
         mc6title.style.padding="10px";
         mc6title.style.fontSize="2.4em";
       let mc6mname=document.createElement("h6");
        mc6div.appendChild(mc6mname);
        mc6mname.innerHTML="English";
        mc6mname.style.paddingLeft="10px";
        mc6mname.style.paddingTop="-10px";
        mc6mname.style.fontSize="1.2em"
        let mc6star=document.createElement("h5");
        mc6div.appendChild(mc6star);
        mc6star.innerHTML="⭐ 4.1/5";
        mc6star.style.paddingLeft="10px";
        mc6star.style.position="absolute";
        mc6star.style.bottom="52.5%";
        mc6star.style.right="10%";
        let mc6cnt=document.createElement("p");
        mc6div.appendChild(mc6cnt);
        mc6cnt.innerHTML="The Incredible Hulk is a 2008 American superhero film based on the Marvel Comics character the Hulk. Produced by Marvel Studios and distributed by Universal Pictures, it is the second film in the Marvel Cinematic Universe (MCU). It was directed by Louis Leterrier from a screenplay by Zak Penn, and stars Edward Norton as Bruce Banner alongside Liv Tyler, Tim Roth, Tim Blake Nelson, Ty Burrell, Christina Cabot, and William Hurt. In the film, Bruce Banner becomes the Hulk as an unwitting pawn in a military scheme to reinvigorate the Super-Soldier program through gamma radiation. Banner goes on the run from the military while attempting to cure himself of the Hulk. "; 
        mc6cnt.style.padding="20px"
        mc6cnt.style.textAlign="justify"
        let mc6watch=document.createElement("button");
        mc6watch.innerHTML="Watch";
        mc6div.appendChild(mc6watch);
        mc6watch.style.width="45%";
        mc6watch.style.height="40px";
        mc6watch.style.border="none";
        mc6watch.style.borderRadius="10px";
        mc6watch.style.backgroundColor="yellow";
        mc6watch.style.color="black";
        mc6watch.style.marginLeft="5%";
        mc6watch.addEventListener("click" , seen1);
        function seen1(){
            mc6img.style.display="none";
            mc6star.style.display="none"
            mc6cnt.style.marginTop="100px"
            let mc6vid=document.createElement("video");
            mc6div.appendChild(mc6vid);
            mc6vid.src="./hulk.mp4";
            mc6vid.autoplay="true";
            mc6vid.muted="false";
            mc6vid.setAttribute("width","100%");
            mc6vid.setAttribute("controls","controls");
            mc6vid.style.position="absolute";
            mc6vid.style.top="0px"
            mc6vid.style.left="0"
            
        }
        let mc6down=document.createElement("button");
        mc6down.innerHTML="Download";
        mc6div.appendChild(mc6down);
        mc6down.style.width="45%";
        mc6down.style.height="40px";
        mc6down.style.border="none";
        mc6down.style.borderRadius="10px";
        mc6down.style.backgroundColor="black";
        mc6down.style.color="yellow";
        mc6down.style.border="1px solid yellow";
        mc6down.style.marginLeft="2%";
        let back=document.createElement("img");
        mc6div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
        moviecollection.style.display="block";
            mc6div.style.display="none"
            filter.style.display="flex"
        }
    }
    let topmarvelc7=document.querySelector("#tmar-7");
   topmarvelc7.addEventListener("click",mcard7);
    function mcard7(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let mc7div=document.createElement("div");
        apped.appendChild(mc7div);
        mc7div.style.zIndex="1";
        mc7div.style.backgroundColor="black";
        mc7div.style.color="white";
        mc7div.style.position="relative";
        let mc7img=document.createElement("img");  
        mc7div.appendChild(mc7img);
        mc7img.src="https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0%2C0%2C540%2C810";
        mc7img.style.width="100%";
        mc7img.style.height="400px";
         let mc7title=document.createElement("h4");
         mc7div.appendChild(mc7title);
         mc7title.innerHTML="Black Panther";  
         mc7title.style.padding="10px";
         mc7title.style.fontSize="2.4em";
       let mc7mname=document.createElement("h6");
        mc7div.appendChild(mc7mname);
        mc7mname.innerHTML="English";
        mc7mname.style.paddingLeft="10px";
        mc7mname.style.paddingTop="-10px";
        mc7mname.style.fontSize="1.2em"
        let mc7star=document.createElement("h5");
        mc7div.appendChild(mc7star);
        mc7star.innerHTML="⭐ 4.6/5";
        mc7star.style.paddingLeft="10px";
        mc7star.style.position="absolute";
        mc7star.style.bottom="52.5%";
        mc7star.style.right="10%";
        let mc7cnt=document.createElement("p");
        mc7div.appendChild(mc7cnt);
        mc7cnt.innerHTML="Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU). The film was directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, and it stars Chadwick Boseman as T'Challa / Black Panther alongside Michael B. Jordan, Lupita Nyong'o, Danai Gurira, Martin Freeman, Daniel Kaluuya, Letitia Wright, Winston Duke, Sterling K. Brown, Angela Bassett, Forest Whitaker, and Andy Serkis. In Black Panther, T'Challa is crowned king of Wakanda following his father's death, but he is challenged by Killmonger (Jordan), who plans to abandon the country's isolationist policies and begin a global revolution. "; 
        mc7cnt.style.padding="20px"
        mc7cnt.style.textAlign="justify"
        let mc7watch=document.createElement("button");
        mc7watch.innerHTML="Watch";
        mc7div.appendChild(mc7watch);
        mc7watch.style.width="45%";
        mc7watch.style.height="40px";
        mc7watch.style.border="none";
        mc7watch.style.borderRadius="10px";
        mc7watch.style.backgroundColor="yellow";
        mc7watch.style.color="black";
        mc7watch.style.marginLeft="5%";
        mc7watch.addEventListener("click" , seen1);
        function seen1(){
            mc7img.style.display="none";
            mc7star.style.display="none"
            mc7cnt.style.marginTop="100px"
            let mc7vid=document.createElement("video");
            mc7div.appendChild(mc7vid);
            mc7vid.src="./panther.mp4";
            mc7vid.autoplay="true";
            mc7vid.muted="false";
            mc7vid.setAttribute("width","100%");
            mc7vid.setAttribute("controls","controls");
            mc7vid.style.position="absolute";
            mc7vid.style.top="0px"
            mc7vid.style.left="0"
            
        }
        let mc7down=document.createElement("button");
        mc7down.innerHTML="Download";
        mc7div.appendChild(mc7down);
        mc7down.style.width="45%";
        mc7down.style.height="40px";
        mc7down.style.border="none";
        mc7down.style.borderRadius="10px";
        mc7down.style.backgroundColor="black";
        mc7down.style.color="yellow";
        mc7down.style.border="1px solid yellow";
        mc7down.style.marginLeft="2%";
        let back=document.createElement("img");
        mc7div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
            moviecollection.style.display="block";
            mc7div.style.display="none"
            filter.style.display="flex"
        }
    }
    let popmarvelc1=document.querySelector("#pmar-1");
   popmarvelc1.addEventListener("click",pcard1);
    function pcard1(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let pc1div=document.createElement("div");
        apped.appendChild(pc1div);
        pc1div.style.zIndex="1";
        pc1div.style.backgroundColor="black";
        pc1div.style.color="white";
        pc1div.style.position="relative";
        let pc1img=document.createElement("img");  
        pc1div.appendChild(pc1img);
        pc1img.src="https://www.themoviedb.org/t/p/original/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg";
        pc1img.style.width="100%";
        pc1img.style.height="400px";
         let pc1title=document.createElement("h4");
         pc1div.appendChild(pc1title);
         pc1title.innerHTML="Thor";  
         pc1title.style.padding="10px";
         pc1title.style.fontSize="2.4em";
       let pc1mname=document.createElement("h6");
        pc1div.appendChild(pc1mname);
        pc1mname.innerHTML="English";
        pc1mname.style.paddingLeft="10px";
        pc1mname.style.paddingTop="-10px";
        pc1mname.style.fontSize="1.2em"
        let pc1star=document.createElement("h5");
        pc1div.appendChild(pc1star);
        pc1star.innerHTML="⭐ 4.4/5";
        pc1star.style.paddingLeft="10px";
        pc1star.style.position="absolute";
        pc1star.style.bottom="52.5%";
        pc1star.style.right="10%";
        let pc1cnt=document.createElement("p");
        pc1div.appendChild(pc1cnt);
        pc1cnt.innerHTML="Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the fourth film in the Marvel Cinematic Universe (MCU). It was directed by Kenneth Branagh, written by the writing team of Ashley Edward Miller and Zack Stentz along with Don Payne, and stars Chris Hemsworth as the title character alongside Natalie Portman, Tom Hiddleston, Stellan Skarsgård, Kat Dennings, Clark Gregg, Colm Feore, Ray Stevenson, Idris Elba, Jaimie Alexander, Rene Russo, and Anthony Hopkins. After reigniting a dormant war, Thor is banished from Asgard to Earth, stripped of his powers and his hammer Mjölnir. As his brother Loki (Hiddleston) plots to take the Asgardian throne, Thor must prove himself worthy."; 
        pc1cnt.style.padding="20px"
        pc1cnt.style.textAlign="justify"
        let pc1watch=document.createElement("button");
        pc1watch.innerHTML="Watch";
        pc1div.appendChild(pc1watch);
        pc1watch.style.width="45%";
        pc1watch.style.height="40px";
        pc1watch.style.border="none";
        pc1watch.style.borderRadius="10px";
        pc1watch.style.backgroundColor="yellow";
        pc1watch.style.color="black";
        pc1watch.style.marginLeft="5%";
        pc1watch.addEventListener("click" , seen1);
        function seen1(){
            pc1img.style.display="none";
            pc1star.style.display="none"
            pc1cnt.style.marginTop="100px"
            let pc1vid=document.createElement("video");
            pc1div.appendChild(pc1vid);
            pc1vid.src="./thor.mp4";
            pc1vid.autoplay="true";
            pc1vid.muted="false";
            pc1vid.setAttribute("width","100%");
            pc1vid.setAttribute("controls","controls");
            pc1vid.style.position="absolute";
            pc1vid.style.top="0px"
            pc1vid.style.left="0"
            
        }
        let pc1down=document.createElement("button");
        pc1down.innerHTML="Download";
        pc1div.appendChild(pc1down);
        pc1down.style.width="45%";
        pc1down.style.height="40px";
        pc1down.style.border="none";
        pc1down.style.borderRadius="10px";
        pc1down.style.backgroundColor="black";
        pc1down.style.color="yellow";
        pc1down.style.border="1px solid yellow";
        pc1down.style.marginLeft="2%";
        let back=document.createElement("img");
        pc1div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
           moviecollection.style.display="block";
            pc1div.style.display="none"
            filter.style.display="flex"
        }
    }
    let popmarvelc2=document.querySelector("#pmar-2");
   popmarvelc2.addEventListener("click",pcard2);
    function pcard2(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let pc2div=document.createElement("div");
        apped.appendChild(pc2div);
        pc2div.style.zIndex="1";
        pc2div.style.backgroundColor="black";
        pc2div.style.color="white";
        pc2div.style.position="relative";
        let pc2img=document.createElement("img");  
        pc2div.appendChild(pc2img);
        pc2img.src="https://filmyhotspot.com/wp-content/uploads/2021/01/Venom-2-poster-e1619683611557-865x1024.jpg";
        pc2img.style.width="100%";
        pc2img.style.height="400px";
         let pc2title=document.createElement("h4");
         pc2div.appendChild(pc2title);
         pc2title.innerHTML="Venom";  
         pc2title.style.padding="10px";
         pc2title.style.fontSize="2.4em";
       let pc2mname=document.createElement("h6");
        pc2div.appendChild(pc2mname);
        pc2mname.innerHTML="English";
        pc2mname.style.paddingLeft="10px";
        pc2mname.style.paddingTop="-10px";
        pc2mname.style.fontSize="1.2em"
        let pc2star=document.createElement("h5");
        pc2div.appendChild(pc2star);
        pc2star.innerHTML="⭐ 4.2/5";
        pc2star.style.paddingLeft="10px";
        pc2star.style.position="absolute";
        pc2star.style.bottom="52.5%";
        pc2star.style.right="10%";
        let pc2cnt=document.createElement("p");
        pc2div.appendChild(pc2cnt);
        pc2cnt.innerHTML="Venom is a 2018 American superhero film featuring the Marvel Comics character of the same name, produced by Columbia Pictures in association with Marvel[5] and Tencent Pictures, and distributed by Sony Pictures Releasing. It is the first film in Sony's Spider-Man Universe (SSU) and is directed by Ruben Fleischer from a screenplay by Jeff Pinkner, Scott Rosenberg, and Kelly Marcel. It stars Tom Hardy as Eddie Brock and Venom alongside Michelle Williams, Riz Ahmed, Scott Haze, and Reid Scott. In the film, struggling journalist Brock gains superpowers after becoming the host of an alien symbiote, Venom, whose species plans to invade Earth. "; 
        pc2cnt.style.padding="20px"
        pc2cnt.style.textAlign="justify"
        let pc2watch=document.createElement("button");
        pc2watch.innerHTML="Watch";
        pc2div.appendChild(pc2watch);
        pc2watch.style.width="45%";
        pc2watch.style.height="40px";
        pc2watch.style.border="none";
        pc2watch.style.borderRadius="10px";
        pc2watch.style.backgroundColor="yellow";
        pc2watch.style.color="black";
        pc2watch.style.marginLeft="5%";
        pc2watch.addEventListener("click" , seen1);
        function seen1(){
            pc2img.style.display="none";
            pc2star.style.display="none"
            pc2cnt.style.marginTop="100px"
            let pc2vid=document.createElement("video");
            pc2div.appendChild(pc2vid);
            pc2vid.src="./venom.mp4";
            pc2vid.autoplay="true";
            pc2vid.muted="false";
            pc2vid.setAttribute("width","100%");
            pc2vid.setAttribute("controls","controls");
            pc2vid.style.position="absolute";
            pc2vid.style.top="0px"
            pc2vid.style.left="0"
            
        }
        let pc2down=document.createElement("button");
        pc2down.innerHTML="Download";
        pc2div.appendChild(pc2down);
        pc2down.style.width="45%";
        pc2down.style.height="40px";
        pc2down.style.border="none";
        pc2down.style.borderRadius="10px";
        pc2down.style.backgroundColor="black";
        pc2down.style.color="yellow";
        pc2down.style.border="1px solid yellow";
        pc2down.style.marginLeft="2%";
        let back=document.createElement("img");
        pc2div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
           moviecollection.style.display="block";
            pc2div.style.display="none";
            filter.style.display="flex"
           
        }
    }
    let popmarvelc3=document.querySelector("#pmar-3");
   popmarvelc3.addEventListener("click",pcard3);
    function pcard3(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let pc3div=document.createElement("div");
        apped.appendChild(pc3div);
        pc3div.style.zIndex="1";
        pc3div.style.backgroundColor="black";
        pc3div.style.color="white";
        pc3div.style.position="relative";
        let pc3img=document.createElement("img");  
        pc3div.appendChild(pc3img);
        pc3img.src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810";
        pc3img.style.width="100%";
        pc3img.style.height="400px";
         let pc3title=document.createElement("h4");
         pc3div.appendChild(pc3title);
         pc3title.innerHTML="Avenges End Game";  
         pc3title.style.padding="10px";
         pc3title.style.fontSize="2.4em";
       let pc3mname=document.createElement("h6");
        pc3div.appendChild(pc3mname);
        pc3mname.innerHTML="English";
        pc3mname.style.paddingLeft="10px";
        pc3mname.style.paddingTop="-10px";
        pc3mname.style.fontSize="1.2em"
        let pc3star=document.createElement("h5");
        pc3div.appendChild(pc3star);
        pc3star.innerHTML="⭐ 4.9/5";
        pc3star.style.paddingLeft="10px";
        pc3star.style.position="absolute";
        pc3star.style.bottom="52.5%";
        pc3star.style.right="10%";
        let pc3cnt=document.createElement("p");
        pc3div.appendChild(pc3cnt);
        pc3cnt.innerHTML="Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, and Josh Brolin. In the film, the surviving members of the Avengers and their allies attempt to reverse the destruction caused by Thanos in Infinity War. "; 
        pc3cnt.style.padding="20px"
        pc3cnt.style.textAlign="justify"
        let pc3watch=document.createElement("button");
        pc3watch.innerHTML="Watch";
        pc3div.appendChild(pc3watch);
        pc3watch.style.width="45%";
        pc3watch.style.height="40px";
        pc3watch.style.border="none";
        pc3watch.style.borderRadius="10px";
        pc3watch.style.backgroundColor="yellow";
        pc3watch.style.color="black";
        pc3watch.style.marginLeft="5%";
        pc3watch.addEventListener("click" , seen1);
        function seen1(){
            pc3img.style.display="none";
            pc3star.style.display="none"
            pc3cnt.style.marginTop="100px"
            let pc3vid=document.createElement("video");
            pc3div.appendChild(pc3vid);
            pc3vid.src="./endgame.mp4";
            pc3vid.autoplay="true";
            pc3vid.muted="false";
            pc3vid.setAttribute("width","100%");
            pc3vid.setAttribute("controls","controls");
            pc3vid.style.position="absolute";
            pc3vid.style.top="0px"
            pc3vid.style.left="0"
            
        }
        let pc3down=document.createElement("button");
        pc3down.innerHTML="Download";
        pc3div.appendChild(pc3down);
        pc3down.style.width="45%";
        pc3down.style.height="40px";
        pc3down.style.border="none";
        pc3down.style.borderRadius="10px";
        pc3down.style.backgroundColor="black";
        pc3down.style.color="yellow";
        pc3down.style.border="1px solid yellow";
        pc3down.style.marginLeft="2%";
        let back=document.createElement("img");
        pc3div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
           moviecollection.style.display="block";
            pc3div.style.display="none"
            filter.style.display="flex"
        }
    }
    let popmarvelc4=document.querySelector("#pmar-4");
   popmarvelc4.addEventListener("click",pcard4);
    function pcard4(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let pc4div=document.createElement("div");
        apped.appendChild(pc4div);
        pc4div.style.zIndex="1";
        pc4div.style.backgroundColor="black";
        pc4div.style.color="white";
        pc4div.style.position="relative";
        let pc4img=document.createElement("img");  
        pc4div.appendChild(pc4img);
        pc4img.src="https://play-lh.googleusercontent.com/MqXH34arO8Yb0Wm8UVw99eknd1a4Oltj959fls29wlfo9xHg5oKdi9RlgliORSQGSltklw";
        pc4img.style.width="100%";
        pc4img.style.height="400px";
         let pc4title=document.createElement("h4");
         pc4div.appendChild(pc4title);
         pc4title.innerHTML="Doctor Strange";  
         pc4title.style.padding="10px";
         pc4title.style.fontSize="2.4em";
       let pc4mname=document.createElement("h6");
        pc4div.appendChild(pc4mname);
        pc4mname.innerHTML="English";
        pc4mname.style.paddingLeft="10px";
        pc4mname.style.paddingTop="-10px";
        pc4mname.style.fontSize="1.2em"
        let pc4star=document.createElement("h5");
        pc4div.appendChild(pc4star);
        pc4star.innerHTML="⭐ 4.2/5";
        pc4star.style.paddingLeft="10px";
        pc4star.style.position="absolute";
        pc4star.style.bottom="52.5%";
        pc4star.style.right="6%";
        let pc4cnt=document.createElement("p");
        pc4div.appendChild(pc4cnt);
        pc4cnt.innerHTML="Doctor Strange is a 2016 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 14th film in the Marvel Cinematic Universe (MCU). The film was directed by Scott Derrickson from a screenplay he wrote with Jon Spaihts and C. Robert Cargill, and stars Benedict Cumberbatch as neurosurgeon Stephen Strange along with Chiwetel Ejiofor, Rachel McAdams, Benedict Wong, Michael Stuhlbarg, Benjamin Bratt, Scott Adkins, Mads Mikkelsen, and Tilda Swinton. In the film, Strange learns the mystic arts after a career-ending car crash. "; 
        pc4cnt.style.padding="20px"
        pc4cnt.style.textAlign="justify"
        let pc4watch=document.createElement("button");
        pc4watch.innerHTML="Watch";
        pc4div.appendChild(pc4watch);
        pc4watch.style.width="45%";
        pc4watch.style.height="40px";
        pc4watch.style.border="none";
        pc4watch.style.borderRadius="10px";
        pc4watch.style.backgroundColor="yellow";
        pc4watch.style.color="black";
        pc4watch.style.marginLeft="5%";
        pc4watch.addEventListener("click" , seen1);
        function seen1(){
            pc4img.style.display="none";
            pc4star.style.display="none"
            pc4cnt.style.marginTop="100px"
            let pc4vid=document.createElement("video");
            pc4div.appendChild(pc4vid);
            pc4vid.src="./doctorstrange.mp4";
            pc4vid.autoplay="true";
            pc4vid.muted="false";
            pc4vid.setAttribute("width","100%");
            pc4vid.setAttribute("controls","controls");
            pc4vid.style.position="absolute";
            pc4vid.style.top="0px"
            pc4vid.style.left="0"
            
        }
        let pc4down=document.createElement("button");
        pc4down.innerHTML="Download";
        pc4div.appendChild(pc4down);
        pc4down.style.width="45%";
        pc4down.style.height="40px";
        pc4down.style.border="none";
        pc4down.style.borderRadius="10px";
        pc4down.style.backgroundColor="black";
        pc4down.style.color="yellow";
        pc4down.style.border="1px solid yellow";
        pc4down.style.marginLeft="2%";
        let back=document.createElement("img");
        pc4div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
        moviecollection.style.display="block";
            pc4div.style.display="none"
            filter.style.display="flex"
        }
    }
    let popmarvelc5=document.querySelector("#pmar-5");
   popmarvelc5.addEventListener("click",pcard5);
    function pcard5(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let pc5div=document.createElement("div");
        apped.appendChild(pc5div);
        pc5div.style.zIndex="1";
        pc5div.style.backgroundColor="black";
        pc5div.style.color="white";
        pc5div.style.position="relative";
        let pc5img=document.createElement("img");  
        pc5div.appendChild(pc5img);
        pc5img.src="https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg";
        pc5img.style.width="100%";
        pc5img.style.height="400px";
         let pc5title=document.createElement("h4");
         pc5div.appendChild(pc5title);
         pc5title.innerHTML="Ant Man";  
         pc5title.style.padding="10px";
         pc5title.style.fontSize="2.4em";
       let pc5mname=document.createElement("h6");
        pc5div.appendChild(pc5mname);
        pc5mname.innerHTML="English";
        pc5mname.style.paddingLeft="10px";
        pc5mname.style.paddingTop="-10px";
        pc5mname.style.fontSize="1.2em"
        let pc5star=document.createElement("h5");
        pc5div.appendChild(pc5star);
        pc5star.innerHTML="⭐ 4.0/5";
        pc5star.style.paddingLeft="10px";
        pc5star.style.position="absolute";
        pc5star.style.bottom="52.5%";
        pc5star.style.right="6%";
        let pc5cnt=document.createElement("p");
        pc5div.appendChild(pc5cnt);
        pc5cnt.innerHTML="Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 12th film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed from a screenplay by the writing teams of Edgar Wright and Joe Cornish, and Adam McKay and Paul Rudd. It stars Rudd as Scott Lang / Ant-Man alongside Evangeline Lilly, Corey Stoll, Bobby Cannavale, Michael Peña, Tip T.I. Harris, Anthony Mackie, Wood Harris, Judy Greer, Abby Ryder Fortson, David Dastmalchian, and Michael Douglas as Hank Pym. In the film, Lang must help defend Pym's Ant-Man shrinking technology and plot a heist with worldwide ramification";
        pc5cnt.style.padding="20px"
        pc5cnt.style.textAlign="justify"
        let pc5watch=document.createElement("button");
        pc5watch.innerHTML="Watch";
        pc5div.appendChild(pc5watch);
        pc5watch.style.width="45%";
        pc5watch.style.height="40px";
        pc5watch.style.border="none";
        pc5watch.style.borderRadius="10px";
        pc5watch.style.backgroundColor="yellow";
        pc5watch.style.color="black";
        pc5watch.style.marginLeft="5%";
        pc5watch.addEventListener("click" , seen1);
        function seen1(){
            pc5img.style.display="none";
            pc5star.style.display="none"
            pc5cnt.style.marginTop="100px"
            let pc5vid=document.createElement("video");
            pc5div.appendChild(pc5vid);
            pc5vid.src="./antman.mp4";
            pc5vid.autoplay="true";
            pc5vid.muted="false";
            pc5vid.setAttribute("width","100%");
            pc5vid.setAttribute("controls","controls");
            pc5vid.style.position="absolute";
            pc5vid.style.top="0px"
            pc5vid.style.left="0"
            
        }
        let pc5down=document.createElement("button");
        pc5down.innerHTML="Download";
        pc5div.appendChild(pc5down);
        pc5down.style.width="45%";
        pc5down.style.height="40px";
        pc5down.style.border="none";
        pc5down.style.borderRadius="10px";
        pc5down.style.backgroundColor="black";
        pc5down.style.color="yellow";
        pc5down.style.border="1px solid yellow";
        pc5down.style.marginLeft="2%";
        let back=document.createElement("img");
        pc5div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
            moviecollection.style.display="block";
            pc5div.style.display="none"
            filter.style.display="flex"
        }
    }
    let popmarvelc6=document.querySelector("#pmar-6");
   popmarvelc6.addEventListener("click",pcard6);
    function pcard6(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let pc6div=document.createElement("div");
        apped.appendChild(pc6div);
        pc6div.style.zIndex="1";
        pc6div.style.backgroundColor="black";
        pc6div.style.color="white";
        pc6div.style.position="relative";
        let pc6img=document.createElement("img");  
        pc6div.appendChild(pc6img);
        pc6img.src="https://i0.wp.com/www.heyuguys.com/images/2013/03/The-Wolverine-Poster-.jpg?fit=648%2C960&ssl=1";
        pc6img.style.width="100%";
        pc6img.style.height="400px";
         let pc6title=document.createElement("h4");
         pc6div.appendChild(pc6title);
         pc6title.innerHTML="Wolverine";  
         pc6title.style.padding="10px";
         pc6title.style.fontSize="2.4em";
       let pc6mname=document.createElement("h6");
        pc6div.appendChild(pc6mname);
        pc6mname.innerHTML="English";
        pc6mname.style.paddingLeft="10px";
        pc6mname.style.paddingTop="-10px";
        pc6mname.style.fontSize="1.2em"
        let pc6star=document.createElement("h5");
        pc6div.appendChild(pc6star);
        pc6star.innerHTML="⭐ 4.1/5";
        pc6star.style.paddingLeft="10px";
        pc6star.style.position="absolute";
        pc6star.style.bottom="52.5%";
        pc6star.style.right="6%";
        let pc6cnt=document.createElement("p");
        pc6div.appendChild(pc6cnt);
        pc6cnt.innerHTML="The Wolverine[b] is a 2013 superhero film featuring the Marvel Comics character Wolverine. It is the sixth installment in the X-Men film series, the second installment in the trilogy of Wolverine films after X-Men Origins: Wolverine (2009), and a spin-off/sequel to X-Men: The Last Stand (2006). Directed by James Mangold from a screenplay written by Scott Frank and Mark Bomback, based on the 1982 limited series Wolverine by Chris Claremont and Frank Miller, it stars Hugh Jackman as Logan / Wolverine, alongside Rila Fukushima, Tao Okamoto, Hiroyuki Sanada, Famke Janssen, and Will Yun Lee. Following the events of X-Men: The Last Stand, Logan travels to Japan, where he engages an old acquaintance in a struggle that has lasting consequences. Stripped of his healing powers, Wolverine must battle deadly samurai while struggling with guilt over Jean Grey's death. ";
        pc6cnt.style.padding="20px"
        pc6cnt.style.textAlign="justify"
        let pc6watch=document.createElement("button");
        pc6watch.innerHTML="Watch";
        pc6div.appendChild(pc6watch);
        pc6watch.style.width="45%";
        pc6watch.style.height="40px";
        pc6watch.style.border="none";
        pc6watch.style.borderRadius="10px";
        pc6watch.style.backgroundColor="yellow";
        pc6watch.style.color="black";
        pc6watch.style.marginLeft="5%";
        pc6watch.addEventListener("click" , seen1);
        function seen1(){
            pc6img.style.display="none";
            pc6star.style.display="none"
            pc6cnt.style.marginTop="100px"
            let pc6vid=document.createElement("video");
            pc6div.appendChild(pc6vid);
            pc6vid.src="./wolverine.mp4";
            pc6vid.autoplay="true";
            pc6vid.muted="false";
            pc6vid.setAttribute("width","100%");
            pc6vid.setAttribute("controls","controls");
            pc6vid.style.position="absolute";
            pc6vid.style.top="0px"
            pc6vid.style.left="0"
            
        }
        let pc6down=document.createElement("button");
        pc6down.innerHTML="Download";
        pc6div.appendChild(pc6down);
        pc6down.style.width="45%";
        pc6down.style.height="40px";
        pc6down.style.border="none";
        pc6down.style.borderRadius="10px";
        pc6down.style.backgroundColor="black";
        pc6down.style.color="yellow";
        pc6down.style.border="1px solid yellow";
        pc6down.style.marginLeft="2%";
        let back=document.createElement("img");
        pc6div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
            moviecollection.style.display="block";
            pc6div.style.display="none"
            filter.style.display="flex"
        }
    }
    let popmarvelc7=document.querySelector("#pmar-7");
   popmarvelc7.addEventListener("click",pcard7);
    function pcard7(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let pc7div=document.createElement("div");
        apped.appendChild(pc7div);
        pc7div.style.zIndex="1";
        pc7div.style.backgroundColor="black";
        pc7div.style.color="white";
        pc7div.style.position="relative";
        let pc7img=document.createElement("img");  
        pc7div.appendChild(pc7img);
        pc7img.src="https://i.scdn.co/image/ab67616d0000b2731a63855946233797a46a1260";
        pc7img.style.width="100%";
        pc7img.style.height="400px";
         let pc7title=document.createElement("h4");
         pc7div.appendChild(pc7title);
         pc7title.innerHTML="Captain America";  
         pc7title.style.padding="10px";
         pc7title.style.fontSize="2.4em";
       let pc7mname=document.createElement("h6");
        pc7div.appendChild(pc7mname);
        pc7mname.innerHTML="English";
        pc7mname.style.paddingLeft="10px";
        pc7mname.style.paddingTop="-10px";
        pc7mname.style.fontSize="1.2em"
        let pc7star=document.createElement("h5");
        pc7div.appendChild(pc7star);
        pc7star.innerHTML="⭐ 4.5/5";
        pc7star.style.paddingLeft="10px";
        pc7star.style.position="absolute";
        pc7star.style.bottom="52.5%";
        pc7star.style.right="6%";
        let pc7cnt=document.createElement("p");
        pc7div.appendChild(pc7cnt);
        pc7cnt.innerHTML="Captain America: The First Avenger is a 2011 American superhero film based on the Marvel Comics character Captain America. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the fifth film in the Marvel Cinematic Universe (MCU). The film was directed by Joe Johnston, written by Christopher Markus and Stephen McFeely, and stars Chris Evans as Steve Rogers / Captain America alongside Tommy Lee Jones, Hugo Weaving, Hayley Atwell, Sebastian Stan, Dominic Cooper, Toby Jones, Neal McDonough, Derek Luke, and Stanley Tucci. During World War II, Steve Rogers, a frail man, is transformed into the super-soldier Captain America and must stop the Red Skull (Weaving) from using the Tesseract as an energy source for world domination. ";
        pc7cnt.style.padding="20px"
        pc7cnt.style.textAlign="justify"
        let pc7watch=document.createElement("button");
        pc7watch.innerHTML="Watch";
        pc7div.appendChild(pc7watch);
        pc7watch.style.width="45%";
        pc7watch.style.height="40px";
        pc7watch.style.border="none";
        pc7watch.style.borderRadius="10px";
        pc7watch.style.backgroundColor="yellow";
        pc7watch.style.color="black";
        pc7watch.style.marginLeft="5%";
        pc7watch.addEventListener("click" , seen1);
        function seen1(){
            pc7img.style.display="none";
            pc7star.style.display="none"
            pc7cnt.style.marginTop="100px"
            let pc7vid=document.createElement("video");
            pc7div.appendChild(pc7vid);
            pc7vid.src="./captainamerica.mp4";
            pc7vid.autoplay="true";
            pc7vid.muted="false";
            pc7vid.setAttribute("width","100%");
            pc7vid.setAttribute("controls","controls");
            pc7vid.style.position="absolute";
            pc7vid.style.top="0px"
            pc7vid.style.left="0"
            
        }
        let pc7down=document.createElement("button");
        pc7down.innerHTML="Download";
        pc7div.appendChild(pc7down);
        pc7down.style.width="45%";
        pc7down.style.height="40px";
        pc7down.style.border="none";
        pc7down.style.borderRadius="10px";
        pc7down.style.backgroundColor="black";
        pc7down.style.color="yellow";
        pc7down.style.border="1px solid yellow";
        pc7down.style.marginLeft="2%";
        let back=document.createElement("img");
        pc7div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
            moviecollection.style.display="block";
            pc7div.style.display="none"
            filter.style.display="flex"
        }
    }
    let recmarvelc1=document.querySelector("#rmar-1");
   recmarvelc1.addEventListener("click",rmcard1);
    function rmcard1(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let rmc1div=document.createElement("div");
        apped.appendChild(rmc1div);
        rmc1div.style.zIndex="1";
        rmc1div.style.backgroundColor="black";
        rmc1div.style.color="white";
        rmc1div.style.position="relative";
        let rmc1img=document.createElement("img");  
        rmc1div.appendChild(rmc1img);
        rmc1img.src="https://static.wikia.nocookie.net/ironman/images/d/df/P3546118_v_v8_af.jpg/revision/latest?cb=20191202171556";
        rmc1img.style.width="100%";
        rmc1img.style.height="400px";
         let rmc1title=document.createElement("h4");
         rmc1div.appendChild(rmc1title);
         rmc1title.innerHTML="Iron Man -2";  
         rmc1title.style.padding="10px";
         rmc1title.style.fontSize="2.4em";
       let rmc1mname=document.createElement("h6");
        rmc1div.appendChild(rmc1mname);
        rmc1mname.innerHTML="English";
        rmc1mname.style.paddingLeft="10px";
        rmc1mname.style.paddingTop="-10px";
        rmc1mname.style.fontSize="1.2em"
        let rmc1star=document.createElement("h5");
        rmc1div.appendChild(rmc1star);
        rmc1star.innerHTML="⭐ 4.5/5";
        rmc1star.style.paddingLeft="10px";
        rmc1star.style.position="absolute";
        rmc1star.style.bottom="52.5%";
        rmc1star.style.right="6%";
        let rmc1cnt=document.createElement("p");
        rmc1div.appendChild(rmc1cnt);
        rmc1cnt.innerHTML="Iron Man 2 is a 2010 American superhero film based on the Marvel Comics character Iron Man. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the sequel to Iron Man (2008) and the third film in the Marvel Cinematic Universe (MCU). Directed by Jon Favreau and written by Justin Theroux, the film stars Robert Downey Jr. as Tony Stark / Iron Man alongside Gwyneth Paltrow, Don Cheadle, Scarlett Johansson, Sam Rockwell, Mickey Rourke, and Samuel L. Jackson. Six months after Iron Man, Tony Stark resists calls from the United States government to hand over the Iron Man technology, which is causing his declining health. Meanwhile, Russian scientist Ivan Vanko (Rourke) uses his own version of the technology to pursue a vendetta against the Stark family. ";
        rmc1cnt.style.padding="20px"
        rmc1cnt.style.textAlign="justify"
        let rmc1watch=document.createElement("button");
        rmc1watch.innerHTML="Watch";
        rmc1div.appendChild(rmc1watch);
        rmc1watch.style.width="45%";
        rmc1watch.style.height="40px";
        rmc1watch.style.border="none";
        rmc1watch.style.borderRadius="10px";
        rmc1watch.style.backgroundColor="yellow";
        rmc1watch.style.color="black";
        rmc1watch.style.marginLeft="5%";
        rmc1watch.addEventListener("click" , seen1);
        function seen1(){
            rmc1img.style.display="none";
            rmc1star.style.display="none"
            rmc1cnt.style.marginTop="100px"
            let rmc1vid=document.createElement("video");
            rmc1div.appendChild(rmc1vid);
            rmc1vid.src="./ironman2.mp4";
            rmc1vid.autoplay="true";
            rmc1vid.muted="false";
            rmc1vid.setAttribute("width","100%");
            rmc1vid.setAttribute("controls","controls");
            rmc1vid.style.position="absolute";
            rmc1vid.style.top="0px"
            rmc1vid.style.left="0"
            
        }
        let rmc1down=document.createElement("button");
        rmc1down.innerHTML="Download";
        rmc1div.appendChild(rmc1down);
        rmc1down.style.width="45%";
        rmc1down.style.height="40px";
        rmc1down.style.border="none";
        rmc1down.style.borderRadius="10px";
        rmc1down.style.backgroundColor="black";
        rmc1down.style.color="yellow";
        rmc1down.style.border="1px solid yellow";
        rmc1down.style.marginLeft="2%";
        let back=document.createElement("img");
        rmc1div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
           moviecollection.style.display="block";
            rmc1div.style.display="none"
            filter.style.display="flex"
        }
    }
    let recmarvelc2=document.querySelector("#rmar-2");
   recmarvelc2.addEventListener("click",rmcard2);
    function rmcard2(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let rmc2div=document.createElement("div");
        apped.appendChild(rmc2div);
        rmc2div.style.zIndex="1";
        rmc2div.style.backgroundColor="black";
        rmc2div.style.color="white";
        rmc2div.style.position="relative";
        let rmc2img=document.createElement("img");  
        rmc2div.appendChild(rmc2img);
        rmc2img.src="https://m.media-amazon.com/images/I/91JfrNdI9kL._SL1500_.jpg";
        rmc2img.style.width="100%";
        rmc2img.style.height="400px";
         let rmc2title=document.createElement("h4");
         rmc2div.appendChild(rmc2title);
         rmc2title.innerHTML="Amazing SpiderMan";  
         rmc2title.style.padding="10px";
         rmc2title.style.fontSize="2.4em";
       let rmc2mname=document.createElement("h6");
        rmc2div.appendChild(rmc2mname);
        rmc2mname.innerHTML="English";
        rmc2mname.style.paddingLeft="10px";
        rmc2mname.style.paddingTop="-10px";
        rmc2mname.style.fontSize="1.2em"
        let rmc2star=document.createElement("h5");
        rmc2div.appendChild(rmc2star);
        rmc2star.innerHTML="⭐ 4.8/5";
        rmc2star.style.paddingLeft="10px";
        rmc2star.style.position="absolute";
        rmc2star.style.bottom="52.5%";
        rmc2star.style.right="6%";
        let rmc2cnt=document.createElement("p");
        rmc2div.appendChild(rmc2cnt);
        rmc2cnt.innerHTML="The Amazing Spider-Man is a 2012 American superhero film based on the Marvel Comics character Spider-Man and sharing the title of the character's longest-running comic book series of the same title. It is the fourth theatrical Spider-Man film produced by Columbia Pictures and Marvel Entertainment, a reboot of the series following Sam Raimi's 2002–2007 Spider-Man trilogy, and the first of the two The Amazing Spider-Man films. The film was directed by Marc Webb and written by James Vanderbilt, Alvin Sargent and Steve Kloves from a story by Vanderbilt, and stars Andrew Garfield as Peter Parker / Spider-Man alongside Emma Stone, Rhys Ifans, Denis Leary, Campbell Scott, Irrfan Khan, Martin Sheen, and Sally Field. In the film, after Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of the Lizard.  ";
        rmc2cnt.style.padding="20px"
        rmc2cnt.style.textAlign="justify"
        let rmc2watch=document.createElement("button");
        rmc2watch.innerHTML="Watch";
        rmc2div.appendChild(rmc2watch);
        rmc2watch.style.width="45%";
        rmc2watch.style.height="40px";
        rmc2watch.style.border="none";
        rmc2watch.style.borderRadius="10px";
        rmc2watch.style.backgroundColor="yellow";
        rmc2watch.style.color="black";
        rmc2watch.style.marginLeft="5%";
        rmc2watch.addEventListener("click" , seen1);
        function seen1(){
            rmc2img.style.display="none";
            rmc2star.style.display="none"
            rmc2cnt.style.marginTop="100px"
            let rmc2vid=document.createElement("video");
            rmc2div.appendChild(rmc2vid);
            rmc2vid.src="./amazing.mp4";
            rmc2vid.autoplay="true";
            rmc2vid.muted="false";
            rmc2vid.setAttribute("width","100%");
            rmc2vid.setAttribute("controls","controls");
            rmc2vid.style.position="absolute";
            rmc2vid.style.top="0px"
            rmc2vid.style.left="0"
            
        }
        let rmc2down=document.createElement("button");
        rmc2down.innerHTML="Download";
        rmc2div.appendChild(rmc2down);
        rmc2down.style.width="45%";
        rmc2down.style.height="40px";
        rmc2down.style.border="none";
        rmc2down.style.borderRadius="10px";
        rmc2down.style.backgroundColor="black";
        rmc2down.style.color="yellow";
        rmc2down.style.border="1px solid yellow";
        rmc2down.style.marginLeft="2%";
        let back=document.createElement("img");
        rmc2div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
           moviecollection.style.display="block";
            rmc2div.style.display="none"
            filter.style.display="flex"
        }
    }
    let recmarvelc3=document.querySelector("#rmar-3");
   recmarvelc3.addEventListener("click",rmcard3);
    function rmcard3(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let rmc3div=document.createElement("div");
        apped.appendChild(rmc3div);
        rmc3div.style.zIndex="1";
        rmc3div.style.backgroundColor="black";
        rmc3div.style.color="white";
        rmc3div.style.position="relative";
        let rmc3img=document.createElement("img");  
        rmc3div.appendChild(rmc3img);
        rmc3img.src="https://cdn.cdkeys.com/700x700/media/catalog/product/m/a/marvel_s_guardians_of_the_galaxy_deluxe_edition_pc_1.jpg";
        rmc3img.style.width="100%";
        rmc3img.style.height="400px";
         let rmc3title=document.createElement("h4");
         rmc3div.appendChild(rmc3title);
         rmc3title.innerHTML="Guardians Of Galaxy";  
         rmc3title.style.padding="10px";
         rmc3title.style.fontSize="2.4em";
       let rmc3mname=document.createElement("h6");
        rmc3div.appendChild(rmc3mname);
        rmc3mname.innerHTML="English";
        rmc3mname.style.paddingLeft="10px";
        rmc3mname.style.paddingTop="-10px";
        rmc3mname.style.fontSize="1.2em"
        let rmc3star=document.createElement("h5");
        rmc3div.appendChild(rmc3star);
        rmc3star.innerHTML="⭐ 4.4/5";
        rmc3star.style.paddingLeft="10px";
        rmc3star.style.position="absolute";
        rmc3star.style.bottom="52.5%";
        rmc3star.style.right="6%";
        let rmc3cnt=document.createElement("p");
        rmc3div.appendChild(rmc3cnt);
        rmc3cnt.innerHTML="Guardians of the Galaxy (retroactively referred to as Guardians of the Galaxy Vol. 1)[4][5] is a 2014 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 10th film in the Marvel Cinematic Universe (MCU). Directed by James Gunn, who wrote the screenplay with Nicole Perlman, it features an ensemble cast including Chris Pratt, Zoe Saldaña, Dave Bautista, Vin Diesel, and Bradley Cooper as the titular Guardians, along with Lee Pace, Michael Rooker, Karen Gillan, Djimon Hounsou, John C. Reilly, Glenn Close, and Benicio del Toro. In the film, Peter Quill and a group of extraterrestrial criminals go on the run after stealing a powerful artifact ";
        rmc3cnt.style.padding="20px"
        rmc3cnt.style.textAlign="justify"
        let rmc3watch=document.createElement("button");
        rmc3watch.innerHTML="Watch";
        rmc3div.appendChild(rmc3watch);
        rmc3watch.style.width="45%";
        rmc3watch.style.height="40px";
        rmc3watch.style.border="none";
        rmc3watch.style.borderRadius="10px";
        rmc3watch.style.backgroundColor="yellow";
        rmc3watch.style.color="black";
        rmc3watch.style.marginLeft="5%";
        rmc3watch.addEventListener("click" , seen1);
        function seen1(){
            rmc3img.style.display="none";
            rmc3star.style.display="none"
            rmc3cnt.style.marginTop="100px"
            let rmc3vid=document.createElement("video");
            rmc3div.appendChild(rmc3vid);
            rmc3vid.src="./galaxy.mp4";
            rmc3vid.autoplay="true";
            rmc3vid.muted="false";
            rmc3vid.setAttribute("width","100%");
            rmc3vid.setAttribute("controls","controls");
            rmc3vid.style.position="absolute";
            rmc3vid.style.top="0px"
            rmc3vid.style.left="0"
            
        }
        let rmc3down=document.createElement("button");
        rmc3down.innerHTML="Download";
        rmc3div.appendChild(rmc3down);
        rmc3down.style.width="45%";
        rmc3down.style.height="40px";
        rmc3down.style.border="none";
        rmc3down.style.borderRadius="10px";
        rmc3down.style.backgroundColor="black";
        rmc3down.style.color="yellow";
        rmc3down.style.border="1px solid yellow";
        rmc3down.style.marginLeft="2%";
        let back=document.createElement("img");
        rmc3div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
            moviecollection.style.display="block";
            rmc3div.style.display="none"
            filter.style.display="flex"
        }
    }
    let recmarvelc4=document.querySelector("#rmar-4");
   recmarvelc4.addEventListener("click",rmcard4);
    function rmcard4(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let rmc4div=document.createElement("div");
        apped.appendChild(rmc4div);
        rmc4div.style.zIndex="1";
        rmc4div.style.backgroundColor="black";
        rmc4div.style.color="white";
        rmc4div.style.position="relative";
        let rmc4img=document.createElement("img");  
        rmc4div.appendChild(rmc4img);
        rmc4img.src="https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_FMjpg_UX1000_.jpg";
        rmc4img.style.width="100%";
        rmc4img.style.height="400px";
         let rmc4title=document.createElement("h4");
         rmc4div.appendChild(rmc4title);
         rmc4title.innerHTML="Captain Marvel";  
         rmc4title.style.padding="10px";
         rmc4title.style.fontSize="2.4em";
       let rmc4mname=document.createElement("h6");
        rmc4div.appendChild(rmc4mname);
        rmc4mname.innerHTML="English";
        rmc4mname.style.paddingLeft="10px";
        rmc4mname.style.paddingTop="-10px";
        rmc4mname.style.fontSize="1.2em"
        let rmc4star=document.createElement("h5");
        rmc4div.appendChild(rmc4star);
        rmc4star.innerHTML="⭐ 4.2/5";
        rmc4star.style.paddingLeft="10px";
        rmc4star.style.position="absolute";
        rmc4star.style.bottom="52.5%";
        rmc4star.style.right="6%";
        let rmc4cnt=document.createElement("p");
        rmc4div.appendChild(rmc4cnt);
        rmc4cnt.innerHTML="Captain Marvel is a 2019 American superhero film based on Marvel Comics featuring the character Carol Danvers / Captain Marvel. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 21st film in the Marvel Cinematic Universe (MCU). The film was written and directed by Anna Boden and Ryan Fleck, with Geneva Robertson-Dworet also contributing to the screenplay. Brie Larson stars as Carol Danvers, alongside Samuel L. Jackson, Ben Mendelsohn, Djimon Hounsou, Lee Pace, Lashana Lynch, Gemma Chan, Annette Bening, Clark Gregg, and Jude Law. Set in 1995, the story follows Danvers as she becomes Captain Marvel after Earth is caught in the center of a galactic conflict between two alien civilizations.  ";
        rmc4cnt.style.padding="20px"
        rmc4cnt.style.textAlign="justify"
        let rmc4watch=document.createElement("button");
        rmc4watch.innerHTML="Watch";
        rmc4div.appendChild(rmc4watch);
        rmc4watch.style.width="45%";
        rmc4watch.style.height="40px";
        rmc4watch.style.border="none";
        rmc4watch.style.borderRadius="10px";
        rmc4watch.style.backgroundColor="yellow";
        rmc4watch.style.color="black";
        rmc4watch.style.marginLeft="5%";
        rmc4watch.addEventListener("click" , seen1);
        function seen1(){
            rmc4img.style.display="none";
            rmc4star.style.display="none"
            rmc4cnt.style.marginTop="100px"
            let rmc4vid=document.createElement("video");
            rmc4div.appendChild(rmc4vid);
            rmc4vid.src="./captain.mp4";
            rmc4vid.autoplay="true";
            rmc4vid.muted="false";
            rmc4vid.setAttribute("width","100%");
            rmc4vid.setAttribute("controls","controls");
            rmc4vid.style.position="absolute";
            rmc4vid.style.top="0px"
            rmc4vid.style.left="0"
            
        }
        let rmc4down=document.createElement("button");
        rmc4down.innerHTML="Download";
        rmc4div.appendChild(rmc4down);
        rmc4down.style.width="45%";
        rmc4down.style.height="40px";
        rmc4down.style.border="none";
        rmc4down.style.borderRadius="10px";
        rmc4down.style.backgroundColor="black";
        rmc4down.style.color="yellow";
        rmc4down.style.border="1px solid yellow";
        rmc4down.style.marginLeft="2%";
        let back=document.createElement("img");
        rmc4div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
            moviecollection.style.display="block";
            rmc4div.style.display="none"
            filter.style.display="flex"
        }
    }
    let recmarvelc5=document.querySelector("#rmar-5");
   recmarvelc5.addEventListener("click",rmcard5);
    function rmcard5(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let rmc5div=document.createElement("div");
        apped.appendChild(rmc5div);
        rmc5div.style.zIndex="1";
        rmc5div.style.backgroundColor="black";
        rmc5div.style.color="white";
        rmc5div.style.position="relative";
        let rmc5img=document.createElement("img");  
        rmc5div.appendChild(rmc5img);
        rmc5img.src="https://i.annihil.us/u/prod/marvel/i/mg/3/00/5151f0d51369a/clean.jpg";
        rmc5img.style.width="100%";
        rmc5img.style.height="400px";
         let rmc5title=document.createElement("h4");
         rmc5div.appendChild(rmc5title);
         rmc5title.innerHTML="Secret Invasion";  
         rmc5title.style.padding="10px";
         rmc5title.style.fontSize="2.4em";
       let rmc5mname=document.createElement("h6");
        rmc5div.appendChild(rmc5mname);
        rmc5mname.innerHTML="English";
        rmc5mname.style.paddingLeft="10px";
        rmc5mname.style.paddingTop="-10px";
        rmc5mname.style.fontSize="1.2em"
        let rmc5star=document.createElement("h5");
        rmc5div.appendChild(rmc5star);
        rmc5star.innerHTML="⭐ 4.2/5";
        rmc5star.style.paddingLeft="10px";
        rmc5star.style.position="absolute";
        rmc5star.style.bottom="46.5%";
        rmc5star.style.right="6%";
        let rmc5cnt=document.createElement("p");
        rmc5div.appendChild(rmc5cnt);
        rmc5cnt.innerHTML="Secret Invasion is a comic book crossover storyline that ran through a self-titled eight-issue limited series and several tie-in books published by Marvel Comics from April through December 2008. The story involves a subversive, long-term invasion of Earth by the Skrulls, a group of alien shapeshifters who have secretly replaced many superheroes in the Marvel Universe with impostors over a period of years, prior to the overt invasion. Marvel's promotional tagline for the event was Who do you trust?. ";
        rmc5cnt.style.padding="20px"
        rmc5cnt.style.textAlign="justify"
        let rmc5watch=document.createElement("button");
        rmc5watch.innerHTML="Watch";
        rmc5div.appendChild(rmc5watch);
        rmc5watch.style.width="45%";
        rmc5watch.style.height="40px";
        rmc5watch.style.border="none";
        rmc5watch.style.borderRadius="10px";
        rmc5watch.style.backgroundColor="yellow";
        rmc5watch.style.color="black";
        rmc5watch.style.marginLeft="5%";
        rmc5watch.addEventListener("click" , seen1);
        function seen1(){
            rmc5img.style.display="none";
            rmc5star.style.display="none"
            rmc5cnt.style.marginTop="100px"
            let rmc5vid=document.createElement("video");
            rmc5div.appendChild(rmc5vid);
            rmc5vid.src="./secret.mp4";
            rmc5vid.autoplay="true";
            rmc5vid.muted="false";
            rmc5vid.setAttribute("width","100%");
            rmc5vid.setAttribute("controls","controls");
            rmc5vid.style.position="absolute";
            rmc5vid.style.top="0px"
            rmc5vid.style.left="0"
            
        }
        let rmc5down=document.createElement("button");
        rmc5down.innerHTML="Download";
        rmc5div.appendChild(rmc5down);
        rmc5down.style.width="45%";
        rmc5down.style.height="40px";
        rmc5down.style.border="none";
        rmc5down.style.borderRadius="10px";
        rmc5down.style.backgroundColor="black";
        rmc5down.style.color="yellow";
        rmc5down.style.border="1px solid yellow";
        rmc5down.style.marginLeft="2%";
        let back=document.createElement("img");
        rmc5div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
          moviecollection.style.display="block";
            rmc5div.style.display="none"
            filter.style.display="flex"
        }
    }
    let recmarvelc6=document.querySelector("#rmar-6");
   recmarvelc6.addEventListener("click",rmcard6);
    function rmcard6(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let rmc6div=document.createElement("div");
        apped.appendChild(rmc6div);
        rmc6div.style.zIndex="1";
        rmc6div.style.backgroundColor="black";
        rmc6div.style.color="white";
        rmc6div.style.position="relative";
        let rmc6img=document.createElement("img");  
        rmc6div.appendChild(rmc6img);
        rmc6img.src="https://m.media-amazon.com/images/I/914MHuDfMSL.jpg";
        rmc6img.style.width="100%";
        rmc6img.style.height="400px";
         let rmc6title=document.createElement("h4");
         rmc6div.appendChild(rmc6title);
         rmc6title.innerHTML="Black Widow";  
         rmc6title.style.padding="10px";
         rmc6title.style.fontSize="2.4em";
       let rmc6mname=document.createElement("h6");
        rmc6div.appendChild(rmc6mname);
        rmc6mname.innerHTML="English";
        rmc6mname.style.paddingLeft="10px";
        rmc6mname.style.paddingTop="-10px";
        rmc6mname.style.fontSize="1.2em"
        let rmc6star=document.createElement("h5");
        rmc6div.appendChild(rmc6star);
        rmc6star.innerHTML="⭐ 4.3/5";
        rmc6star.style.paddingLeft="10px";
        rmc6star.style.position="absolute";
        rmc6star.style.bottom="49.5%";
        rmc6star.style.right="6%";
        let rmc6cnt=document.createElement("p");
        rmc6div.appendChild(rmc6cnt);
        rmc6cnt.innerHTML="Black Widow is a 2021 American superhero film based on Marvel Comics featuring the character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 24th film in the Marvel Cinematic Universe (MCU). The film was directed by Cate Shortland from a screenplay by Eric Pearson, and stars Scarlett Johansson as Natasha Romanoff / Black Widow alongside Florence Pugh, David Harbour, O-T Fagbenle, Olga Kurylenko, William Hurt, Ray Winstone, and Rachel Weisz. Set after the events of Captain America: Civil War (2016), the film sees Romanoff on the run and forced to confront her past as a spy and the broken relationships left in her wake long before she became an Avenger. ";
        rmc6cnt.style.padding="20px"
        rmc6cnt.style.textAlign="justify"
        let rmc6watch=document.createElement("button");
        rmc6watch.innerHTML="Watch";
        rmc6div.appendChild(rmc6watch);
        rmc6watch.style.width="45%";
        rmc6watch.style.height="40px";
        rmc6watch.style.border="none";
        rmc6watch.style.borderRadius="10px";
        rmc6watch.style.backgroundColor="yellow";
        rmc6watch.style.color="black";
        rmc6watch.style.marginLeft="5%";
        rmc6watch.addEventListener("click" , seen1);
        function seen1(){
            rmc6img.style.display="none";
            rmc6star.style.display="none"
            rmc6cnt.style.marginTop="100px"
            let rmc6vid=document.createElement("video");
            rmc6div.appendChild(rmc6vid);
            rmc6vid.src="./blackwidow.mp4";
            rmc6vid.autoplay="true";
            rmc6vid.muted="false";
            rmc6vid.setAttribute("width","100%");
            rmc6vid.setAttribute("controls","controls");
            rmc6vid.style.position="absolute";
            rmc6vid.style.top="0px"
            rmc6vid.style.left="0"
            
        }
        let rmc6down=document.createElement("button");
        rmc6down.innerHTML="Download";
        rmc6div.appendChild(rmc6down);
        rmc6down.style.width="45%";
        rmc6down.style.height="40px";
        rmc6down.style.border="none";
        rmc6down.style.borderRadius="10px";
        rmc6down.style.backgroundColor="black";
        rmc6down.style.color="yellow";
        rmc6down.style.border="1px solid yellow";
        rmc6down.style.marginLeft="2%";
        let back=document.createElement("img");
        rmc6div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
            moviecollection.style.display="block";
            rmc6div.style.display="none"
            filter.style.display="flex"
        }
    }
    let recmarvelc7=document.querySelector("#rmar-7");
   recmarvelc7.addEventListener("click",rmcard7);
    function rmcard7(){
      filter.style.display="none"
      moviecollection.style.display="none"
      mainpage.style.display="none";
        let rmc7div=document.createElement("div");
        apped.appendChild(rmc7div);
        rmc7div.style.zIndex="1";
        rmc7div.style.backgroundColor="black";
        rmc7div.style.color="white";
        rmc7div.style.position="relative";
        let rmc7img=document.createElement("img");  
        rmc7div.appendChild(rmc7img);
        rmc7img.src="https://pbs.twimg.com/media/E6Gch5DUUAcsxuO?format=jpg&name=large";
        rmc7img.style.width="100%";
        rmc7img.style.height="400px";
         let rmc7title=document.createElement("h4");
         rmc7div.appendChild(rmc7title);
         rmc7title.innerHTML="Loki";  
         rmc7title.style.padding="10px";
         rmc7title.style.fontSize="2.4em";
       let rmc7mname=document.createElement("h6");
        rmc7div.appendChild(rmc7mname);
        rmc7mname.innerHTML="English";
        rmc7mname.style.paddingLeft="10px";
        rmc7mname.style.paddingTop="-10px";
        rmc7mname.style.fontSize="1.2em"
        let rmc7star=document.createElement("h5");
        rmc7div.appendChild(rmc7star);
        rmc7star.innerHTML="⭐ 4.3/5";
        rmc7star.style.paddingLeft="10px";
        rmc7star.style.position="absolute";
        rmc7star.style.bottom="49.5%";
        rmc7star.style.right="6%";
        let rmc7cnt=document.createElement("p");
        rmc7div.appendChild(rmc7cnt);
        rmc7cnt.innerHTML="Loki Laufeyson,[1] known by adoption as Loki Odinson and by his title as the God of Mischief,[2][3] is a fictional character portrayed by Tom Hiddleston in the Marvel Cinematic Universe (MCU) media franchise, based on the Marvel Comics character of the same name and the Norse mythological god of the same name. Loki was introduced as the main antagonist of both Thor (2011) and The Avengers (2012), and has since become an important recurring figure of the MCU; following the original Loki's death in Avengers: Infinity War (2018), a variant of him from an alternate timeline is introduced in Avengers: Endgame (2019), diverging from the events of The Avengers (2012), headlining the television series Loki (2021) alongside Sylvie, a female variant of him who he works alongside with in the series.  ";
        rmc7cnt.style.padding="20px"
        rmc7cnt.style.textAlign="justify"
        let rmc7watch=document.createElement("button");
        rmc7watch.innerHTML="Watch";
        rmc7div.appendChild(rmc7watch);
        rmc7watch.style.width="45%";
        rmc7watch.style.height="40px";
        rmc7watch.style.border="none";
        rmc7watch.style.borderRadius="10px";
        rmc7watch.style.backgroundColor="yellow";
        rmc7watch.style.color="black";
        rmc7watch.style.marginLeft="5%";
        rmc7watch.addEventListener("click" , seen1);
        function seen1(){
            rmc7img.style.display="none";
            rmc7star.style.display="none"
            rmc7cnt.style.marginTop="100px"
            let rmc7vid=document.createElement("video");
            rmc7div.appendChild(rmc7vid);
            rmc7vid.src="./loki.mp4";
            rmc7vid.autoplay="true";
            rmc7vid.muted="false";
            rmc7vid.setAttribute("width","100%");
            rmc7vid.setAttribute("controls","controls");
            rmc7vid.style.position="absolute";
            rmc7vid.style.top="0px"
            rmc7vid.style.left="0"
            
        }
        let rmc7down=document.createElement("button");
        rmc7down.innerHTML="Download";
        rmc7div.appendChild(rmc7down);
        rmc7down.style.width="45%";
        rmc7down.style.height="40px";
        rmc7down.style.border="none";
        rmc7down.style.borderRadius="10px";
        rmc7down.style.backgroundColor="black";
        rmc7down.style.color="yellow";
        rmc7down.style.border="1px solid yellow";
        rmc7down.style.marginLeft="2%";
        let back=document.createElement("img");
        rmc7div.appendChild(back);
        back.src="backarrow.png";
        back.style.width="30px";
        back.style.position="absolute";
        back.style.top="0"
        back.style.left="0";
        back.style.zIndex="+1";
       back.addEventListener("click",backk);
        function backk(){
            console.log("hello");
          moviecollection.style.display="block";
            rmc7div.style.display="none"
            filter.style.display="flex"
        }
    }

let all=document.querySelector("#all");
let marvel=document.querySelector("#marvel");
let moviecollection=document.querySelector(".marvel-collection");
marvel.addEventListener("click",mar);
function mar(){
  console.log("tuygihjkjuhgy");
  mainpage.style.display="none"
  moviecollection.style.display="block";
  marvel.style.backgroundColor="yellow";
  marvel.style.color="black";
  all.style.backgroundColor="black";
  all.style.color="yellow";
  all.style.border="1px solid yellow";
}
all.addEventListener("click",function(){
  mainpage.style.display="block";
  moviecollection.style.display="none";
  all.style.backgroundColor="yellow";
  all.style.color="black";
  marvel.style.backgroundColor="black";
  marvel.style.color="yellow";
  marvel.style.border="1px solid yellow";
});
let ham=document.querySelector("#ham");
let navbar=document.querySelector(".nav-bar");
ham.addEventListener("click",function(){
 navbar.classList.toggle("l");
 navbar.style.display="block";
let ol=document.getElementsByTagName("ol")[0];
ol.style.display="block";
});
