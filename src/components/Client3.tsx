import ClientDetail from './ClientDetail';
import ClientImg from '../assets/images/client3_ss.png';
import '../assets/css/detail.css';

const Client3 = () => {
  const descriptionClient3 = [
    { title: "概要", 
    text: (
      <>
        制作期間：1週間<br />
        プロジェクト規模：3人（デザイナー、ディレクター含む）<br />
        担当：マークアップ<br />
        使用技術：HTML,CSS,JavaScript<br />
        URL：<a href='https://www.tcdigital.jp/aws_service/' target='_blank'>https://www.tcdigital.jp/aws_service/</a>
      </>
  )},
    { title: "工夫したところ", 
      text: (
        <>
          PCからSPのカルーセルへの切り替えやヘッダーがスクロール状況によって背景色を変わるようJavaScriptで動的な実装をしました。
        </>
    )},
    { title: "苦労したところ", 
      text: (
        <>
          初めて1人でハンバーガーメニューなど全てのパーツを１から実装しすのに苦労しました。
        </>
    )},
    { title: "解決するためにどうしたか", 
      text: (
        <>
          ハンバーガーメニューの作成など動的な実装でつまづいた箇所は、30分自分で調べて考えても難しかった時は先輩に質問するなどスケジュールに遅れないようにしました。
        </>
    )},
  ];

  return (
    <ClientDetail
      title="株式会社テクノデジタル LP"
      imgSrc={ClientImg}
      description={descriptionClient3}
      backLink="/" 
    />
  );
};

export default Client3;
