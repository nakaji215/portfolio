import ClientDetail from './ClientDetail';
import ClientImg from '../assets/images/client4_ss.png';
import '../assets/css/detail.css';

const Client4 = () => {
  const descriptionClient4 = [
    { title: "概要", 
    text: (
      <>
        制作期間：1週間<br />
        プロジェクト規模：2人（デザイナー、ディレクター含む）<br />
        担当：マークアップ<br />
        使用技術：HTML,CSS,JavaScript<br />
        URL：<a href='https://www.jecom-db.com/jigyou/' target='_blank'>https://www.jecom-db.com/jigyou/</a>
      </>
  )},
    { title: "工夫したところ", 
      text: (
        <>
          PCでは開いてメインビジュアルのメニューをSP時にはアコーディオンメニューにしています。社内のデザイナーさんと、実装の動きを相談しながら実装しました。
        </>
    )},
    { title: "苦労したところ", 
      text: (
        <>
          SP時にはアコーディオンメニューになり、PC時には開いたまま表示などの制御に苦労しました。
        </>
    )},
    { title: "解決するためにどうしたか", 
      text: (
        <>
          記事やドキュメントを参考にして、試行錯誤しながら実装しました。
        </>
    )},
  ];

  return (
    <ClientDetail
      title="建物登記支援センター株式会社様　改修"
      imgSrc={ClientImg}
      description={descriptionClient4}
      backLink="/" 
    />
  );
};

export default Client4;
