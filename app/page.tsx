import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className='text-2xl font-semibold tracking-tighter'>
        From Theory to Code: Statistical Programming
      </h1>
      <br/>
      <p>
      此網誌人工智慧應用和心理學、心理語言學和認知科學的關係。我們將從心理學的研究主題，例如，視覺搜尋、認知分類至行為決策，來了解這些基礎研究的知識如何被應用在機器學習，統計建模以及人工智慧的實際應用。
      </p>
     
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
