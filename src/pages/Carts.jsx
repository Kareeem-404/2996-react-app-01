const response = await fetch('https://dummyjson.com/carts')
const data = await response.json()
const { carts } = data
console.log(data);

export default function Carts() {
    return (
        <div>
            {carts.map(cart => 
                <div key={cart.id}>

                </div>
            )}
        </div>
    )
};