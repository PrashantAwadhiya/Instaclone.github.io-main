var users = [
    {
      username: "john_doe",
      dp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://plus.unsplash.com/premium_photo-1664647267269-cc68263fc517?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      username: "jane_smith",
      dp: "https://plus.unsplash.com/premium_photo-1664647267230-0b81e0814c77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://plus.unsplash.com/premium_photo-1664647267290-bc4866c0309a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      username: "travel_guru",
      dp: "https://plus.unsplash.com/premium_photo-1675129522693-bd62ffe5e015?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://plus.unsplash.com/premium_photo-1675129626614-7636908ebcf3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      username: "artsy_amy",
      dp: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      username: "foodie_frank",
      dp: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      username: "fitness_freak",
      dp: "https://plus.unsplash.com/premium_photo-1674059548485-808fc674463a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://plus.unsplash.com/premium_photo-1674059549409-c27cf3655765?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  var card = document.querySelector("#card");
  var storiyan = document.querySelector("#storiyan");
  var story = document.querySelector(".story"); 
  var dp = document.querySelector("#full .dp")
  var username = document.querySelector("#full .username h4")
  var close = document.querySelector("#close")
  var full = document.querySelector("#full");
  var progress = document.querySelector(".progress")
  var footer = document.querySelector("#footer")

  var clutter = ""

  users.forEach(function(elem, idx){
    clutter += `<div class="story">
                    <img id=${idx} src="${elem.dp}" alt="${elem.username}">
                </div>`
            
  })
  storiyan.innerHTML = clutter

  var time = 0

  storiyan.addEventListener('click', function(dets){
    var targetObject = users[dets.target.id]
    
    full.style.display = 'block'
    full.style.backgroundImage = `url(${targetObject.story})`
    dp.style.backgroundImage = `url(${targetObject.dp})`
    username.innerHTML = "@" + targetObject.username
    
    footer.style.left = "-100%"


    var storyInterval = setInterval(function(){
        time++
        progress.style.width = time + "%"
      
    },30)

    setTimeout(function(){
        clearInterval(storyInterval)
        time = 0
        full.style.display = 'none'
        footer.style.left ="0"
    },3000)


    close.addEventListener('click', function(){
        clearInterval(storyInterval)
        full.style.display = 'none'
        time = 0
        footer.style.left ="0"
    })

  })
  


  var body = document.querySelector('#body');
var love = document.querySelector('#love');
var like = document.querySelector('.like');
var x = 0;

body.addEventListener('dblclick', function(){
    love.style.transform = 'translate(-50%, -50%) scale(1)'
    love.style.display = 'block';
     setTimeout(function(){
        love.style.display = 'none';
     },900)

     setTimeout(function(){
        love.style.transform = 'translate(-50%, -50%) scale(0)';
        love.style.display = 'block';
     },1000)

   if (x==0) {
    like.innerHTML = '<i class="ri-heart-3-fill"></i>';
    like.style.color = 'red';
    
     x = 1;
   }else{
    like.innerHTML = '<i class="ri-heart-3-line"></i>';
    like.style.color = 'black';
   
    x = 0;
   }
});

like.addEventListener('click', function(){
    love.style.transform = 'translate(-50%, -50%) scale(1)'
    love.style.display = 'block';
     setTimeout(function(){
        love.style.display = 'none';
     },900)

     setTimeout(function(){
        love.style.transform = 'translate(-50%, -50%) scale(0)';
        love.style.display = 'block';
     },1000)

     if (x==0) {
        like.innerHTML = '<i class="ri-heart-3-fill"></i>';
        like.style.color = 'red';
        
         x = 1;
       }else{
        like.innerHTML = '<i class="ri-heart-line"></i>';
        like.style.color = 'black';
        
        x = 0;
       }
})
