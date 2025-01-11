"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[836],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return o?r.createElement(m,i(i({ref:t},c),{},{components:o})):r.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3584:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const a={title:"FAQ",sidebar_position:5},i=void 0,s={unversionedId:"faq",id:"faq",title:"FAQ",description:"1. Where are the models stored?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/buzz/docs/faq",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"FAQ",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/buzz/docs/cli"}},l={},u=[{value:"1. Where are the models stored?",id:"1-where-are-the-models-stored",level:3},{value:"2. What can I try if the transcription runs too slowly?",id:"2-what-can-i-try-if-the-transcription-runs-too-slowly",level:3},{value:"3. How to record system audio?",id:"3-how-to-record-system-audio",level:3},{value:"4. What model should I use?",id:"4-what-model-should-i-use",level:3},{value:"5. How to get GPU acceleration for faster transcription?",id:"5-how-to-get-gpu-acceleration-for-faster-transcription",level:3},{value:"6. How to fix <code>Unanticipated host error[PaErrorCode-9999]</code>?",id:"6-how-to-fix-unanticipated-host-errorpaerrorcode-9999",level:3},{value:"7. Can I use Buzz on a computer without internet?",id:"7-can-i-use-buzz-on-a-computer-without-internet",level:3},{value:"8. Buzz crashes, what to do?",id:"8-buzz-crashes-what-to-do",level:3},{value:"9. Where can I get latest development version?",id:"9-where-can-i-get-latest-development-version",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"1-where-are-the-models-stored"},"1. Where are the models stored?"),(0,n.kt)("p",null,"The models are stored in ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.cache/Buzz")," (Linux), ",(0,n.kt)("inlineCode",{parentName:"p"},"~/Library/Caches/Buzz"),"\n(Mac OS) or ",(0,n.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%\\AppData\\Local\\Buzz\\Buzz\\Cache")," (Windows)."),(0,n.kt)("p",null,"Paste the location in your file manager to access the models."),(0,n.kt)("h3",{id:"2-what-can-i-try-if-the-transcription-runs-too-slowly"},"2. What can I try if the transcription runs too slowly?"),(0,n.kt)("p",null,"Speech recognition requires large amount of computation, so one option is to try using a lower Whisper model size or using a Whisper.cpp model to run speech recognition of your computer. If you have access to a computer with GPU that has at least 6GB of VRAM you can try using the Faster Whisper model."),(0,n.kt)("p",null,"Buzz also supports using OpenAI API to do speech recognition on a remote server. To use this feature you need to set OpenAI API key in Preferences. See ",(0,n.kt)("a",{parentName:"p",href:"https://chidiwilliams.github.io/buzz/docs/preferences"},"Preferences")," section for more details."),(0,n.kt)("h3",{id:"3-how-to-record-system-audio"},"3. How to record system audio?"),(0,n.kt)("p",null,"To transcribe system audio you need to configure virtual audio device and connect output from the applications you want to transcribe to this virtual speaker. After that you can select it as source in the Buzz. See ",(0,n.kt)("a",{parentName:"p",href:"https://chidiwilliams.github.io/buzz/docs/usage/live_recording"},"Usage")," section for more details."),(0,n.kt)("p",null,"Relevant tools:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mac OS - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ExistentialAudio/BlackHole"},"BlackHole"),"."),(0,n.kt)("li",{parentName:"ul"},"Windows - ",(0,n.kt)("a",{parentName:"li",href:"https://vb-audio.com/Cable/"},"VB CABLE")),(0,n.kt)("li",{parentName:"ul"},"Linux - ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.ubuntu.com/record_system_sound"},"PulseAudio Volume Control"))),(0,n.kt)("h3",{id:"4-what-model-should-i-use"},"4. What model should I use?"),(0,n.kt)("p",null,"Model size to use will depend on your hardware and use case. Smaller models will work faster but will have more inaccuracies. Larger models will be more accurate but will require more powerful hardware or longer time to transcribe. "),(0,n.kt)("p",null,'When choosing among large models consider the following. "Large" is the first released older model, "Large-V2" is later updated model with better accuracy, for some languages considered the most robust and stable. "Large-V3" is the latest model with the best accuracy in many cases, but some times can hallucinate or invent words that were never in the audio. "Turbo" model tries to get a good balance between speed and accuracy. The only sure way to know what model best suits your needs is to test them all in your language. '),(0,n.kt)("h3",{id:"5-how-to-get-gpu-acceleration-for-faster-transcription"},"5. How to get GPU acceleration for faster transcription?"),(0,n.kt)("p",null,"On Linux GPU acceleration is supported out of the box on Nvidia GPUs. If you still get any issues install ",(0,n.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/cuda-downloads"},"CUDA 12"),", ",(0,n.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/cublas"},"cuBLASS")," and ",(0,n.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/cudnn"},"cuDNN"),"."),(0,n.kt)("p",null,"On Windows see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chidiwilliams/buzz/blob/main/CONTRIBUTING.md#gpu-support"},"this note")," on enabling CUDA GPU support."),(0,n.kt)("p",null,"For Faster whisper CUDA 12 is required, computers with older CUDA versions will use CPU."),(0,n.kt)("h3",{id:"6-how-to-fix-unanticipated-host-errorpaerrorcode-9999"},"6. How to fix ",(0,n.kt)("inlineCode",{parentName:"h3"},"Unanticipated host error[PaErrorCode-9999]"),"?"),(0,n.kt)("p",null,"Check if there are any system settings preventing apps from accessing the microphone."),(0,n.kt)("p",null,"On Windows, see if Buzz has permission to use the microphone in Settings -> Privacy -> Microphone."),(0,n.kt)("p",null,"See method 1 in this video ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=eRcCYgOuSYQ"},"https://www.youtube.com/watch?v=eRcCYgOuSYQ")),(0,n.kt)("p",null,"For method 2 there is no need to uninstall the antivirus, but see if you can temporarily disable it or if there are settings that may prevent Buzz from accessing the microphone."),(0,n.kt)("h3",{id:"7-can-i-use-buzz-on-a-computer-without-internet"},"7. Can I use Buzz on a computer without internet?"),(0,n.kt)("p",null,'Yes, Buzz can be used without internet connection if you download the necessary models on some other computer that has the internet and manually move them to the offline computer. The easiest way to find where the models are stored is to go to Help -> Preferences -> Models. Then download some model, and push "Show file location" button. This will open the folder where the models are stored. Copy the models folder to the same location on the offline computer. F.e. for Linux it is ',(0,n.kt)("inlineCode",{parentName:"p"},".cache/Buzz/models")," in your home directory."),(0,n.kt)("h3",{id:"8-buzz-crashes-what-to-do"},"8. Buzz crashes, what to do?"),(0,n.kt)("p",null,"If a model download was incomplete or corrupted, Buzz may crash. Try to delete the downloaded model files in ",(0,n.kt)("inlineCode",{parentName:"p"},"Help -> Preferences -> Models")," and re-download them."),(0,n.kt)("p",null,"If that does not help, check the log file for errors and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chidiwilliams/buzz/issues"},"report the issue")," so we can fix it. The log file is located in ",(0,n.kt)("inlineCode",{parentName:"p"},"~/Library/Logs/Buzz")," (Mac OS) or ",(0,n.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%\\AppData\\Local\\Buzz\\Buzz\\Logs")," (Windows). On Linux run the Buzz from the command line to see the relevant messages."),(0,n.kt)("h3",{id:"9-where-can-i-get-latest-development-version"},"9. Where can I get latest development version?"),(0,n.kt)("p",null,"Latest development version will have latest bug fixes and most recent features. If you feel a bit adventurous it is recommended to try the latest development version as they needs some testing before they get released to everybody. "),(0,n.kt)("p",null,"Linux users can get the latest version with this command ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo snap install buzz --edge")),(0,n.kt)("p",null,"For other platforms do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/chidiwilliams/buzz/actions/workflows/ci.yml?query=branch%3Amain"},"build section")),(0,n.kt)("li",{parentName:"ul"},"Click on the link to the latest build"),(0,n.kt)("li",{parentName:"ul"},"Scroll down to the artifacts section in the build page"),(0,n.kt)("li",{parentName:"ul"},"Download the installation file. Please note that you need to be logged in the Github to see the download links.")))}p.isMDXComponent=!0}}]);