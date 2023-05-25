const rewards = document.querySelectorAll(".rewards");
const rewardInfos = 
[
    {
        id: 0,
        type: "Pledge with no reward",
        price: "",
        description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product udpates via email.",
        left: ""
    },
    {
        id: 1,
        type: "Bamboo Stand",
        price: "25",
        description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
        left: "101"
    },
    {
        id: 2,
        type: "Black Edition Stand",
        price: "75",
        description: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        left: "64"
    },
    {
        id: 3,
        type: "Mahogany Special Edition",
        price: "200",
        description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        left: "0"
    }
];

function createDefault() {
  for(let j = 0; j < 2; j++) {
    for(let i = 0; i < rewardInfos.length; i++) {

      let component = document.createElement("div");
      if(j === 0) {
        component.className = "option";
      } else if (j === 1) {
        component.className = "option modal";
      }
      
      component.innerHTML = 
      `
      <div class="reward">
        <div class="reward_header">
          <input type="radio" class="header_radio" name="radioBtn">
          <div class="header_block">
            <p class="reward_type">${rewardInfos[i].type}</p>
            <p class="reward_price">Pledge $<span class="price_value">${rewardInfos[i].price}</span> or more </p>
          </div>
        </div>
        <p class="reward_description">${rewardInfos[i].description}</p>
        <p class="reward_left"> 
          <span class="left_amount ${rewardInfos[i].id}">${rewardInfos[i].left}</span> left
        </p>
        <button class="reward_btn ${rewardInfos[i].id}">Select Reward</button>
      </div>
  
      <div class="pledge">
        <p class="pledge_title">Enter your pledge</p>
        <div class="pledge_insertion">
          <label for="price" class="insertion_label">$</label>
          <input type="number" class="insertion_input">
          <button class="insertion_btn ${rewardInfos[i].id}">Continue</button>
        </div>
      </div>
      `;
      if(j === 0) {
        if(i > 0) {
          rewards[0].appendChild(component);
        }
      } else if (j === 1) {
        rewards[1].appendChild(component);
        component.querySelector(".header_radio").style.display = "unset";
        component.querySelector(".reward_btn").style.display = "none";
      }

        disableZeroRewardsLeft(component);

        const leftAmount = component.querySelector(".left_amount");
        const pledgePrice = component.querySelector(".reward_price");
        if(leftAmount.textContent === "") {
          leftAmount.parentElement.remove();
          pledgePrice.remove();
        }
        component.querySelector(".pledge").classList.add("unShow");
    }
  }
}

function disableZeroRewardsLeft(component) {
  
  const selectBtn = component.querySelector(".reward_btn");
  if (component.querySelector(".left_amount").textContent === "0") {
      component.style.opacity = "50%";
      component.querySelector(".header_radio").disabled = true;
      selectBtn.textContent = "Out of Stock";
      selectBtn.classList.add("outOfStock");
      selectBtn.disabled = true;
  }

}

createDefault();