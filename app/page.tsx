import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className='text-2xl font-semibold tracking-tighter'>
        Welcome
      </h1>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
