import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as r}from"./index-BrnU7xv7.js";import{ae as t}from"./index-BlPJuOMa.js";import"./index-DJO9vBfz.js";import"./iframe-BTXQn7a-.js";import"../sb-preview/runtime.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";function s(i){const e={code:"code",h1:"h1",h3:"h3",hr:"hr",p:"p",pre:"pre",...r(),...i.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(t,{title:"Configuration/Installation"}),`
`,n.jsx(e.h1,{id:"installation",children:"Installation"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.p,{children:"To install Storybook in your project, follow these steps:"}),`
`,n.jsx(e.h3,{id:"1-create-your-react-app",children:"1. Create your React App"}),`
`,n.jsx(e.p,{children:"Initialize a react app using either Vite or Create React App"}),`
`,n.jsx(e.p,{children:"Using Vite: (then follow the prompts)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm create vite@latest my-example-project -- --react vue
`})}),`
`,n.jsx(e.p,{children:"Using Create React App:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx create-react-app my-example-project
`})}),`
`,n.jsx(e.p,{children:"Then, cd into your directory."}),`
`,n.jsx(e.h3,{id:"2-install-tailwind-css-with-create-react-app",children:"2. Install Tailwind CSS with Create React App"}),`
`,n.jsx(e.p,{children:"Setting up Tailwind CSS within a React application."}),`
`,n.jsx(e.p,{children:"Install tailwind and generate your config file"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install -D tailwindcss
npx tailwindcss init
`})}),`
`,n.jsx(e.p,{children:"Configure your template paths within tailwind.config.js"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // add this!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`})}),`
`,n.jsx(e.p,{children:"Add tailwind directives to ./src/index.CSS"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`@tailwind base;
@tailwind components;
@tailwind utilities;
`})}),`
`,n.jsx(e.p,{children:"Start your build process"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run start
`})}),`
`,n.jsx(e.p,{children:"Test Tailwind in your project"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
`})}),`
`,n.jsx(e.h3,{id:"2-install-preline",children:"2. Install Preline"}),`
`,n.jsx(e.p,{children:"Quick Setup for Preline"}),`
`,n.jsx(e.p,{children:"Install preline ui"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i preline
`})}),`
`,n.jsx(e.p,{children:"Add the Preline UI plugin in 'tailwind.config.js'"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  plugins: [
    // require('@tailwindcss/forms'),
      require('preline/plugin'),
  ],
}
`})}),`
`,n.jsx(e.p,{children:"Add the Preline UI script to the end of your body tag in index.html"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`<script src="./node_modules/preline/dist/preline.js"><\/script>
`})}),`
`,n.jsx(e.p,{children:"In any files where you use JS for preline components (Popper, etc.) , import this:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`import "preline/dist/preline";
`})})]})}function m(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{m as default};
