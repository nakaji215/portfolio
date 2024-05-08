import ClientDetail from './ClientDetail';
import ClientImg from '../assets/images/client5_ss.png';
import '../assets/css/detail.css';

const Client5 = () => {
  const descriptionClient5 = [
    { title: "概要", 
    text: (
      <>
        制作期間：1週間<br />
        プロジェクト規模：3人（デザイナー、ディレクター含む）<br />
        担当：マークアップ<br />
        使用技術：HTML,CSS,JavaScript,PHP<br />
        URL：<a href='https://www.tcdigital.jp/recruit/2024/spicy/spicy.html' target='_blank'>https://www.tcdigital.jp/recruit/2024/spicy/spicy.html</a>
      </>
  )},
    { title: "工夫したところ", 
      text: (
        <>
          コーディングだけでは実装できない箇所があったので、一部を画像にしたりなど、デザイン通りになるようコーディングできる箇所はコーディングで実装しました。
        </>
    )},
    { title: "苦労したところ", 
      text: (
        <>
          SP時のでデザインが用意されていなかったことや吹き出しや背景のボーダーなどレスポンシブがデザイン通りに実装するのに苦労しました。また、テンプレートの応募フォームがうまく動作せず、PHPで修正しました。
        </>
    )},
    { title: "解決するためにどうしたか", 
      text: (
        <>
          SPのコーディングは実装しながらデザインの意図を汲めているかデザイナーと相談しました。背景の箇所は全てドットの背景にして切り抜くことで斜線のデザインを表現しました。PHPの修正箇所は、記事やドキュメントを参考にして修正しました。
        </>
    )},
  ];

  return (
    <ClientDetail
      title="株式会社テクノデジタル LP"
      imgSrc={ClientImg}
      description={descriptionClient5}
      backLink="/" 
    />
  );
};

export default Client5;
