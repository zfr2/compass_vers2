let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
})
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 0) {
        basic.showString("Nw")
    } else if (degrees < 45) {
        basic.showString("N")
    } else if (degrees < 90) {
        basic.showString("Nw")
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees < 180) {
        basic.showString("Se")
    } else if (degrees < 225) {
        basic.showString("S")
    } else if (degrees < 270) {
        basic.showString("Sw")
    } else if (degrees < 315) {
        basic.showString("W")
    }
})
