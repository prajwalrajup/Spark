import { useState } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Card from "@components/Card";
import CardText from "../public/CardText.json";

export default function Home() {
  const [currentCardText, setCurrentCardText] = useState();

  function getSession() {
    let dict = {};
    if (sessionStorage.getItem("cardTextIndex"))
      dict = JSON.parse(sessionStorage.getItem("cardTextIndex"));
    else sessionStorage.setItem("cardTextIndex", dict);
    return dict;
  }

  function getRandomIndex() {
    return Math.floor(Math.random() * CardText.length);
  }

  function getObjectLength(object) {
    return Object.keys(object).length;
  }

  function cardClickHandler() {
    let dict = getSession();
    var cartTextContent = getRandomIndex();

    while (cartTextContent in dict) {
      if (getObjectLength(dict) === CardText.length) {
        sessionStorage.setItem("cardTextIndex", "{}");
        return;
      }
      cartTextContent = getRandomIndex();
    }
    setCurrentCardText(CardText[cartTextContent]);

    dict[cartTextContent.toString()] = "1";
    sessionStorage.setItem("cardTextIndex", JSON.stringify(dict));
  }

  return (
    <div className="container">
      <Head>
        <title>SPARK</title>
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <main>
        <Header title="Welcome to SPARK" />
        <Card text={currentCardText} onClick={cardClickHandler} />
      </main>

      <Footer />
    </div>
  );
}
