import React from 'react';

function Button(){
    /* function handleClick() {
        alert('你点击了我！');
    }

    return(
        <button onClick={handleClick}>未绑定任何事件</button>
    ); */

    return (
        <button onClick={()=>{alert('你点击了我！');}}>
            点我试试
        </button>
    )
}

export default Button;