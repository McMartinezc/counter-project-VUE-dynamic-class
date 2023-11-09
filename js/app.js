// Tu código aquí.

import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const counter = ref(0);

    const updateCount =(click)=>{
      counter.value = counter.value + click;
    }

    const getColor = (counter) =>{
      return counter === 0 ? 'gray' : (counter > 0 ? 'green' : 'red')
    }
  
    return {
      updateCount,
      counter,
      getColor
  
    };
  },
}).mount("#app");
