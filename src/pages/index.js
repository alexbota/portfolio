import * as React from 'react';
import Layout from '../hoc/Layout';
import Seo from '../hoc/Seo';
import Hero from '../components/Hero';
import WorkSection from '../components/WorkSection';
import ServiceSection from '../components/ServiceSection';
import ClientSection from '../components/ClientSection';

const alternateLanguages = [
  {
    uid: '/it',
    type: 'homepage',
    lang: 'it',
  },
];

const activeDoc = {
  uid: '/',
  lang: 'en',
  type: 'homepage',
  alternateLanguages,
};

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Alex Bota"
        keywords={[`web developer`]}
        lang={activeDoc.lang}
      />
      <Hero />
      <WorkSection />
      <ServiceSection />
      <ClientSection />
    </Layout>
  );
};

export default IndexPage;
