import { NextPage } from 'next';
import React from 'react';
import { MdOutlineVideocamOff } from 'react-icons/md';
import {BiCommentX} from 'react-icons/bi';

type NoResultProps = {
    text : string
}

const NoResult : NextPage<NoResultProps> = ({text}) => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <p className='text-6xl'>
        {
          text === 'No comments yet' ? <BiCommentX/> : <MdOutlineVideocamOff/>
        }
        </p>
      <p className='text-xl text-center'>{text}</p>
    </div>
  )
}

export default NoResult