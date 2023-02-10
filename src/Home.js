import React, { useState } from 'react'
import Card1 from "./components/card_home";
import { useEffect } from 'react';
import axios from 'axios';
const Home = () => {
    const [plant, setPlant] = useState([])
    useEffect(() => {
        axios.get('http://group14.exceed19.online/plant').then((data) => {setPlant(data.data)
        })
    }, [])

    return (<div>
        <div className='home'>
            <div className='head'>Let's Water the Plants
                <img src="https://cdn.discordapp.com/attachments/942709647641550870/1073424235034316871/drops.png" alt="home" width='20' />
            </div>
            {plant.map(plant => <Card1 id={plant.plant_id} date={plant.plant_date} moist={plant.moisture} temp={plant.temperature} light={plant.light}/>)}
        </div>
    </div>

    )
}

export default Home