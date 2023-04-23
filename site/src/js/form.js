const form = () => {
  const input1 = document.querySelector("#input1");
  const input2 = document.querySelector("#input2");
  const formElement = document.getElementById("form1");
  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const name = formData.get("name");
    const phoneNubmer = formData.get("phone-number");
    input1.value = "";
    input2.value = "";
    input1.focus()
    console.log(name, phoneNubmer)
  });
};

export default form;
