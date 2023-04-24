import '../../styles/globals.css'
const fetchPostsFutbol = () => 
{
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
}

export async function ListOfPostsFutbol ()
{
    const posts = await fetchPostsFutbol()

    return ( posts.slice(0, 5).map(post =>(
        <article key={post.id}>
            <h1 style={{color: 'var(--color-futbol)'}}>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    )) );
}