import { Link } from "react-router-dom";
import Btn from '../assets/images/arrow_btn.png'
import '../assets/css/portfolio.css';

const Portfolio = () => {
  return (
    <section className="work-contents portfolio-contents">
      <div className="portfolio-wrap">
        <div className="portfolio-inner">
          <h2 className="section-main-title">・Portfolio site</h2>
          <p>デザインから自分で作成し、コーディングしました。アニメーションが心地よいサイトを目指し作成しています。</p>
          <Link to={'/portfolioPage'}>
            <img src={Btn} width={88} height={88} alt=""/>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
