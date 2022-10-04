input.onButtonPressed(Button.A, function () {
    if (var1 > 0 && var2 > 0) {
        basic.showString("both numbers = positive")
    } else if (var1 > 0 || var2 > 0) {
        basic.showString("1 number shall be postive")
    } else {
        basic.showString("None of the numbers will be postive")
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(false)) {
        basic.showIcon(IconNames.Yes)
    }
})
let var2 = 0
let var1 = 0
var1 = -1
var2 = 4
