const DummyMeals=()=>{
    const Meals=[
        {
            food: "Sushi",
            desc: "Finest fish and veggies",
            price: '22.99'
        },
        {
            food: "Schnitzel",
            desc: "A german speciality",
            price: '16.50'
        },
        {
            food: "Barbecue Burger",
            desc: "American, raw, meaty",
            price: '12.99'
        },
        {
            food: "Green Bowl",
            desc: "Finest fish and veggiesHealthy... and green...",
            price: '22.99'
        }
    ]
    const mealItem=Meals.map((ele)=>{
        return(
        <ul>
            <li>{ele.food}</li>
            <li>{ele.desc}</li>
            <li>${ele.price}</li>
        </ul>
            )
    })
    return(
        <div>
            {mealItem}
        </div>
    )
    
}
export default DummyMeals;