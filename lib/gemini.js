import { GoogleGenAI } from "@google/genai";
// import dotenv from "dotenv";
// dotenv.config();

// const API_KEY = process.env.GEMINI_KEY;

const ai = new GoogleGenAI({ apiKey: "AIzaSyCwmVpFImvjhxyohq4fU2vBZFDA5ZwSPQo" });

export async function generateRecipe(food_type, selectedIngredients) {
    // --- MANDATORY API Setup (Replaces placeholder 'ai.models.generateContent') ---
    // Note: The API key is managed by the execution environment for this model. 
    const model = "	gemini-2.5-flash";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

    // Define the required JSON schema for reliable structured output.
    // This forces the model to return JSON that strictly matches this format.
    const recipeSchema = {
        type: "OBJECT",
        properties: {
            dish_name: { type: "STRING", description: "The name of the generated dish." },
            RECIPE_INGREDIENTS: {
                type: "ARRAY",
                description: "A list of ingredient sections, like 'Main Ingredients' or 'Sauce'.",
                items: {
                    type: "OBJECT",
                    properties: {
                        section: { type: "STRING", description: "e.g., 'Main Ingredients', 'Sauce', 'Garnish'." },
                        items: { 
                            type: "ARRAY", 
                            description: "List of ingredients with quantities (e.g., '1 cup flour', '2 large eggs').",
                            items: { type: "STRING" } 
                        }
                    },
                    required: ["section", "items"]
                }
            },
            COOKING_INSTRUCTIONS: {
                type: "ARRAY",
                description: "A list of sequential cooking steps.",
                items: {
                    type: "OBJECT",
                    properties: {
                        step: { type: "INTEGER", description: "The step number, starting at 1." },
                        text: { type: "STRING", description: "The detailed instruction for the step." }
                    },
                    required: ["step", "text"]
                }
            }
        },
        required: ["dish_name", "RECIPE_INGREDIENTS", "COOKING_INSTRUCTIONS"]
    };

    // 1. Simplified systemInstruction (The schema handles the formatting rules)
    const systemInstruction = `
        You are a professional chef AI. 
        Your job is to generate an Indian recipe based on given ingredients and food type.
        You MUST return ONLY a valid JSON object strictly following the provided schema. 
    `;

    const prompt = `
        Generate a dish using the following:

        Food Type: ${food_type}
        Ingredients: ${selectedIngredients.join(", ")}
    `;

    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: systemInstruction.trim() }] },
        generationConfig: {
            temperature: 0.5,
            // Crucial settings for structured JSON output
            responseMimeType: "application/json",
            responseSchema: recipeSchema,
        },
    };
    
    // --- Robust API Call with Exponential Backoff ---
    let attempts = 0;
    const maxAttempts = 5;

    while (attempts < maxAttempts) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            // Check for HTTP errors (like 429 Rate Limit or 500 Server Error)
            if (!response.ok) {
                const errorBody = await response.text();
                // Throw an error that signals a retry if appropriate
                if (response.status === 429 || response.status >= 500) {
                    throw new Error(`API Error (Status ${response.status}): ${errorBody}`, { cause: 'retry' });
                } else {
                    throw new Error(`API Error (Status ${response.status}): ${errorBody}`);
                }
            }

            const result = await response.json();
            const candidate = result.candidates?.[0];

            if (!candidate || !candidate.content?.parts?.[0]?.text) {
                throw new Error("Model response was empty or malformed.");
            }

            // Since we used responseMimeType: "application/json", the text part is pure JSON.
            const jsonText = candidate.content.parts[0].text;
            
            // Directly parse the JSON. No need for regex or complex extraction.
            const parsed = JSON.parse(jsonText);
            return parsed;

        } catch (error) {
            attempts++;
            // Check if the error is explicitly marked for retry and we have attempts left
            if (error.cause === 'retry' && attempts < maxAttempts) {
                const delay = Math.pow(2, attempts) * 1000;
                // Exponential backoff
                await new Promise(resolve => setTimeout(resolve, delay));
            } else {
                // If it's a non-retriable error, or max attempts reached, throw the error
                console.error("JSON Generation/Parsing Error:", error);
                return null;
            }
        }
    }
    // Final failure message if all retry attempts failed
    console.error("JSON Generation/Parsing Error: Failed after multiple retry attempts.");
    return null;
}

export default generateRecipe;
