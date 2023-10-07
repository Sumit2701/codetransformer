"use client";
import Image from "next/image";
import down from "../components/Assets/down.svg";
import { useState, useEffect } from "react";
import { LanguageSelect } from "../components/LanguageSelect";
import { CodeBlock } from "@/components/CodeBlock";
import { TextBlock } from "@/components/TextBlock";
import axios from "axios";
export default function Home() {
  const [model, setModel] = useState("gpt-3.5-turbo");
  const [showDropdown, setShowDropdown] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [inputLanguage, setInputLanguage] = useState("JavaScript");
  const [outputLanguage, setOutputLanguage] = useState("Python");
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasTranslated, setHasTranslated] = useState(false);
  

  const handleTranslate = async () => {
    const body = {
      inputLanguage,
      outputLanguage,
      inputCode,
    };
  
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      if (response.ok) {
        const data = await response.json();
        // Process the data as needed, e.g., setOutputCode(data.candidates[0].output);
        setOutputCode(data.candidates[0].output)
      } else {
        setLoading(false);
        console.error('API request failed with status:', response.status);
        alert('Something went wrong.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };
  
 


  useEffect(() => {
    if (hasTranslated) {
      handleTranslate();
    }
  }, [outputLanguage]);

  return (
      
      <div className=" justify-center " id="api">
        <div className=" flex my-3 ">
  <button className="border-4 bg-gray-300 shadow-md my-2 py-1 w-1/2 mx-auto" id="api" onClick={() => handleTranslate()}>
    TRANSLATE
  </button></div>
     
      
      <div className="sm:mx-16   text-sm">
        <div className="sm:flex w-full justify-between">
          <div className="sm:w-1/2 mx-auto sm:mr-4 ">
            <div>
              <div className=" h-10  flex justify-center items-center mt-5 ">
                {" "}
                <LanguageSelect
                  language={inputLanguage}
                  onChange={(value) => {
                    setInputLanguage(value);
                    setHasTranslated(false);
                    setInputCode("");
                    setOutputCode("");
                  }}
                />
              </div>
              {inputLanguage === "Natural Language" ? (
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
          </div>

          <div className="sm:w-1/2 mx-auto sm:ml-4 ">
            <div>
              <div
                className="h-10  flex justify-center items-center mt-5 "
                style={{
                  backgroundColor: "#F6F6F6",
                }}
              >
                <LanguageSelect
                  language={outputLanguage}
                  onChange={(value) => {
                    setOutputLanguage(value);
                    setHasTranslated(true);
                    
                    setOutputCode("");
                  }}
                />
              </div>{" "}
              {outputLanguage === "Natural Language" ? (
                <TextBlock text={outputCode} />
              ) : (
                <CodeBlock code={outputCode} />
              )}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
