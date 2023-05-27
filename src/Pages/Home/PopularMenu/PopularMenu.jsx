import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../MenuItem/MenuItem';
import UseMenu from '../../../UseMenu/UseMenu';

const PopularMenu = () => {
const [menu]=UseMenu();
const popular=menu.filter(item=>item.category==='popular')
    
    return (
        <div>
            <section>
              <SectionTitle
              heading='From Our Menu'
              subHeading="Popular Items"
              
              >

              </SectionTitle>
            </section>
            <div className='grid sm:grid-cols-1 md:grid-cols-2'>
               {
                 popular.map(item=><MenuItem
                 key={item._id}
                 item={item}
                 ></MenuItem>)
               }
            </div>
<div className='text-center'>
<button className="btn btn-outline border-0 border-b-4 mt-4">Our Full Menu</button>

</div>
            
        </div>
    );
};

export default PopularMenu;