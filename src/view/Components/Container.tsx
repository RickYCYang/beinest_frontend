import React from 'react';

const Container = (props: any) => {
    const children = props.children;
    let align = props.align;
    if (['center', 'left', 'right'].indexOf(align) < 0) {
        align = 'center';
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