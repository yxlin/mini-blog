import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        Welcome to my personal website! I am an experimental and cognitive psychologist with expertise in statistics and mathematical modeling.
        The mathematical models I've developed include machine learning models and cognitive decision models. These models have been applied to:
      </p>
      <p>
        <ul>
        <li>Understanding individual cognitive processes;</li>
        <li>Exploring social group cognition;</li>
        <li>Studying rational and irrational behavior in human economic decisions;</li>
        <li>Designing safe pedestrian traffic environments;</li>
        <li>Addressing ethical choices at intersections.</li>
        </ul>
      </p>
      <p>
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
