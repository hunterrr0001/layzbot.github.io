// FORMULÁRIO PARA CONTATO

function checkForm() {
  var tag = document.getElementById("validar").value;
  var mensagem = document.getElementById("validado").value;

  if (tag == "") {
    Swal.fire("Ei!", "Você precisa inserir sua tag no discord!", "error");
    return false;
  } else if (mensagem == "") {
    Swal.fire("Ei!", "Você precisa inserir uma mensagem!", "error");
    return false;
  } else {
    var role = document.getElementById("validar");
    var message = document.getElementById("validado");
    if (role.innerHTML == "Nome" || message.innerHTML == "E-mail") {
      alert("hm");
      return false;
    } else {
      document.getElementById("myForm").submit();
      return true;
    }
  }
}

// AO ABRIR O WEBSITE

function aologar() {
  let timerInterval;
  Swal.fire({
    title: "Olá!",
    html: "Estamos carregando tudo.<br>( <b></b> ms )",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        const content = Swal.getContent();
        if (content) {
          const b = content.querySelector("b");
          if (b) {
            b.textContent = Swal.getTimerLeft();
          }
        }
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire(
        "Meu criador diz:",
        "Seja bem vindo(a) ao Website da Delta!",
        "success"
      );
    }
  });
}

// TELA DE CARREGAMENTO

function loading() {
  let timerInterval;
  Swal.fire({
    title: "Olá!",
    html: "Estamos carregando tudo.<br>( <b></b> ms )",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        const content = Swal.getContent();
        if (content) {
          const b = content.querySelector("b");
          if (b) {
            b.textContent = Swal.getTimerLeft();
          }
        }
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("Aba fechada");
    }
  });
}

// ALTERANDO TEMA, DARK to LIGHT

  
function myFun() {
  let el = document.querySelector("body");
  let vl = document.defaultView.getComputedStyle(el, null).backgroundColor;

  if (vl == "rgb(0, 0, 0)") {
    document.documentElement.style.setProperty("--color-back", "white");
    document.documentElement.style.setProperty("--menu", "fixed black");
    document.documentElement.style.setProperty("--menu-text", "white");
    document.documentElement.style.setProperty("--color-barroll", "black");
    document.getElementById("lamp").src = "src/lampadadark.png";
  } else {
    document.documentElement.style.setProperty("--color-back", "black");
    document.documentElement.style.setProperty("--menu", "fixed white");
    document.documentElement.style.setProperty("--menu-text", "black");
    document.documentElement.style.setProperty("--color-barroll", "white");
    document.getElementById("lamp").src = "src/lampadadark.png";
  }
}

// ACEITAR TERMOS, EM DESENVOLVIMENTO

function acceptterms() {
  Swal.fire({
    title: "Termos e Condições",
    input: "checkbox",
    inputValue: 1,
    showDenyButton: true,
    denyButtonText: 'Recusar',
    inputPlaceholder: "Eu aceito os termos e condições",
    confirmButtonText: 'Aceitar',
    inputValidator: (result) => {
      if (result) {
        Swal.fire("Você aceitou os termos e condições.");
      }
      return !result && "Você precisa aceitar os Termos e as Condições!";
    },
  });
}

// FUNÇÕES PARA OS COMANDOS

function ping() {
  Swal.fire(
    "Estável!",
    "A Delta é um bot estável com um atraso máximo de <strong>30ms</strong>.",
    "info"
  );
}

function time() {
  Swal.fire(
    "27/7",
    "A Delta sempre estará disponível para quando você precisar, <strong>24 horas por dia</strong>, <strong>7 dias por semana</strong>.",
    "info"
  );
}

function update() {
  Swal.fire(
    "Atualizações",
    "A Delta recebe atualizações <strong>todas as semanas</strong> para correção de bugs e implementação de novidades.",
    "info"
  );
}

function ban() {
  Swal.fire(
    "Ban",
    "Bane um membro do servidor<br><br>Requer: <strong>Banir Membros</strong><br>Uso: <strong>=ban [user] [motivo]</strong>",
    "info"
  );
}

function unban() {
  Swal.fire(
    "Unban",
    "Desbane um membro do servidor<br><br>Requer: <strong>Banir Membros</strong><br>Uso: <strong>=unban [ID do user] [motivo]</strong>",
    "info"
  );
}

function kick() {
  Swal.fire(
    "Kick",
    "Chuta um membro do servidor<br><br>Requer: <strong>Chutar Membros</strong><br>Uso: <strong>=kick [user] [motivo]</strong>",
    "info"
  );
}

function mute() {
  Swal.fire(
    "Mute",
    "Silencia um membro do servidor<br><br>Requer: <strong>Chutar Membros</strong><br>Uso: <strong>=mute [user] [motivo]</strong>",
    "info"
  );
}

function unmute() {
  Swal.fire(
    "Unmute",
    "Remove o silenciamento de um membro do servidor<br><br>Requer: <strong>Chutar Membros</strong><br>Uso: <strong>=unmute [ user] [motivo]</strong>",
    "info"
  );
}

