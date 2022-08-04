import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import { useState } from 'react';

export async function getServerSideProps() {
  console.log('server fetching')
  return {
    props: {},
  }
}

export default function MyInfo() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { status = 'initial' } = router.query;
  return (
    <>
      <h1>My info</h1>
      <h1>Clicked: {String(clicked)}</h1>
      <h1>Status: {status}</h1>

      <button onClick={() => {
        alert('edit!');
        setClicked(true);
        location.replace('/settings/my/info?status=editing');
      }}>location replace</button>

      <button onClick={() => {
        alert('edit!');
        setClicked(true);
        router.push('/settings/my/info?status=editing');
      }}>router push - server fetching O</button>

      <button onClick={() => {
        alert('edit!');
        setClicked(true);
        router.push('/settings/my/info?status=editing', undefined, { shallow: true });
      }}>router push - server fetching X</button>
      
    </>
  )
}

MyInfo.getLayout = function (page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
