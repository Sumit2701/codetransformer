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
  // const handleTranslate = async () => {

  //   const maxCodeLength = model === 'gpt-3.5-turbo' ? 6000 : 12000;

  //   if (!apiKey) {
  //     alert('Please enter an API key.');
  //     return;
  //   }

  //   if (inputLanguage === outputLanguage) {
  //     alert('Please select different languages.');
  //     return;
  //   }

  //   if (!inputCode) {
  //     alert('Please enter some code.');
  //     return;
  //   }

  //   if (inputCode.length > maxCodeLength) {
  //     alert(
  //       `Please enter code less than ${maxCodeLength} characters. You are currently at ${inputCode.length} characters.`,
  //     );
  //     return;
  //   }

  //   setLoading(true);
  //   setOutputCode('');

  //   const controller = new AbortController();

  //   const body = {
  //     inputLanguage,
  //     outputLanguage,
  //     inputCode,
  //     model,
  //     apiKey,
  //   };

  //   const response = await fetch('/api', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     signal: controller.signal,
  //     body: JSON.stringify(body),
  //   });

  //   if (!response.ok) {
  //     setLoading(false);
  //     alert('Something went wrong.');
  //     return;
  //   }

  //   const data = response.body;

  //   if (!data) {
  //     setLoading(false);
  //     alert('Something went wrong.');
  //     return;
  //   }

  //   const reader = data.getReader();
  //   const decoder = new TextDecoder();
  //   let done = false;
  //   let code = '';

  //   while (!done) {
  //     const { value, done: doneReading } = await reader.read();
  //     done = doneReading;
  //     const chunkValue = decoder.decode(value);

  //     code += chunkValue;

  //     setOutputCode((prevCode) => prevCode + chunkValue);
  //   }

  //   setLoading(false);
  //   setHasTranslated(true);
  //   copyToClipboard(code);
  // };

  const handleTranslate = async () => {
    let prompt = {
      prompt: {
        text: `please translate this code from ${inputLanguage} to ${outputLanguage} , code is as follow ${inputCode} and i dont want any single comment in the code and dont mention the language`,
      },
    };

    axios
      .post(
        "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=AIzaSyDBZ8-fQ3fNImCFvR_b6dUeVK3bIPzIXpg",
        prompt
      )
      .then((response) => setOutputCode(response.data.candidates[0].output));
  };

  const handleDropdownClick = (value) => {
    setModel(value);
    setShowDropdown(false); // Hide the dropdown after selection
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const copyToClipboard = (text) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  useEffect(() => {
    if (hasTranslated) {
      handleTranslate();
    }
  }, [outputLanguage]);

  return (
      
      <div className=" justify-center " id="api">
        <div className=" flex my-3 ">
  <button className="border-4  w-1/2 mx-auto" id="api" onClick={() => handleTranslate()}>
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
