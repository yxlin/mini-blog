import Link from 'next/link';

export const metadata = {
    title: 'About',
    description: 'About page',
}

export default function AboutPage() {
    return (
        <>
            <section>

                <div className="placeholder-box">
                    <Link href="https://yi-shin-lin-resume.vercel.app/" passHref>
                        <button style={{cursor: 'pointer'}} type="button"> Visit my résumé. </button>
                    </Link>

                    <p>
                        I am an experimental psychologist with expertise in statistics,
                        computational and machine-learning modeling. The models I've developed have been applied to
                        various domains, including:
                    </p>
                    <ul>
                        <li>1. Understanding individual cognitive processes;</li>
                        <li>2. Exploring social group cognition;</li>
                        <li>3. Studying irrational behaviors in human decisions;</li>
                        <li>4. Designing safe pedestrian traffic environments;</li>
                        <li>5. Addressing ethical choices at intersections.</li>
                    </ul>
                </div>
            </section>

        </>
    )
}