# 🔗 [https://portfolio-kzgn8iofr-nefas666s-projects.vercel.app/]

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?repository-url=https%3A%2F%2Fgithub.com%2Fjirihofman%2Fportfolio&env=GH_TOKEN,VC_TOKEN)

Personal portfolio website, forked from [jirihofman](https://github.com/jirihofman/portfolio). I have created a different theme from the original project while maintaining its functionalities and adding few more dependencies. You can see a preview at [https://portfolio-zulyh9wvd-nefas666s-projects.vercel.app/].

It is supposed to be used as a **template for other GitHub users' portfolios**. Data about user and projects are gathered via GitHub and Vercel API.
You can choose to comment/uncomment the __TryYourself.tsx__ in order to activate or deactivate these functionality.

## Tech stack
- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com), [Primer](https://primer.style/)
- **Animation**: [Anime.js](https://animejs.com/)
- **Client:**: [React](https://react.dev/)

## Running Locally

```sh
git clone https://github.com/Nefas666/portfolio.git
cd portfolio

```


Create a `.env` file similar to [`.env.example`](https://github.com/jirihofman/profile/blob/main/.env.example).
```sh
mv .env.example .env.local
```
Add GitHub token into the new file.
```sh
GH_TOKEN=YOUR_GH_TOKEN
# If you have Vercel projects, create a token here https://vercel.com/account/tokens to get more info.
VC_TOKEN=YOUR_VERCEL_TOKEN
```
#### Environment Variables

`GH_TOKEN=YOUR_GH_TOKEN`

`VC_TOKEN=YOUR_VCTOKEN`

`IS_TEMPLATE=false`

Then install dependencies and run the development server:
```sh
# Install dependencies.
npm install
# Replace personal info with octocat's.
npm run setup
# Start hacking.
npm dev
```

Edit `data.json` to put your personal information there.


## Cloning / Forking

Please remove all of my personal information in `data.json` before deploying your own version of this site by running `npm run setup`. Once you are happy with your `data.json`, set
```sh
# .env or .env.local

IS_TEMPLATE=false
```
in your ENVs to prevent `npm build` from reverting `data.json` back to Octocat's data.

### To check before deploying
- [ ] `data.json`: githubUsername, description, heroNames. Handled by `setup.mjs`.
- [ ] `app/layout.jsx`: metadata - title, description, favicon. Handled by `setup.mjs`.
- [ ] `public/favicon.ico`. Handled by `setup.mjs`.

### LICENSE

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>
