const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("complimentButton")  


//

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)          //  

const readFortune = () => {
    axios.get("http://localhost:4000/fortune/")             //
        .then(res => {
            const data = res.data;
            alert(data);
    });
        .catch((error) => {
            console.log('Got an Error, try again!')
        })
};

fortuneBtn.addEventListener('click', readFortune) 

//
const addDrink = () => {
axios.post("http://localhost:4000/drink/", {
    id:    0818,
    name: "Boba Taro",
    Description:  "Purple & Sweet Juice"
})
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
};
drinkBtn.addEventListener('click', addDrink) 

const changeDrink = () => {
    axios.put("http://localhost:4000/drink/", {
        id:    0323,
        name: "Boba milk",
        Description:  "Milk Tea with pearls"
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
};
    drinkBtn.addEventListener('click', changeDrink) 

    const deleteDrink = () => {
        axios.delete("http://localhost:4000/drink/", {
            id:    0428,
            name: "Boba mountainDew",
            Description:  "Pearls in the Soda"
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
 }
        drinkBtn.addEventListener('click', deleteDrink)