//8 kyu Are You Playing Banjo?

//Create a function which answers the question "Are you playing banjo?".

// P - string, single letter, uppercase or lowercase, "R", "r"
// R - string
// E
// P

// Conditional if "R" || "r"
// Use startsWith()

function areYouPlayingBanjo(name) {
    return name.startsWith("R") || name.startsWith("r") ? `${name} plays banjo` : `${name} does not play banjo`
  }

 areYouPlayingBanjo("Roger") // Yes
 areYouPlayingBanjo("steve") // No
 areYouPlayingBanjo("ryan") // Yes 