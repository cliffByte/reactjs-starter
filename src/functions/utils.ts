export const handleDigitKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const keyCode = event.keyCode || event.which
  const keyValue = String.fromCharCode(keyCode)
  const regex = /^[0-9\b]+$/ // allow only numbers and backspace
  if (!regex.test(keyValue)) {
    event.preventDefault()
  }
}

export const handleKeyPressForWard = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const keyCode = event.keyCode || event.which
  const keyValue = String.fromCharCode(keyCode)
  const regex = /^[1-9]$|^1[0-4]$/ // allow only 1 to 14
  if (!regex.test(keyValue)) {
    event.preventDefault()
  }
}
