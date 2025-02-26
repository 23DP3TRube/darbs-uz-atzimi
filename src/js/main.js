const tips = [
    "Sāc ar mazām izmaiņām un palielini intensitāti!",
    "Dzer daudz ūdens un atpūties pietiekami!",
    "Saglabā konsekvenci – panākumi nāk ar laiku!",
    "Apvieno spēka un kardio treniņus!",
    "Ieklausies savā ķermenī un izvairies no pārmērīgas slodzes!"
];

document.getElementById("tipButton").addEventListener("click", function() {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tipText").textContent = randomTip;
});
