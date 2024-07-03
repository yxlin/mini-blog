import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`歡迎拜訪我的網站，我是一名實驗及認知心理學家，專長於統計學及數學建模。
        我開發的數學模式包含了機器學習模型及認知決策模型。這些模型被應用於，`}
      </p>
      <p>
        <ul type="1">
          <li>一、解析個人內在的認知運作歷程；</li>
          <li>二、了解社會群體認知；</li>
          <li>三、人類行為經濟的理性及非理性行為；</li>
          <li>四、設計安全的行人交通環境；</li>
          <li>五、路口衝突的道德選擇。</li>
        </ul>
      </p>
      <p>
        {`我的研究包含了，應用階層式貝式推理及高速 CUDA-GPU 運算了解人類決策過程及
      視覺搜索機制；利用機器學習模型了解行人穿越路口的行為、了解人類駕駛於
      高速公路變換車道的決策機制；這些研究的成功商轉應用有，使用決策樹
      模型，分析路口 CCTV 交通影像的資料，自動化地擷取用路人，包含找
      出汽車駕始及行人的行為互動，可能的交通意外及衝突。`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
