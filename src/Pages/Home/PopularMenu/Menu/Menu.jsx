import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../../Shared/Cover/Cover';
import menuImg from "../../../../assets/menu/banner3.jpg"
import desertimg from "../../../../assets/menu/dessert-bg.jpeg"
import pizzaimg from "../../../../assets/menu/pizza-bg.jpg"
import saladimg from "../../../../assets/menu/salad-bg.jpg"
import soupimg from "../../../../assets/menu/soup-bg.jpg"

import UseMenu from '../../../../UseMenu/UseMenu';
import CategoryItems from './CategoryItems/CategoryItems';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';


const Menu = () => {
    const [menu]=UseMenu();
    const offered=menu.filter(item=>item.category==='offered')
    const pizza=menu.filter(item=>item.category==='pizza')
    const salad=menu.filter(item=>item.category==='salad')
    const dessert=menu.filter(item=>item.category==='dessert')
    const soup=menu.filter(item=>item.category==='soup')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss|menu</title>
               
            </Helmet>
            <Cover img={menuImg} title='Our Menu'></Cover>
            <SectionTitle subHeading='Dont Miss' heading='todays offer'></SectionTitle>
            <CategoryItems items={offered}></CategoryItems>
            <Cover img={desertimg}title='dessert'></Cover>
            <CategoryItems items={dessert}></CategoryItems>
            <Cover img={pizzaimg}title='pizza'></Cover>
            <CategoryItems items={pizza}></CategoryItems>
            <Cover img={saladimg}title='salad'></Cover>
            <CategoryItems items={salad}></CategoryItems>
            <Cover img={soupimg}title='soup'></Cover>
            <CategoryItems items={soup}></CategoryItems>

            
        </div>
    );
};

export default Menu;