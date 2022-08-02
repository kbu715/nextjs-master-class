import Link from 'next/link'

export async function getServerSideProps() {
  console.log('server fetching')
  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}

export default function Home({ time }) {
  return (
    <>
      <h1 className="title">
        Welcome to the <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h3>{time}</h3>
      <Link href="/csr">
        <a className="link-btn">CSR</a>
      </Link>
      <Link href="/ssg">
        <a className="link-btn">SSG</a>
      </Link>
      <Link href="/isr">
        <a className="link-btn">ISR</a>
      </Link>

      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }
        .link-btn {
          background: #0070f3;
          color: #fff;
          padding: 10px 20px;
          margin-bottom: 10px;
          font-size: 24px;
          font-weight: 500;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 200ms ease-in-out;
        }

        .link-btn:hover {
          outline: none;
          box-shadow: none;
          background: #111;
        }
      `}</style>
    </>
  )
}
