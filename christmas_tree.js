const snowflakesContainer = document.querySelector(".snowflakes");
const snowflakeChars = ["❅", "❆", "✵", "✶", "*"];

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.animationDuration = Math.random() * 8 + 7 + "s"; // 7-15s
  snowflake.style.fontSize = Math.random() * 1 + 0.8 + "em";
  snowflake.style.animationDelay = Math.random() * 5 + "s";
  snowflake.style.opacity = Math.random() * 0.5 + 0.5;

  snowflakesContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

// Tạo tuyết liên tục
setInterval(createSnowflake, 100);
