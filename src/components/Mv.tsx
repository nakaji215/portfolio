import AnimationTrigger from "./AnimationTrigger";
import '../assets/css/mv.css';

const Mv = () => {
  return (
    <section id='mv' className='mv-contents'>
      <div className='mv-inner'>
        <div className='mv-column'>
          <div className='mv-title-block'>
            <h1 className='mv-title'>
              <p className='mv-title-text'>SHUTA NAKAJI</p>
              <p className='mv-title-text'>SHUTA NAKAJI</p>
              <p className='mv-title-text'>SHUTA NAKAJI</p>
              <p className='mv-title-text'>SHUTA NAKAJI</p>
            </h1>
          </div>
        </div>
        <div className='mv-heading-block'>
          <AnimationTrigger animation="fade-out" startClass="fade-out-hidden">
            <p className='mv-heading'>ナカジシュウタ</p>
            <p className='mv-heading'>ポートフォリオサイト</p>
          </AnimationTrigger>
        </div>
      </div>
    </section>
  );
};

export default Mv;
