import { Link } from "react-router-dom";
import AnimationTrigger from './AnimationTrigger';
import Client0 from '../assets/images/client0.png';
import Client1 from '../assets/images/client1.png';
import Client2 from '../assets/images/client2.png';
import Client3 from '../assets/images/client3.png';
import Client4 from '../assets/images/client4.png';
import Client5 from '../assets/images/client5.png';
import Client6 from '../assets/images/client6.png';
import '../assets/css/client.css';

const Client = () => {
  const clientItems = [
    { id: 'client6', image: Client6, text: '株式会社貝印様 LP', link:'https://www.kai-group.com/fun/tsume_to_tsumekiri_no_ohanashi/index.html'},
    { id: 'client5', image: Client5, text: '株式会社テクノデジタル LP', link:'https://www.tcdigital.jp/recruit/2024/spicy/spicy.html' },
    { id: 'client4', image: Client4, text: '建物登記支援センター株式会社様 改修', link:'https://www.jecom-db.com/jigyou/' },
    { id: 'client3', image: Client3, text: '株式会社テクノデジタル LP', link:'https://www.tcdigital.jp/aws_service/' },
    { id: 'client2', image: Client2, text: '株式会社貝印様 LP', link:'https://www.kobako.com/limited/2023holiday/' },
    { id: 'client1', image: Client1, text: '株式会社セレスポ様 LP', link:'https://atsumarikata-kaikaku.com/sustainable/index.html' },
    { id: '', image: Client0, text: 'チケット会社 照会サイト' },
    { id: '', image: Client0, text: '法人団体 掲示板サイト' },
  ];

  return (
    <section id='Client' className='client-contents'>
      <div className='client-inner'>
        <h2 className='section-heading'>Client Work</h2>
        <div className='client-column'>
          {clientItems.map((client, index) => (
            <AnimationTrigger animation="fadeIn" style={{ animationDelay: `${index * 0.2}s` , opacity: 0}}>
              <div className='client-thumbnail-block'>
                <img src={client.image} className='client-thumbnail-img' alt={client.text} />
                <p className='client-column-text'>{client.text}</p>
                <div className="client-hover-block">
                  <div className="client-hover-inner">
                    <Link to={`/${client.id}`} className='client-link-detail' key={index}>
                      解説を見る
                    </Link>
                    <a href={client.link} className="client-link-site" target="_blank">
                      このサイトを開く
                    </a>
                  </div>
                </div>
              </div>
            </AnimationTrigger>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Client;
