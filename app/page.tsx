import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        Welcome! I am an experimental psychologist with expertise in statistics and 
        computational modeling. The models I've developed include machine learning 
        models and cognitive models. They have been applied to:
      </p>

      <p>
        <ul>
          <li>1. Understanding individual cognitive processes;</li>
          <li>2. Exploring social group cognition;</li>
          <li>3. Studying irrational behaviors in human decisions;</li>
          <li>4. Designing safe pedestrian traffic environments;</li>
          <li>5. Addressing ethical choices at intersections.</li>
        </ul>
      </p>

      <p>
      <br/>
        My research involves applying hierarchical Bayesian inference and
        high-speed CUDA-GPU computation to understand human decision-making
        processes and visual search mechanisms. For example, I've used machine
        learning models to analyze pedestrian behavior at crosswalks and study
        driver decision-making during lane changes on highways. Successful
        applications of this research include using decision tree models to
        automatically extract interactions between pedestrians and vehicles
        from CCTV traffic footage, identifying potential traffic accidents
        and conflicts.
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
