const bigForm = () => {
  const inputName = document.querySelector("#name");
  const inputTel = document.querySelector("#tel");
  const bifFormElement = document.getElementById("big-form");
  const url = "http://localhost:3001/api/orders";
  async function loader() {
    const loaderItem = document.querySelector("#loader");
    loaderItem.classList.add("loader");
  }
  async function unLoader() {
    const loaderItem = document.querySelector("#loader");
    loaderItem.classList.remove("loader");
  }
  const sendData = async (url, data) => {
    loader();
    const response = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => unLoader());

    return await response.json();
  };
  bifFormElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(bifFormElement);
    inputName.value = "";
    inputTel.value = "";
    input1.focus();
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone-number"),
      masterId: formData.get("master"),
      serviceId: formData.get("service"),
      visitDate: formData.get("date"),
    };
    const formList = JSON.stringify(data);
    console.log(formList);
    try {
      sendData(`${url}`, formList);
      function closeModal() {
        const popUp = document.getElementById("pop-up-form");
        popUp.classList.remove("active");
      }
      setTimeout(closeModal, 3000);
    } catch (err) {
      console.error(err);
    } finally {
      alert(
        "Ваша заявка отправлена! В ближайшее время с вами свяжется менеджер."
      );
    }
  });
};

export default bigForm;
