import { NextPage } from 'next';
import React from 'react';

type NoResultProps = {
    text : string
}

const NoResult : NextPage<NoResultProps> = ({text}) => {
  return (
    <div>NoResult</div>
  )
}

export default NoResult