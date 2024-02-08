import React from 'react';
import { ReactComponent as BellIcon } from './bell.svg';

function HeaderPhone() {
    
    return (
        <header id="headerPhone" className='headerClassPhone'>
            <div className='phoneCenterContainer'>
                <div className='pageTitlePhone'>
                    <img src="https://www.testvalley.kr/logo/logo-new.svg" alt="testvalley" />
                </div>
                <div className='notificationPhone'>
                    <BellIcon width={16} height={16} fill="currentColor" className="bi bi-bell bell" />
                    <img src="https://www.testvalley.kr/common/search.svg" alt="" />
                </div>
            </div>
        </header>
    );
}

export default HeaderPhone;