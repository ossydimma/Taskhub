
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react';

export default function phoneInput(number: string) {
    const [phoneNumber, setPhoneNumber] = useState('')
  return (
    <div>
        <PhoneInput
            country={'us'}
            value={phoneNumber}
            onChange={(phone) =>{ setPhoneNumber(phone); number = phone; console.log(number)}}
            inputStyle={{
            width: '100%',
            height: '40px',
            borderRadius: '5px',
            border: '2px solid #7b7878',
            padding: '10px',
            paddingLeft: '14%',
            fontSize: '16px',
            }}
        />
    </div>
  )
}
