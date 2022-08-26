const btn = document.getElementById("btn");
const viewLinkInput = document.getElementById("viewLinkInput");
const copyView = document.getElementById("copyView");
const copyDownload = document.getElementById("copyDownload");
const downloadLinkInput = document.getElementById("downloadLinkInput");
const link = document.getElementById("link");
const tooltrip1=document.getElementById('tooltrip1')
const tooltrip2=document.getElementById('tooltrip2')

//select all input value when click input field
link.onclick = () => {
  link.focus()
  link.select();
};

//generate link button
btn.onclick = () => {
  let splitLink = link.value.split("/");
  let newLink = "https://drive.google.com/uc?id=".concat(splitLink[5]);
  let downloadLink ="https://drive.google.com/uc?export=download&id=".concat(splitLink[5]);
  if(Boolean(link.value)===true){
    viewLinkInput.value = newLink;
    downloadLinkInput.value = downloadLink;
  }else{
    viewLinkInput.value = '';
    downloadLinkInput.value = '';
  }
}; 

//live image view lnk create
copyView.onclick = () => {
  navigator.clipboard.writeText(viewLinkInput.value);
  if (Boolean(viewLinkInput.value) == true) {
    tooltrip1.innerHTML = `<p class="" id="tooltrip1"> Copied</p>`;
    setTimeout(() => {
      tooltrip1.innerHTML=''
    }, 200);
  }
};


//image download link create
copyDownload.onclick=()=>{
  navigator.clipboard.writeText(downloadLinkInput.value)
  if (Boolean(downloadLinkInput.value) == true) {
    tooltrip2.innerHTML = `<p>Copied</p>`;
    setTimeout(() => {
      tooltrip2.innerHTML='';
    }, 200);
  }
}