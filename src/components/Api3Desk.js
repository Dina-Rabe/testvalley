import React, { useEffect, useState } from 'react';

function fetchPublicationList(param){
    
    let response = [];
    for (let i=0; i<param.length;i++){
        let tempResponse = {
            'id':param[i].publication.id,
            'title' : param[i].publication.title,
            'prefaceIconUrl': param[i].publication.prefaceIconUrl,
            'productName':param[i].publication.productName,
            'brandName': param[i].publication.brandName,
            'media': param[i].publication.media[0],
            'priceInfo': param[i].publication.priceInfo,
            'discounts': param[i].publication.discounts[0],
            'preface': param[i].publication.preface

        };
        
        response.push(tempResponse);
    }
    return response;
}

function createProduct(param){
    
    let productTitle = (
            <div className='productGroup'>
                <h4>{param.title}</h4>
                <p>{param.subtitle}</p>
            </div>
    );
    let productItemList = param.items;
    let publicationList = fetchPublicationList(productItemList);
    let publication = (
        <div className='productPublication'>
        {publicationList.map((data,index)=> (
            <div key={data.id} className='productItem'>
                <img src={data.media.uri} className='imgMedia' />
                <p>{data.title}</p>
                <p>{data.brandName}</p>
                <h6>{data.priceInfo.discountRate}% {data.priceInfo.discountPrice}</h6>
                <img src={data.prefaceIconUrl} className='imgPreface'/>
                <p>{data.preface}</p>
            </div>
        ))}
        </div>
    );
    return {
        'productTitle': productTitle,
        'publication' :publication
    };
}

function rendreProductList(param){
    let result = [];
        for (let i=0; i<param.length; i++){
            result.push(createProduct(param[i]));
        }
        return result;
}

export default function Api3Desk(){
    const [productList, setProductList] = useState([]);
    const [productComponentList, setProductComponentList] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            try{
                const response = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount');
                const jsonList = await response.json();
                const jsonListFiltered = jsonList.items.filter(
                    item => item.type === 'SINGLE' && item.viewType === 'TILE'
                );
                const temp_list = rendreProductList(jsonListFiltered);
                setProductList(jsonListFiltered);
                setProductComponentList(temp_list);
            }catch(error){
                console.log('Error:', error);
            }
        }
        fetchData();
    },[productList]);
    
    
    return (
        <div id="Api3Desk" className='Api3Content'>
        {productComponentList && productComponentList.map((data,index) => (
            <div key={index} className='productCategory'>
                {data['productTitle']}
                <div className='contentToSlide'>
                    {data['publication']}
                </div>
            </div>
        ))}
        </div>
    )
}