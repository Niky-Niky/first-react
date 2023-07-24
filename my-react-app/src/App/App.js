import painting from '../painting.json';
const item = painting[0];

export function App (){
  return (
    
    <div>
  <img src={item.url} alt="" width="480" />
  <h2>
{item.title}
  </h2>
  <p>Author: 
    <a href={item.author.tag}>
    </a>
    </p>
  <p>Price: {item.price} UAH</p>
  <p>Доступність: {item.quantity > 5 ? 'In stock' : 'Running out'}</p>
  <button type="button">Додати в кошик</button>
</div>
    
    
  )
}