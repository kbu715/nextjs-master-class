import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export async function getStaticProps() {
  console.log('ssg getStaticProps')
  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}

export default function SSG({ time }) {
  return (
    <>
      <h1>This is SSG page!</h1>
      <h3>{time}</h3>
    </>
  )
}

SSG.getLayout = function (page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
