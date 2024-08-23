import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className='text-2xl font-semibold tracking-tighter'>
        此網誌記錄一些統計、數學建模及機器學習的理論方法，這些理論包含了心理學的視覺搜尋研究，類神經網絡的研究中如何自這些心理學及認知科學的生物神經學研究，發展出「類」神經的人工智慧模型。
      </h1>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
