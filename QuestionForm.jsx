import React from 'react';


function QuestionForm(){
    return (
    <div className='Chinar'>

<div className='Gupta'>
        <label>
            Title:
            <textarea placeholder="Enter a descriptive Title "  rows={2} cols={150} />
        </label>
      </div>
        <div>
            <label>                
                Describe Your Problem:
                
                < textarea rows={10} cols={150} />
                
                
            </label>
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

    export default QuestionForm;