const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    const clickedSquare = clickEvent.target.id
        const customEvent = new CustomEvent("theSquareThatWasClicked", {
            detail: {
                clickedSquare: clickedSquare
            }
        })

        eventHub.dispatchEvent(customEvent)
})














