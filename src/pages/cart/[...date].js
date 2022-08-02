import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function CartDate() {
  return (
    <>
      <h1>This is CartDate page!</h1>
      <p>/cart/2022/08/01 로 접속해보세요.</p>
    </>
  )
}

CartDate.getLayout = function (page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
