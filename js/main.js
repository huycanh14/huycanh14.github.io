$(document).ready(() => {
    var btn__go_index = $("[name='go-index']");
    var main__index = $("[name='main__index']");
    // main__index.hide();
    console.log(btn__go_index);
    btn__go_index.click(() => showMainIndex())

    var showMainIndex = () => {
        let card_message = $("[name='card-message']")
        console.log(card_message[0])
        card_message.addClass('bounceOut');
        setTimeout(() => {
            card_message.hide();
            main__index.show();
        }, 2000);
    }
})