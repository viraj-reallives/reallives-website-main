// imapct tab js start

document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.getElementById("navChangeMaker");
  const innerTab = document.getElementById("innerTab");
  const start1Btn = document.getElementById("start1Btn");
  const start2Btn = document.getElementById("start2Btn");

  const changeMaker = document.getElementById("changeMaker");
  const impactTabInner = document.getElementById("impactTabInner");

  const allNavLinks = document.querySelectorAll(".nav-link");

  let insideChangeMaker = false;

  innerTab.style.display = "none";
  changeMaker.style.display = "none";
  impactTabInner.style.display = "none";

  navBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (insideChangeMaker) {
      innerTab.style.position = "fixed";
      innerTab.style.top = "0%";
      innerTab.style.left = "0";
      innerTab.style.width = "100%";
      innerTab.style.zIndex = "99999";

      innerTab.style.display = "flex";
      changeMaker.style.display = "block";
      impactTabInner.style.display = "none";
    } else {
      innerTab.style.position = "static";
      innerTab.style.display = "flex";

      changeMaker.style.display = "none";
      impactTabInner.style.display = "none";
    }
  });

  start1Btn.addEventListener("click", function (e) {
    e.preventDefault();

    innerTab.style.display = "none";
    changeMaker.style.display = "block";
    impactTabInner.style.display = "none";

    insideChangeMaker = true;
  });

  start2Btn.addEventListener("click", function (e) {
    e.preventDefault();

    innerTab.style.display = "none";
    changeMaker.style.display = "none";
    impactTabInner.style.display = "block";

    insideChangeMaker = false;
  });

  allNavLinks.forEach((link) => {
    if (link.id !== "navChangeMaker") {
      link.addEventListener("click", function () {
        insideChangeMaker = false;

        innerTab.style.display = "none";
        innerTab.style.position = "static";
        changeMaker.style.display = "none";
        impactTabInner.style.display = "none";
      });
    }
  });
});

// imapct js end

// resource tab js start

document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.getElementById("navResources");
  const resourceInnerTab2 = document.getElementById("resourceInnerTab2");
  const resourceStart1Btn = document.getElementById("resourceStart1Btn");
  const resourceStart2Btn = document.getElementById("resourceStart2Btn");

  const resourcestabcontainer = document.getElementById(
    "resourcestabcontainer",
  );
  const pricingtabcontainer = document.getElementById("pricingtabcontainer");

  const allNavLinks = document.querySelectorAll(".nav-link");

  let insideChangeMaker = false;

  resourceInnerTab2.style.display = "none";
  resourcestabcontainer.style.display = "none";
  pricingtabcontainer.style.display = "none";

  navBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (insideChangeMaker) {
      resourceInnerTab2.style.position = "fixed";
      resourceInnerTab2.style.top = "0%";
      resourceInnerTab2.style.left = "0";
      resourceInnerTab2.style.width = "100%";
      resourceInnerTab2.style.zIndex = "99999";

      resourceInnerTab2.style.display = "flex";
      resourcestabcontainer.style.display = "block";
      pricingtabcontainer.style.display = "none";
    } else {
      resourceInnerTab2.style.position = "static";
      resourceInnerTab2.style.display = "flex";

      resourcestabcontainer.style.display = "none";
      pricingtabcontainer.style.display = "none";
    }
  });

  resourceStart1Btn.addEventListener("click", function (e) {
    e.preventDefault();

    resourceInnerTab2.style.display = "none";
    resourcestabcontainer.style.display = "block";
    pricingtabcontainer.style.display = "none";

    insideChangeMaker = true;
  });

  resourceStart2Btn.addEventListener("click", function (e) {
    e.preventDefault();

    resourceInnerTab2.style.display = "none";
    resourcestabcontainer.style.display = "none";
    pricingtabcontainer.style.display = "block";

    insideChangeMaker = false;
  });

  allNavLinks.forEach((link) => {
    if (link.id !== "navResources") {
      link.addEventListener("click", function () {
        insideChangeMaker = false;

        resourceInnerTab2.style.display = "none";
        resourceInnerTab2.style.position = "static";
        resourcestabcontainer.style.display = "none";
        pricingtabcontainer.style.display = "none";
      });
    }
  });
});

// resorces tab js end

// About tab js start

