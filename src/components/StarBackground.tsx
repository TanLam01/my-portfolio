import { useEffect, useState } from "react"

type Star = {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    animationDuration: number;
};

type Meteor = {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    animationDuration: number;
}

export default function StarBackground() {
    const [stars, setStars] = useState<Star[]>([]);
    const [meteors, setMeteors] = useState<Meteor[]>([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const generateStars = () => {
        const numbersOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];

        for (let i = 0; i < numbersOfStars; i++) {
            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1, // Random size between 1 and 4
                opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2, // Random duration between 2 and 6 seconds
            });
        }
        setStars(newStars);
    }

    const generateMeteors = () => {
        const numbersOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numbersOfMeteors; i++) {
            newMeteors.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 20,
                size: Math.random() * 2 + 1, // Random size between 1 and 3
                delay: Math.random() * 15, // Random delay between 0.5 and 1
                animationDuration: Math.random() * 3 + 3, // Random duration between 2 and 6 seconds
            });
        }
        setMeteors(newMeteors);
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    opacity: star.opacity,
                    animationDuration: `${star.animationDuration}s`
                }} />
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor" style={{
                    width: `${meteor.size * 50}px`,
                    height: `${meteor.size * 2}px`,
                    left: `${meteor.x}%`,
                    top: `${meteor.y}%`,
                    animationDelay: `${meteor.delay}`,
                    animationDuration: `${meteor.animationDuration}s`
                }} />
            ))}
        </div>
    )
}
