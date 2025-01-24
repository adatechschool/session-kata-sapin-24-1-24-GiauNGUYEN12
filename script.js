let hauteurSapin = ""
function afficherPointeSapin(hauteur) {
    console.log('+')
    for ( let i = 0; i < hauteur; i++){
        hauteurSapin = "|"
        console.log(hauteurSapin)
    }
  }

  afficherPointeSapin(4)

//function une ligne étoile 
  function afficherEtoiles(n) {
    let nombreEtoile = ""
    for (let i = 0; i < n; i++){
        nombreEtoile += "*"
        //console.log(nombreEtoile)
    }
    console.log(nombreEtoile)
    return nombreEtoile
  }

  afficherEtoiles(2)
  afficherEtoiles(4)

// function carrée étoiles
  let printEtoile = ""
  function afficherRectangle(hauteur, largeur) {
        printEtoile = afficherEtoiles(largeur)
    for (let i = 1; i < hauteur; i++){
        printEtoile = printEtoile
        console.log(printEtoile)
    }
}

afficherRectangle(5,5)


//function triangle d'étoiles la partie droite du sapin
let triangleEtoile = ""
function afficherTriangleDroite(n) {
    for (let i = 0; i < n; i++){
        triangleEtoile += "*"
        console.log(triangleEtoile)
    }
    return triangleEtoile
  }

  afficherTriangleDroite(5)


  function afficherTriangleGauche(n) {
    let espaces = ""
    for (let i = n; i >0; i--){
        espaces = (".".repeat(i))
        console.log(espaces)
    }
  }
afficherTriangleGauche(5)