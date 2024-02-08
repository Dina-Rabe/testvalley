import React from 'react';
import { ReactComponent as BurgerIcon } from './burgerIcon.svg';

function HeaderDesk() {
    
    return (
        <header id="headerDesk" className='headerClass'>
            <div className='headerContent'>
                <div className='category'>
                    <img src="https://www.testvalley.kr/logo/logo-new.svg" alt="testvalley" />
                    <span><BurgerIcon width={20} height={20} fill="currentColor" className="bi bi-list burger" /> category</span>
                </div>
                <div className='searchInput'>
                    <img src="https://www.testvalley.kr/common/search.svg" alt="" />
                    <input
                    className='inputField'
                    type="search"
                    placeholder="If you're wondering whether to buy it or not, search for it!"
                    defaultValue=""
                    />
                </div>
                <div className='authentication'>
                    <button>
                    <img src="https://www.testvalley.kr/common/home-event.svg" alt="" />
                    </button>
                    <img src="https://www.testvalley.kr/common/vertical-bar.svg" alt="" />
                    <button>
                    <span>Login / Sign up</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default HeaderDesk;