"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const CustomButton = ({title,containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled} : CustomButtonProps) => {
  return (
    <button disabled={false}
      type={btnType || 'button'}
      className= {`custom-btn ${containerStyles}`}
      onClick={handleClick}
   
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} fill alt="right icon" className='object-contain'></Image>
        </div>
      )}
    </button>
  )
}

export default CustomButton