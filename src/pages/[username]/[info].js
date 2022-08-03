import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router';

export default function UsernameInfo() {
  const router = useRouter();

  const { username, info } = router.query;
  return (
    <>
      <h1>This is {username}'s {info}!</h1>
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
