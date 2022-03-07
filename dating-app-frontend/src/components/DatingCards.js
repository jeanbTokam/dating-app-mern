import React, {useState, useEffect} from 'react';
import DatingCard from 'react-tinder-card';
import './DatingCards.css';
import axios from './axios'

// I DOWNLOAD IMAGE FROM THIS https://unsplash.com/t/people  and RIGHT click an copy image link
const DatingCards = () => {
    
const [people, setPeople] = useState([])   // I get rid of hardcoded stuff and save it on the desktop for future use
useEffect(() =>{
    async function fetchData() {
        const req = await axios.get("/dating/cards")
        setPeople(req.data)
    }
fetchData()
}, [])

const swiped = (direction, nameTodelete) => {
    console.log("receiving" + nameTodelete)
}
const outOfFrame =(name) => {
    console.log(name + "left the screen!!")   
}

  return (
    <div className='datingCards'>
        <div className="datingCards_container">
            {people.map((person) => (
                <DatingCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up','down']}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}>
                        
                    <div style={{backgroundImage:`url(${person.imgUrl})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </DatingCard>
            ))}
        </div>
    </div>
  )
}

export default DatingCards
