import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Professional with years of experience in web application development, programming, server / systems administration, and technical management in a wide range of industries.</p>
        <p><a href="https://sireni.com">Sireni</a></p>
      </section>
    </Layout>
  )
}