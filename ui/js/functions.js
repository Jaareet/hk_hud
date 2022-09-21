function updateStatusHud(data) {
    const { health, shield, hunger, thirst } = data;

    const STATUS_CONFIG = [
        { name: 'health', value: Math.round(health) },
        { name: 'shield', value: Math.round(shield) },
        { name: 'hunger', value: Math.round(hunger) != -100 ? Math.round(hunger) : '0' },
        { name: 'thirst', value: Math.round(thirst) },
    ]

    for (let statusHud of STATUS_CONFIG) {
        $(`.${statusHud.name}Val`).css({'height': `${statusHud.value}%`})
    }

    console.log('Hace el update')
}


function updateMapAnchor(isPedOnVehicle) {
    $('.hud').css(isPedOnVehicle ? {'left': '16vw'} : {'left': '2.5vw'})
}

function startEventListener(event) {
    const { type, data } = event.data;

    if (type === 'update') {
        updateStatusHud(data.status)
        updateMapAnchor(data.isPedOnVehicle)
    }

    console.log(JSON.stringify(data))
}


console.log('MARICON')