import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./preline-CebrZH6F.js";import{a as T}from"./index-CWZw4ZPT.js";import{r as m}from"./index-DJO9vBfz.js";const d=({tabOne:l,tabTwo:c,tabThree:h,tabOneBody:u,tabTwoBody:p,tabThreeBody:x})=>(m.useEffect(()=>{T.autoInit()},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{class:"border-b border-gray-200 dark:border-neutral-700",children:e.jsxs("nav",{class:"flex gap-x-1","aria-label":"Tabs",role:"tablist","aria-orientation":"horizontal",children:[e.jsx("button",{type:"button",class:"hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active",id:"tabs-with-underline-item-1","aria-selected":"true","data-hs-tab":"#tabs-with-underline-1","aria-controls":"tabs-with-underline-1",role:"tab",children:l}),e.jsx("button",{type:"button",class:"hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500",id:"tabs-with-underline-item-2","aria-selected":"false","data-hs-tab":"#tabs-with-underline-2","aria-controls":"tabs-with-underline-2",role:"tab",children:c}),e.jsx("button",{type:"button",class:"hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500",id:"tabs-with-underline-item-3","aria-selected":"false","data-hs-tab":"#tabs-with-underline-3","aria-controls":"tabs-with-underline-3",role:"tab",children:h})]})}),e.jsxs("div",{class:"mt-3",children:[e.jsx("div",{id:"tabs-with-underline-1",role:"tabpanel","aria-labelledby":"tabs-with-underline-item-1",children:e.jsx("p",{class:"text-gray-500 dark:text-neutral-400",children:u})}),e.jsx("div",{id:"tabs-with-underline-2",class:"hidden",role:"tabpanel","aria-labelledby":"tabs-with-underline-item-2",children:e.jsx("p",{class:"text-gray-500 dark:text-neutral-400",children:p})}),e.jsx("div",{id:"tabs-with-underline-3",class:"hidden",role:"tabpanel","aria-labelledby":"tabs-with-underline-item-3",children:e.jsx("p",{class:"text-gray-500 dark:text-neutral-400",children:x})})]})]}));d.__docgenInfo={description:"",methods:[],displayName:"Tabs"};const g={title:"Documented Components/Tabs",component:d,parameters:{docs:{description:{component:"Tabs are used to logically organize pages."},source:{code:`
        <Tabs tabOne={"Tab One"} tabTwo={"Tab Two"} tabThree={"Tab Three"} tabOneBody={"This is the content for tab 1"} tabTwoBody={"This is the content for tab 2"} tabThreeBody={"This is the content for tab 3"}
        import "preline/dist/preline";

        import { HSTabs } from "preline";
        import { useEffect } from "react";
        
        export const Tabs = ({tabOne, tabTwo, tabThree, tabOneBody, tabTwoBody, tabThreeBody}) => {
          useEffect(() => {
            HSTabs.autoInit();
          }, []);
        
          return (
            <>
              <div class="border-b border-gray-200 dark:border-neutral-700">
                <nav
                  class="flex gap-x-1"
                  aria-label="Tabs"
                  role="tablist"
                  aria-orientation="horizontal"
                >
                  <button
                    type="button"
                    class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active"
                    id="tabs-with-underline-item-1"
                    aria-selected="true"
                    data-hs-tab="#tabs-with-underline-1"
                    aria-controls="tabs-with-underline-1"
                    role="tab"
                  >
                    {tabOne}
                  </button>
                  <button
                    type="button"
                    class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
                    id="tabs-with-underline-item-2"
                    aria-selected="false"
                    data-hs-tab="#tabs-with-underline-2"
                    aria-controls="tabs-with-underline-2"
                    role="tab"
                  >
                    {tabTwo}
                  </button>
                  <button
                    type="button"
                    class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
                    id="tabs-with-underline-item-3"
                    aria-selected="false"
                    data-hs-tab="#tabs-with-underline-3"
                    aria-controls="tabs-with-underline-3"
                    role="tab"
                  >
                    {tabThree}
                  </button>
                </nav>
              </div>
        
              <div class="mt-3">
                <div
                  id="tabs-with-underline-1"
                  role="tabpanel"
                  aria-labelledby="tabs-with-underline-item-1"
                >
                  <p class="text-gray-500 dark:text-neutral-400">
                    {tabOneBody}
                  </p>
                </div>
                <div
                  id="tabs-with-underline-2"
                  class="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-underline-item-2"
                >
                  <p class="text-gray-500 dark:text-neutral-400">
                    {tabTwoBody}
                  </p>
                </div>
                <div
                  id="tabs-with-underline-3"
                  class="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-underline-item-3"
                >
                  <p class="text-gray-500 dark:text-neutral-400">
                    {tabThreeBody}
                  </p>
                </div>
              </div>
            </>
          );
        };        
        `}},layout:"centered"},tags:["autodocs"],argTypes:{tabOne:{description:"Name of left most tab"},tabOneBody:{description:"Content of left most tab"},tabTwo:{description:"Name of middle tab"},tabTwoBody:{description:"Content of middle tab"},tabThree:{description:"Name of right most tab"},tabThreeBody:{description:"Content of right most tab"}}},t={args:{tabOne:"Tab 1",tabTwo:"Tab 2",tabThree:"Tab 3",tabOneBody:"This is the content for tab 1",tabTwoBody:"This is the content for tab 2",tabThreeBody:"This is the content for tab 3"}},a={args:{tabOne:"One",tabTwo:"Two",tabThree:"Three",tabOneBody:"This is the content for tab one",tabTwoBody:"This is the content for tab two",tabThreeBody:"This is the content for tab three"}};var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    tabOne: 'Tab 1',
    tabTwo: 'Tab 2',
    tabThree: 'Tab 3',
    tabOneBody: 'This is the content for tab 1',
    tabTwoBody: 'This is the content for tab 2',
    tabThreeBody: 'This is the content for tab 3'
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var i,s,b;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    tabOne: 'One',
    tabTwo: 'Two',
    tabThree: 'Three',
    tabOneBody: 'This is the content for tab one',
    tabTwoBody: 'This is the content for tab two',
    tabThreeBody: 'This is the content for tab three'
  }
}`,...(b=(s=a.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};const B=["Primary","Secondary"];export{t as Primary,a as Secondary,B as __namedExportsOrder,g as default};
