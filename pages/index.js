import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
    </div>
  );
};

export default Home;
