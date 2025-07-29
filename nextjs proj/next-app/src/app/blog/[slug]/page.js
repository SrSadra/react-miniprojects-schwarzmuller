export default function blogPostPage({params}) {
    return <div>
        <h2>post page</h2>
        <p>{params.slug}</p>
    </div>
}