function lock() {
  Swal.fire(
    "Lock",
    "Bloqueia um canal do servidor<br><br>Requer: <strong>Gerenciar Canais</strong><br>Uso: <strong>=lock [canal]</strong>",
    "info"
  );
}

function unlock() {
  Swal.fire(
    "Unlock",
    "Desloqueia um canal do servidor<br><br>Requer: <strong>Gerenciar Canais</strong><br>Uso: <strong>=unlock [canal]</strong>",
    "info"
  );
}

function clean() {
  Swal.fire(
    "Clear",
    "Limpa uma certa quantidade de mensagens de um canal<br><br>Requer: <strong>Gerenciar Mensagens</strong><br>Uso: <strong>=clear [2 - 100]</strong>",
    "info"
  );
}

function say() {
  Swal.fire(
    "Say",
    "Me faça repetir algo<br><br>Requer: <strong>Gerenciar Mensagens</strong><br>Uso: <strong>=say [mensagem]</strong>",
    "info"
  );
}

function prefixo() {
  Swal.fire(
    "Setprefix",
    "Altera o prefixo em um servidor<br><br>Requer: <strong>Gerenciar Servidor</strong><br>Uso: <strong>=setprefix [novo prefix]</strong>",
    "info"
  );
}

function userinfo() {
  Swal.fire(
    "Userinfo",
    "Mostra as informações de um usuário<br><br>Uso: <strong>=userinfo [user]</strong>",
    "info"
  );
}

function serverinfo() {
  Swal.fire(
    "Serverinfo",
    "Mostra as informações de um servidor<br><br>Uso: <strong>=serverinfo [ID]</strong>",
    "info"
  );
}

function botinfo() {
  Swal.fire(
    "Botinfo",
    "Mostra as informações da Delta<br><br>Uso: <strong>=botinfo</strong>",
    "info"
  );
}

function invite() {
  Swal.fire(
    "Invite",
    "Exibe o link de invite, para convidar a Delta para seu servidor<br><br>Uso: <strong>=invite</strong>",
    "info"
  );
}

function statu() {
  Swal.fire(
    "Status",
    "Exibe o Ping, o consumo de RAM e a quantidade de shards.<br><br>Uso: <strong>=status</strong>",
    "info"
  );
}

function kiss() {
  Swal.fire(
    "Kiss",
    "Beije um usuário<br><br>Uso: <strong>=kiss [user]</strong>",
    "info"
  );
}

function slap() {
  Swal.fire(
    "Slap",
    "Dê um tapa em alguém<br><br>Uso: <strong>=slap [user]</strong>",
    "info"
  );
}

function hug() {
  Swal.fire(
    "Hug",
    "Dê um abraço em alguém<br><br>Uso: <strong>=hug [user]</strong>",
    "info"
  );
}

function dance() {
  Swal.fire(
    "Dance",
    "Dance com alguém<br><br>Uso: <strong>=dance [user]</strong>",
    "info"
  );
}

function kill() {
  Swal.fire(
    "Kill",
    "Atire em alguém<br><br>Uso: <strong>=kill [user]</strong>",
    "info"
  );
}

function attack() {
  Swal.fire(
    "Attack",
    "Ataque alguém no estilo pokémon<br><br>Uso: <strong>=attack [user]</strong>",
    "info"
  );
}

function pat() {
  Swal.fire(
    "Pat",
    "Faça cafuné em alguém<br><br>Uso: <strong>=pat [user]</strong>",
    "info"
  );
}

function poke() {
  Swal.fire(
    "Poke",
    "Cutuque alguém<br><br>Uso: <strong>=poke [user]</strong>",
    "info"
  );
}

function tickle() {
  Swal.fire(
    "Tickle",
    "Faça alguém rir, nem que seja a força<br><br>Uso: <strong>=tickle [user]</strong>",
    "info"
  );
}

function trump() {
  Swal.fire(
    "Trump",
    "Faça um tweet utilizando a conta do trump<br><br>Uso: <strong>=trump [texto]</strong>",
    "info"
  );
}

function ball() {
  Swal.fire(
    "8Ball",
    "Faça uma pergunta e receba uma resposta aleatória<br><br>Uso: <strong>=8ball [pergunta]</strong>",
    "info"
  );
}

function ascii() {
  Swal.fire(
    "Ascii",
    "Crie artes ASCII<br><br>Uso: <strong>=ascii [texto]</strong>",
    "info"
  );
}

function coinflip() {
  Swal.fire(
    "Coinflip",
    "O velho jogo de cara ou coroa<br><br>Uso: <strong>=coinflip</strong>",
    "info"
  );
}

function gay() {
  Swal.fire(
    "Gay",
    "Veja o quanto você ou o seu amigo é gay<br><br>Uso: <strong>=gay [user]</strong>",
    "info"
  );
}

function piada() {
  Swal.fire(
    "Piada",
    "Veja piadas ruins<br><br>Uso: <strong>=piada</strong>",
    "info"
  );
}

function comunism() {
  Swal.fire(
    "Comunism",
    "Manipulação de Imagem, tente e descubra<br><br>Uso: <strong>=comunism [user]</strong>",
    "info"
  );
}