document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.getElementById("navidcompaney");
  const resourceInnerTab2 = document.getElementById("companyTab");
  const resourceStart1Btn = document.getElementById("commpaneytabbtn1");
  const resourceStart2Btn = document.getElementById("commpaneytabbtn2");

  const resourcestabcontainer = document.getElementById("aboutidtab");
  const pricingtabcontainer = document.getElementById("contactidtab");

  const allNavLinks = document.querySelectorAll(".nav-link");

  let insideChangeMaker = false;

  resourceInnerTab2.style.display = "none";
  resourcestabcontainer.style.display = "none";
  pricingtabcontainer.style.display = "none";

  navBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (insideChangeMaker) {
      resourceInnerTab2.style.position = "fixed";
      resourceInnerTab2.style.top = "0%";
      resourceInnerTab2.style.left = "0";
      resourceInnerTab2.style.width = "100%";
      resourceInnerTab2.style.zIndex = "99999";

      resourceInnerTab2.style.display = "flex";
      resourcestabcontainer.style.display = "block";
      pricingtabcontainer.style.display = "none";
    } else {
      resourceInnerTab2.style.position = "static";
      resourceInnerTab2.style.display = "flex";

      resourcestabcontainer.style.display = "none";
      pricingtabcontainer.style.display = "none";
    }
  });

  resourceStart1Btn.addEventListener("click", function (e) {
    e.preventDefault();

    resourceInnerTab2.style.display = "none";
    resourcestabcontainer.style.display = "block";
    pricingtabcontainer.style.display = "none";

    insideChangeMaker = true;
  });

  resourceStart2Btn.addEventListener("click", function (e) {
    e.preventDefault();

    resourceInnerTab2.style.display = "none";
    resourcestabcontainer.style.display = "none";
    pricingtabcontainer.style.display = "block";

    insideChangeMaker = false;
  });

  allNavLinks.forEach((link) => {
    if (link.id !== "navidcompaney") {
      link.addEventListener("click", function () {
        insideChangeMaker = false;

        resourceInnerTab2.style.display = "none";
        resourceInnerTab2.style.position = "static";
        resourcestabcontainer.style.display = "none";
        pricingtabcontainer.style.display = "none";
      });
    }
  });
});

// About tab js end

// footer javascript  pricing tab

