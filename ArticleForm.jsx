import React from 'react';

function ArticleForm(){
    return (
    <div className='Chinar'>

<div className='Gupta'>
        <label>
            Title:
            <textarea placeholder="Enter a descriptive Title "  rows={2} cols={150} />
        </label>
      </div>
        <div className='array'>
        
          <label> Abstract: </label>  
            <textarea placeholder="enter a abstract" cols={150} rows={6} />
        </div>

        <div className='Brother'>
        <span>
            Article Text:
        </span>
        <textarea placeholder="Enter a 1- paragraph article "  rows={10} cols={150} />
      </div>
      <div >
        <span>
            Tags:
            <textarea placeholder="Please add upto 3 tags to describe what you question is about " rows={2} cols={150} />
        </span>
      </div>

      <button>Post</button>
      </div>
    );

    }

    export default ArticleForm;