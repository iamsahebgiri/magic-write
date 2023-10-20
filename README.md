<p align="center">
  <a href="https://github.com/iamsahebgiri/add-readme">
    <img alt="example" height="80" src="./public/magic-write.svg">
  </a>
</p>
<h1 align="center">Magicwrite</h1>

This project rephrase resume points for you using AI that can land you a job.

[![Magic Write](./public/screenshot.png)](https://magic-write.vercel.app)

## How it works

This project uses the [ChatGPT API](https://openai.com/api/) and the [Vercel AI SDK](https://sdk.vercel.ai/docs) with streaming. It constructs a prompt based on the form and user input, sends it to the ChatGPT API with a Vercel Edge Function, then streams the response back to the application UI.

## Running Locally

After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

Optionally you can add posthog analytics if you want.
