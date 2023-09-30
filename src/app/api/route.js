import { NextResponse } from 'next/server'


export async function POST (req) {
  try {
    const { inputLanguage, outputLanguage, inputCode} =
      (await req.json());
      let prompt = {
        prompt: {
          text: `please translate this code from 
          ${inputLanguage} to ${outputLanguage},
           code is as follow ${inputCode} and 
           i dont want any single comment in 
           the code and dont mention the language`,
        },
      };
  
      axios
        .post(
          `https://generativelanguage.googleapis.com/v1beta2/models/text-
          bison-001:generateText?key=${process.env.API_KEY}`,
          prompt
        )
        .then((response) => console.log(response.data.candidates[0].output));
   

    
  } catch (error) {
    console.error(error);
    return new NextResponse('Error', { status: 500 });
  }
};

