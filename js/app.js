document.getElementById("cycleForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const lastPeriod = new Date(document.getElementById("lastPeriod").value);
  const cycleLength = parseInt(document.getElementById("cycleLength").value);

  const nextPeriod = new Date(lastPeriod);
  nextPeriod.setDate(lastPeriod.getDate() + cycleLength);

  const ovulation = new Date(lastPeriod);
  ovulation.setDate(lastPeriod.getDate() + (cycleLength - 14));

  const fertileStart = new Date(ovulation);
  fertileStart.setDate(ovulation.getDate() - 5);

  const data = {
    lastPeriod,
    cycleLength,
    nextPeriod,
    ovulation,
    fertileStart
  };

  localStorage.setItem("cycleData", JSON.stringify(data));
  window.location.href = "dashboard.html";
});
