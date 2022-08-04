import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function UsernameInfo() {
  const router = useRouter();

  const [name, setName] = useState('?');

  const { username, info, uid } = router.query;

  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((res) => res.json())
  //     .then(data => setName(data.name));
  // }, [])

    useEffect(() => {
      if (uid !== null) {
      fetch(`/api/user-info/${uid}`)
      .then((res) => res.json())
      .then(data => setName(data.name));
    }
  }, [uid])

  return (
    <>
      <h1>This is {username}'s {info}!</h1>
      <h1>fetching name: {name}!</h1>
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
