import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';

export default function CSR() {
  const [time, setTime] = useState();

  useEffect(() => {
    setTime(new Date().toISOString());
  }, [])
  return (
      <>
        <h1>
          This is CSR page!
        </h1>
        <h3>{time}</h3>
      </>
  )
}


CSR.getLayout = function (page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}