import ClientDetail from './ClientDetail';
import ClientImg from '../assets/images/client6_ss.png';
import '../assets/css/detail.css';

const Client6 = () => {
  const descriptionClient6 = [
    { title: "概要", 
    text: (
      <>
        制作期間：1週間<br />
        プロジェクト規模：2人（ディレクター含む）<br />
        担当：マークアップ<br />
        使用技術：HTML,CSS,JavaScript<br />
        URL：<a href='https://www.kai-group.com/fun/tsume_to_tsumekiri_no_ohanashi/index.html' target='_blank'>https://www.kai-group.com/fun/tsume_to_tsumekiri_no_ohanashi/index.html</a>
      </>
  )},
    { title: "工夫したところ", 
      text: (
        <>
          社外のデザイナーからアニメーションが細かく指定されていたため、デザイナーのイメージ通りになるようアニメーションを設定しました。
        </>
    )},
    { title: "苦労したところ", 
      text: (
        <>
          ハンバーガーメニューの実装で後ろの画面が少し見える状態で実装する際にスクロールした値を保持して画面が移動しないよう実装するのに苦労しました。
        </>
    )},
    { title: "解決するためにどうしたか", 
      text: (
        <>
          スクロールした分の値の保持に時間がかかってしまったので、先輩に具体的にどこをどう困っているのかを質問して、解決しました。 また、動画を再生する際にモーダルを開いて再生するのですが、モーダルを閉じても動画が再生され続けていたため、iframeの設定などを調べて参考にして修正しました。
        </>
    )},
  ];

  return (
    <ClientDetail
      title="株式会社貝印様　LP"
      imgSrc={ClientImg}
      description={descriptionClient6}
      backLink="/" 
    />
  );
};

export default Client6;
