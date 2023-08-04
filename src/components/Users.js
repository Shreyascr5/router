import React from "react";
import { useParams } from "react-router-dom";


export default function Users(){
    const param=useParams();
    let {name}=param;
    return(
        <>
            <h1>Users:</h1>
            <p>This is {name}'s Page.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quis inventore temporibus accusamus nam, veritatis odio odit architecto nostrum quam laudantium maiores! Aspernatur quisquam magni esse quaerat, voluptates optio possimus.
            Unde, laudantium vel ducimus beatae obcaecati molestiae voluptas. Vel quibusdam repellendus qui rem nam minus quidem debitis pariatur atque aut sint, recusandae exercitationem reiciendis saepe dicta unde possimus error totam!
            Consectetur, nihil. Dolorem eveniet ullam, et aliquam maiores obcaecati minus numquam accusamus perferendis consectetur nemo nobis. Atque molestias in pariatur ab! Unde eveniet exercitationem expedita, necessitatibus nemo dolorum tenetur similique?
            Minus odio ullam odit! Veritatis numquam voluptates minus unde eligendi quia cupiditate quibusdam voluptatibus quas error, libero veniam eveniet, laudantium distinctio odit exercitationem officiis pariatur repellendus fuga! Enim, reiciendis nihil.
            Nam deserunt totam laboriosam repellat veritatis tempore molestias quia fugit, eos repudiandae animi corrupti est corporis tempora aliquam saepe architecto adipisci alias rerum? Repellat sit excepturi consequatur deserunt! Velit, ullam.</p>
        </>
    )
}