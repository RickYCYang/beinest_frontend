import React from 'react';

interface props {
    children : any,
    align?: string
}

const Container = (props: props) => {
    let {children, align} = props;
    //let align = props.align;
    if(align){
        if (['center', 'left', 'right'].indexOf(align) < 0) {
            align = 'center';
        }
    }
    return (
        <div className={`container-${align}`}>
            <div style={{width: '100%'}}>
                {children}
            </div>
        </div>
    );
}

export default Container;