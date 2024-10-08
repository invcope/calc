let running = true;

while (running) {
    const amount = parseFloat(prompt("USDT"));
    const fil = amount * 3.75;
    const fees = fil * 0.0015;
    const fil2 = fees + fil;

    document.getElementById("p2").textContent = `سعر الصرف + ضريبة بينانس = ${fil2} `;

    const amount2 = parseFloat(prompt("SAR"));
    const s = (amount2 - fil2).toFixed(2);
    document.getElementById("p3").textContent = `سعر البيع = ${amount2} `

    document.getElementById("profit").textContent = `💸 الربــح (${s} ريال)`;

    if (prompt("again? (Y/N)").toLowerCase() !== "y") {
        running = false;
    }
}

console.log("bye");