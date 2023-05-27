import React, { useState } from 'react';
import orderCover from "../../assets/shop/banner2.jpg"
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../UseMenu/UseMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const OrderFood = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();

    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = UseMenu();
    const drinks = menu.filter(item => item.category === 'drinks')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss| Order</title>

            </Helmet>
            <Cover img={orderCover} title='order food'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>

                </TabPanel>


                <TabPanel>
                    <OrderTab items={soup}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>

                </TabPanel>

            </Tabs>

        </div>
    );
};

export default OrderFood;