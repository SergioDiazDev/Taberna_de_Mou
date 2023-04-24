import { ListOfPostsFutbol } from "../ListOfPostsFutbol";

export default function PostFutbol ({params})
{
    const { id } = params
    return (
        <section>
            <p>pagina {id}</p>
        </section>
    )
}