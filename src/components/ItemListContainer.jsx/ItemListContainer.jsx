
import ItemCount from '../ItemCount/ItemCount';





export const ItemListContainer = ({ texto }) => {
    


    const onAdd = (quantity) => {
        console.log (`Compraste ${quantity} unidades`);
    }

    return (
        <>
          <title greeting={texto} />
          <ItemCount initial={3} stock={5} onAdd={onAdd} />
          
        </>
        

    );
}

export default ItemListContainer;