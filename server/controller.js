module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    readFortune: (req, res) => {
        const fortunes = ["A good time to finish up old tasks", 
                          "Believe in yourself and others will too", 
                          "Chance favors those in motion", 
                          "Don't just think, act!", 
                          "Every flower blooms in its own sweet time", 
                          "Failure is the change to do better next time", 
                          "Go take a rest; you deserve it", 
                          "Happiness will bring you good luck"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    };

    // Add new drink
    addDrink: (req, res) => {
        const fortunes = [];
      
        res.status(200).send(randomDrink);
    }

    changeDrink: (req, res) => {
        const fortunes = [];
      
        res.status(200).send(randomDrink);
    }

    deleteDrink: (req, res) => {
        const fortunes = [];
      
        res.status(200).send(randomDrink);
    }
}