"use client";

import UnsubscribeForm from '@/app/components/unsubscribe/UnsubscribeForm';
import React from 'react'


const page = async({params}) => {
  // If params is a promise, await it.
  const resolvedParams = await params; 
  const { email } = resolvedParams;
  return (
    <div><UnsubscribeForm email={email}/></div>
  )
}

export default page


