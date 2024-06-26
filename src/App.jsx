import './App.scss';
import { data, data2 } from './db/data'
import rating from './assets/img/rating.svg'
import admin from './assets/img/Admin.png'
import bell from './assets/img/bell.svg';
import ratingOne from './assets/img/ratingOneStar.svg';
import sideBar from './assets/img/sidebar_hero.png';

function App() {

  return (
    <>
    <main className='project'>
      <div className="container">
        <div className="wrapper">
          <div className="main">
            <div className="nav">
              <ul>
                <li>Game</li>
                <li>Live score</li>
                <li>Statistics</li>
                <li>Analitics</li>
                <li>Forecasts</li>
              </ul>
            </div>
            <div className="hero">
              <div className="hero__content">
              <h1>The Forbidden Kingdom Adventure War</h1>
              <br />
              <button>More Details</button>
              </div>
            </div>
            <div className="popular">
              <h2>Most Popular Games</h2>
              <div className="card__hug">
                <div className="card">
                  <h3>Sniper 2</h3>
                  <img src={ratingOne} alt="" />
                </div>
                <div className="card card2">
                <h3>Motor Race</h3>
                <img src={ratingOne} alt="" />
                </div>
                <div className="card card3">
                <h3>Witcher Hunt</h3>
                <img src={ratingOne} alt="" />
                </div>
                <div className="card card4">
                <h3>PUBG War</h3>
                <img src={ratingOne} alt="" />
                </div>
                <div className="card card5">
                <h3>Sniper 2</h3>
                <img src={ratingOne} alt="" />
                </div>
              </div>
            </div>
            <div className="new">
              <h2>New Released Games</h2>
              <div className="new__card__hug">
              {data.map(game => {
                return (
                    
                        <div key={game.id} className='small-card'>
                            <div className="small-card-img"><img src={game.image} alt="" /></div>
                            <div className="small-card-content">
                                <h3>{game.title}</h3>
                                <p>{game.category}</p>
                                <img src={rating} alt="4.5 * * * * *" />
                            </div>
                        </div>
                    
                )
            })}
            </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="admin-bell">
              <img src={admin} alt="" />
              <span>William Johnson</span>
              <img src={bell} alt="" />
            </div>
            <h2>Live Game</h2>
            <div className="orangeDiv"></div>
            {data2.map(game => {
                return (
                    
                        <div key={game.id} className='small-card'>
                            <div className="small-card-img"><img src={game.image} alt="" /></div>
                            <div className="small-card-content">
                                <h3>{game.title}</h3>
                                <p>{game.category}</p>
                            </div>
                        </div>
                    
                )
            })}
            <div className="oneGame">
              <div className='oneGame__img'>
                <img src={sideBar} alt="" />
              </div>
              <div className="oneGame__content">
                <h3>Need For Speed</h3>
                <span>Racing</span>
                <img src={rating} alt="" />
                <p>Interactively synergize revolutionary viasustaina communities. Energistically foster distinctiveide resource maximizing.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
