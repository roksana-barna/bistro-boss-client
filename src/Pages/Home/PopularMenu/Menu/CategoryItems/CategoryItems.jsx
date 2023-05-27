import React from 'react';
import MenuItem from '../../../MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const CategoryItems = ({items,img,title}) => {
    return (
        <div>

             <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-10'>
               {
                 items.map(item=><MenuItem
                 key={item.id}
                 item={item}
                 ></MenuItem>)
               }
            </div>
            <div className='text-center'>
<Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-4">Order your Favourite Food</button>
</Link>
</div>
            
        </div>
    );
};

export default CategoryItems;