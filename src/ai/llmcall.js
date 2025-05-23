import { InferenceClient } from "@huggingface/inference";
import dotenv from 'dotenv';    
dotenv.config();
console.log('Huggingfacekey' ,process.env.HUGGING_FACE_API_KEY)
const client = new InferenceClient("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");
const chatCompletion = await client.chatCompletion({
    provider: "novita",
    model: "deepseek-ai/DeepSeek-V3-0324",
    messages: [
        {
            role: "user",
            content: "Give me adive on how to manage my personal finances better,make the message a single paragraph and keep it about 4 lines",
        },
    ],
    max_tokens: 1500,
});
const message = chatCompletion.choices[0].message.content;
console.log(chatCompletion.choices[0].message.content);
export default message;