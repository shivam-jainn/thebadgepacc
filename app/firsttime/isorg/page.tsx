"use client";
import React, { useState } from 'react';
import { Card } from '@nextui-org/card';
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

let options = [
  { label: "Yes", value: "true", key: "true" },
  { label: "No", value: "false", key: "false" },
];

export default function Page() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);        
  };

  const handleContinueClick = async () => {
    try {
      console.log(selectedOption);
      const response = await fetch('/api/firsttime/isorg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isorg: selectedOption }),
      });

      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      router.push('/firsttime/username-bio')

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const router = useRouter();

  return (
    <Card className='max-w-sm gap-4 p-2 m-auto border-2 border-gray-300 border-solid'>
      <Select isRequired label='Are you an organisation?' onChange={handleOptionChange} value={selectedOption}>
        {options.map((option) => (
          <SelectItem key={option.key} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>

      <Button fullWidth onClick={handleContinueClick}>
        <h4 className="text-large">Continue</h4>
      </Button>
    </Card>
  );
}
