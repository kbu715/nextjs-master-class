import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function CategorySlug() {
  return (
    <>
      <h1>This is CategorySlug page!</h1>
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
