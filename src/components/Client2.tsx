import ClientDetail from './ClientDetail';
import ClientImg from '../assets/images/client2_ss.png';
import '../assets/css/detail.css';

const Client2 = () => {
  const descriptionClient2 = [
    { title: "概要", 
    text: (
      <>
        制作期間：1週間<br />
        プロジェクト規模：2人（ディレクター含む）<br />
        担当：マークアップ<br />
        使用技術：HTML,CSS,JavaScript<br />
        URL：<a href='https://www.kobako.com/limited/2023holiday/' target='_blank'>https://www.kobako.com/limited/2023holiday/</a>
      </>
  )},
    { title: "工夫したところ", 
      text: (
        <>
          デザインのXDをお客様からいただき、お客様のデザインの意図を汲み取れるようピクセルパーフェクトを目指してコーディングしました。アニメーションにこだわり、カートボタンに豪華さを出すためにキラッと光るアニメーションを設定しました。
        </>
    )},
    { title: "苦労したところ", 
      text: (
        <>
          社外のデザイナーだったため、直接話し合うことができなかったため実装時に苦労しました。
        </>
    )},
    { title: "解決するためにどうしたか", 
      text: (
        <>
          デザインをいただいた段階でコーディングする際に気になっている箇所をまとめて最初に質問し、アニメーションやホバーの指定などをしてもらいました。
        </>
    )},
  ];

  return (
    <ClientDetail
      title="株式会社貝印様　LP"
      imgSrc={ClientImg}
      description={descriptionClient2}
      backLink="/" 
    />
  );
};

export default Client2;
