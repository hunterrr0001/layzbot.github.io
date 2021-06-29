function menu() {
  let body = document.querySelector("body");
  let nav = document.querySelector(".nav-list");
  let navIcons = document.querySelectorAll(".nav-list li");
  let l1 = document.querySelector(".menu .line1");
  let l2 = document.querySelector(".menu .line2");
  let l3 = document.querySelector(".menu .line3");

  navIcons.forEach((link, index) => {
    link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade ease forwards ${index / 7 + 1}s`);
  });

  if (nav.style.display == "flex") {
    body.style.overflowY = "auto";
    nav.style.display = "none";
    l1.style.transform = "rotate(0) translate(0, 0)";
    l2.style.opacity = "1";
    l3.style.transform = "rotate(0) translate(0, 0)";
  } else if (nav.style.display == "none") {
    body.style.overflowY = "hidden";
    nav.style.display = "flex";
    l1.style.transform = "rotate(-45deg) translate(-8px, 8px)";
    l2.style.opacity = "0";
    l3.style.transform = "rotate(45deg) translate(-5px, -7px)";
  } else if (nav.style.display == "") {
    body.style.overflowY = "hidden";
    nav.style.display = "flex";
    l1.style.transform = "rotate(-45deg) translate(-8px, 8px)";
    l2.style.opacity = "0";
    l3.style.transform = "rotate(45deg) translate(-5px, -7px)";
  }
}

function press(id) {
  var element = document.getElementById(id);
  const c = element.innerHTML;

  // Mod
  if (id == "ban") {
    element.innerHTML = "=ban <@membro> [motivo]";
  } else if (id == "unban") {
    element.innerHTML = "=unban &lt;userID&gt;";
  } else if (id == "kick") {
    element.innerHTML = "=kick <@membro> [motivo]";
  } else if (id == "mute") {
    element.innerHTML = "=mute <@membro>";
  } else if (id == "unmute") {
    element.innerHTML = "=unmute <@membro>";
  } else if (id == "lock") {
    element.innerHTML = "=lock <#chat-geral>";
  } else if (id == "unlock") {
    element.innerHTML = "=unlock <#chat-geral>";
  } else if (id == "clear") {
    element.innerHTML = "=clear <2 - 100>";
  } else if (id == "say") {
    element.innerHTML = "=say &lt;mensagem&gt;";
  } else if (id == "setprefix") {
    element.innerHTML = "=setprefix &lt;prefix&gt;";
  } else if (id == "ticketmsg") {
    element.innerHTML = "=ticket-msg &lt;mensagem&gt;";
  } else if (id == "nuke") {
    element.innerHTML = "=nuke <#chat-geral>";

    // Informação
  } else if (id == "userinfo") {
    element.innerHTML = "=userinfo [@membro]";
  } else if (id == "serverinfo") {
    element.innerHTML = "=serverinfo [serverID]";
  } else if (id == "botinfo") {
    element.innerHTML = "=botinfo";
  } else if (id == "invite") {
    element.innerHTML = "=invite";
  } else if (id == "status") {
    element.innerHTML = "=status";

    // Diversão
  } else if (id == "kiss") {
    element.innerHTML = "=kiss <@membro>";
  } else if (id == "slap") {
    element.innerHTML = "=slap <@membro>";
  } else if (id == "hug") {
    element.innerHTML = "=hug <@membro>";
  } else if (id == "tickle") {
    element.innerHTML = "=tickle <@membro>";
  } else if (id == "poke") {
    element.innerHTML = "=poke <@membro>";
  } else if (id == "pat") {
    element.innerHTML = "=pat <@membro>";
  } else if (id == "dance") {
    element.innerHTML = "=dance <@membro>";
  } else if (id == "attack") {
    element.innerHTML = "=attack <@membro>";
  } else if (id == "kill") {
    element.innerHTML = "=kill <@membro>";
  } else if (id == "trump") {
    element.innerHTML = "=trump &lt;texto&gt;";
  } else if (id == "ball") {
    element.innerHTML = "=8ball &lt;pergunta&gt;";
  } else if (id == "ascii") {
    element.innerHTML = "=ascii &lt;texto&gt;";
  } else if (id == "coinflip") {
    element.innerHTML = "=coinflip";
  } else if (id == "gay") {
    element.innerHTML = "=gay [@membro]";
  } else if (id == "piada") {
    element.innerHTML = "=piada";
  } else if (id == "comunism") {
    element.innerHTML = "=comunism [@membro]";
  } else if (id == "invert") {
    element.innerHTML = "=invert [@membro]";
  } else if (id == "delete") {
    element.innerHTML = "=delete [@membro]";
  } else if (id == "pixel") {
    element.innerHTML = "=pixel [@membro]";
  } else if (id == "ship") {
    element.innerHTML = "=ship <@membro> [@membro]";
  } else if (id == "randomcolor") {
    element.innerHTML = "=randomcolor";
  } else if (id == "anime") {
    element.innerHTML = "=anime &lt;nome do anime&gt;";

    // Utilidade
  } else if (id == "emoji") {
    element.innerHTML = "=emoji &lt;emoji&gt;";
  } else if (id == "emojify") {
    element.innerHTML = "=emojify &lt;mensagem&gt;";
  } else if (id == "avatar") {
    element.innerHTML = "=avatar [@membro]";
  } else if (id == "servericon") {
    element.innerHTML = "=servericon [serverID]";
  } else if (id == "traduzir") {
    element.innerHTML = "=traduzir &lt;idioma&gt; &lt;mensagem&gt;";
  } else if (id == "afk") {
    element.innerHTML = "=afk [motivo]";
  } else if (id == "ticket") {
    element.innerHTML = "=ticket";
  } else if (id == "encurtar") {
    element.innerHTML = "=encurtar &lt;link&gt;";
  } else if (id == "makemyrules") {
    element.innerHTML = "=makemyrules";
  } else if (id == "wiki") {
    element.innerHTML = "=wiki &lt;busca&gt;";

    // Economia
  } else if (id == "profile") {
    element.innerHTML = "=profile [@membro]";
  } else if (id == "aboutme") {
    element.innerHTML = "=aboutme";
  } else if (id == "rank") {
    element.innerHTML = "=rank [@membro]";
  } else if (id == "work") {
    element.innerHTML = "=work";
  } else if (id == "jobs") {
    element.innerHTML = "=jobs";
  } else if (id == "balance") {
    element.innerHTML = "=bal [@membro]";
  } else if (id == "lb") {
    element.innerHTML = "=lb";
  } else if (id == "levels") {
    element.innerHTML = "=levels";
  }

  setTimeout(() => {
    element.innerHTML = c;
  }, 10000);
}