document.addEventListener("DOMContentLoaded", function () {
  const footerButtons = document.querySelectorAll(".footer-tab-trigger");

  footerButtons.forEach((btn) => {
    btn.onclick = function (e) {
      e.preventDefault();

      const mainNavBtn = document.getElementById("navResources");

      if (mainNavBtn) {
        mainNavBtn.click();

        const impactSection = document.getElementById("impact");
        if (impactSection) {
          impactSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = "index.html?open=research#impact";
      }
    };
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("open") === "research") {
    setTimeout(() => {
      const mainNavBtn = document.getElementById("navResources");
      if (mainNavBtn) mainNavBtn.click();
    }, 500);
  }
});

// about  contact  footer js

document.addEventListener("DOMContentLoaded", function () {
  const footerButtons1 = document.querySelectorAll(".footer-tab-trigger-2");
  footerButtons1.forEach((btn) => {
    btn.onclick = function (e) {
      e.preventDefault();

      const mainNavBtn = document.getElementById("navidcompaney");

      if (mainNavBtn) {
        mainNavBtn.click();

        const impactSection = document.getElementById("pricing");
        if (impactSection) {
          impactSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = "index.html?open=research#pricing";
      }
    };
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("open") === "research") {
    setTimeout(() => {
      const mainNavBtn = document.getElementById("navidcompaney");
      if (mainNavBtn) mainNavBtn.click();
    }, 500);
  }
});

// footer changemaker project link

document.addEventListener("DOMContentLoaded", function () {
  const footerButtons2 = document.querySelectorAll(".footer-tab-trigger-3");

  footerButtons2.forEach((btn) => {
    btn.onclick = function (e) {
      e.preventDefault();

      const mainNavBtn = document.getElementById("navChangeMaker");

      if (mainNavBtn) {
        mainNavBtn.click();

        const impactSection = document.getElementById("educater");
        if (impactSection) {
          impactSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = "index.html?open=research#educater";
      }
    };
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("open") === "research") {
    setTimeout(() => {
      const mainNavBtn = document.getElementById("navChangeMaker");
      if (mainNavBtn) mainNavBtn.click();
    }, 500);
  }
});

// footer javascript

// navigation arrow js

document.addEventListener("DOMContentLoaded", () => {
  const allNavLinks = document.querySelectorAll(".nav-link");
  const arrowLinks = document.querySelectorAll(".nav-link-with-arrow");

  allNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const hasArrow = this.classList.contains("active-arrow");

      arrowLinks.forEach((item) => {
        item.classList.remove("active-arrow");
      });

      if (this.classList.contains("nav-link-with-arrow") && !hasArrow) {
        this.classList.add("active-arrow");
      }
    });
  });

  const infoIcon = document.getElementById("infoIcon");
  const toolInfo = document.getElementById("toolInfo");
  if (infoIcon && toolInfo) {
    infoIcon.onclick = () => {
      toolInfo.style.display =
        toolInfo.style.display === "none" || toolInfo.style.display === ""
          ? "block"
          : "none";
    };
  }
});

// navigation arrow js

// foundation imapct slider js  school

const allImpactContainers = document.querySelectorAll(
  ".impact-slider-container",
);

allImpactContainers.forEach((container) => {
  const sliderImages = container.querySelectorAll(".impact-slider");
  let currentSlide = 0;

  if (sliderImages.length > 0) {
    function cycleImages() {
      sliderImages[currentSlide].classList.remove("active-slider");
      currentSlide = (currentSlide + 1) % sliderImages.length;
      sliderImages[currentSlide].classList.add("active-slider");
    }
    setInterval(cycleImages, 3000);
  }
});

// foundation imapct slider js  school

// larne more btn school foundation click event  start

function handleImpactClick() {
  const mainTabBtn = document.getElementById("navChangeMaker");
  if (mainTabBtn) {
    mainTabBtn.click();
  }
  const otherTab = document.getElementById("innerTab");
  if (otherTab) {
    otherTab.style.display = "none";
  }

  const targetContent = document.getElementById("impactTabInner");
  if (targetContent) {
    targetContent.style.display = "block";

    setTimeout(() => {
      targetContent.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }
}

// larne more btn school foundation click event  end

// fondation donate modal start js


// document.addEventListener("DOMContentLoaded", () => {

//   const boxes = document.querySelectorAll(".select-ammmount-box");
//   const donateBtn = document.querySelector(".btn-donate");
//   const errorMsg = document.querySelector(".select-ammounnt-text");
//   const customInput = document.querySelector(".input-box-container input");
//   const containerDefault = document.querySelector(".select-donation-account-container");
//   const containerCustom = document.querySelector(".select-donation-account-container-2");
//   const backBtn = document.querySelector(".icon-back-btn");
//   const paypalContainer = document.getElementById("paypal-button-container");

//   const modal = document.getElementById("donation-success-modal");
//   const modalText = document.getElementById("donation-user-text");
//   const closeModalBtn = document.getElementById("close-donation-modal");


//   // amount select
//   boxes.forEach((box) => {

//     box.addEventListener("click", function () {

//       const text = this.innerText.trim();

//       boxes.forEach((b) => b.classList.remove("active"));
//       this.classList.add("active");

//       if (errorMsg) errorMsg.style.display = "none";

//       paypalContainer.style.display = "none";
//       donateBtn.style.display = "block";

//       if (text === "Custom") {
//         containerDefault.style.display = "none";
//         containerCustom.style.display = "grid";
//       }

//     });

//   });


//   // back button
//   if (backBtn) {

//     backBtn.onclick = function () {

//       containerCustom.style.display = "none";
//       containerDefault.style.display = "grid";

//       boxes.forEach((b) => b.classList.remove("active"));

//     };

//   }


//   // custom input format
//   if (customInput) {

//     customInput.value = "$ ";

//     customInput.addEventListener("input", function () {

//       if (!this.value.startsWith("$ ")) {
//         this.value = "$ " + this.value.replace(/^\$?\s*/, "");
//       }

//       let val = this.value.substring(2).replace(/[^0-9.]/g, "");

//       const parts = val.split(".");

//       if (parts.length > 2) {
//         val = parts[0] + "." + parts.slice(1).join("");
//       }

//       this.value = "$ " + val;

//     });

//   }


//   // donate button click
//   if (donateBtn) {

//     donateBtn.onclick = function () {

//       const activeBox = document.querySelector(".select-ammmount-box.active");

//       let rawAmount = "";

//       if (!activeBox) {

//         errorMsg.style.display = "block";

//         setTimeout(() => {
//           errorMsg.style.display = "none";
//         }, 3000);

//         return;

//       }

//       if (activeBox.innerText.trim() === "Custom") {
//         rawAmount = customInput.value.replace("$", "").trim();
//       } else {
//         rawAmount = activeBox.innerText.replace("$", "").trim();
//       }

//       const finalAmount = parseFloat(rawAmount);

//       if (isNaN(finalAmount) || finalAmount <= 0) {

//         alert("Please enter a valid donation amount.");
//         return;

//       }

//       donateBtn.style.display = "none";
//       paypalContainer.style.display = "block";
//       paypalContainer.innerHTML = "";


//       paypal.Buttons({

//         createOrder: function (data, actions) {

//           return actions.order.create({

//             purchase_units: [{
//               amount: {
//                 currency_code: "USD",
//                 value: finalAmount.toFixed(2)
//               }
//             }]

//           });

//         },


//         onApprove: function (data, actions) {

//           return actions.order.capture().then(function (details) {

//             const name = details.payer.name.given_name;

//             // show custom modal
//             if (modal && modalText) {

//               modalText.innerHTML =
//                 "Thank you <b>" + name + "</b> for your donation!";

//               modal.classList.add("active");

//               setTimeout(() => {
//                 modal.classList.remove("active");
//               }, 8000);

//             }


//             // reset UI
//             boxes.forEach(b => b.classList.remove("active"));

//             if (customInput) {
//               customInput.value = "$ ";
//             }

//             if (containerCustom) {
//               containerCustom.style.display = "none";
//             }

//             if (containerDefault) {
//               containerDefault.style.display = "grid";
//             }

//             paypalContainer.style.display = "none";
//             donateBtn.style.display = "block";

//           });

//         },


//         onCancel: function () {

//           paypalContainer.style.display = "none";
//           donateBtn.style.display = "block";

//         },


//         onError: function (err) {

//           console.error(err);
//           alert("Payment failed. Please try again.");

//           paypalContainer.style.display = "none";
//           donateBtn.style.display = "block";

//         }

//       }).render("#paypal-button-container");

//     };

//   }


//   // close modal button
//   if (closeModalBtn) {

//     closeModalBtn.onclick = function () {

//       modal.classList.remove("active");

//     };

//   }

// });


document.addEventListener("DOMContentLoaded", () => {

  const boxes = document.querySelectorAll(".select-ammmount-box");
  const donateBtn = document.querySelector(".btn-donate");
  const errorMsg = document.querySelector(".select-ammounnt-text");
  const customInput = document.querySelector(".input-box-container input");
  const containerDefault = document.querySelector(".select-donation-account-container");
  const containerCustom = document.querySelector(".select-donation-account-container-2");
  const backBtn = document.querySelector(".icon-back-btn");
  const goBackBtn = document.querySelector(".go-back-btn-found");
  const paypalContainer = document.getElementById("paypal-button-container");

  const modal = document.getElementById("donation-success-modal");
  const modalText = document.getElementById("donation-user-text");
  const closeModalBtn = document.getElementById("close-donation-modal");

  const investBtn = document.querySelector(".donate-now-btn");
  const investModal = document.querySelector(".invest-modal-foundation");


  if (investBtn) {
    investBtn.addEventListener("click", function (e) {

      e.preventDefault();

      investModal.style.display = "grid";
      document.body.classList.add("blur-bg");

    });
  }

  boxes.forEach((box) => {

    box.addEventListener("click", function () {

      const text = this.innerText.trim();

      if (this.classList.contains("active")) {

        this.classList.remove("active");

        if (text === "Custom") {
          containerCustom.style.display = "none";
          containerDefault.style.display = "grid";
        }

        return;
      }

      boxes.forEach((b) => b.classList.remove("active"));

      this.classList.add("active");

      if (errorMsg) errorMsg.style.display = "none";

      paypalContainer.style.display = "none";
      donateBtn.style.display = "block";

      if (text === "Custom") {

        containerDefault.style.display = "none";
        containerCustom.style.display = "grid";

        const customBoxes = containerCustom.querySelectorAll(".select-ammmount-box");

        customBoxes.forEach(box => {

          if (box.innerText.trim() === "Custom") {
            box.classList.add("active");
          }

        });

      }

    });

  });

  if (backBtn) {

    backBtn.onclick = function () {

      containerCustom.style.display = "none";
      containerDefault.style.display = "grid";

      boxes.forEach((b) => b.classList.remove("active"));

      investModal.style.display = "none";
      document.body.classList.remove("blur-bg");

    };

  }

  if (goBackBtn) {

    goBackBtn.addEventListener("click", function () {

      investModal.style.display = "none";
      document.body.classList.remove("blur-bg");

    });

  }

  if (customInput) {

    customInput.value = "$ ";

    customInput.addEventListener("input", function () {

      if (!this.value.startsWith("$ ")) {
        this.value = "$ " + this.value.replace(/^\$?\s*/, "");
      }

      let val = this.value.substring(2).replace(/[^0-9.]/g, "");

      const parts = val.split(".");

      if (parts.length > 2) {
        val = parts[0] + "." + parts.slice(1).join("");
      }

      this.value = "$ " + val;

    });

  }


  if (donateBtn) {

    donateBtn.onclick = function () {

      const activeBox = document.querySelector(".select-ammmount-box.active");

      let rawAmount = "";

      if (!activeBox) {

        errorMsg.style.display = "block";

        setTimeout(() => {
          errorMsg.style.display = "none";
        }, 3000);

        return;

      }

      if (activeBox.innerText.trim() === "Custom") {
        rawAmount = customInput.value.replace("$", "").trim();
      } else {
        rawAmount = activeBox.innerText.replace("$", "").trim();
      }

      const finalAmount = parseFloat(rawAmount);

      if (isNaN(finalAmount) || finalAmount <= 0) {

        alert("Please enter a valid donation amount.");
        return;

      }

      donateBtn.style.display = "none";
      paypalContainer.style.display = "block";
      paypalContainer.innerHTML = "";


      paypal.Buttons({

        createOrder: function (data, actions) {

          return actions.order.create({

            purchase_units: [{
              amount: {
                currency_code: "USD",
                value: finalAmount.toFixed(2)
              }
            }]

          });

        },


        onApprove: function (data, actions) {

          return actions.order.capture().then(function (details) {

            const name = details.payer.name.given_name;

            if (modal && modalText) {

              modalText.innerHTML =
                "Thank you <b>" + name + "</b> for your donation!";

              modal.classList.add("active");

              setTimeout(() => {
                modal.classList.remove("active");
              }, 8000);

            }

            boxes.forEach(b => b.classList.remove("active"));

            if (customInput) {
              customInput.value = "$ ";
            }

            if (containerCustom) {
              containerCustom.style.display = "none";
            }

            if (containerDefault) {
              containerDefault.style.display = "grid";
            }

            paypalContainer.style.display = "none";
            donateBtn.style.display = "block";

          });

        },


        onCancel: function () {

          paypalContainer.style.display = "none";
          donateBtn.style.display = "block";

        },


        onError: function (err) {

          console.error(err);
          alert("Payment failed. Please try again.");

          paypalContainer.style.display = "none";
          donateBtn.style.display = "block";

        }

      }).render("#paypal-button-container");

    };

  }

  if (closeModalBtn) {

    closeModalBtn.onclick = function () {

      modal.classList.remove("active");

    };

  }

});


// foundation donate modal end js


// input js doller constatnt 


// input js doller constatnt only number type 


// donate now click function

const modal = document.querySelector(".invest-modal-foundation");
const openModalBtn = document.querySelector(".donate-now-btn");
const closeBtnFound = document.querySelector(".go-back-btn-found");

if (openModalBtn) {
  openModalBtn.onclick = () => {
    modal.style.display = "grid";
  };
}
if (closeBtnFound) {
  closeBtnFound.onclick = () => {
    modal.style.display = "none";

    document.querySelector(".select-donation-account-container").style.display =
      "grid";
    document.querySelector(
      ".select-donation-account-container-2",
    ).style.display = "none";
    document
      .querySelectorAll(".select-ammmount-box")
      .forEach((b) => b.classList.remove("active"));
  };
}

// donate now click function


// impact global image click 

// document.addEventListener("DOMContentLoaded", function() {
//     const mapWrapper = document.getElementById('mapWrapper');

//     const locations = [
//         { id: "canada",   name: "Canada",         url: "https://changemakerindex.com" },
//         { id: "usa",      name: "USA",            url: "https://changemakerindex.com" },
//         { id: "united",   name: "United Kingdom", url: "https://changemakerindex.com" },
//         { id: "swiss",    name: "Switzerland",    url: "https://changemakerindex.com" },
//         { id: "india",    name: "India",          url: "https://changemakerindex.com" },
//         { id: "japan",    name: "Japan",          url: "https://changemakerindex.com" },
//         { id: "phili",    name: "Philippines",    url: "https://changemakerindex.com" },
//         { id: "australia", name: "Australia",     url: "https://changemakerindex.com" }
//     ];

//     locations.forEach(loc => {
//         const point = document.createElement('a');
//         point.href = loc.url;
//         point.id = loc.id;
//         point.className = 'map-point';
//         point.target = "_blank";
//         point.title = loc.name; // Mouse le jaane par naam dikhega
//         mapWrapper.appendChild(point);
//     });
// });

// impact global image click 