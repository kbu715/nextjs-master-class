import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function CartDate() {
  const router = useRouter();

  const { date } = router.query;
  
  return (
    <>
      <h1>This is CartDate page!</h1>
      <p>/cart/2022/08/01 로 접속해보세요.</p>
      <p>{date?.join('-')}</p>

      <Link href='/cart/2022/08/08'><a>2022/08/08 로 이동!</a></Link>
      <div>
        <button onClick={() => router.push('/cart/2022/09/01')}>2022년 9월 1일로 이동!</button>
      </div>
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
