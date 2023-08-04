import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home(){
    const navigate=useNavigate();
    return(
        <>
            <h1>Welcome to our website</h1>
            <p>The reason using router is because when we use a anchor tag 'a' it reloads the whole page but the link tag from the router just renders the components requested from the virtual dom.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus sunt officia dolor unde non quam, ea fuga incidunt ex sit iure nostrum provident amet! Aliquam quibusdam temporibus quam perferendis incidunt.
            Impedit dolorum praesentium libero sed eveniet fugit autem eius culpa explicabo! Sint, sapiente minus esse recusandae dignissimos officiis voluptates eveniet cupiditate iusto illum! Iste blanditiis corporis accusamus, perspiciatis aperiam rerum.
            Maiores ea omnis, optio veniam doloremque eaque suscipit beatae tempore, hic molestias quod doloribus illo, assumenda quaerat nihil odio obcaecati maxime provident tenetur accusamus aliquam rem. Doloremque modi natus aperiam?
            Minus, nulla. At consequatur maxime neque officiis a vitae beatae eius quia dicta magnam, nisi, omnis obcaecati placeat! Esse qui exercitationem officiis distinctio autem accusamus eius aut veritatis accusantium excepturi.
            Nihil iure animi quod voluptas accusantium ratione ut, asperiores excepturi perferendis veritatis totam aperiam sapiente, alias officia. Nemo, earum corporis. Ipsum, asperiores quae delectus hic ipsa voluptas. Eius, velit quaerat!</p>
            <br />
            <br />
            <button onClick={()=>navigate('/about')}>Go to About</button> <br />
            <button onClick={()=>navigate('/filter')}>Go to Filter page</button>
        </>

    )
      
    
}