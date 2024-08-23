import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className='text-2xl font-semibold tracking-tighter'>
        From Theory to Code: Statistical Programming
      </h1>
      <br/>
      <p>
      此網誌將帶您一窺心理學、心理語言學和認知科學如何攜手形塑人工智慧的未來。從視覺搜尋、認知分類到決策，我們將深入探討人類這台超級電腦的運作機制。
      </p>
     
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
