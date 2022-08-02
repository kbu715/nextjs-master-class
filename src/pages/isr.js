import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

export async function getStaticProps() {
  console.log("isr getStaticProps");
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 1, // 1sec
  };
}

export default function ISR({ time }) {
  return (
    <>
      <h1>This is ISR page!</h1>
      <h3>{time}</h3>
    </>
  );
}

ISR.getLayout = function (page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
