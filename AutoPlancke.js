// plancke command
TriggerRegister.registerCommand("hypixelPlancke").setCommandName("plancke");
function hypixelPlancke(name, game) {
  // no name or game supplied
  if (name == undefined && game == undefined) {
    ChatLib.chat("&9/plancke <name> <game>", false);

    // return to break out of function
    return;
    var generalStats = ""
  }
switch (game.toLowerCase()) {
    case "bb":
    case "BuildBattle":
        game = "BuildBattle";
        break;
    case "arcade":
        game = "Arcade";
        break;
    case "bw":
    case "bedwar":
    case "bedwars":
        game = "Bedwars";
        break;
     case "bsg":
     case "blitzsurvivalgames":
     case "hg":
     case "hungergames":
        game= "HungerGames";
        break;
    case "cac":
    case "copsandcrims":
    case "mcgo":
        game = "MCGO";
        break;
    case "cw":
    case "crazywall":
    case "crazywalls":
    case "truecombat":
        game = "TrueCombat";
        break;
    case "mw":
    case "megawall":
    case "megawalls":
    case "walls3":
        game = "Walls3";
        break;
    case "mm":
    case "murdermystery":
        game = "MurderMystery";
        break;
    case "sc":
    case "skyclash":
        game = "SkyClash";
        break;
    case "sw":
    case "skywar":
    case "skywars":
        game = "SkyWars";
        break;
    case "ss":
    case "sc":
    case "supersmash":
    case "smashheroes":
    case "smashhero":
        game = "SuperSmash";
        break;
    case "suhc":
    case "speeduhc":
        game = "SpeedUHC";
        break;
    case "tntgame":
    case "tntgames":
    case "tg":
        game = "TNTGames";
        break;
    case "uhc":
        game = "UHC";
        break;
    case "wl":
    case "warlord":
    case "warlords":
        game = "Warlords";
        break;
    case "arena":
        game = "Arena";
        break;
    case "pb":
    case "paintball":
        game = "Paintball";
        break;
    case "quake":
        game = "Quake";
        break;
    case "tkr":
    case "turbokartracers":
    case "turbokart":
    case "turbokartracer":
    case "gingerbread":
    case "gb":
        game = "GingerBread";
        break;
    case "vampirez":
        game = "VampireZ";
        break;
    case "wall":
    case "walls":
        game = "Walls";
        break;
    case "general":
        game = generalStats;
        break;
    default:
        game = undefined;
        return;
}

  // opens website
  var link = "http://plancke.io/hypixel/player/stats/" + name;
  if (game != undefined) {link += "#" + game;}
  print(java.awt.Desktop.getDesktop().browse(new java.net.URI(link)));
  event.setCanceled(true);
  ChatLib.chat("&aOpening &b" + link);
}
