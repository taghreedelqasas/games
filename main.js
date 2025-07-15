                     

  

   let   navlist =  document.querySelectorAll('.nav-link')
   let defactive = document.querySelector(' .defaultActive')
   let detailcontainer  = document.querySelector('.detailContainer')
   let main = document.querySelector('.main')
   let navename = "mmorpg";
   const exit = document.querySelector('.exitIcon')
  
   
   console.log(navlist);
   navlist.forEach((list)=>{
    list.addEventListener('click',function(e){
           console.log(e.target.innerText);
         navename= e.target.innerText
           getcategory( navename) 
           defactive.classList.remove("active")

         
    })
   })

 
  

  

  async function getcategory(queryname){
       console.log(queryname)
    let  response = await fetch(`https://corsproxy.io/?https://www.freetogame.com/api/games?category=${queryname}`);

     if(response.ok){
        let  data =  await response.json()
        console.log(data)
        // console.log(data[0].title);
        displayGames(data,queryname)
        console.log('hi')
        
     }else{
      console.log('error')
     }
 }

   getcategory( navename)

    function displayGames(data,queryname){
      let cartona ="" ;
     for(let i=0 ; i<data.length ; i++){
        console.log(data[i].title);
        
        let gameTitle = data[i].title;
        let description = data[i].short_description;
        let gameImg = data[i].thumbnail;
        console.log(gameImg);
          cartona += `
               <div class="col-md-3  d-flex flex-column  ">
          <div class="inner  flex-grow-1   gamecard   d-flex">
            <div class="card  games  flex-grow-1     ">
              <img src= "${gameImg }"   class="card-img-top" alt="imagelogo">
              <div class="card-body">
                <div class="title d-flex justify-content-between  align-items-center">
                  <h5 class="text-white">${gameTitle}</h5>
                  <span  class="bg-primary text-white rounded-2    p-1" >Free</span>
                </div>
                <p class="card-text    text-center">${description}</p>
              </div>
              <div class="footer d-flex justify-content-between  align-items-center px-3 ">
                 <span   class=" text-white " style="font-weight: 700;">mmorpg</span>
                 <span class=" text-white  " style="font-weight: 700;">PC(window)</span>
              </div>
            </div>
            </div>
          </div>
          
          `

     }
    
     document.querySelector('.row').innerHTML = cartona ; 
      
     let games = document.querySelectorAll('.inner');
      games.forEach(function(game,gameIndex){
         game.addEventListener('click',function(){

             console.log(game);
             console.log(gameIndex);
             console.log(data[gameIndex].id);
             let gameId = data[gameIndex].id
          //  const namecontain    =  game.querySelector('h5')
          //  console.log(namecontain.innerText);
          //  const gameName = namecontain.innerText;
          getdetails(gameId,queryname)
          detailcontainer.classList.remove('d-none')
          main.classList.add('d-none')

         })
      })
    }
    async function getdetails(gameId,queryname) {
        let response = await fetch(`https://corsproxy.io/?https://www.freetogame.com/api/game?id=${gameId}`);
        if(response.ok){
          let data = await  response.json()
          console.log(data)
          console.log(data.description);
          let longDescription =  data.description;
          let descImage = data.thumbnail;
          let category = queryname;
          let status = data.status;
          let platform = data.platform;
          let title = data.title ;
          console.log(title)
          console.log(platform)
          console.log(status)
          displayDetails(longDescription,descImage,status, platform,navename,title,category  )
           
                 
           
        }
    }
     
     function displayDetails(longDescription,descImage,status, platform,navename,title ,category){
          let   cartona = "";
           cartona = `
           
                <div class="col-md-4    col-sm-12">
                     <div class="contain">
                        <img   src="${descImage}" />
                          </div>
                  </div>
                   <div class="col-md-8">
                       <h5   class="gameTitle">Title:<span   class="bg-transparent  text-white ">${title}</span></h5>
                       <h6>category:<span>${category}</span></h6>
                       <h6>platform:<span>${platform}</span></h6>
                       <h6>status:<span>${status}</span></h6>
                       <p>${longDescription}</p>
                       <button class="btn border-1 btn-outline-warning text-white">Show Game</button>
                   </div>
           
           
           
           `

        document.querySelector('.detailContain').innerHTML = cartona;



     }
     
     exit.addEventListener('click',function(){
      detailcontainer.classList.add('d-none');
      main.classList.remove('d-none')

     })