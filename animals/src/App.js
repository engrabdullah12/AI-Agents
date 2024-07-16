import './App.css';
import { useState } from "react";
import AnimalShow from './AnimalShaow';

function getRandomAnimal() {
    const animals = ["dog", "cat", "bird", "cow", "gator","horse","heart"]
    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimal = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div>{renderedAnimal}</div>
        </div>
    );
}

export default App;