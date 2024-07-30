import { Link } from "react-router-dom";
import Btn from '../assets/images/arrow_btn.png'
import '../assets/css/work.css';

const Work = () => {
  return (
    <section id="Work" className="work-contents">
      <div className="work-inner">
        <h2 className='section-title'><span className="pink">・</span>Work<span className="pink section-sub-title">作ったもの</span></h2>
        <div className="work-column">
          <div className="portfolio-contents">
            <div className="portfolio-bg">
              <div className="work-wrap">
                <div className="portfolio-inner">
                  <h2 className="work-title">・Portfolio site</h2>
                  <p className="work-detail-text">デザインから自分で作成し、コーディングしました。アニメーションが心地よいサイトを目指し作成しています。</p>
                  <Link to={'/portfolioPage'} className="work-btn">
                    <img src={Btn} width={88} height={88} alt=""/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="app-contents">
            <div className="app-bg">
              <div className="work-wrap">
                <div className="app-inner">
                  <h2 className="work-title">・App</h2>
                  <p className="work-detail-text">自主制作として、日々勉強しているものになります。</p>
                  <a href="https://github.com/nakaji215/Todo" target="_blank" className="work-btn">
                    <img src={Btn} width={88} height={88} alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work;
