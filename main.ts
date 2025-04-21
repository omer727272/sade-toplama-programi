let A_SAYISI = 0
let TOPLAM = 0
let B_SAYISI = 0
input.onButtonPressed(Button.A, function () {
    A_SAYISI += 1
    basic.showNumber(A_SAYISI)
})
input.onButtonPressed(Button.AB, function () {
    TOPLAM = A_SAYISI + B_SAYISI
    basic.showNumber(TOPLAM)
})
input.onButtonPressed(Button.B, function () {
    B_SAYISI += 1
    basic.showNumber(B_SAYISI)
})
