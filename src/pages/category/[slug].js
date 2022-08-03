import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'

export default function CategorySlug() {
  const router = useRouter();

  const { slug, from, date } = router.query;
  return (
    <>
      <h1>This is Category - {slug} page from {from} {date}!</h1>
    </>
  )
}

CategorySlug.getLayout = function (page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
