import React from 'react'
import PrimaryButton from './PrimaryButton'
import { Button } from '@/components/ui/button'
import SecondaryButton from './SecondaryButton'

const DemoButtons = () => {
  return (
         <div className="p-4">
        <h1>Welcome to My Page</h1>
        <p className="mb-4">Check out this cool button:</p>

        <PrimaryButton
          label="Explore"
          fromColor="bg-primary"
          toColor="bg-secondary"
          className=""
        />
        <PrimaryButton
          label="Submit"
          className=""
          fromColor="bg-secondary"
          toColor="bg-black"
        />
        <Button className="w-[200px] cursor-pointer font-base">Find Tours</Button>

        <SecondaryButton label="Secondary Button" />

      </div>
  )
}

export default DemoButtons