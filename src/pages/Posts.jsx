const response = await fetch('https://dummyjson.com/posts');
const data = await response.json();
const { posts } = data;

export default function Carts() {
  return (
    <div className="flex flex-col gap-10 px-30 py-10">
      {posts.map((post) => (
        <div key={post.id}>
            
        </div>
      ))}
    </div>
  );
}
