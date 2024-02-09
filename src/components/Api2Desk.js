import React, { useEffect, useState } from 'react';

export default function Api2Desk (){
    const [menuList, setMenuList] = useState([]);
    const [countMenuItem, setCountMenuItem] = useState(0);
    useEffect( () => {
        async function fetchData(){
            try {
                const response = await fetch('https://api.testvalley.kr/main-shortcut/all');
                const jsonData = await response.json();
                setMenuList(jsonData);
                setCountMenuItem(jsonData.length);
            } catch (error){
                console.log('Error:', error);
            }
        }
        fetchData();
    }, [menuList]);



    return (
        <div id="Api2Desk">
            <div className='menuContainer'>
                {menuList && menuList.map((data,index) => (
                    <a key={index} href={data.linkUrl} className='menuLink'>
                        <div className='menuItem' style={{width: (960/countMenuItem) - (3*countMenuItem)}}>
                                <img src={data.imageUrl} className='imgMenuIcon' alt={data.title} style={{width: (960/countMenuItem) - (3*countMenuItem), height: (960/countMenuItem) - (3*countMenuItem)}}/>
                                <p>{data.title}</p>
                        </div>
                    </a>
                    ))
                }
            </div>
        </div>
    )
}