
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { inputLanguage, outputLanguage, inputCode } = await req.json();
    const prompt = {
      prompt: {
        text: `please translate this code from ${inputLanguage} to ${outputLanguage}, code is as follows:\n${inputCode}\nand I don't want any single comment in the code and don't mention the language`,
      },
    };
    
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prompt),
    });

    if (response.ok) {
      const data = await response.json();
      return new NextResponse(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } else {
      console.error('API request failed with status:', response.status);
      return new NextResponse("API Request Failed", { status: response.status });
    }
  } catch (error) {
    console.error(error);
    return new NextResponse("Error", { status: 500 });
  }
}
