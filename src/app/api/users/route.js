import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectToDB();
    const users = await User.find({});
    console.log('users:' + users);
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}