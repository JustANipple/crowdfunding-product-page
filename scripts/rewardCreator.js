const rewards = document.querySelector(".rewards");
const rewardInfos = 
[
    {
        id: 1,
        type: "Pledge with no reward",
        price: "",
        description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product udpates via email.",
        left: ""
    },
    {
        id: 2,
        type: "Bamboo Stand",
        price: "25",
        description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
        left: "101"
    },
    {
        id: 3,
        type: "Black Edition Stand",
        price: "75",
        description: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        left: "64"
    },
    {
        id: 4,
        type: "Mahogany Special Edition",
        price: "200",
        description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        left: "0"
    }
];

function createDefault() {
    for(const reward of rewardInfos) {
        let component = document.createElement("div");
        component.className = "option";
        component.innerHTML = 
        `
        <div class="reward">
          <div class="reward_header">
            <input type="radio" class="header_radio" name="radioBtn">
            <div class="header_block">
              <p class="reward_type">${reward.type}</p>
              <p class="reward_price">Pledge $<span class="price_value">${reward.price}</span> or more </p>
            </div>
          </div>
          <p class="reward_description">${reward.description}</p>
          <p class="reward_left"> 
            <span class="left_amount">${reward.left}</span> left
          </p>
          <button class="reward_btn" id="${reward.id}">Select Reward</button>
        </div>
    
        <div class="pledge">
          <p class="pledge_title">Enter your pledge</p>
          <div class="pledge_insertion">
            <label for="price" class="insertion_label">$</label>
            <input type="number" id="price" class="insertion_input">
            <button class="inseriton_btn">Continue</button>
          </div>
        </div>
        `;
        rewards.appendChild(component);
        //remove the quantity on no reward component  
        const amount = component.querySelector(".left_amount");
        const selectBtn = component.querySelector(".reward_btn");
        if(amount.textContent === "") {
            component.querySelector(".reward_left").remove();
        } else if (amount.textContent === "0") {
            component.style.opacity = "50%";
            selectBtn.textContent = "Out of Stock";
            selectBtn.classList.add("outOfStock");
            selectBtn.disabled = true;
        }
    }
    const rewardOptions = document.querySelectorAll(".rewards .option");
    rewardOptions[0].remove();
}

createDefault();