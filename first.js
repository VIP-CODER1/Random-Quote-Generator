const arr = [
    "𝕋𝕙𝕖 𝕠𝕟𝕝𝕪 𝕝𝕚𝕞𝕚𝕥 𝕥𝕠 𝕠𝕦𝕣 𝕣𝕖𝕒𝕝𝕚𝕫𝕒𝕥𝕚𝕠𝕟 𝕠𝕗 𝕥𝕠𝕞𝕠𝕣𝕣𝕠𝕨 𝕚𝕤 𝕠𝕦𝕣 𝕕𝕠𝕦𝕓𝕥𝕤 𝕠𝕗 𝕥𝕠𝕕𝕒𝕪.",
    "𝕴𝖓 𝖙𝖍𝖊 𝖒𝖎𝖉𝖉𝖑𝖊 𝖔𝖋 𝖊𝖛𝖊𝖗𝖞 𝖉𝖎𝖋𝖋𝖎𝖈𝖚𝖑𝖙𝖞 𝖑𝖎𝖊𝖘 𝖔𝖕𝖕𝖔𝖗𝖙𝖚𝖓𝖎𝖙𝖞.✍",
    "Ⓣⓗⓔ ⓑⓔⓢⓣ ⓦⓐⓨ ⓣⓞ ⓟⓡⓔⓓⓘⓒⓣ ⓣⓗⓔ ⓕⓤⓣⓤⓡⓔ ⓘⓢ ⓣⓞ ⓘⓝⓥⓔⓝⓣ ⓘⓣ.",
    "Dₒₙ'ₜ wₐₜcₕ ₜₕₑ cₗₒcₖ; dₒ wₕₐₜ ᵢₜ dₒₑₛ. ₖₑₑₚ gₒᵢₙg.",
    "🆃🅷🅴 🅵🆄🆃🆄🆁🅴 🅱🅴🅻🅾🅽🅶🆂 🆃🅾 🆃🅷🅾🆂🅴 🆆🅷🅾 🅱🅴🅻🅸🅴🆅🅴 🅸🅽 🆃🅷🅴 🅱🅴🅰🆄🆃🆈 🅾🅵 🆃🅷🅴🅸🆁 🅳🆁🅴🅰🅼🆂.",
    "It does not matter how slowly you go as long as you do not stop.",
    "̷I̷̷t̷ ̷d̷̷o̷̷e̷̷s̷ ̷n̷̷o̷̷t̷ ̷m̷a̷̷t̷̷t̷̷e̷̷r̷ ̷h̷̷o̷̷w̷ ̷s̷̷l̷̷o̷̷w̷̷l̷̷y̷ ̷y̷̷o̷̷u̷ ̷g̷̷o̷ a̷̷s̷ ̷l̷̷o̷̷n̷̷g̷ a̷̷s̷ ̷y̷̷o̷̷u̷ ̷d̷̷o̷ ̷n̷̷o̷̷t̷ ̷s̷̷t̷̷o̷̷p̷.",
    "𝒯𝒽𝑒 𝓅𝓊𝓇𝓅𝑜𝓈𝑒 𝑜𝒻 𝑜𝓊𝓇 𝓁𝒾𝓋𝑒𝓈 𝒾𝓈 𝓉𝑜 𝒷𝑒 𝒽𝒶𝓅𝓅𝓎.",
    "𝘓𝘪𝘧𝘦 𝘪𝘴 𝘸𝘩𝘢𝘵 𝘩𝘢𝘱𝘱𝘦𝘯𝘴 𝘸𝘩𝘦𝘯 𝘺𝘰𝘶’𝘳𝘦 𝘣𝘶𝘴𝘺 𝘮𝘢𝘬𝘪𝘯𝘨 𝘰𝘵𝘩𝘦𝘳 𝘱𝘭𝘢𝘯𝘴.",
    "The only impossible journey is the one you never begin.",
    "ѕυ¢¢єѕѕ ιѕ ησт ƒιηαℓ, ƒαιℓυяє ιѕ ησт ƒαтαℓ: ιт ιѕ тнє ¢συяαgє тσ ¢σηтιηυє тнαт ¢συηтѕ.",
    "ͯHͯͯaͯͯrͯͯdͯͯsͯͯhͯͯiͯͯpͯͯsͯ ͯoͯͯfͯͯtͯͯeͯͯnͯ ͯpͯͯrͯͯeͯͯpͯͯaͯͯrͯͯeͯ ͯoͯͯrͯͯdͯͯiͯͯnͯͯaͯͯrͯͯyͯ ͯpͯͯeͯͯoͯͯpͯͯlͯͯeͯ ͯfͯͯoͯͯrͯ ͯaͯͯnͯ ͯeͯͯxͯͯtͯͯrͯͯaͯͯoͯͯrͯͯdͯͯiͯͯnͯͯaͯͯrͯͯyͯ ͯdͯͯeͯͯsͯͯtͯͯiͯͯnͯͯyͯ.",
    "Believe you can and you're halfway there.",
    "T̳̿͟͞h̳̿͟͞e̳̿͟͞ o̳̿͟͞n̳̿͟͞l̳̿͟͞y̳̿͟͞ w̳̿͟͞a̳̿͟͞y̳̿͟͞ t̳̿͟͞o̳̿͟͞ d̳̿͟͞o̳̿͟͞ g̳̿͟͞r̳̿͟͞e̳̿͟͞a̳̿͟͞t̳̿͟͞ w̳̿͟͞o̳̿͟͞r̳̿͟͞k̳̿͟͞ i̳̿͟͞s̳̿͟͞ t̳̿͟͞o̳̿͟͞ l̳̿͟͞o̳̿͟͞v̳̿͟͞e̳̿͟͞ w̳̿͟͞h̳̿͟͞a̳̿͟͞t̳̿͟͞ y̳̿͟͞o̳̿͟͞u̳̿͟͞ d̳̿͟͞o̳̿͟͞.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "✌𝓐 𝓳𝓸𝓾𝓻𝓷𝓮𝔂 𝓸𝓯 𝓪 𝓽𝓱𝓸𝓾𝓼𝓪𝓷𝓭 𝓶𝓲𝓵𝓮𝓼 𝓫𝓮𝓰𝓲𝓷𝓼 𝔀𝓲𝓽𝓱 𝓪 𝓼𝓲𝓷𝓰𝓵𝓮 𝓼𝓽𝓮𝓹.✌",
    "The only thing we have to fear is fear itself.",
    "🍕🍟🥪 𝓓𝓻𝓮𝓪𝓶 𝓫𝓲𝓰 𝓪𝓷𝓭 𝓭𝓪𝓻𝓮 𝓽𝓸 𝓯𝓪𝓲𝓵. 🥙🥡🍖",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "😍💞💘 𝓐𝓬𝓽 𝓪𝓼 𝓲𝓯 𝔀𝓱𝓪𝓽 𝔂𝓸𝓾 𝓭𝓸 𝓶𝓪𝓴𝓮𝓼 𝓪 𝓭𝓲𝓯𝓯𝓮𝓻𝓮𝓷𝓬𝓮. 𝓘𝓽 𝓭𝓸𝓮𝓼. 💔💏💖"
  ];
  

  function quoteGenerator(){
  const element=document.getElementById("one");
  const i=Math.floor(Math.random()*arr.length);
  element.textContent=arr[i];}

  setInterval(quoteGenerator,2000);


  const arr2 = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
    "gray",
    "violet",
    "indigo",
    "turquoise",
    "magenta",
    "cyan",
    "maroon",
    "olive",
    "lime",
    "teal",
    "navy",
    "gold",
    "silver",
    "beige",
    "coral",
    "salmon",
    "chocolate",
    "crimson",
    "khaki",
    "lavender",
    "mint",
    "mustard",
    "peach",
    "plum",
    "rose",
    "sienna",
    "tan",
    "aquamarine"
  ];

  function bChange(){
  const c=document.getElementById("back");

  const i2=Math.floor(Math.random()*arr2.length);
  c.style.backgroundColor = arr2[i2];
}

  setInterval(bChange,2000);

  