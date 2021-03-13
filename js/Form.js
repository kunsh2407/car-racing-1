class Form {
    constructor() {



    }
    display() {

        var title = createElement("h2")
        title.html("Car Racing Game")
        var input = createInput("Name")
        var button = createButton("Play")
        title.position(130, 0)
        input.position(130, 160)
        button.position(250, 200)
        var greeting = createElement("h3")
        button.mousePressed(function () {
            input.hide();
            button.hide();
            var name = input.value()
            playerCount++
            player.updateCount(playerCount)
            player.update(name)
            greeting.html("hello " + name)
            greeting.position(130, 160)
        })
    }

}