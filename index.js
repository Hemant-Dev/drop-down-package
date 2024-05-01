function createButton(btnName, dropdownId) {
  const btn = document.createElement("button");
  btn.textContent = btnName;
  btn.classList.add("dropDownBtn");
  btn.setAttribute("data-dropdown", dropdownId);
  btn.style.padding = `0.5rem`;

  return btn;
}

function createDropDown(list) {
  const dropdownMenu = document.createElement("ul");
  dropdownMenu.classList.add("drop-down-menu");
  dropdownMenu.id = list.id;
  list.items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    dropdownMenu.appendChild(listItem);
  });
  return dropdownMenu;
}

function toggleDropdown(button) {
  // console.log(button);
  const dropdownId = button.getAttribute("data-dropdown");
  const dropdownMenu = document.getElementById(dropdownId);
  const computedStyle = window.getComputedStyle(dropdownMenu); // Get the computed style
  if (computedStyle.display === "block") {
    // Check the computed display style
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
}

function setStyle() {
  const style = document.createElement("style");
  const css = `.dropDownBtn {
          padding: 0.5rem;
          border-radius: 4px;
          border: 0;
          cursor: pointer;
          font-size: 24px;
          font-weight: 600;
          &:hover {
            background-color: rgb(156, 182, 186);
            color: rgb(0, 0, 0);
          }
        }
        
        li {
          list-style: none;
          padding: 5px 10px;
          font-size: 20px;
          border-bottom: 1px solid rgb(16, 13, 209);
          cursor: pointer;
          &:hover {
            background-color: rgb(44, 165, 181);
            color: aqua;
          }
        }
        
        .navbar {
          display: flex;
          gap: 2rem;
          position: relative;
        }
        
        .drop-down-menu {
          display: none;
          position: absolute;
          z-index: 1; /* Ensure drop-down menus appear above other content */
          background-color: #fff;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          padding: 10px;
          /* transform: translateY(-1em); */
          transition: transform 0.5s;
        }`;
  style.innerHTML = css;
  document.head.appendChild(style);
}

function initializeDropdowns(navData) {
  const navbar = document.getElementById("navbar");

  navData.forEach((data) => {
    const button = createButton(data.buttonName, data.dropdownId);
    const dropdownMenu = createDropDown(data.list);
    button.addEventListener("click", () => toggleDropdown(button));
    const btnWrapper = document.createElement("div");
    btnWrapper.classList.add("btn-wrapper");
    btnWrapper.appendChild(button);
    btnWrapper.appendChild(dropdownMenu);
    navbar.appendChild(btnWrapper);
  });
  setStyle();
}

module.exports.initializeDropdowns = initializeDropdowns;
