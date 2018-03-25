// plancke command
TriggerRegister.registerCommand("hypixelPlancke").setCommandName("plancke");
function hypixelPlancke(name, game) {
  // no name or game supplied
  if (name == undefined && game == undefined) {
    ChatLib.chat("&9/plancke <name> <game>", false);

    // return to break out of function
    return;
  }
  
  // fixes the game to match what the website expects
  game = hypixelPlanckeFixGame(game);

  // opens website
  var link = "http://plancke.io/hypixel/player/stats/" + name;
  if (game != undefined) {link += "#" + game;}
  print(java.awt.Desktop.getDesktop().browse(new java.net.URI(link)));
  event.setCancelled(true);
  ChatLib.chat("&aOpening &b" + link);
}

function hypixelPlanckeFixGame(game) {
  switch (game.toLowerCase()) {
    case "bb":
    case "buildbattle":
      return "BuildBattle";
    case "arcade":
      return "Arcade";
    case "bw":
    case "bedwar":
    case "bedwars":
      return "Bedwars";
    case "bsg":
    case "blitzsurvivalgames":
    case "hg":
    case "hungergames":
      return "HungerGames";
    case "cac":
    case "copsandcrims":
    case "mcgo":
      return "MCGO";
    case "cw":
    case "crazywall":
    case "crazywalls":
    case "truecombat":
      return "TrueCombat";
    case "mw":
    case "megawall":
    case "megawalls":
    case "walls3":
      return "Walls3";
    case "mm":
    case "murdermystery":
      return "MurderMystery";
    case "sc":
    case "skyclash":
      retrun "SkyClash";
    case "sw":
    case "skywar":
    case "skywars":
      return "SkyWars";
    case "ss":
    case "sc":
    case "supersmash":
    case "smashheroes":
    case "smashhero":
      return "SuperSmash";
    case "suhc":
    case "speeduhc":
      return "SpeedUHC";
    case "tntgame":
    case "tntgames":
    case "tg":
      return "TNTGames";
    case "uhc":
      return "UHC";
    case "wl":
    case "warlord":
    case "warlords":
      return "Warlords";
    case "arena":
      return "Arena";
    case "pb":
    case "paintball":
      return "Paintball";
    case "quake":
      return "Quake";
    case "tkr":
    case "turbokartracers":
    case "turbokart":
    case "turbokartracer":
    case "gingerbread":
    case "gb":
      return "GingerBread";
    case "vampirez":
      return "VampireZ";
    case "wall":
    case "walls":
      return "Walls";
    case "general":
      return "generalStats";
    default:
      return undefined
  }
}
