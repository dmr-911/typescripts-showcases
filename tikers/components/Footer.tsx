import React from 'react';
import { footerList1, footerList2, footerList3 } from '../utils/constants';

export type ListProps = {
    list : string[],
    mt: boolean
}

const List = ({list, mt}: ListProps) =><div className={`flex flex-wrap gap-2 ${mt ? 'mt-5' : null}`}>
{
    list.map((item)=><p className='text-gray-400 text-sm hover:underline cursor-pointer' key={item}>
        {item}
    </p>)
}
</div>

const Footer = () => {
  return (
    <div className='mt-6 hidden xl:block'>
        <div className='flex flex-wrap gap-2 mt-5'>
            <List list={footerList1} mt={false}/>
            <List list={footerList2} mt/>
            <List list={footerList3} mt/>
            <p className='text-gray-400 text-sm mt-5'>2022 Tikers</p>
        </div>
    </div>
  )
}

export default Footer