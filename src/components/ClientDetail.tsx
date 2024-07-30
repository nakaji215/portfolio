import { HashLink as Link } from 'react-router-hash-link';
import '../assets/css/detail.css';

const ClientDetail = ({ title, imgSrc, description, backLink }) => {
  return (
    <section className="detail-contents">
      <div className='detail-inner'>
        <h2 className='detail-title'>{title}</h2>
        <div className='detail-column'>
          <div className='detail-img-block'>
            <img src={imgSrc} className='detail-img' alt="Client" />
          </div>
          <div className='detail-description-block'>
            <ul className='detail-description-list'>
              {description.map((item, index) => (
                <li key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p className='detail-description-text'>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='back-btn'>
          <Link smooth to={backLink} className='back-btn-text'>← Back</Link>
        </div>
      </div>
    </section>
  );
};

export default ClientDetail;
