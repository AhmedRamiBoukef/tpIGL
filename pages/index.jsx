import Head from "next/head";
import {
  Contact,
  Header,
  Hero,
  Stats,
  AboutUS,
  Latest,
  Team,
} from "../sections";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Pagefooter from "../sections/Pagefooter";

export default function Home() {
  return (
    <GoogleOAuthProvider clientId="112456696629-cqcpre31uqii7gdpgjgii3rlr3hs4ouh.apps.googleusercontent.com">
      <div>
        <Head>
          <title>Estato</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Hero />
        <Stats />
        <AboutUS />
        <Latest />
        <Team />
        <Contact />
        <Pagefooter />
      </div>
    </GoogleOAuthProvider>
  );
}