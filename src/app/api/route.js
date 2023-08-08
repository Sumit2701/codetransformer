import { OpenAIStream } from '@/utils';
import { NextResponse } from 'next/server'
export const config = {
  runtime: 'edge',
};

export async function POST (req) {
  try {
    const { inputLanguage, outputLanguage, inputCode, model,
      apiKey, } =
      (await req.json());

    const stream = await OpenAIStream(
      inputLanguage,
      outputLanguage,
      inputCode,
      model,
      apiKey,
    );

    return new NextResponse(stream);
  } catch (error) {
    console.error(error);
    return new NextResponse('Error', { status: 500 });
  }
};

