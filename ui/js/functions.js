function updateStatusHud({ health, shield, hunger, thirst }) {
    const STATUS_CONFIG = [
        { name: 'health', value: Math.round(health) },
        { name: 'shield', value: Math.round(shield) },
        { name: 'hunger', value: Math.round(hunger) != -100 ? Math.round(hunger) : '0' },
        { name: 'thirst', value: Math.round(thirst) },
    ]
    STATUS_CONFIG.forEach(({ name, value }) => {
        $(`.${name}Val`).css({'height': `${value}%`});
    })
}


function updateMapAnchor(isPedOnVehicle) {
    $('.hud').css(isPedOnVehicle ? {'left': '16vw'} : {'left': '2.5vw'});
}

function startEventListener({ info }) {
    const { type, data } = info;
    const { status, isPedOnVehicle } = data;
    if (type === 'update') {
        updateStatusHud(status);
        updateMapAnchor(isPedOnVehicle);
    }
}
