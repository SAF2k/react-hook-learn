import React from 'react'

interface CounterProps {
    text: string;
    count: number;
}

const Counter:React.FC<CounterProps> = ({text,count}) => {
    console.log(`Rendering ${text}`);
  return (
    <div>
        <span>{text} - {count}</span>
    </div>
  )
}

const MemoizedCount =React.memo(Counter)

export default MemoizedCount;