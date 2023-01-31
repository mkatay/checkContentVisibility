const urlIfNotExist="https://picsum.photos/id/237/400/300"
    function section(url){
        return `
        <div class="section ">
            <div class="image ">
                <img src="${url}"  alt="random image">
            </div>
            <div class="txt">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur laborum optio cupiditate vitae, quisquam quaerat asperiores iusto sit, et reiciendis voluptatem ullam unde, repudiandae vel accusamus itaque delectus doloremque ad rerum explicabo ipsa. Ea non ad labore debitis ducimus perferendis deserunt. Distinctio soluta nobis veniam quisquam quidem expedita, delectus natus esse maxime sit perspiciatis error blanditiis voluptas non illo nam rem adipisci vero debitis fugiat cumque vel consequatur. Ut quos quis et similique eligendi cum, dicta ratione laboriosam assumenda ipsam sint deserunt dolorem totam quam. Impedit veritatis suscipit cupiditate sint deserunt iste quidem ratione facilis, aliquam neque veniam ullam.</p>
            </div>
        </div>

        `
    }
    let rand,url
    for(let i=0;i<50;i++){
        rand=Math.floor(Math.random()*200)
        url=`https://picsum.photos/id/${rand}/400/300`
       checkImage(url)
      
    }

async function checkImage(url){   
    const res = await fetch(url);
    const data = await res.blob();
   
    render(data,url)
}
function render(data,url){
    console.log(data.type)
   if(data.type!="image/jpeg"){
        console.log("nincs")
        document.querySelector('.sections').innerHTML+=section(urlIfNotExist)
   }else
        document.querySelector('.sections').innerHTML+=section(url)
   }
