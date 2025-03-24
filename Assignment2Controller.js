function Assignment2Controller() {
    var ctrl = this;

    ctrl.name = "Module-2 Coding Assignment";
    ctrl.message1 = "";
    ctrl.message2 = "";

    ctrl.shoppingItems = PopulateItems();
    ctrl.BoughtItems = [];

    ShowOrHideMessages();

    ctrl.BoughtItem = function (quantity, name) {

        var item = { name: name, quantity: quantity };
        ctrl.BoughtItems.push(item);
        for (var i = 0; i < ctrl.shoppingItems.length; i++) {
            if (ctrl.shoppingItems[i].name == name) {
                ctrl.shoppingItems.splice(i, 1); // removes the matched element
                i = ctrl.shoppingItems.length;  // break out of the loop. Not strictly necessary
            }
        }
        ShowOrHideMessages();
    };
    function PopulateItems() {
        return [
            { name: "cookies", quantity: 10 },
            { name: "donuts", quantity: 5 },
            { name: "chips", quantity: 10 },
            { name: "fries", quantity: 10 },
            { name: "cakes", quantity: 10 },
        ];
    }

    function ShowOrHideMessages() {
        if (ctrl.shoppingItems.length == 0) { ctrl.message1 = "(Everything is bought!)"; }
        else { ctrl.message1 = ""; }
        if (ctrl.BoughtItems.length == 0) { ctrl.message2 = "(Nothing bought yet)"; }
        else { ctrl.message2 = ""; }
    }
}