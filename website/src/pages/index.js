import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {Whatis} from '../components/home/whatis';
import {HomeHeader} from '../components/home/HomeHeader';
import {Benefit} from '../components/home/benefit';
import {Features} from '../components/home/features';
import {Headline} from '../components/home/headline';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description={`${siteConfig.customFields.description}`}>
      <HomeHeader />
      <Whatis />
      <Features />
      <Benefit />
    </Layout>
  );
}
