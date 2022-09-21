Citizen.CreateThread(function()
    local hungerValue, thirstValue = 0,0
    while (true) do
        TriggerEvent('esx_status:getStatus', 'hunger', function(status)
            hungerValue = (status.val / 10000) 
        end)
        TriggerEvent('esx_status:getStatus', 'thirst', function(status)
            thirstValue = (status.val / 10000) 
        end)
        SendNUIMessage({
            type = 'update',
            data = {
                status = {
                    health = (GetEntityHealth(PlayerPedId()) - 100),
                    shield = GetPedArmour(PlayerPedId()),
                    hunger = hungerValue,
                    thirst = thirstValue 
                },
                isPedOnVehicle = IsPedInAnyVehicle(PlayerPedId()),
            }
        })
        DisplayRadar(IsPedInAnyVehicle(PlayerPedId()))
        Citizen.Wait(1000)
    end
end)
