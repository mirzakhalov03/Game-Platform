import React from 'react'
import './card.scss'
import { data } from '../../db/data'

const Card = () => {




  return (

    <div>
        {
            data.map(game => {
                return (
                    
                        <div className='small-card'>
                            <div className="small-card-img"><img src={game.image} alt="" /></div>
                            <div className="small-card-content">
                                <h3>{game.title}</h3>
                                <p>{game.category}</p>
                                <img src="./assets/img/rating.svg" alt="" />
                            </div>
                        </div>
                    
                )
            })
        }
    </div>
  )
}

export default Card