import { simData } from "./simulatorData.js";

let otherCardContainer = document.getElementById("otherCardContainer");

simData?.map((el) => {
  if (el.CprgType==false) {
  // card creation
  let card = document.createElement("div");
  card.classList = "card";

  // image section
  // let card_img = document.createElement("div");
  // card_img.classList.add("card_img", "text-center");
  // let stuPic = document.createElement("img");
  // stuPic.classList.add("card-img-top", "p-1");
  // stuPic.src = el.stuPic;
  // stuPic.alt = "student picture";
  // stuPic.style.width = "50%";

  // card-body section
  let card_body = document.createElement("div");
  card_body.classList.add("card-body", "text-center");
  let card_title = document.createElement("h5");
  card_title.classList.add("card-title");
  card_title.appendChild(document.createTextNode(el.simuName));
  let card_text = document.createElement("p");
  card_text.classList.add("card-text");
  card_text.appendChild(document.createTextNode(el.discription));
  let card_btn_section=document.createElement("div");
  card_btn_section.classList.add("card_btn_section");
  let card_link = document.createElement("a");
  card_link.classList.add("btn", "btn-outline-dark");
  card_link.appendChild(document.createTextNode("Run Simulator"));
  card_link.href = el.ref;
  card_link.target="_blank";

  card_body.appendChild(card_title);
  card_body.appendChild(card_text);
  card_btn_section.appendChild(card_link);
  card_body.appendChild(card_btn_section);

  // card_img.appendChild(stuPic);
  // card.appendChild(card_img);
  card.appendChild(card_body);
  
  otherCardContainer?.appendChild(card);
  
  }
});



