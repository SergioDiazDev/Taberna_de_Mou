const fetchFutbolPost = (id) => 
{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
}

export default async function PostFutbol ({params})
{
    const { id } = params
    const post = await fetchFutbolPost(id)
    return ( 
            <article>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </article>
        )
}