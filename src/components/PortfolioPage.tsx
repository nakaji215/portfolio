import PortfolioImg from '../assets/images/portfolio_ss.png';
import '../assets/css/detail.css'

const PortfolioDetail = () => {
  return (
    <section className="detail-contents">
      <div className='detail-inner'>
        <h2 className='detail-title'>Portfolio site</h2>
        <div className='detail-column'>
          <div className='detail-img-block'>
            <img src={PortfolioImg} className='detail-img' />
          </div>
          <div className='detail-description-block'>
            <ul className='detail-description-list'>
              <li>
                <p className='detail-description-text'>制作期間：1週間</p>
                <p className='detail-description-text'>担当：デザイン、マークアップ</p>
                <p className='detail-description-text'>使用技術：HTML, CSS, Vite, React, TypeScript</p>
              </li>
              <li>
                <div>
                  <h3>工夫したところ</h3>
                  <p className='detail-description-text'>
                    Reactのコンポーネントと配列を活用して、コードの記述を効率化しました。Workコンポーネント内では、文言と画像を配列に格納して、mapで処理することで、Workの画像や文言の追加、修正を簡単にしました。
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h3>苦労したところ</h3>
                  <p className='detail-description-text'>
                    はじめてReact、TypeScriptを用いてWebサイトを制作したので、ReactのコンポーネントやTypeScriptの学習をしながら制作することに苦労しました。
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h3>解決するためにどうしたか</h3>
                  <p className='detail-description-text'>
                    今回はスピード感を意識して作成したため、ライブラリを用いて実装することによって時間を短縮しました。実装で躓いたときは、記事やドキュメントを参考にし、試行錯誤をしながら実装をして理解を深めていきました。今後も学習しながら改修を続けていきます。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default PortfolioDetail;
