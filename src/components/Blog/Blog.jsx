import React from 'react';

function Blog() {
    return (
        <>
            <div className='blog'>
             
                <textarea cols='100' rows='9' />
                  <div className='btns'>
                   <input type="button"  value="Delete"/>
                   <input type="button"  value="Update"/>
                   </div>
            </div>
        </>
    );
}

export default Blog;