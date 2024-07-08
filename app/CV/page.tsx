// import { BlogPosts } from 'app/components/posts'
import Link from 'next/link';

export const metadata = {
  title: 'Résumé',
  description: 'Read my résumé.',
}

export default function Page() {
  return (
    <section>
      <Link href="https://yi-shin-lin-resume.vercel.app/" passHref>
        Read my résumé.
      </Link>

    </section>
  )
}
