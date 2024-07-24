const reservations = []

const addReservations = (event) => {
    event.preventDefault()
    const guestName = document.getElementById('guestName').value
    const roomNumber = document.getElementById('roomNumber').value
    const checkInDate = document.getElementById('checkInDate').value
    const checkOutDate = document.getElementById('checkOutDate').value

    const reservation = {
        guestName,
        roomNumber,
        checkInDate,
        checkOutDate
    }

    reservations.push(reservation)
    displayReservations()
    showAlert('Reservation added successfully', 'info')
    document.getElementById('reservationForm').reset()
}

const deleteReservation = (index) => {
    reservations.splice(index, 1)
    displayReservations()
    showAlert('Reservation removed sucessfully','danger')
}

const displayReservations = () => {
    const reservationList = document.getElementById('reservationList')
    reservationList.innerHTML = ''

    reservations.forEach((reservation, index) => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${reservation.guestName}</td>
        <td>${reservation.roomNumber}</td>
        <td>${reservation.checkInDate}</td>
        <td>${reservation.checkOutDate}</td>
        <td class="btn btn-danger btn-sm" onclick="deleteReservation(${index})"> Delete</td>`

        reservationList.appendChild(row)
    })
}

const showAlert = (message, type) => {
    const showingAlert = document.getElementById('showingAlert')
    const alert = document.createElement('div')
    alert.innerHTML = `<div class="alert alert-${type}" role="alert">
                         ${message}
                        </div>`

                        showingAlert.appendChild(alert)

    setTimeout(() => {
        alert.remove()
    },1500)
}

document.getElementById('reservationForm').addEventListener('submit', addReservations)