function invert() {
  Swal.fire(
    "Invert",
    "Manipulação de Imagem, tente e descubra<br><br>Uso: <strong>=invert [user]</strong>",
    "info"
  );
}

function delet() {
  Swal.fire(
    "Delete",
    "Manipulação de Imagem, tente e descubra<br><br>Uso: <strong>=delete [user]</strong>",
    "info"
  );
}

function pixel() {
  Swal.fire(
    "Pixel",
    "Manipulação de Imagem, tente e descubra<br><br>Uso: <strong>=pixel [user]</strong>",
    "info"
  );
}

function filosofia() {
  Swal.fire(
    "Filosofia",
    "Veja frases nada filosoficas<br><br>Uso: <strong>=filosofia</strong>",
    "info"
  );
}

function ship() {
  Swal.fire(
    "Ship",
    "Veja as chances de um casal dar certo<br><br>Uso: <strong>=ship [user] [user]</strong>",
    "info"
  );
}

function rcolor() {
  Swal.fire(
    "RandomColor",
    "Veja HEX de cores aleatórias<br><br>Uso: <strong>=randomcolor</strong>",
    "info"
  );
}

function emoji() {
  Swal.fire(
    "Emoji",
    "Aumenta o tamanho dos emojis e os transforma em uma imagem<br><br>Uso: <strong>=emoji [emoji]</strong>",
    "info"
  );
}

function emojify() {
  Swal.fire(
    "Emojify",
    "Transforme textos em emojis<br><br>Uso: <strong>=emojify [texto]</strong>",
    "info"
  );
}

function avatar() {
  Swal.fire(
    "Avatar",
    "Exibe o avatar de um usuário<br><br>Uso: <strong>=avatar [user]</strong>",
    "info"
  );
}

function servericon() {
  Swal.fire(
    "Servericon",
    "Exibe o ícone de uma guilda<br><br>Uso: <strong>=servericon [ID]</strong>",
    "info"
  );
}

function traduzir() {
  Swal.fire(
    "Traduzir",
    "Traduza textos para diversos idiomas<br><br>Uso: <strong>=traduzir [idioma] [texto]</strong>",
    "info"
  );
}

function play() {
  Swal.fire(
    "Play",
    "Ouça músicas com seus amigos<br><br>Uso: <strong>=play [nome da música]</strong>",
    "info"
  );
}

function stop() {
  Swal.fire(
    "Stop",
    "Pare de reproduzir as músicas<br><br>Uso: <strong>=stop</strong>",
    "info"
  );
}

function loop() {
  Swal.fire(
    "Loop",
    "Reproduz todas as faixas da lista novamente<br><br>Uso: <strong>=loop</strong>",
    "info"
  );
}

function unloop() {
  Swal.fire(
    "Unloop",
    "Remova o loop<br><br>Uso: <strong>=unloop</strong>",
    "info"
  );
}

function skip() {
  Swal.fire(
    "Skip",
    "Pule a música que está sendo reproduzida<br><br>Uso: <strong>=skip</strong>",
    "info"
  );
}

function queue() {
  Swal.fire(
    "Queue",
    "Veja a lista de músicas<br>Mostra as informações da música atual<br><br>Uso: <strong>=queue</strong><br>Uso: <strong>=nowplaying</strong>",
    "info"
  );
}

function remove() {
  Swal.fire(
    "Remove",
    "Remove uma música da lista<br><br>Uso: <strong>=remove</strong>",
    "info"
  );
}

function pause() {
  Swal.fire(
    "Pause",
    "Pausa a música<br><br>Uso: <strong>=pause</strong>",
    "info"
  );
}

function resume() {
  Swal.fire(
    "Resume",
    "Retorna a música pausada<br><br>Uso: <strong>=resume</strong>",
    "info"
  );
}

function lyrics() {
  Swal.fire(
    "Lyrics",
    "Busque a letra das suas músicas<br><br>Uso: <strong>=lyrics [nome da música]</strong>",
    "info"
  );
}

function profile() {
  Swal.fire(
    "Profile",
    "Exibe uma tela do seu perfil<br><br>Uso: <strong>=profile {user}</strong>",
    "info"
  );
}

function rank() {
  Swal.fire(
    "Rank",
    "Exibe uma tela com o seu level e seu XP<br><br>Uso: <strong>=rank</strong>",
    "info"
  );
}

function work() {
  Swal.fire(
    "Work",
    "Trabalhe para conseguir alguns Deltas e comprar novos wallpapers futuramente<br><br>Cooldown: <strong>24 horas</strong><br>Uso: <strong>=work</strong>",
    "info"
  );
}

function jobs() {
  Swal.fire(
    "Jobs",
    "Veja outros trabalhos para conseguir uma renda maior (requer level)<br><br>Uso: <strong>=jobs</strong>",
    "info"
  );
}

function balanc() {
  Swal.fire(
    "Bal",
    "Exibe seu saldo de Deltas<br><br>Uso: <strong>=bal {user}</strong>",
    "info"
  );
}

function aboutme() {
  Swal.fire(
    "Aboutme",
    "Altera a mensagem do seu Perfil<br><br>Uso: <strong>=aboutme [mensagem]</strong>",
    "info"
  );
}

