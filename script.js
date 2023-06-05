const colorInputs = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradient-box");
const gradientDirection = document.querySelector(".select-box select");
const textArea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh")
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
  // Generating a random color in hexadecimal format. Example: #5665E9
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
};

const generateGradient = (isRand) => {
    if(isRand) {
      colorInputs[0].value = getRandomColor();
      colorInputs[1].value = getRandomColor();  
    }
        
    const gradient = `linear-gradient(${gradientDirection.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientBox.style.background=gradient;
    textArea.value = `background: ${gradient}`;
}

const copycode = () => {
    navigator.clipboard.writeText(textArea.value);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600);
}


colorInputs.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
})

gradientDirection.addEventListener("change", () => generateGradient(false));

refreshBtn.addEventListener("click", () => generateGradient(true));

copyBtn.addEventListener("click", copycode)