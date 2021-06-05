import React from 'react';
const lineSvg = require('../../../images/line.svg');

const Content = () => {
    return (
        <div className='about-content-info'>
            <p className='title'>預約方式</p>
            <ul>
                <li>個人工作室，採完全預約制，請勿遲到唷</li>
                <li>LINE 官方帳號：
                    <a href="https://line.me/R/ti/p/%40beisnest" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block'}}>
                        <img 
                            src={lineSvg} 
                            className='social-link-icon'
                            alt='line-logo'
                        />
                    </a>
                </li>
                <li>預約：
                    <a href="https://line.me/R/ti/p/%40beisnest" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block'}}>
                        <img 
                            src={lineSvg} 
                            className='social-link-icon'
                            style={{marginRight: '10px'}}
                            alt='line-logo'
                        />
                    </a>
                    (點擊圖示開啟 Line)
                </li>
            </ul>
            <br />
            <p className='title'>服務項目</p>
            <ul >
                <li>嫁接睫毛：</li>
                <p>單根嫁接、多根嫁接</p>
                <li>美容 SPA：</li>
                <p>無痛粉刺、淨化排酸、臉部保養</p>
            </ul>
        </div>
    );
}

export default Content;