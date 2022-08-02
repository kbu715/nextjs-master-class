import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function UsernameInfo() {
  return (
    <>
      <h1>This is UsernameInfo page!</h1>
    </>
  )
}

UsernameInfo.getLayout = function (page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
