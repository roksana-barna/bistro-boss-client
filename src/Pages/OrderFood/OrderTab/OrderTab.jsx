import React from 'react';
import FoodCard from '../../../Shared/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div>
             <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
                        {
                            items.map(item=><FoodCard
                            key={item._id}
                            item={item}
                            >

                            </FoodCard>)
                        }
                    </div>
            
        </div>
    );
};

export default OrderTab;