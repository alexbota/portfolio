import * as React from 'react';
import Layout from '../hoc/Layout';
import Seo from '../hoc/Seo';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Service from '../components/Service';
import Client from '../components/Client';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Alex Bota" keywords={[`web developer`]} lang="en" />
      <Hero id="profile" />
      <Work id="work" />
      <Service />
      <Client />
    </Layout>
  );
};

export default IndexPage;
