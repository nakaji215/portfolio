
import profileImg from '../assets/images/profile2.png'
import Mail from '../assets/images/mail.svg'
import '../assets/css/about.css'

const About = () => {

  return (
      <section id='About' className="about-contents">
        <div className="about-inner">
          <h2 className="section-title">・About<span className="section-sub-title">私について</span></h2>
          <div className="about-column">
            <div className="about-detail-block">
              <div className='about-detail-heading-block'>
                <p className="about-detail-heading">中路 修太</p>
                <p className="about-detail-sub-heading">Shuta Nakaji</p>
              </div>
              <ul className='about-detail-list'>
                <li>
                  <p className="about-detail-text"><img src={Mail} alt='Mail' className='mail-icon' /><a href='message:'>nakajishuta215@gmail.com</a></p>
                </li>
                <li>
                  <p className="about-detail-text">専門学校HAL名古屋　高度情報学科　卒業</p>
                </li>
                <li>
                  <p className="about-detail-text">フロントエンドエンジニアとして、現在はマークアップの業務を主に行っております。個人開発でアプリを制作したことをきっかけにアプリ開発に興味を持ち、モダンなアプリ開発に携わりたいと考えております。</p>
                </li>
                <li>
                  <p className="about-detail-text">現在、友達４人とライブ配信ツールのアプリ制作を行っています。フロントエンドを担当しており、PythonとHTML,CSS,JavaScriptを使用して現在開発中です。完成次第、ポートフォリオにも掲載予定です。,CSS,JavaScriptを使用して現在開発中です。完成次第、ポートフォリオにも掲載します。</p>
                </li>
                <li>
                  <p className="about-detail-text">趣味は漫画やアニメ、映画鑑賞です。漫画は少年漫画が好きです。最近は一眼レフカメラを購入したので、天気のいい日によくカメラを持って撮りたいものを探しながら散歩しています。</p>
                </li>
              </ul>
            </div>
            <div className="about-profile-block">
              <img src={profileImg} className='about-profile-img' alt='Profile'></img>
            </div>
          </div>
          <div className='about-link-block'>
            <div className='about-link-btn-block'>
              <a href='message:' className='about-link-btn'><img src={Mail} alt='Mail' className='mail-icon' />Mail</a>
            </div>
            <div className='about-link-btn-block'>
              <a href='https://github.com/nakaji215' className='about-link-btn' target='_blank'>Github</a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About