import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.scss';

const Brand = () => (
    <div className="gpt3__brand section__padding">
        <div className='gpt3__brand__item'>
            <img src={google} />
        </div>
        <div className='gpt3__brand__item'>
            <img src={slack} />
        </div>
        <div className='gpt3__brand__item'>
            <img src={atlassian} />
        </div>
        <div className='gpt3__brand__item'>
            <img src={dropbox} />
        </div>
        <div className='gpt3__brand__item'>
            <img src={shopify} />
        </div>
    </div>
);
export default Brand