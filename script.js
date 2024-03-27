async function shortURL() {
  const Url = document.getElementById("url").value;
  const response = await fetch(
    `https://tinyurl.com/api-create.php?url=${encodeURIComponent(Url)}`
  );
  if (response.ok) {
    const data = await response.text();
    document.getElementById("result").innerHTML = `
        shortend URL : <a href="${data}" target="_blank">${data}</a>`;
  } else {
    document.getElementById("result").innerHTML = "Error shortening";
  }
}
async function fetchAnalytics(shortURL) {
  const response = await fetch(
    `https://your-analytics-api.com?url=${encodeURIComponent(shortURL)}`
  );
  if (response.ok) {
    const data = await response.json();
    document.getElementById("analytics").innerHTML = `
            <p>Clicks: ${data.clicks}</p>
            <p>Last accessed: ${data.lastAccessed}</p>
        `;
  } else {
    document.getElementById("analytics").innerHTML =
      "Analytics data not available";
  }
}
function generateQRCode(url) {
  const qrCodeDiv = document.getElementById("qrCode");
  qrCodeDiv.innerHTML = ""; // Clear previous QR code
  const qrCode = new QRCode(qrCodeDiv, {
    text: url,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}
