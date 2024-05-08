import ClientDetail from './ClientDetail';
import ClientImg from '../assets/images/client1_ss.png';
import '../assets/css/detail.css';

const Client1 = () => {
  const descriptionClient1 = [
    { title: "概要", 
      text: (
        <>
          制作期間：1ヶ月<br />
          プロジェクト規模：10人（デザイナー、ディレクター含む）<br />
          担当：マークアップ<br />
          使用技術：HTML,CSS,JavaScript<br />
          URL：<a href='https://atsumarikata-kaikaku.com/sustainable/index.html' target='_blank'>https://atsumarikata-kaikaku.com/sustainable/index.html</a>
        </>
    )},
    { title: "工夫したところ", 
      text: (
        <>
          レスポンシブ時に画像がより良い見え方になるよう、画面サイズが大きい時はテントの画像が全て見えるように実装し、メインビジュアルでは右の画像を真ん中を基準とすることで、デザイナーが見せたい箇所が見えるよう実装しました。<br />
          別種類のLPが３個あり、共通のパーツがあるため、どこまでを共通パーツにして、どこから自分で実装するかなどプロジェクトメンバーとコミュニケーションをとりながら制作しました。
        </>
    )},
    { title: "苦労したところ", 
      text: (
        <>
          はじめての案件だったため、SEOやクラス名の付け方、コーディングに関するルールなどを考慮しながら制作するのに苦労しました。
        </>
    )},
    { title: "解決するためにどうしたか", 
      text: (
        <>
          SEOに関しては、コーディング完了後にコーディングのルールに反していないかチェックできるW3Cのツールを使用して解決しました。命名規則やコーディングに関するルールなどは、会社の命名規則や先輩のクラス名の付けかたを参考にして命名しました。
        </>
    )},
    // 他の項目も同様に追加
  ];

  return (
    <ClientDetail
      title="株式会社セレスポ様 LP"
      imgSrc={ClientImg}
      description={descriptionClient1}
      backLink="/" 
    />
  );
};

export default Client1;
