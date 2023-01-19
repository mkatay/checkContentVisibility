
    function section(rand1,rand2){
        return `
        <div class="section ">
            <div class="image ">
                <img src="https://picsum.photos/id/${rand1}/400/300" alt="random image">
            </div>
            <div class="txt">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur laborum optio cupiditate vitae, quisquam quaerat asperiores iusto sit, et reiciendis voluptatem ullam unde, repudiandae vel accusamus itaque delectus doloremque ad rerum explicabo ipsa. Ea non ad labore debitis ducimus perferendis deserunt. Distinctio soluta nobis veniam quisquam quidem expedita, delectus natus esse maxime sit perspiciatis error blanditiis voluptas non illo nam rem adipisci vero debitis fugiat cumque vel consequatur. Ut quos quis et similique eligendi cum, dicta ratione laboriosam assumenda ipsam sint deserunt dolorem totam quam. Impedit veritatis suscipit cupiditate sint deserunt iste quidem ratione facilis, aliquam neque veniam ullam.</p>
            </div>
        </div>

        <div class="section ">
            <div class="txt">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur laborum optio cupiditate vitae, quisquam quaerat asperiores iusto sit, et reiciendis voluptatem ullam unde, repudiandae vel accusamus itaque delectus doloremque ad rerum explicabo ipsa. Ea non ad labore debitis ducimus perferendis deserunt. Distinctio soluta nobis veniam quisquam quidem expedita, delectus natus esse maxime sit perspiciatis error blanditiis voluptas non illo nam rem adipisci vero debitis fugiat cumque vel consequatur. Ut quos quis et similique eligendi cum, dicta ratione laboriosam assumenda ipsam sint deserunt dolorem totam quam. Impedit veritatis suscipit cupiditate sint deserunt iste quidem ratione facilis, aliquam neque veniam ullam.</p>
            </div>
            <div class="image ">
                <img src="https://picsum.photos/id/${rand2}/400/300" alt="random image">
            </div>
        </div>
        `
    }
    
    for(let i=0;i<20;i++){
        let rand1=Math.floor(Math.random()*200)
        let rand2=Math.floor(Math.random()*200)
        document.querySelector('.sections').innerHTML+=section(rand1,rand2)
    }



