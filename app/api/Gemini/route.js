import * as fs from "node:fs";
import { GoogleGenAI } from "@google/genai";


export async function GET() {
  // return Response.json({ message: "This is a GET request" });

const img = GenerateImage();

return Response.json({"data" : img});

}


async function GenerateImage() {

  const ai = new GoogleGenAI({
    apiKey: "AIzaSyCwmVpFImvjhxyohq4fU2vBZFDA5ZwSPQo"
  });

  const prompt =
    "Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme";

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image",
    contents: prompt,
  });

  for (const part of response.parts) {
    if (part.text) { 
      console.log(part.text);
      return Response.json(part.text)
    } else if (part.inlineData) {
      const imageData = part.inlineData.data;
      const buffer = Buffer.from(imageData, "base64");
      fs.writeFileSync("gemini-native-image.png", buffer);
      console.log("Image saved as gemini-native-image.png");
      return Response.json(buffer);
    }
  }
  return response ; 
}


export async function POST(request) {
  const body = await request.json();

  return Response.json({
    message: "This is a POST request",
    receivedData: body
  });
}


