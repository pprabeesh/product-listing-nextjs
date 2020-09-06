import Layout from "layout";
import Head from "next/head";
import { Results } from "components";

const App = () => {
  return (
    <Layout>
      <Head>
        <title>Catch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Results />
    </Layout>
  );
};

export default App;
