import { NextResponse } from 'next/server';
import config from 'src/config';

export async function PATCH() {
  const response = NextResponse.json({ status: 202 });

  response.cookies.delete(config.cookies.token);
  return response;
}
