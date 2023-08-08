'use client'
import Image from 'next/image';
import down from '../components/Assets/down.svg'
import { useState,useEffect } from 'react';
import {LanguageSelect} from '../components/LanguageSelect'
import { CodeBlock } from '@/components/CodeBlock';
import { TextBlock } from '@/components/TextBlock';
export default function Home() {
  const [model, setModel] = useState('gpt-3.5-turbo');
  const [showDropdown, setShowDropdown] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [inputLanguage, setInputLanguage] = useState('JavaScript');
  const [outputLanguage, setOutputLanguage] = useState('Python');
  const [inputCode, setInputCode] = useState('');
  const [outputCode, setOutputCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasTranslated, setHasTranslated] = useState(false);
  
  const handleTranslate = async () => {
    
    
    const maxCodeLength = model === 'gpt-3.5-turbo' ? 6000 : 12000;

    if (!apiKey) {
      alert('Please enter an API key.');
      return;
    }

    if (inputLanguage === outputLanguage) {
      alert('Please select different languages.');
      return;
    }

    if (!inputCode) {
      alert('Please enter some code.');
      return;
    }

    if (inputCode.length > maxCodeLength) {
      alert(
        `Please enter code less than ${maxCodeLength} characters. You are currently at ${inputCode.length} characters.`,
      );
      return;
    }

    setLoading(true);
    setOutputCode('');

    const controller = new AbortController();

    const body = {
      inputLanguage,
      outputLanguage,
      inputCode,
      model,
      apiKey,
    };

    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      setLoading(false);
      alert('Something went wrong.');
      return;
    }

    const data = response.body;

    if (!data) {
      setLoading(false);
      alert('Something went wrong.');
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let code = '';

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      code += chunkValue;

      setOutputCode((prevCode) => prevCode + chunkValue);
    }

    setLoading(false);
    setHasTranslated(true);
    copyToClipboard(code);
  };

  const handleDropdownClick = (value) => {
    setModel(value);
    setShowDropdown(false); // Hide the dropdown after selection
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };


  useEffect(() => {
    if (hasTranslated) {
      handleTranslate();
    }
  }, [outputLanguage]);

  
  return (<div className='  '   id='api'> 
    <div className='  md:flex     uppercase' id='api'>

{/// do not below above this
}

     <div
        className='border-black border-4 md:h-20 md:ml-16  md:w-1/2 mr-4 flex justify-center items-center mt-5  '
        style={{
          backgroundColor: '#F6F6F6',
        }}
      >
        <input
          className='text-base md:text-2xl border-2'
          id='api'
          type="password"
          value={apiKey}
          onChange={(e)=>{setApiKey(e.target.value);
            console.log(e.target.value)
           }}
          placeholder='ENTER YOUR API KEY..'
        />
      </div>


      <div className='md:flex md:w-1/2 justify-between items-center  md:mr-16 ml-4 mt-5  md:h-20'>
      <div className='flex  md:w-full justify-center '>
      <div
        className='border-black  border-4  md:h-20 w-1/2 md:w-full  flex bg-gray-300   justify-center items-center  '
        
      >
        <button className='  text-xs md:text-2xl ' id='api'
         onClick={() => handleTranslate()}>
          TRANSLATE
        </button>
      </div></div>
      
      
      
      <div className='flex md:h-20 md:w-full  justify-center'>
      <div
        className='border-black border-4 md:my-0 my-2 md:ml-4 md:w-full w-1/2 flex justify-center items-center  '
        style={{
          backgroundColor: '#F6F6F6',
        }}
      >
        <div className='relative'>
          <button
            className='text-base md:text-2xl uppercase items-center flex'
            onClick={toggleDropdown}
            id='api'
          >
            {model}
            <Image src={down} className='w-5 m-2'/>
          </button>
          {showDropdown && (
            <div className='absolute mt-2 z-50'>
              <ul className='bg-white border rounded shadow-md'>
                <li
                  className='cursor-pointer px-4 py-2 hover:bg-gray-100'
                  onClick={() => handleDropdownClick('gpt-3.5-turbo')}
                >
                  gpt3.5
                </li>
                <li
                  className='cursor-pointer px-4 py-2 hover:bg-gray-100'
                  onClick={() => handleDropdownClick('gpt4')}
                >
                  gpt4
                </li>
              </ul>
            </div>
          )}
        </div>
      </div></div></div>
      
      
      
      </div>
{/// do not change above this
}


 <div className='md:mx-16   '>
      <div className='md:flex w-full justify-between'>
        <div className='md:w-1/2 mx-auto md:mr-4 '>
            <div>
            <div
        className=' h-10  flex justify-center items-center mt-5 '
        
      > <LanguageSelect
      language={inputLanguage}
      onChange={(value) => {
        setInputLanguage(value);
        setHasTranslated(false);
        setInputCode('');
        setOutputCode('');
      }}
    />
      
      </div>
      {inputLanguage === 'Natural Language' ? (
              <TextBlock
                text={inputCode}
                editable={!loading}
                onChange={(value) => {
                  setInputCode(value);
                  setHasTranslated(false);
                }}
              />
            ) : (
              <CodeBlock
                code={inputCode}
                editable={!loading}
                onChange={(value) => {
                  setInputCode(value);
                  setHasTranslated(false);
                }}
              />
            )}
            </div>
           <div className=' flex border-4  '>
           </div>
        </div>
       
        <div className='md:w-1/2 mx-auto md:ml-4'>
 <div>
            <div
        className='h-10  flex justify-center items-center mt-5 '
        style={{
          backgroundColor: '#F6F6F6',
        }}
      >
       <LanguageSelect
      language={outputLanguage}
      onChange={(value) => {
        setOutputLanguage(value);
        setHasTranslated(true);
        setInputCode('');
        setOutputCode('');
      }}
    />
      </div> {outputLanguage === 'Natural Language' ? (
              <TextBlock text={outputCode} />
            ) : (
              <CodeBlock code={outputCode} />
            )}
            </div>
            <div>



            </div>
        </div>
      </div>
      </div>
      </div>
 
  );
}