function sendPrompt(text){
    if (window.parent) { window.parent.postMessage({type:'sendPrompt', text}, '*'); }
    console.log('sendPrompt:', text);
  }
